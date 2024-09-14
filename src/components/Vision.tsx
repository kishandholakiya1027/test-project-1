import { useEffect, useState } from 'react';
import vision from '../../public/images/vision2.jpg';
import visionOld from '../../public/images/oldVision.jpg';
import Image from "next/image";

export default function Vision() {
  const [transitioned, setTransitioned] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 640);
  }, []);
  const handleMouseEnter = () => {
    if (!transitioned) {
      setTransitioned(true);
    }
  };

  return (
    <div className="lg:relative w-full lg:h-screen my-12 xl:my-[120px] md:my-[80px] flex items-center justify-center overflow-hidden">
     {
     isDesktop ?      <div
      className="lg:relative w-full max-w-[540px] h-full max-h-[400px]"
      onMouseEnter={handleMouseEnter}
    >
      {/* Text behind the image */}
      <div
        className={`lg:absolute inset-0 flex z-0 items-center justify-center transition-transform duration-[1500ms] ${transitioned ? 'translate-x-[56%]' : 'translate-x-0'}`}
      >
        <div className='flex flex-col justify-center'>
          <p className='text-3xl font-bold'>Our Vision</p>
          <p className='text-md mt-10'>
  We envision a world where decentralized technology democratizes digital access, empowering everyone to participate in a fair, transparent global economy. With our compliance-first approach, we set the standard for responsible blockchain, enhancing trust, reducing inequality, and driving positive change.
</p>

        </div>
      </div>

      {/* Image in front of the text */}
      <Image
        src={transitioned ? vision : visionOld}
        alt="New"
        className={``}
      />
    </div> : 
         <div
         className=""
      
       >
         {/* Text behind the image */}
         <Image
           src={transitioned ? vision : visionOld}
           alt="New"
           className={`lg:absolute inset-0 z-10 w-full h-full object-cover transition-transform duration-[1500ms] ${transitioned ? 'translate-x-[-65%]' : 'translate-x-0'}`}
         />
         <div
           className={`lg:absolute lg:inset-0 flex z-0 items-center justify-center transition-transform duration-[1500ms] ${transitioned ? 'translate-x-[56%]' : 'translate-x-0'}`}
         >

           <div className='flex flex-col justify-center mt-4 '>
             <p className='lg:text-3xl text-md font-bold'>Our Vision</p>
             <p className='lg:text-md text-xs  lg:mt-10 mt-4'>
             We envision a world where decentralized technology democratizes digital access, empowering everyone to participate in a fair, transparent global economy. With our compliance-first approach, we set the standard for responsible blockchain, enhancing trust, reducing inequality, and driving positive change.
             </p>
           </div>
         </div>
 
         {/* Image in front of the text */}
       
       </div>
     } 

    </div>
  );
}
