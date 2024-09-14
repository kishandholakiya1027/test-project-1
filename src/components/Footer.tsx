import Image from "next/image";
import Insta from "../../public/images/insta.png";
import Facebook from "../../public/images/facebook.png";
import Twitter from "../../public/images/twitter.png";
import Linkdin from "../../public/images/linkdin.png";
import { useEffect, useState } from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth > 640);
  }, []);
  return (
    <footer className="bg-[#000]">
      <div className="xl:max-w-[1360px] max-w-full mx-auto w-full px-4 2xl:px-0">
        <div className="grid md:grid-cols-3 grid-cols-5 font-thin md:mt-[130px] mt-[49px] w-full text-[#fff] pt-[15px] pb-10 md:py-6">
          <div className="col-span-3 order-2 md:order-1 md:col-span-1">
            <div>
              <p className="md:text-[32px] md:font-[500] font-[600] md:leading-[48px] leading-[30px] text-[20px]">
                Contact us
              </p>
              <p className="md:text-[14px] text-[12px] font-medium md:leading-[21px] leading-[18px] md:mt-6 mt-4">
                Registered Office:
              </p>
            </div>
            <div className="md:mt-7 mt-5">
              <p className="md:text-[14px] text-[12px] font-normal md:leading-[21px] leading-[18px]">
                Lewes, Delaware 19958,
              </p>
              <p className="md:text-[14px] text-[12px] font-normal md:leading-[21px] leading-[18px]">
                16192 Coastal Highway
              </p>
              <p className="md:text-[14px] text-[12px] font-normal md:leading-[21px] leading-[18px]">
                County of Sussex.{" "}
              </p>
            </div>
          </div>
          <div className="col-span-5 order-1 md:flex flex-wrap justify-center md:order-2 md:col-span-1">
            <div className="md:mb-0 mb-[49px]">
              <p className="md:text-[32px] md:font-[500] font-[600] md:leading-[48px] leading-[30px] text-[20px]">
                Quick Links
              </p>
              <div className="md:mt-6 mt-4 flex md:flex-col wrap md:gap-0 gap-12">
                <ul className="md:block grid grid-cols-2 md:gap-0 gap-x-10">
                  <li className="md:text-[14px] text-[12px] leading-[30px] font-normal md:order-none order-1">
                    About Kalp Foundation
                  </li>
                  <li className="md:text-[14px] text-[12px] leading-[30px] mt-2 font-normal md:order-none order-3">
                    Mission & Vision
                  </li>
                  <li className="md:text-[14px] text-[12px] leading-[30px] mt-2 font-normal md:order-none order-5">
                    About Us
                  </li>
                  <li className="md:text-[14px] text-[12px] leading-[30px] md:mt-2 font-normal md:order-none order-2">
                    KALP Network
                  </li>
                  <li className="md:text-[14px] text-[12px] leading-[30px] mt-2 font-normal md:order-none order-4">
                    GINI: Digital Currency
                  </li>
                  <li className="md:text-[14px] text-[12px] leading-[30px] mt-2 font-normal md:order-none order-6">
                    Blogs
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-2 order-3 flex flex-wrap md:pl-10 justify-around md:col-span-1">
            <div>
              <p className="md:text-[32px] md:font-[500] font-[600] md:leading-[48px] leading-[30px] text-[20px]">
                Follow us on
              </p>
              <div className="md:mt-6 mt-4">
                <div className="flex flex-wrap md:gap-4 gap-[9px] mt-2 items-center">
                  <Image
                    src={Facebook}
                    alt={""}
                    className="md:w-[30px] md:h-[30px] w-6 h-6 flex items-center justify-center"
                  />
                  <p className="md:text-[14px] text-[12px] font-[400] md:leading-[21px] leading-[18px]">
                    Facebook
                  </p>
                </div>
                <div className="flex flex-wrap md:gap-4 gap-[9px] mt-2 items-center">
                  <Image
                    src={Linkdin}
                    alt={""}
                    className="md:w-[30px] md:h-[30px] w-6 h-6 flex items-center justify-center"
                  />
                  <p className="md:text-[14px] text-[12px] font-[400] md:leading-[21px] leading-[18px]">
                    LinkedIn
                  </p>
                </div>
                <div className="flex flex-wrap md:gap-4 gap-[9px] mt-2 items-center">
                  <Image
                    src={Twitter}
                    alt={""}
                    className="md:w-[30px] md:h-[30px] w-6 h-6 flex items-center justify-center"
                  />
                  <p className="md:text-[14px] text-[12px] font-[400] md:leading-[21px] leading-[18px]">
                    Twitter
                  </p>
                </div>
                <div className="flex flex-wrap md:gap-4 gap-[9px] mt-2 items-center">
                  <Image
                    src={Insta}
                    alt={""}
                    className="md:w-[30px] md:h-[30px] w-6 h-6 flex items-center justify-center"
                  />
                  <p className="md:text-[14px] text-[12px] font-[400] md:leading-[21px] leading-[18px]">
                    Instagram
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#000] font-thin text-[#fff]">
          <div
            className={`border-t border-[#fff]/40 flex md:py-6 py-2 ${
              isDesktop ? "flex-wrap " : " flex-col"
            }  md:gap-0 gap-4 justify-between items-center`}
          >
            <p className="md:text-[12px] font-[400] text-[10px] leading-6">
              Copyright © 2024 KALP Decentra Foundation. All rights reserved.
            </p>
            <p className="md:text-xs text-[10px] font-[400] leading-6">
              <span className="underline">Terms & Conditions</span> |{" "}
              <span className="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
