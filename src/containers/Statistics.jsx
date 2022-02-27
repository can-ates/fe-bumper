const benefits = [
  {
    percantage: '71',
    title:
      'of customer authorised more work because they split their bill with Bumper',
  },
  {
    percantage: '90',
    title:
      'of customers would return to the same garage because they offered Bumper',
  },
  {
    percantage: '+350',
    title:
      'increase in average invoice of customers using Bumper to split their bill.',
  },
  {
    percantage: '89',
    title:
      'of customers felt less stressed because they used Bumper to spread the cost.',
  },
];

const Statistics = () => {
  return (
    <section className="space-y-8 py-16 px-8 bg-cyan-900 text-white mt-10">
      <p className="font-semibold text-xl">
        BENEFITS OUR OTHER PARTNERS HAVE NOTICED OFFERING PAY LATER
      </p>
      <div className="md:flex md:space-x-10 space-y-5 md:space-y-0">
        {benefits.map(({ percantage, title }) => (
          <div key={`${percantage}-${title}`}>
            <div className="text-emerald-200 font-mono">
              <span className="text-4xl">{percantage}</span>
              <span>%</span>
            </div>
            <p>{title}</p>
          </div>
        ))}
      </div>
      <p className="font-extralight">
        <span className="font-medium">Source: </span>Survey of 2,750 Bumper
        customers in Feb 2021
      </p>
    </section>
  );
};

export default Statistics;
