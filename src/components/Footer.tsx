import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import logo from "../../public/images/logo-white.svg";

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <footer className="bg-[#000] mt-[49px] md:mt-[120px]">
      <div className="xl:max-w-[1360px] max-w-full mx-auto w-full px-4 2xl:px-0">
        <div className="flex flex-wrap justify-between text-[#fff] py-6 items-center">
          <div className="basis-full md:basis-[22%] mb-[48px] md:mb-0 flex justify-center md:justify-start self-start">
            <Image src={logo} width={150} height={65} alt="logo" />
          </div>
          <div className="w-[1px] min-h-[155px] bg-[#333] md:block hidden"></div>
          <div className="basis-[48%] md:basis-[34%] flex md:justify-center md:mb-0">
            <div className="text-left md:mx-6">
              <p className="md:text-[32px] md:font-[500] font-[600] md:leading-[48px] leading-[30px] text-[20px]">
                Contact us
              </p>
              <p className="md:text-[14px] text-[12px] font-medium md:leading-[21px] leading-[18px] md:mt-6 mt-4">
                Registered Office:
              </p>
              <div className="md:mt-7 mt-5">
                <p className="md:text-[14px] text-[12px] font-normal md:leading-[21px] leading-[18px]">
                  Lewes, Delaware 19958,
                </p>
                <p className="md:text-[14px] text-[12px] font-normal md:leading-[21px] leading-[18px]">
                  16192 Coastal Highway
                </p>
                <p className="md:text-[14px] text-[12px] font-normal md:leading-[21px] leading-[18px]">
                  County of Sussex.
                </p>
              </div>
            </div>
          </div>
          <div className="w-[1px] min-h-[155px] bg-[#333] md:block hidden"></div>

          <div className="basis-[48%] md:basis-[42%] flex justify-center">
            <div className="text-left md:mx-6">
              <p className="md:text-[32px] md:font-[500] font-[600] md:leading-[48px] leading-[30px] text-[20px]">
                Quick Links
              </p>
              <ul className="md:grid md:grid-cols-2 gap-x-6 lg:gap-x-[30px] xl:gap-x-[84px] md:mt-6 mt-4">
                <li
                  className="cursor-pointer md:text-[14px] text-[12px] leading-[30px] font-normal"
                  onClick={() => scrollToSection("about-kalp-foundation")}
                >
                  About Kalp Foundation
                </li>
                <li
                  className="md:text-[14px] text-[12px] leading-[30px] font-normal cursor-pointer"
                  onClick={() => scrollToSection("vision")}
                >
                  Vision
                </li>
                <li className="md:text-[14px] text-[12px] leading-[30px] font-normal">
                  KALP Network
                </li>
                <li
                  className="cursor-pointer md:text-[14px] text-[12px] leading-[30px] font-normal"
                  onClick={() => scrollToSection("gini")}
                >
                  GINI: Digital Currency
                </li>
                <li
                  className="cursor-pointer md:text-[14px] text-[12px] leading-[30px] font-normal"
                  onClick={() => router.push("/blogs")}
                >
                  Blogs & Resources
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-[#000] font-thin text-[#fff]">
          <div
            className={`border-t border-[#333] flex md:py-6 py-2 ${
              isDesktop ? "flex-wrap " : "justify-center flex-col"
            }  md:gap-0 gap-4 justify-between items-center`}
          >
            <p className="md:text-[12px] font-[400] text-[10px] leading-6 text-center">
              Copyright © 2024 KALP Decentra Foundation. All rights reserved.
            </p>
            <p className="md:text-xs text-[10px] font-[400] leading-6">
              <span className="underline">Terms & Conditions </span> |
              <span className="underline">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
