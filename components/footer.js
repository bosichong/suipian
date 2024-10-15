// FILEPATH: components/Footer.js
import React from 'react';
import Link from 'next/link';


const Footer = () => {
  return (
    <>
      <footer className='text-center container mx-auto px-4'>
        <div className='m-4 p-4'>
        <p>&copy; 2024 SuiPian. All rights reserved.</p>
        <Link href='https://www.suiyan.cc' className='text-gray-300 transition hover:text-orange-500'>
          <p>Powered by 碎言</p>
        </Link>
        </div>
        
      </footer>
    </>
  );
};

export default Footer;

