import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useDebounce from '../hooks/useDebounce';
import Button from './Button';
import * as Yup from 'yup';
import Card from './Card';
import Input from './Input';

import UserIcon from '../../public/user.svg';
import CompanyIcon from '../../public/company.svg';
import MobileIcon from '../../public/mobile-phone.svg';
import EmailIcon from '../../public/email-address.svg';
import HouseIcon from '../../public/house.svg';
import RepairIcon from '../../public/repair-tool.svg';
import RightArrowIcon from '../../public/right-arrow.svg';
import CheckIcon from '../../public/check.svg';
import WarningIcon from '../../public/warning.svg';

const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const bumperURL =
  'https://proto.bumper.co.uk/core/dealership/registration/sandbox';
const postCodeURL = 'https://api.postcodes.io/postcodes/$postcode/autocomplete';

const inputFields = [
  {
    name: 'name',
    icon: <UserIcon className="fill-orange-500" width={24} height={14} />,
    text: 'Name',
  },
  {
    name: 'company',
    icon: <CompanyIcon className="fill-orange-500" width={24} height={14} />,
    text: 'Company',
  },
  {
    name: 'phone',
    icon: <MobileIcon className="fill-orange-500" width={24} height={16} />,
    text: 'Mobile Phone Number',
  },
  {
    name: 'email',
    icon: <EmailIcon className="fill-orange-500" width={24} height={14} />,
    text: 'Email Address',
  },
  {
    name: 'postcode',
    icon: <HouseIcon className="fill-orange-500" width={24} height={16} />,
    text: 'Postcode',
  },
];

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').max(255, 'Max length is 255'),
  company: Yup.string()
    .required('Company is required')
    .max(255, 'Max length is 255'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(phoneRegex, 'Not in correct format'),
  email: Yup.string().required('Email is required').email('Email is invalid'),
  postcode: Yup.string().required('Postcode is required'),
  payservice: Yup.bool()
    .oneOf([true], 'At least one service should be selected.')
    .default(false),
});

const formOptions = {
  resolver: yupResolver(validationSchema),
  mode: 'all',
};

const SignUpForm = () => {
  const [isPayNowChecked, setIsPayNowChecked] = useState(false);
  const [isPayLaterChecked, setIsPayLaterChecked] = useState(false);
  const [postCodeSuggestionList, setPostCodeSuggestionList] = useState([]);
  const router = useRouter();

  const { trigger, formState, handleSubmit, control, setValue, watch } =
    useForm(formOptions);
  const { errors, isDirty } = formState;
  const postcode = watch('postcode');

  useEffect(() => {
    if (isDirty) {
      setValue('payservice', isPayLaterChecked || isPayNowChecked);
      trigger('payservice');
    }
  }, [isPayLaterChecked, isPayNowChecked]);

  useDebounce(
    async () => {
      const list = await fetch(postCodeURL.replace('$postcode', postcode), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { status, result } = await list.json();
      if (status === 200 && result) {
        if (result[0] !== postcode) {
          setPostCodeSuggestionList(result);
        }
        return;
      }

      setPostCodeSuggestionList([]);
    },
    300,
    [postcode]
  );

  const setPostcode = (suggestion) => {
    setValue('postcode', suggestion);
    trigger('postcode');
    setPostCodeSuggestionList([]);
  };

  const onSubmit = async ({ company, email, name, phone, postcode }) => {
    const body = {
      name,
      company,
      mobile_phone: phone,
      email_address: email,
      postcode: postcode.replace(' ', ''),
      pay_later: String(isPayLaterChecked),
      pay_now: String(isPayNowChecked),
    };
    const result = await fetch(bumperURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    const { message } = await result.json();

    if (message === 'SUCCESS') {
      const recordedCompanies = localStorage.getItem('companies');
      if (recordedCompanies) {
        const parsedData = JSON.parse(recordedCompanies);
        parsedData.push(body);
        localStorage.setItem('companies', JSON.stringify(parsedData));
      } else {
        localStorage.setItem('companies', JSON.stringify([body]));
      }
      router.push('/dealerships');
    }
  };

  return (
    <Card className="mt-4 w-full max-w-3xl rounded-3xl">
      <h1 className="text-xl font-semibold">Join our network</h1>
      <h1 className="text-lg">Free to join, no monthly fees</h1>
      <form className="m-auto py-5">
        {inputFields.map(({ name, text, icon }) => (
          <>
            <Controller
              key={name}
              control={control}
              name={name}
              render={({ field }) => {
                return (
                  <Input
                    label={
                      <span className="flex items-center">
                        {icon}
                        <span>{text}</span>
                        {name === 'postcode' &&
                          field.value &&
                          postCodeSuggestionList.length > 0 && (
                            <div className="absolute top-20 w-full rounded-lg border border-black bg-white shadow-lg lg:w-1/3">
                              <ul>
                                {postCodeSuggestionList.map((suggestion) => {
                                  return (
                                    <li
                                      key={suggestion}
                                      onClick={() => setPostcode(suggestion)}
                                      className="p-3 hover:bg-blue-600 hover:text-blue-200"
                                    >
                                      {suggestion}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                          )}
                      </span>
                    }
                    name="name"
                    inputType="text"
                    error={errors[name]}
                    icon={
                      errors[name] ? (
                        <WarningIcon
                          className="absolute top-9 right-4 fill-red-400"
                          width={24}
                          height={18}
                        />
                      ) : field.value ? (
                        <CheckIcon
                          className="absolute top-9 right-4 fill-green-400"
                          width={24}
                          height={18}
                        />
                      ) : null
                    }
                    {...field}
                  />
                );
              }}
            />
            {errors[name] && (
              <div className="text-normal mb-3 text-red-500">
                {errors[name].message}
              </div>
            )}
          </>
        ))}
        <label className="mt-4 block font-medium text-gray-600">
          <span className="flex items-center">
            <RepairIcon className="fill-orange-500" width={24} height={14} />
            <span>What services are you interested in?</span>
          </span>

          <p className="mb-2 text-sm font-extralight leading-4">
            Please select the services you&apos;re interested in offering your
            customers.
          </p>
        </label>
        <div className="space-x-5">
          <Button
            icon={
              isPayLaterChecked ? (
                <CheckIcon
                  className="ml-1 inline fill-white pb-1"
                  width={10}
                  height={14}
                />
              ) : (
                ' +'
              )
            }
            className={`rounded-3xl px-4 py-2 ${
              isPayLaterChecked ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-300'
            }`}
            onClick={() => setIsPayLaterChecked((prev) => !prev)}
          >
            PayLater
          </Button>
          <Button
            icon={
              isPayNowChecked ? (
                <CheckIcon
                  className="ml-1 inline fill-white pb-1"
                  width={10}
                  height={14}
                />
              ) : (
                ' +'
              )
            }
            className={`rounded-3xl px-4 py-2 ${
              isPayNowChecked ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-300'
            }`}
            onClick={() => setIsPayNowChecked((prev) => !prev)}
          >
            PayNow
          </Button>
        </div>
        <Controller
          control={control}
          name="payservice"
          render={({ field }) => {
            return (
              <Input
                label=""
                name="payservice"
                inputType="checkbox"
                className="hidden"
                {...field}
              />
            );
          }}
        />
        {errors?.payservice && (
          <div className="text-normal mb-3 text-red-500 ">
            {errors?.payservice.message}
          </div>
        )}
        <Button
          className="text-md mt-6 flex w-full items-center justify-center rounded-3xl border bg-green-600 py-2 text-center font-light text-black hover:bg-green-500 hover:fill-white hover:text-white"
          type="submit"
          icon={<RightArrowIcon width={36} height={16} />}
          onClick={handleSubmit(onSubmit)}
        >
          Register
        </Button>
        <div className="mt-4 space-x-2 text-center font-light">
          <span>Already registered?</span>
          <Link href="/signup">
            <a className="text-green-500">Login</a>
          </Link>
        </div>
      </form>
    </Card>
  );
};

export default SignUpForm;
