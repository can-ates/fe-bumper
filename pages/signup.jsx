import Link from 'next/link';
import SignUpForm from '../src/components/SignUpForm';
import RightArrow from '../public/right-arrow.svg';

const SignUp = () => {
  return (
    <main className="flex h-screen flex-col items-center justify-center overflow-auto bg-sky-800">
      <div className="mt-96 mb-12 flex w-full max-w-3xl flex-col justify-center px-4 md:p-0">
        <div>
          <Link href="/">
            <RightArrow
              width={32}
              height={32}
              className="my-4 rotate-180 cursor-pointer fill-white"
            />
          </Link>
          <h1 className="mb-4 text-3xl text-white">Join our network</h1>
          <p className="font-extralight text-white">
            Offer <span className="font-semibold">PayLater</span> to split
            servicing and repair work into monthly instalments - interest-free.
          </p>
          <p className="font-extralight text-white">
            Use <span className="font-semibold">PayNow</span> to take secure
            payments online.
          </p>
        </div>
        <SignUpForm />
      </div>
    </main>
  );
};

export default SignUp;
