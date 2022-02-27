import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Button from '../components/Button';

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
        <p className="text-lg my-7 flex items-center">
          <span className="mr-4">Excellent</span>
          <Image src="/stars-5-1.svg" height={24} width={120} />
          <Image src="/trustpilot-1.svg" height={24} width={120} />
        </p>
        <p className="text-5xl max-w-screen-md mb-7">
          BECOME A BUMPER APPROVED DEPENDABLE DEALERSHIP
        </p>
        <p className="text-base font-light max-w-lg mb-7">
          Join our network of 3,000+ garages and dealerships who already offer
          Bumper to their customers.
        </p>
        <Button
          icon={<Image src="/right-arrow.svg" height={24} width={36} />}
          className="flex items-center w-fit px-4 py-2 rounded-3xl space-x-2 bg-lime-600 hover:bg-lime-900 text-black mt-10"
          onClick={handleClick}
        >
          Register your interest
        </Button>
        <div className="text-base font-light mt-4">
          <span>Already registered?</span>
          <Link href="/signup">
            <a className="text-lime-500"> Login</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
