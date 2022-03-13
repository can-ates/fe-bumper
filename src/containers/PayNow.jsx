import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button';
import RightArrow from '../../public/right-arrow.svg';

const paylater = [
  {
    icon: (
      <Image
        layout="fixed"
        className="bg-orange-500"
        src="/secure-user.svg"
        width={68}
        height={68}
      />
    ),
    title: 'Secure',
    subTitle:
      'Prevent customers from revealing sensitive information over the phone, GDPR safe and tested.',
  },
  {
    icon: (
      <Image
        layout="fixed"
        className="bg-orange-500"
        src="/coin.svg"
        width={68}
        height={68}
      />
    ),
    title: 'Low cost',
    subTitle: 'Low transaction fee, no setup or mobile phone fees.',
  },
  {
    icon: (
      <Image
        layout="fixed"
        className="bg-orange-500"
        src="/basket.svg"
        width={68}
        height={68}
      />
    ),
    title: 'Fast',
    subTitle: 'Set up and ready to go in minutes!',
  },
];

const PayNow = () => {
  return (
    <section className="py-16 px-14 md:flex">
      <div className="flex-1 space-y-8">
        <span className="font-semibold">PayNow</span>
        <p>
          Our contactless payment solution that allows you to take payments
          online from your customers.
        </p>
        <p className="font-mono text-4xl font-semibold text-orange-500">
          ACCEPT PAYMENTS ANYWHERE, ANYTIME
        </p>
        <p className="font-semibold">Benefits of PayNow</p>
        <div className="space-x-0 space-y-8 md:flex md:space-x-32 md:space-y-0">
          {paylater.map(({ icon, title, subTitle }) => (
            <div key={title} className="flex space-x-8">
              <div className="payNow-image">{icon}</div>
              <div>
                <p className="font-semibold">{title}</p>
                <p>{subTitle}</p>
              </div>
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
    </section>
  );
};

export default PayNow;
