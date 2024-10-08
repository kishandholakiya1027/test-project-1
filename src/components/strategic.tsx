import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import aboutMainImg from "../../public/images/aboutMain.jpg";
import right from "../../public/images/chevron_right (1).svg";
import left from "../../public/images/chevron_right.svg";
import slideImg from "../../public/images/lines background.png";

const StrategicInitiatives: React.FC = () => {
  const sliderRef = useRef<any>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [setting, setSettings] = useState<any>();

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
    setSettings(window.innerWidth > 768 ? settings : mobSettings);
  }, [hoveredIndex]);
  const [activeSlide, setActiveSlide] = useState(0);
  console.log("activeSlide", activeSlide);

  const settings = {
    infinite: true,
    className: "center",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    draggable: false,
    centerPadding: "150px",
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "150px",
        },
      },
    ],
  };
  const mobSettings = {
    infinite: true,
    className: "center",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "26px",
    draggable: false,
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: "150px",
        },
      },
    ],
  };

  const slides = [
    {
      title: "KALP Ecosystem Development",
      description:
        "Continuously evolving our permissioned Distributed Ledger Technology (DLT) platform., Enhancing the Kalp Virtual Machine (KVM) for optimized transaction throughput.",

      backgroundImage: slideImg,
    },
    {
      title: "Kalpify Platform",
      description:
        "Continuously evolving our permissioned Distributed Ledger Technology (DLT) platform., Enhancing the Kalp Virtual Machine (KVM) for optimized transaction throughput.",
      backgroundImage: slideImg,
    },
    {
      title: "KALP Studio",
      description:
        "Continuously evolving our permissioned Distributed Ledger Technology (DLT) platform., Enhancing the Kalp Virtual Machine (KVM) for optimized transaction throughput.",

      backgroundImage: slideImg,
    },
    {
      title: "KALP Services",
      description:
        "Continuously evolving our permissioned Distributed Ledger Technology (DLT) platform., Enhancing the Kalp Virtual Machine (KVM) for optimized transaction throughput.",

      backgroundImage: slideImg,
    },
    {
      title: "Bridging Tool",
      description:
        "Continuously evolving our permissioned Distributed Ledger Technology (DLT) platform., Enhancing the Kalp Virtual Machine (KVM) for optimized transaction throughput.",

      backgroundImage: slideImg,
    },
    {
      title: "KALP Ecosystem Development",
      description:
        "Continuously evolving our permissioned Distributed Ledger Technology (DLT) platform., Enhancing the Kalp Virtual Machine (KVM) for optimized transaction throughput.",

      backgroundImage: slideImg,
    },
    {
      title: "Kalpify Platform",
      description:
        "Continuously evolving our permissioned Distributed Ledger Technology (DLT) platform., Enhancing the Kalp Virtual Machine (KVM) for optimized transaction throughput.",
      backgroundImage: slideImg,
    },
    {
      title: "KALP Studio",
      description:
        "Continuously evolving our permissioned Distributed Ledger Technology (DLT) platform., Enhancing the Kalp Virtual Machine (KVM) for optimized transaction throughput.",

      backgroundImage: slideImg,
    },
  ];
  const goToNext = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    const nextSlide = (activeSlide + 1) % slides.length;
    sliderRef.current.slickGoTo(nextSlide);
  };

  const goToPrev = () => {
    setActiveSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
    const prevSlide = (activeSlide - 1 + slides.length) % slides.length;
    sliderRef.current.slickGoTo(prevSlide);
  };

  const [animationClass, setAnimationClass] = useState("");
  const [animationClassRight, setAnimationClassRight] = useState("");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setAnimationClass("animate__animated animate__zoomIn");
      setAnimationClassRight("animate__animated animate__fadeInRight");
    } else {
      setAnimationClass("");
      setAnimationClassRight("");
    }
  }, [inView]);

  return (
    <>
      {isDesktop ? (
        <div
          className="relative lg:mt-[120px] mt-12 bg-black overflow-hidden"
          ref={ref}
        >
          {isDesktop ? (
            <Image className="absolute z-0" src={aboutMainImg} alt="" />
          ) : null}
          <div className="relative z-10 text-white pt-[56px] pb-[37px]">
            <h2
              className={`position opacity-1 text-center lg:text-[32px] text-lg font-bold mb-[60px] ${animationClass}`}
            >
              Strategic Initiatives
            </h2>

            {settings && (
              <div className={` overflow-hidden ${animationClassRight}`}>
                <Slider ref={sliderRef} {...settings}>
                  {slides.map((slide, index) => {
                    const [part1, part2] = slide.description.split(".,");
                    return (
                      <div key={index} className="lg:px-3 px-1">
                        <div
                          className={`flex justify-center items-center ${
                            activeSlide === index
                              ? "text-black lg:h- h-[336px]"
                              : "border-2 mt-6 bg-black text-white"
                          }`}
                        >
                          {activeSlide === index ? (
                            <div
                              className="flex flex-col gap-3 top-4"
                              style={{ width: 500 }}
                            >
                              <h3 className="text-2xl font-bold mb-4">
                                {slides[activeSlide].title}
                              </h3>
                              <ul className="list-disc pl-5 lg:text-[15px] leading-[20px] text-xs">
                                <li>
                                  {part1.trim()}
                                  {part2 && part2.trim() ? "," : ""}
                                </li>
                                {part2 && (
                                  <li className="mt-3">{part2.trim()}</li>
                                )}
                              </ul>
                            </div>
                          ) : (
                            <div className="relative">
                              <Image src={slide.backgroundImage} alt="" />
                              <h3 className="absolute top-32 right-8 left-8 text-xl font-semibold text-center">
                                {slide.title}
                              </h3>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
            )}

            {/* Custom Pagination */}
            <div className="flex justify-center mt-6 z-30 relative">
              <button
                onClick={goToPrev}
                className="px-4 py-2 bg-[#393939] text-white rounded-l-full hover:bg-gray-600 transition cursor-pointer duration-300"
              >
                <Image src={left} alt="" />
              </button>
              <span className="px-4 py-2 bg-[#393939] text-white">
                <p className="font-semibold">
                  {activeSlide + 1}
                  <span className="font-thin">/{slides.length}</span>
                </p>
              </span>
              <button
                onClick={goToNext}
                className="px-4 py-2 bg-[#393939] text-white rounded-r-full hover:bg-gray-600 cursor-pointer   transition duration-300"
              >
                <Image src={right} alt="" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-black lg:mt-28 mt-12">
          <div className=" text-white py-10">
            <h2 className="text-center lg:text-3xl text-lg font-bold lg:mb-20 mb-6 lg:mt-8 mt-2 ">
              Strategic Initiatives
            </h2>

            <Slider ref={sliderRef} {...setting}>
              {slides.map((slide, index) => {
                const [part1, part2] = slide.description.split(".,");

                return (
                  <div key={index} className="lg:px-3 px-1  ">
                    <div
                      className={`flex justify-center items-center border-2 ${
                        activeSlide === index
                          ? "px-4 bg-white text-black  lg:w-[301px] lg:h-[24rem] h-[336px]"
                          : "lg:mt-12 mt-6 bg-black text-white"
                      }`}
                    >
                      {activeSlide === index ? (
                        <div
                          className="flex flex-col gap-3  top-4 "
                          style={{ width: 500 }}
                        >
                          <h3 className="text-xl font-bold mb-4">
                            {slides[activeSlide].title}
                          </h3>
                          <ul className="list-disc pl-5 lg:text-[15px] leading-[20px] text-xs ">
                            <li>
                              {part1.trim()}
                              {part2 && part2.trim() ? "," : ""}
                            </li>
                            {part2 && <li className="mt-3">{part2.trim()}</li>}
                          </ul>
                        </div>
                      ) : (
                        <div className="relative ">
                          <Image src={slide.backgroundImage} alt={""} />
                          <h3 className="absolute top-32 right-8 left-8 text-xl font-semibold text-center">
                            {slide.title}
                          </h3>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </Slider>

            {/* Pagination */}
            <div className="flex justify-center mt-6">
              <button
                onClick={() => sliderRef.current.slickPrev()}
                className="px-4 py-2 bg-[#393939] text-white rounded-l-full hover:bg-gray-600 transition duration-300"
              >
                <Image src={left} alt={""} />
              </button>
              <span className="px-4 py-2 bg-[#393939] text-white">
                <p className="font-semibold">
                  {activeSlide + 1}
                  <span className="font-thin">/{slides.length}</span>
                </p>
              </span>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="px-4 py-2 bg-[#393939] text-white rounded-r-full hover:bg-gray-600 transition duration-300"
              >
                <Image src={right} alt={""} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StrategicInitiatives;
