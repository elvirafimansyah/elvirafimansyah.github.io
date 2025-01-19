"use client"
import React from 'react';
import Image from 'next/image'
interface LogoProps {
  variant?: "primary" | null;
}
const Logo: React.FC<LogoProps> = ({ variant }) => {
  return ( 
    <div className='flex items-center gap-1.5'>
      <div className='flex flex-col mt-1.5'>
        <span className={`text-[22px] tracking-[-1.2px] font-bold  `}>Elvi<span className='text-primary'>ra</span></span>
      </div>
    </div>
  );
}

export default Logo;