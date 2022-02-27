import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';

const paylater = [
  {
    title: 'FIX IT',
    subTitle:
      'Your customers bring their vehicle to you. You repair and service the car. Everything just like it works right now.',
  },
  {
    title: 'SPLIT IT',
    subTitle:
      'When the customer gets their bill or quote. Bumper either integrates into your existing online checkout or can be done on-site before you hand back the keys. All in just a few clicks.',
  },
  {
    title: 'SORTED',
    subTitle:
      "You and your customer part ways happy. You're paid in full direct from Bumper, the customer repays Bumper over their chosen payment plan.",
  },
];

const PayLater = () => {
  return (
    <section className="pt-16 px-14 lg:flex">
      <div className="flex-1 space-y-6">
        <span className="font-semibold">PayLater</span>
        <p>
          Allow your customers to split their repair or service bill over
          monthly repayments.
        </p>
        <p className="dark:text-amber-500 text-4xl font-semibold font-mono max-w-md">
          NO RISK FOR DEALERS, NO WORRY FOR DRIVERS
        </p>
        <p className="font-semibold">It's as simple as:</p>
        <div className="relative pl-16 mb-10">
          {paylater.map(({ title, subTitle }, i) => (
            <div key={title} className="relative space-y-6">
              <div className="block absolute top-0 -left-14 border-2 border-black rounded-full w-8 h-8 text-center leading-7 z-20 bg-amber-500 ml-px">
                {i + 1}
              </div>
              {paylater.length !== i + 1 && (
                <div className="block absolute -left-10 top-2 w-0 border-2 border-black h-full -ml-px" />
              )}
              <p className="leading-8 text-xl font-semibold">{title}</p>
              <p>{subTitle}</p>
            </div>
          ))}
        </div>
        <Link href="/signup">
          <Button
            icon={<Image src="/right-arrow.svg" height={24} width={36} />}
            className="flex items-center w-fit px-4 py-3 rounded-3xl space-x-2 bg-lime-600 hover:bg-lime-900 "
          >
            Register your interest
          </Button>
        </Link>
      </div>
      <div className="flex-0.5">
        <Image
          layout="intrinsic"
          src="/bumper-mobile.png"
          width={600}
          height={700}
        />
      </div>
    </section>
  );
};

export default PayLater;
