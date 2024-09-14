import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import slideImg from '../../public/images/lines background.png';
import left from '../../public/images/chevron_right (1).png';
import right from '../../public/images/chevron_right.png';
import aboutMainImg from "../../public/images/aboutMain.jpg";

// import right from '../../public/images/Frame 1410125009.jpg';

const StrategicInitiatives: React.FC = () => {
  const sliderRef = useRef<any>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Hover state
  const [setting, setSettings] = useState<any>(); // To track the current center slide

  useEffect(() => {
    setIsDesktop(window.innerWidth > 640);
    setSettings(window.innerWidth > 640 ? settings : mobSettings);
  }, [hoveredIndex]);
  const [activeSlide, setActiveSlide] = useState(0);
  const settings = {
    infinite: true,
    className: "center",
    speed: 500,
    slidesToShow: 3, // Show 3 items, so that centerMode works
    slidesToScroll: 1,
    centerMode: true, // This keeps the center slide emphasized
    centerPadding: '150px',
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '150px',
        },
      },
    ],
  };
  const mobSettings = {
    infinite: true,
    className: "center",
    speed: 500,
    slidesToShow: 1, // Show 3 items, so that centerMode works
    slidesToScroll: 1,
    centerMode: true, // This keeps the center slide emphasized
    centerPadding: '26px',
    afterChange: (current: number) => setActiveSlide(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
          centerPadding: '150px',
        },
      },
    ],
  };
  // To track the current center slide


  const slides = [
    {
      title: 'KALP Ecosystem Development',
      description: 'Continuously evolving our permissioned Distributed Ledger Technology (DLT) platform., Enhancing the Kalp Virtual Machine (KVM) for optimized transaction throughput.',

      backgroundImage: slideImg
    },
    {
      title: 'Kalpify Platform',
      description: 'Continuously evolving our permissioned Distributed Ledger Technology (DLT) platform., Enhancing the Kalp Virtual Machine (KVM) for optimized transaction throughput.',
      backgroundImage: slideImg
    },
    {
      title: 'KALP Studio',
      description: 'Continuously evolving our permissioned Distributed Ledger Technology (DLT) platform., Enhancing the Kalp Virtual Machine (KVM) for optimized transaction throughput.',

      backgroundImage: slideImg
    },
    {
      title: 'KALP Services',
      description: 'Continuously evolving our permissioned Distributed Ledger Technology (DLT) platform., Enhancing the Kalp Virtual Machine (KVM) for optimized transaction throughput.',

      backgroundImage: slideImg
    },
    {
      title: 'Bridging Tool',
      description: 'Continuously evolving our permissioned Distributed Ledger Technology (DLT) platform., Enhancing the Kalp Virtual Machine (KVM) for optimized transaction throughput.',

      backgroundImage: slideImg
    },

  ];
  const goToNext = () => {
    const nextSlide = (activeSlide + 1) % slides.length;
    sliderRef.current.slickGoTo(nextSlide);
  };

  // Custom handler for previous slide
  const goToPrev = () => {
    const prevSlide = (activeSlide - 1 + slides.length) % slides.length;
    sliderRef.current.slickGoTo(prevSlide);
  };

  return (
    <>
      {isDesktop ?

        <div className="relative lg:mt-28 mt-12 bg-black">
          {isDesktop ? <Image className="absolute z-0" src={aboutMainImg} alt="" /> : null}
          <div className="relative z-10 text-white py-10">
            <h2 className="position opacity-1 text-center lg:text-[32px] text-lg font-bold lg:mb-20 mb-6 lg:mt-8 mt-2">
              Strategic Initiatives
            </h2>

            {settings && (
              <div className="slider-container">
                <Slider ref={sliderRef} {...settings}>
                  {slides.map((slide, index) => {
                    const [part1, part2] = slide.description.split('.,');
                    return (
                      <div key={index} className="lg:px-3 px-1">
                        <div
                          className={`flex justify-center items-center ${activeSlide === index
                              ? 'text-black lg:h- h-[336px]'
                              : 'border-2 mt-6 bg-black text-white'
                            }`}
                        >
                          {activeSlide === index ? (
                            <div className="flex flex-col gap-3 top-4" style={{ width: 500 }}>
                              <h3 className="text-2xl font-bold mb-4">
                                {slides[activeSlide].title}
                              </h3>
                              <ul className="list-disc pl-5 lg:text-[15px] leading-[20px] text-xs">
                                <li>
                                  {part1.trim()}
                                  {part2 && part2.trim() ? ',' : ''}
                                </li>
                                {part2 && <li className="mt-3">{part2.trim()}</li>}
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
            <div className="flex justify-center mt-6">
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
        :
        <div className='bg-black lg:mt-28 mt-12'>
          {/* <Image src={slide.backgroundImage} alt={''} /> */}

          <div className=" text-white py-10">
            <h2 className="text-center lg:text-3xl text-lg font-bold lg:mb-20 mb-6 lg:mt-8 mt-2 ">Strategic Initiatives</h2>

            <Slider ref={sliderRef} {...setting}>
              {slides.map((slide, index) => {
                const [part1, part2] = slide.description.split('.,');

                return (
                  <div key={index} className="lg:px-3 px-1  ">
                    <div
                      className={`flex justify-center items-center border-2 
${activeSlide === index ? 'px-4 bg-white text-black  lg:w-[301px] lg:h-[24rem] h-[336px]' : 'lg:mt-12 mt-6 bg-black text-white'}`} // Dynamically highlight the center slide
                    >
                      {activeSlide === index ? (
                        <div className='flex flex-col gap-3  top-4 ' style={{ width: 500 }}>
                          <h3 className="text-xl font-bold mb-4">{slides[activeSlide].title}</h3>
                          <ul className="list-disc pl-5 lg:text-[15px] leading-[20px] text-xs ">
                            <li>{part1.trim()}{part2 && part2.trim() ? ',' : ''}</li>
                            {part2 && <li className='mt-3' >{part2.trim()}</li>}
                          </ul>
                        </div>
                      ) : (
                        <div className='relative '>
                          <Image src={slide.backgroundImage} alt={''} />
                          <h3 className="absolute top-32 right-8 left-8 text-xl font-semibold text-center">{slide.title}</h3>
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
                <Image src={left} alt={''} />
              </button>
              <span className="px-4 py-2 bg-[#393939] text-white">
                <p className='font-semibold' >{activeSlide + 1}<span className='font-thin' >/{slides.length}</span></p>
              </span>
              <button
                onClick={() => sliderRef.current.slickNext()}
                className="px-4 py-2 bg-[#393939] text-white rounded-r-full hover:bg-gray-600 transition duration-300"
              >
                <Image src={right} alt={''} />
              </button>
            </div>
          </div>
        </div>
      }
    </>


  );
};

export default StrategicInitiatives;  