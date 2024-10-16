// FILEPATH: components/Footer.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
  return (
    <>
      <footer className='text-center container mx-auto px-4'>
        <div className='m-4 p-4'>
          <p>&copy; 2024 SuiPian. All rights reserved.</p>
          <Link href='https://www.suiyan.cc' className='text-gray-300 transition hover:text-orange-500'>
            <p>Powered by 碎言</p>
          </Link>
          <div className='flex justify-center'>
            <Image
              src={`/images/gzh.png`}
              className="rounded-lg"
              width="100" height="100" // Corrected to a numeric value in pixels
            />
          </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;

