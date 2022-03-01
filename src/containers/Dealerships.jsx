import { useCallback, useEffect, useState } from 'react';
import Card from '../components/Card';
import Input from '../components/Input';
import useDebounce from '../hooks/useDebounce';

const Dealerships = () => {
  const [dealerships, setDealerships] = useState([]);
  const [searchText, setSearchText] = useState('');

  const getAllDealerships = useCallback(() => {
    const storedDealerships = localStorage.getItem('companies');

    return storedDealerships ? JSON.parse(storedDealerships) : [];
  }, [dealerships]);

  useDebounce(
    () => {
      if (searchText) {
        const filteredDealersiphs = getAllDealerships().filter(
          ({ company }) => company.indexOf(searchText) > -1
        );
        setDealerships(filteredDealersiphs);
      } else {
        setDealerships(getAllDealerships());
      }
    },
    300,
    [searchText]
  );

  useEffect(() => {
    setDealerships(getAllDealerships());
  }, []);

  return (
    <section className="my-36 flex w-full max-w-3xl flex-col justify-center space-y-5">
      <h1 className="px-2 text-3xl text-white">Interested Dealerships</h1>
      <div className="px-2">
        <Card>
          <Input
            label="Search Company"
            inputType="text"
            placeholder="Start typing company name for search..."
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            error={searchText && dealerships.length === 0}
          />
        </Card>
      </div>
      <div className="max-h-96 space-y-5 overflow-auto px-2">
        {dealerships.length > 0 ? (
          dealerships.map(
            ({
              company,
              name,
              mobile_phone: mobilePhone,
              postcode,
              email_address: emailAddress,
            }) => (
              <Card
                className="grid grid-cols-1 divide-y"
                key={`${mobilePhone}-${company}-${postcode}`}
              >
                <p className="pb-4 text-lg font-semibold">{name}</p>
                <div className="flex justify-between py-2">
                  <span>Company</span>
                  <span>{company}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Phone Number</span>
                  <span>{mobilePhone}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Email address</span>
                  <span>{emailAddress}</span>
                </div>
                <div className="flex justify-between py-2">
                  <span>Postcode</span>
                  <span>{postcode}</span>
                </div>
              </Card>
            )
          )
        ) : (
          <h1 className="text-center text-3xl leading-10 text-white">
            No Company Found
          </h1>
        )}
      </div>
    </section>
  );
};

export default Dealerships;
