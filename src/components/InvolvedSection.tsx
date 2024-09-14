import React, { useEffect, useRef, useState } from "react";
import { gsap } from 'gsap';

const GetInvolvedSection: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
      setIsDesktop(window.innerWidth > 768);
  }, []);
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);

  useEffect(() => {
    const boxes = [box1.current, box2.current, box3.current];
    
    boxes.forEach((box:any) => {
      gsap.set(box, { borderColor: 'transparent' });

      box.addEventListener('mouseenter', () => {
        gsap.to(box, { borderColor: '#ffffff', duration: 0.5, ease: 'power1.inOut' });
      });

      box.addEventListener('mouseleave', () => {
        gsap.to(box, { borderColor: 'transparent', duration: 0.5, ease: 'power1.inOut' });
      });
    });

    return () => {
      boxes.forEach((box:any) => {
        box.removeEventListener('mouseenter', () => {});
        box.removeEventListener('mouseleave', () => {});
      });
    };
  }, [isDesktop]);


  console.log("isDesktop", isDesktop);
  
  return (
    <div className="flex flex-col items-center justify-center bg-black lg:pt-[40px] lg:pb-[50px] pb-[40px] py-6 lg:mt-[120px] mt-12 md:px-3 px-2">
      <h2 className="text-center bg-white text-black lg:text-[20px] lg:px-[24px] px-2 py-[16px] mb-4">
        GET INVOLVED WITH KALP FOUNDATION
      </h2>
      <p className="text-white  text-center lg:text-[16px] text-sm md:mb-[62px] mb-[40px] lg:px-36 px-2">
        Ready to shape the future of digital empowerment and inclusivity? Join us
        at the KALP Foundation and be a part of the transformative journey towards
        a decentralized digital public infrastructure. Here&apos;s how you can get involved:
      </p>
      <div className={`flex ${!isDesktop ? 'flex-wrap flex-col':''} items-center justify-center gap-1`}>
  <div ref={box1}  className="bg-[#191919] text-white lg:text-[24px] border border-[#191919] hover:border hover:border-white/30 text-xl text-center py-14 px-5 w-[252px] transition-all duration-100 ease-in-out">
    Engage with the Community
  </div>
  <div className="bg-[#191919] h-[28px] w-[7px] lg:w-[28px] lg:h-[7px]"></div>
  <div ref={box2}  className="bg-[#191919] text-white lg:text-[24px] border border-[#191919] hover:border hover:border-white/30 text-xl text-center py-14 px-8 w-[252px] transition-all duration-100 ease-in-out">
    Contribute to Development
  </div>
  <div className="bg-[#191919] h-[28px] w-[7px] lg:w-[28px] lg:h-[7px]"></div>
  
  <div ref={box3}  className="bg-[#191919] text-white lg:text-[24px] border border-[#191919] hover:border hover:border-white/30 text-xl text-center py-14 px-8 w-[252px] transition-all duration-100 ease-in-out">
    Spread the Word
  </div>
</div>

    </div>
  );
};
export default GetInvolvedSection;
 
