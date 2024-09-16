import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import bannerImg2 from "../../public/assets/hero banner/colored/hero banner_colored.png";
import bannerImg2Mobile from "../../public/images/bannerMobile.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Vision from "@/components/Vision";
import AboutUs from "@/components/AboutUs";
import GiniToken from "@/components/GiniToken";
import Team from "@/components/team";
import NewsMedia from "@/components/newsAndMedia";
import Blogs from "@/components/Blogs";
import GetInvolvedSection from "@/components/InvolvedSection";
import Faq from "@/components/Faq";
import EcoSystem from "@/components/EcoSystem";
import StrategicInitiatives from "@/components/strategic";
import Dpi from "@/components/Dpi";

export default function Home() {
  const [src, setSrc] = useState(bannerImg2);
  const imageRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSrc(bannerImg2Mobile);
    } else {
      setSrc(bannerImg2);
    }
  }, []);

  const handleMouseOver = () => {
  };

  const handleMouseOut = () => {
 
  };

  return (
    <>
      <div className="w-full">
        <Header />
        <div className="xl:max-w-[1360px] max-w-full mx-auto w-full px-4 2xl:px-0">
          <div
            className="relative grp"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onTouchStart={handleMouseOver}
            onTouchEnd={handleMouseOut}
          >
            <Image
              src={src}
              alt="kalp Logo"
              className="hero-img grayscale hover:grayscale-0 transition-all duration-1500 ease-in-out sm:h-full w-full min-h-[270px] object-cover object-center"
              ref={imageRef}
            />
            <div className="slider-caption sm:max-h-[248px] max-h-[216px] max-w-[213px] sm:py-[40px] sm:px-[24px] p-[16px] sm:max-w-[485px] bg-[#00000099] absolute sm:bottom-4 sm:left-4 bottom-2 left-2">
              <div className="text-[#fff] xl:text-[48px] lg:text-[40px] font-semibold sm:text-[32px] text-[24px] xl:leading-[56px] lg:leading-[48px] sm:leading-[40px] leading-[28px]">
                Empowering Global Digital Equity
              </div>
            </div>
          </div>
          <div className="lg:grid grid-cols-3 lg:mt-28 mt-[32px]">
            <div className="col-span-1">
              <p className="lg:text-[32px] text-md font-bold" id="about-kalp-foundation">
                About KALP Foundation
              </p>
              <p className="lg:text-2xl text-sm lg:mt-4 mt-2 max-w-[384px]">
                Architecting the Future of Digital Inclusivity
              </p>
            </div>
            <div className="col-span-2 lg:pl-[39px] lg:border-l border-[#B1B1B1]/40">
              <div className="flex flex-col gap-5 text-sm">
                <p className="lg:text-[14px] text-xs mt-2 leading-[21px]">
                  The Kalp Decentra Foundation stands at the forefront of the
                  blockchain revolution, pioneering a new era of Digital Public
                  Infrastructure. We are not just building technology;
                  we&apos;re architecting the future of global digital
                  interaction.
                </p>
                <div className="lg:text-[14px] text-xs">
                  <p className="leading-[21px]">
                    Our mission? To create a decentralized ecosystem that&apos;s
                    as secure as it is inclusive, as innovative as it is
                    compliant.
                  </p>
                  <p className="font-bold leading-[21px]">
                    At Kalp, we believe in:
                  </p>
                  <div className="flex flex-col leading-[21px]">
                    <p>• Decentralization with accountability</p>
                    <p>• Innovation within regulatory frameworks</p>
                    <p>• Global accessibility with local relevance</p>
                  </div>
                </div>
                <p className="lg:text-[14px] text-xs leading-[21px]">
                  We&apos;re unique in our &apos;compliance-first&apos;
                  approach, embedding regulatory adherence into our DNA. Our
                  ecosystem isn&apos;t just about technology; it&apos;s about
                  empowering communities, fostering innovation, and creating a
                  level playing field in the digital realm.
                </p>
              </div>
            </div>
          </div>
          <Vision />
          <AboutUs />
          <Dpi/>
          <EcoSystem />
          <GiniToken />
          <StrategicInitiatives />
          <Team />
          <NewsMedia />
          <Blogs />
          <GetInvolvedSection />
          <Faq />
        </div>
        <Footer />
      </div>
    </>
  );
}
