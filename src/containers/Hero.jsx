import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Button from '../components/Button';
import RightArrow from '../../public/right-arrow.svg';

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/signup');
  };
  return (
    <section className={styles['bumper-hero']}>
      <div
        className={`${styles['background-container']} ${styles['hero-background']}`}
      />
      <div className="my-10 text-white">
        <p className="my-7 flex items-center text-lg">
          <span className="mr-4">Excellent</span>
          <Image src="/stars-5-1.svg" height={24} width={120} />
          <Image src="/trustpilot-1.svg" height={24} width={120} />
        </p>
        <p className="mb-7 max-w-screen-md text-5xl font-semibold">
          BECOME A BUMPER APPROVED DEPENDABLE DEALERSHIP
        </p>
        <p className="mb-7 max-w-lg text-base font-light">
          Join our network of 3,000+ garages and dealerships who already offer
          Bumper to their customers.
        </p>
        <Button
          icon={<RightArrow src="/right-arrow.svg" height={20} width={24} />}
          className="mt-10 flex w-fit items-center space-x-2 rounded-3xl bg-green-600 px-4 py-3 text-black hover:bg-green-500 hover:fill-white hover:text-white"
          onClick={handleClick}
        >
          Register your interest
        </Button>
        <div className="mt-4 text-base font-light">
          <span>Already registered?</span>
          <Link href="/signup">
            <a className="text-green-500"> Login</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
