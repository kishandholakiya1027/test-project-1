import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import cmedia1 from "../../public/assets/news and media/colored/1.png";
import cmedia2 from "../../public/assets/news and media/colored/2.png";
import cmedia3 from "../../public/assets/news and media/colored/3.png";
import blackPrev from "../../public/images/blackPrev.svg";
import blackNext from "../../public/images/Button Icon (1).svg";
import whitePrev from "../../public/images/Button Icon (2).svg";
import whiteNext from "../../public/images/whiteNext.svg";

const NewsMedia = () => {
  const [setting, setSetting] = useState<any>(null);
  const [settig, setSettig] = useState<any>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
    setSetting(window.innerWidth > 768 ? settings : mobSettings);
  }, [settig]);

  const PrevArrow = ({ onClick }: any) => (
    <div
      className={`absolute ${
        window.innerWidth > 768
          ? "top-[-70px] right-[44px]"
          : "left-[calc(50%-46px)] bottom-[-42px]"
      } z-10 cursor-pointer`}
      onClick={() => {
        if (onClick) onClick();
        setPrevClicked(true);
        setNextClicked(false);
      }}
    >
      <Image
        src={prevClicked ? blackPrev : whitePrev}
        alt="Previous"
        width={38}
        height={38}
      />
    </div>
  );

  const NextArrow = ({ onClick }: any) => (
    <div
      className={`absolute ${
        window.innerWidth > 768
          ? "top-[-70px] right-0"
          : "bottom-[-42px] right-[calc(50%-46px)]"
      } z-10 cursor-pointer`}
      onClick={() => {
        if (onClick) onClick();
        setNextClicked(true);
        setPrevClicked(false);
      }}
    >
      {nextClicked ? (
        <Image src={whiteNext} alt="Next" width={38} height={38} />
      ) : (
        <Image src={blackNext} alt="Next" width={38} height={38} />
      )}
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
          slidesToShow: 1,
        },
      },
    ],
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
          slidesToShow: 1,
        },
      },
    ],
  };

  const data = [
    {
      title:
        "KALP Foundation: Pioneering a Decentralized Digital Public Infrastructure",
      description:
        "Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...",
      hoverImgSrc: cmedia1,
    },
    {
      title:
        "Chain Reactions: Navigating India’s Progress with Blockchain Technology",
      description:
        "Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...",
      hoverImgSrc: cmedia2,
    },
    {
      title: "Embracing the Blockchain and the AI Tiger",
      description:
        "Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...",
      hoverImgSrc: cmedia3,
    },
  ];

  const [animationClass, setAnimationClass] = useState("");
  const [animationClass2, setAnimationClass2] = useState("");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setAnimationClass("animate__animated animate__slideInDown");
      setAnimationClass2("animate__animated animate__fadeInLeft");
    } else {
      setAnimationClass2("");
    }
  }, [inView]);

  return (
    <div className="relative lg:mt-[120px] mt-12" ref={ref}>
      <h2
        className={`lg:text-3xl text-lg font-bold text-center lg:mb-8 mb-4 ${animationClass}`}
      >
        News & Media
      </h2>
      <div className={`news_media ${animationClass2}`}>
        <Slider {...setting}>
          {data.map((item, index) => (
            <div
              key={index}
              className="news-media-post"
              // onMouseEnter={() => setHoveredIndex(index)}
              // onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative">
                <Image
                  src={item.hoverImgSrc}
                  alt={item.title}
                  className="w-full object-cover news-media-post-img"
                />
                {/* Gradient Background Overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-[43rem] bg-gradient-to-t from-black via-transparent to-transparent"></div>
                {/* Text Content */}
                <div className="absolute lg:bottom-4 bottom-0 left-4 pb-7 px-2 text-white">
                  <h3 className="lg:text-lg text-xs font-semibold">
                    {item.title}
                  </h3>
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
    </div>
  );
};

export default NewsMedia;
