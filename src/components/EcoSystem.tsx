import Image from "next/image";
import ecoImg from "../../public/images/eco.jpg";
import cecoImg from "../../public/images/ceco.jpg";
import ecoImage from "../../public/images/ecoMobile.jpg";
import dynamic from "next/dynamic";
import arrow from "../../public/images/whiteArrow.svg";
import { useEffect, useState } from "react";
import Accordion from "./Accordion";

const EcoSystem: React.FC = () => {
  const [src, setSrc] = useState<any>(ecoImg);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  return (
    <div className="lg:mt-[120px] mt-[48px] w-full">
      <div className="lg:flex flex-col gap-[16px] justify-center lg:max-w-[90%] m-auto text-center item-center">
        <p className="lg:text-[32px] text-[18px] lg:mb-0 mb-2 font-bold">
          KALP Ecosystem
        </p>
        <p className="lg:text-[16px] text-sm">
          The Kalp ecosystem is a pioneering decentralized and interoperable
          digital public infrastructure, designed to be the catalyst for a
          secure, inclusive, and equitable digital future. Our ecosystem is
          built on a foundation of regulatory compliance, scalability, and
          innovation.
        </p>
      </div>

      <div
        className={`mt-6 relative w-full  `}
        onMouseOver={() => setSrc(cecoImg)}
        onMouseOut={() => setSrc(ecoImg)}
      >
        <div className={`relative h-[600px] z-10`}>
          <div className="absolute -z-[1] w-full h-full">
            <Image
              src={isDesktop ? src : ecoImage}
              alt="Overlay"
              className="w-full object-cover h-full"
            />
          </div>

          <div
            className={`w-full z-10  h-full flex flex-col justify-end ${
              isDesktop ? "" : " overflow-x-auto min-h-[500px] "
            }`}
          >
            <Accordion />
          

          <div className="bg-black block w-full lg:h-20 h-12 z-10">
            {/* {isDesktop ? <div className="flex  flex-wrap justify-center ">
                            <div className="relative h-[1px] w-1/2 ">
                                <div className="absolute inset-0 bg-[#464646]"></div>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent from-[#464646] w-10"></div>
                            </div>
                            <div className="relative h-[1px] w-1/2">
                                <div className="absolute inset-0 bg-[#464646]"></div>
                                <div className="absolute inset-0 bg-gradient-to-l from-transparent from-[#464646] w-10 ml-auto"></div>
                            </div>

                        </div> : null} */}
            <div className="flex items-center h-full lg:h-auto justify-center cursor-pointer lg:mt-6 group relative">
              <Image
                src={arrow}
                alt="Arrow Icon"
                className="h-4 w-5 !mt-0 lg:mt-4  opacity-0 transform  transition-all duration-300 group-hover:opacity-100 "
              />
              <p className="lg:text-2xl text-xl underline decoration-1 text-white cursor-pointer font-semibold transition-transform duration-300 -translate-x-6 group-hover:translate-x-2">
                More About KALP
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoSystem;
