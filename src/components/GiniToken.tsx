import Image from 'next/image';
import giniImage from '../../public/images/gini.png'; // Place your image in the public directory
import giniColoured from '../../public/images/giniColoured.jpg'; // Place your image in the public directory
import giniToken from '../../public/images/giniToken.jpg'; // Place your image in the public directory
import { useEffect, useState } from 'react';

export default function GiniToken() {
  const [src, setSrc] = useState<any>(giniToken);
  const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        setIsDesktop(window.innerWidth > 640);
    }, []);
    return (
        <div>
            <div className="lg:flex items-center justify-center w-full lg:mt-28 mt-12">
                <div className="flex justify-center items-center lg:w-[40%] ">
                   {/* Left Line */}
<div className="relative h-[1px] w-1/2 hidden lg:block">
  <div className="absolute inset-0 bg-black"></div>
  <div className="absolute left-0 h-full w-full flex justify-start">
    {/* Gray blurred corner */}
    <div className="w-[40px] h-full" style={{
      background: 'linear-gradient(to right, rgba(211,211,211,1), rgba(211,211,211,0))',
    }}>
      <svg width="100%" height="100%">
        <defs>
          <filter id="blurEffect1" x="0" y="0">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="rgba(211, 211, 211, 1)" filter="url(#blurEffect1)" />
      </svg>
    </div>
  </div>
</div>

{/* Center Image */}
<div className="bg-[#f4f4f4] relative lg:h-[65px] lg:w-[250px] h-[55px] w-[150px]">
  <div className='absolute top-1 right-6'>
    <Image src={giniImage} alt="Center Image" className='top-0 lg:h-[55px] lg:w-[185px] mx-3' />
  </div>
</div>

{/* Right Line */}
<div className="relative h-[1px] w-1/2 hidden lg:block">
  <div className="absolute inset-0 bg-black"></div>
  <div className="absolute right-0 h-full w-full flex justify-end">
    {/* Gray blurred corner */}
    <div className="w-[40px] h-full" style={{
      background: 'linear-gradient(to left, rgba(211,211,211,1), rgba(211,211,211,0))',
    }}>
      <svg width="100%" height="100%">
        <defs>
          <filter id="blurEffect2" x="0" y="0">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="rgba(211, 211, 211, 1)" filter="url(#blurEffect2)" />
      </svg>
    </div>
  </div>
</div>

                </div>

            </div>
            <div className="lg:flex flex-col gap-3 justify-center lg:px-6 text-center item-center lg:mt-10 mt-5" >
                <p className="lg:text-[32px] font-bold" >The Kalp ecosystem offers a game-changing solution.</p>
                <p className='mt-2 lg:text-[16px] text-[13px] lg:px-6 '>It seamlessly merges the best of permissionless and permissioned networks, ensuring regulatory compliance without sacrificing decentralization. Governed by the Kalp Foundation and accessed via the <span className='font-bold' >{`"Gini"`}</span> token.</p>
            </div>
            <div className='max-w-[530px] lg:hidden mt-4' 
                  onMouseOver={()=>setSrc(giniColoured)}
                  onMouseOut={()=>setSrc(giniToken) }
                  onTouchStart={()=>setSrc(giniColoured)}
                  onTouchEnd={()=>setSrc(giniToken) }
                >
                <Image src={src} alt="Center Image" 
             loading="lazy" 
               

                className="transition-transform duration-4000 ease-in-out lg:max-w-[530px] max-h-[300px] "/>
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-8 gap-6 items-start lg:px-4 px-2 justify-between lg:mt-10 mt-6">
  {/* Text Section */}
  <div className="lg:w-1/2 w-full">
    <p className="lg:text-[24px] text-md font-semibold">
      Our Digital Catalyst
    </p>
    <p className="mt-2 lg:text-[14px] text-[12px]">
      At the heart of the KALP Foundation&apos;s mission lies our digital currency, Gini. Designed to empower individuals and communities, Gini serves as a tool for inclusivity, transparency, and equitable reward within our ecosystem. Gini is a utility fuel to access the services of the Kalp DPI.
    </p>
    <p className="mt-2 lg:text-[14px] text-[12px] lg:mt-6 mt-4">
      Gini embodies the values and principles upheld by the KALP Foundation, a non-profit organization dedicated to responsible innovation and societal progress. As a token governed by the Foundation, Gini represents our commitment to democratizing access to digital assets and fostering a community-driven economy.
    </p>

    {/* Key Features */}
    <div>
      <p className="text-sm font-semibold mt-6">Key Features:</p>
      <ul className="list-disc text-start mt-2 lg:text-[14px] text-[12px] pl-6 space-y-1">
        <li className="mt-2 lg:mt-6">Democratic Governance</li>
        <li className="mt-2 lg:mt-6">Equitable Reward</li>
        <li className="mt-2 lg:mt-6">Innovative Utility</li>
      </ul>
    </div>
  </div>

  {/* Image Section */}
  <div className="lg:w-1/2 w-full">
    {isDesktop ? (
      <div
        className="max-w-full"
        onMouseOver={() => setSrc(giniColoured)}
        onMouseOut={() => setSrc(giniToken)}
        onTouchStart={() => setSrc(giniColoured)}
        onTouchEnd={() => setSrc(giniToken)}
      >
        <Image
          src={src}
          alt="Center Image"
          loading="lazy"
          width={530}
          height={300}
          className="transition-transform duration-1000 ease-in-out w-full h-auto"
        />
      </div>
    ) : null}
  </div>
</div>

        </div>
    );
}
