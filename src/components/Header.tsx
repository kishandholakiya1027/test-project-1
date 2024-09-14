import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import logo from '../../public/images/logo.svg';
import kalplogo from '../../public/images/Kalp_logo 2.svg';
import kalplogoBlack from '../../public/images/kalp_black.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  const kalpLogoRef = useRef<HTMLImageElement>(null);
  const router = useRouter();
  const [src, setSrc] = useState(kalplogo);

  const handleMouseOver = () => {
      gsap.to(kalpLogoRef.current, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => setSrc(kalplogoBlack),
      });
      gsap.to(kalpLogoRef.current, { opacity: 1, delay: 0.2, duration: 0.2 });
    
  };

  const handleMouseOut = () => {
 
      gsap.to(kalpLogoRef.current, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => setSrc(kalplogo),
      });
      gsap.to(kalpLogoRef.current, { opacity: 1, delay: 0.2, duration: 0.2 });
    
  };

  return (
    <main className={`xl:max-w-[1280px] max-w-full mx-auto w-full px-5 lg:px-0  flex flex-wrap items-center justify-between  py-3`}>
      <Image src={logo.src} alt="Main Logo" width={132} height={57} />

      <div onMouseOver={handleMouseOver}
    onMouseOut={handleMouseOut} onClick={()=> router.push('/blogs')} >
        <Image
        ref={kalpLogoRef}
        src={src}
        className='cursor-pointer'
        alt="kalp Logo"
        width={100}
      /></div>
    </main>
  );
};

export default Header;
