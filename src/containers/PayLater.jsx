import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import RightArrow from '../../public/right-arrow.svg';

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
    <section className="px-14 pt-16 lg:flex">
      <div className="flex-1 space-y-6">
        <span className="font-semibold">PayLater</span>
        <p>
          Allow your customers to split their repair or service bill over
          monthly repayments.
        </p>
        <p className="max-w-md font-mono text-4xl font-semibold dark:text-orange-500">
          NO RISK FOR DEALERS, NO WORRY FOR DRIVERS
        </p>
        <p className="font-semibold">It's as simple as:</p>
        <div className="relative mb-10 pl-16">
          {paylater.map(({ title, subTitle }, i) => (
            <div key={title} className="relative space-y-6">
              <div className="absolute top-0 -left-14 z-20 ml-px block h-8 w-8 rounded-full border-2 border-black bg-orange-500 text-center leading-7">
                {i + 1}
              </div>
              {paylater.length !== i + 1 && (
                <div className="absolute -left-10 top-2 -ml-px block h-full w-0 border-2 border-black" />
              )}
              <p className="text-xl font-semibold leading-8">{title}</p>
              <p>{subTitle}</p>
            </div>
          ))}
        </div>
        <Link href="/signup">
          <Button
            icon={<RightArrow height={20} width={24} />}
            className="flex w-fit items-center space-x-2 rounded-3xl bg-green-600 px-4 py-3 hover:bg-green-500 hover:fill-white hover:text-white"
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
