import Link from 'next/link';
import Image from 'next/image';
import SignUpForm from '../src/components/SignUpForm';

const SignUp = () => {
  return (
    <main className="h-screen overflow-auto flex items-center justify-center flex-col bg-blue-400">
      <div className="max-w-3xl w-full flex flex-col justify-center mt-56 mb-12">
        <div>
          <Link href="/">
            <Image
              className="rotate-180"
              src="/right-arrow.svg"
              width={32}
              height={32}
            />
          </Link>
          <h1 className="text-3xl text-white mb-4">Join our network</h1>
          <p className="text-white font-extralight">
            Offer <span className="font-semibold">PayLater</span> to split
            servicing and repair work into monthly instalments - interest-free.
          </p>
          <p className="text-white font-extralight">
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
