import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from './Button';
import * as Yup from 'yup';
import Card from './Card';
import Input from './Input';

const phoneRegex =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const bumperURL =
  'https://proto.bumper.co.uk/core/dealership/registration/sandbox';

const SignUpForm = () => {
  const [isPayNowChecked, setIsPayNowChecked] = useState(false);
  const [isPayLaterChecked, setIsPayLaterChecked] = useState(false);
  const router = useRouter();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .max(255, 'Max length is 255'),
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
  const { trigger, formState, handleSubmit, control, setValue } =
    useForm(formOptions);
  const { errors, isDirty } = formState;

  useEffect(() => {
    if (isDirty) {
      setValue('payservice', isPayLaterChecked || isPayNowChecked);
      trigger('payservice');
    }
  }, [isPayLaterChecked, isPayNowChecked]);

  const onSubmit = async ({ company, email, name, phone, postcode }) => {
    const body = {
      name,
      company,
      mobile_phone: phone,
      email_address: email,
      postcode,
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
    <Card className="mt-4 max-w-3xl w-full rounded-3xl">
      <h1 className="text-xl font-semibold">Join our network</h1>
      <h1 className="text-lg">Free to join, no monthly fees</h1>
      <form className="m-auto py-5">
        <Controller
          control={control}
          name="name"
          render={({ field }) => {
            return (
              <Input
                label={
                  <>
                    <Image src="/user.svg" width={16} height={12} />{' '}
                    <span>Name</span>
                  </>
                }
                name="name"
                inputType="text"
                {...field}
              />
            );
          }}
        />
        {errors?.name && (
          <div className="mb-3 text-normal text-red-500">
            {errors?.name.message}
          </div>
        )}

        <Controller
          control={control}
          name="company"
          render={({ field }) => {
            return (
              <Input
                label={
                  <>
                    <Image src="/company.svg" width={20} height={12} />{' '}
                    <span>Company</span>
                  </>
                }
                name="company"
                inputType="text"
                {...field}
              />
            );
          }}
        />
        {errors?.company && (
          <div className="mb-3 text-normal text-red-500 ">
            {errors?.company.message}
          </div>
        )}
        <Controller
          control={control}
          name="phone"
          render={({ field }) => {
            return (
              <Input
                label={
                  <>
                    <Image src="/mobile-phone.svg" width={24} height={16} />
                    <span>Mobile Phone Number</span>
                  </>
                }
                name="phone"
                inputType="text"
                {...field}
              />
            );
          }}
        />
        {errors?.phone && (
          <div className="mb-3 text-normal text-red-500 ">
            {errors?.phone.message}
          </div>
        )}
        <Controller
          control={control}
          name="email"
          render={({ field }) => {
            return (
              <Input
                label={
                  <>
                    <Image src="/email-address.svg" width={24} height={12} />
                    <span>Email address</span>
                  </>
                }
                name="email"
                inputType="text"
                {...field}
              />
            );
          }}
        />
        {errors?.email && (
          <div className="mb-3 text-normal text-red-500 ">
            {errors?.email.message}
          </div>
        )}
        <Controller
          control={control}
          name="postcode"
          render={({ field }) => {
            return (
              <Input
                label={
                  <>
                    <Image src="/house.svg" width={24} height={16} />
                    <span>Postcode</span>
                  </>
                }
                name="postcode"
                placeholder="Start typing to match your address"
                inputType="text"
                {...field}
              />
            );
          }}
        />
        {errors?.postcode && (
          <div className="mb-3 text-normal text-red-500 ">
            {errors?.postcode.message}
          </div>
        )}
        <label className="text-gray-600 font-medium block mt-4">
          <Image src="/repair-tool.svg" width={24} height={14} />
          <span>What services are you interested in?</span>
          <p className="font-extralight text-sm leading-4 mb-2">
            Please select the services you're interested in offering your
            customers.
          </p>
        </label>
        <div className="space-x-5">
          <Button
            icon=" +"
            className={`rounded-3xl px-4 py-2 ${
              isPayLaterChecked ? 'bg-zinc-900 text-white' : ''
            }`}
            onClick={() => setIsPayLaterChecked((prev) => !prev)}
          >
            PayLater
          </Button>
          <Button
            icon=" +"
            className={`rounded-3xl px-4 py-2 ${
              isPayNowChecked ? 'bg-zinc-900 text-white' : ''
            }`}
            onClick={async () => {
              setIsPayNowChecked((prev) => !prev);
            }}
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
          <div className="mb-3 text-normal text-red-500 ">
            {errors?.payservice.message}
          </div>
        )}
        <Button
          className="flex items-center justify-center text-center mt-6 w-full bg-green-600 hover:bg-green-600 text-black border py-2 font-light text-md rounded-3xl"
          type="submit"
          icon={<Image src="/right-arrow.svg" width={24} height={20} />}
          onClick={handleSubmit(onSubmit)}
        >
          Register
        </Button>
        <div className="text-center font-light mt-4 space-x-2">
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
