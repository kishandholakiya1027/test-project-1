import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
import blackPrev from '../../public/images/blackPrev.svg';
import blackNext from '../../public/images/Button Icon (1).svg';
import whitePrev from '../../public/images/Button Icon (2).svg';
import whiteNext from '../../public/images/whiteNext.svg';
import media1 from '../../public/assets/news and media/black and white/1.png';
import media2 from '../../public/assets/news and media/black and white/2.png';
import media3 from '../../public/assets/news and media/black and white/3.png';
import cmedia1 from '../../public/assets/news and media/colored/1.png';
import cmedia2 from '../../public/assets/news and media/colored/2.png';
import cmedia3 from '../../public/assets/news and media/colored/3.png';

const NewsMedia = () => {
  const [setting, setSetting] = useState<any>(null);
  const [settig, setSettig] = useState<any>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Hover state
  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

  const handlePrevClick = () => {
    setPrevClicked(true);
    setNextClicked(false);
  };

  const handleNextClick = () => {
    setNextClicked(true);
    setPrevClicked(false);
  };
  
console.log(prevClicked)
console.log(nextClicked)
  useEffect(() => {
    setIsDesktop(window.innerWidth > 640);
    setSetting(window.innerWidth > 640 ? settings : mobSettings);
  }, [settig]);

  const PrevArrow = ({ onClick }: any) => (
    <div 
      className={`absolute ${window.innerWidth > 640 ? 'top-[-70px] right-[44px]' : 'left-[128px] bottom-[-42px]'} z-10 cursor-pointer`}
      onClick={() => { onClick(),  
        setPrevClicked(true);
        setNextClicked(false); }}
    >
      <Image src={prevClicked ? blackPrev : whitePrev} alt="Previous" width={38} height={38} />
    </div>
  );

  const NextArrow = ({ onClick }: any) => (
    <div 
      className={`absolute ${window.innerWidth > 640 ? 'top-[-70px] right-0' : 'bottom-[-42px] right-[130px]'} z-10 cursor-pointer`}
      onClick={() => { onClick();  
         setNextClicked(true);
        setPrevClicked(false);}}

    >
    {nextClicked ?
      <Image src={whiteNext }  alt="Next" width={38} height={38} />
    :
      <Image src={blackNext }  alt="Next" width={38} height={38} />
     }
    </div>
  );

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const mobSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.25,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  const data = [
    {
      title: "KALP Foundation: Pioneering a Decentralized Digital Public Infrastructure",
      description: "Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...",
      imgSrc: media1,
      hoverImgSrc: cmedia1
    },
    {
      title: "Chain Reactions: Navigating India’s Progress with Blockchain Technology",
      description: "Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...",
      imgSrc: media2,
      hoverImgSrc: cmedia2
    },
    {
      title: "Embracing the Blockchain and the AI Tiger",
      description: "Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...",
      imgSrc: media3,
      hoverImgSrc: cmedia3
    }
  ];

  return (
    <div className="relative lg:mt-28 mt-12">
      <h2 className="lg:text-3xl text-lg font-bold text-center lg:mb-8 mb-4">News & Media</h2>
      
      <Slider {...setting}>
        {data.map((item, index) => (
          <div 
            key={index} 
            className=""
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative lg:mr-3 mr-3">
              <Image 
                src={hoveredIndex === index ? item.hoverImgSrc : item.imgSrc} 
                alt={item.title} 
                className="w-full object-cover" 
              />
              
              {/* Gradient Background Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-[43rem] bg-gradient-to-t from-black via-transparent to-transparent"></div>
              
              {/* Text Content */}
              <div className="absolute lg:bottom-4 bottom-0 left-4 pb-7 px-2 text-white">
                <h3 className="lg:text-lg text-xs font-semibold">{item.title}</h3>
                <p className="lg:text-sm text-xs mt-2">{item.description}</p>
              </div>
              
              {/* Research Tag */}
              <div className="absolute top-4 right-4">
                <div className="text-white lg:text-sm text-xs lg:py-3 py-1 cursor-pointer lg:px-4 px-1.5 rounded-full bg-black bg-opacity-50">
                  Research
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsMedia;
