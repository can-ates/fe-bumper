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
    <section className="space-y-5 w-full max-w-3xl flex flex-col justify-center my-36">
      <h1 className="text-3xl text-white px-2">Interested Dealerships</h1>
      <div className="px-2">
        <Card>
          <Input
            label="Search Company"
            inputType="text"
            placeholder="Start typing name, company, phone or email for search"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Card>
      </div>
      <div className="space-y-5 overflow-auto max-h-96 px-2">
        {dealerships.map(
          ({ company, name, mobile_phone: mobilePhone, postcode, email_address: emailAddress }) => (
            <Card className="grid grid-cols-1 divide-y" key={mobilePhone}>
              <p className="pb-4 text-lg font-semibold">{name}</p>
              <div className="py-2 flex justify-between">
                <span>Company</span>
                <span>{company}</span>
              </div>
              <div className="py-2 flex justify-between">
                <span>Phone Number</span>
                <span>{mobilePhone}</span>
              </div>
              <div className="py-2 flex justify-between">
                <span>Email address</span>
                <span>{emailAddress}</span>
              </div>
              <div className="py-2 flex justify-between">
                <span>Postcode</span>
                <span>{postcode}</span>
              </div>
            </Card>
          )
        )}
      </div>
    </section>
  );
};

export default Dealerships;
