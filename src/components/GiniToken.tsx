import Image from 'next/image';
import giniImage from '../../public/images/Mask group.png'; // Place your image in the public directory
import giniColoured from '../../public/images/giniColoured.jpg'; // Place your image in the public directory
import giniToken from '../../public/images/giniToken.jpg'; // Place your image in the public directory
import { useEffect, useState } from 'react';

export default function GiniToken() {
  const [src, setSrc] = useState<any>(giniToken);
  const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        setIsDesktop(window.innerWidth > 768);
    }, []);
    return (
        <div className='lg:mt-[120px] mt-12'>
            <div className="lg:flex items-center justify-center w-full">
                <div className="flex justify-between items-center lg:w-[40%] ">
                   {/* Left Line */}
<div className="relative h-[1px] w-[30%] hidden lg:block">
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
<div className='flex items-center justify-between w-[150px] h-[55px] bg-[#000]'>
  <div className='text-center w-[50%] flex justify-center items-center'>
  <Image src={giniImage} alt="Center Image" className='' />
  </div>
  <div className='w-[50%] text-white text-[20px] border-l border-[#595959] border-solid text-center'>GINI</div>
</div>

{/* Right Line */}
<div className="relative h-[1px] w-[30%] hidden lg:block">
  <div className="absolute inset-0 bg-black">
  </div>
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
            <div className="lg:flex flex-col gap-4 justify-center lg:px-6 text-center item-center lg:mt-10 mt-4" >
                <p className="lg:text-[32px] font-bold" >The Kalp ecosystem offers a game-changing solution.</p>
                <p className='lg:text-[16px] text-[13px] lg:px-6 '>It seamlessly merges the best of permissionless and permissioned networks, ensuring regulatory compliance without sacrificing decentralization. Governed by the Kalp Foundation and accessed via the <span className='font-bold' >{`"Gini"`}</span> token.</p>
            </div>
            {
              !isDesktop && 
            <div className='max-w-[530px] lg:hidden mt-4 mx-auto' 
                  onMouseOver={()=>setSrc(giniColoured)}
                  onMouseOut={()=>setSrc(giniToken) }
                  onTouchStart={()=>setSrc(giniColoured)}
                  onTouchEnd={()=>setSrc(giniToken) }
                >
                <Image src={src} alt="Center Image" 
             loading="lazy" 
               

                className="transition-transform duration-4000 ease-in-out lg:max-w-[530px] min-h-[300px] "/>
                </div>
            }
                <div className="lg:flex lg:gap-[62px] gap-6 items-center lg:px-4 px-2 justify-between lg:mt-10 mt-4">
  {/* Text Section */}
  <div className="lg:w-1/2 w-full">
    <p className="lg:text-[24px] text-md font-semibold">
      Our Digital Catalyst
    </p>
    <p className="lg:mt-[32px] mt-4 lg:text-[14px] text-[12px]">
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
