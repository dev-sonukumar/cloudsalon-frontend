import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About Cloud Salon" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>
            Cloud Salon was founded with a mission to redefine beauty services by bringing professional salon experiences right to your doorstep. Whether it's a haircut, spa treatment, or bridal makeover, we bring skilled stylists and premium products directly to you—wherever you are.
          </p>
          <p>
            Our team consists of trained and verified beauty experts who prioritize hygiene, comfort, and top-notch service. With Cloud Salon, self-care is no longer a hassle—it’s a luxury you can enjoy in the comfort of your own home.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            To make high-quality salon services accessible, convenient, and personalized for everyone. We aim to empower confidence through beauty and provide seamless at-home beauty care backed by professionalism and trust.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Certified Professionals</b>
          <p className='text-gray-600'>
            All our beauty experts are highly trained and certified, ensuring every service is performed with the highest standards.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>At-Home Convenience</b>
          <p className='text-gray-600'>
            No more waiting in queues or traveling. We bring the salon to your home—on your schedule.
          </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Premium Products & Hygiene</b>
          <p className='text-gray-600'>
            We use top-quality, hygienic products and follow strict safety protocols to deliver a safe and luxurious beauty experience.
          </p>
        </div>
      </div>

      <NewsletterBox />

    </div>
  );
};

export default About;
