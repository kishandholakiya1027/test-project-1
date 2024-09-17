import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import blogb1 from "../../public/images/b1.jpg";
import blogb2 from "../../public/images/b2.jpg";
import blogb3 from "../../public/images/b3.jpg";
import arrow from "../../public/images/east-2.svg";

const Blogs: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Hover state

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);
  const router = useRouter();
  let data = [
    {
      title:
        "KALP Foundation: Pioneering a Decentralized Digital Public Infrastructure",
      hoveredimage: blogb1,
      description:
        "Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...",
    },
    {
      title:
        "Chain Reactions: Navigating India’s Progress with Blockchain Technology",
      hoveredimage: blogb2,
      description:
        "Abstract the origin of Bitcoin was expected to introduce a new currency in the market - popularly...",
    },
    {
      title: "Embracing the Blockchain Beast to Tame the AI Tiger",
      hoveredimage: blogb3,
      description:
        "Abstract the origin of Bitcoin was expected to introduce a new currency in the market - popularly...",
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
      setAnimationClass2("animate__animated animate__fadeInUp");
    } else {
      setAnimationClass("");
      setAnimationClass2("");
    }
  }, [inView]);
  return (
    <div className="lg:mt-[120px] mt-24 overflow-hidden" ref={ref}>
      <div className="flex flex-col justify-center items-center">
        <h1
          className={`lg:text-[32px] text-md font-bold md:mb-4 mb-2 ${animationClass}`}
        >
          Blogs
        </h1>
        <div className={`w-full items-center relative`}>
          <p className={`text-[16px] text-center ${animationClass}`}>
            Dive into the Insights
          </p>
          <p
            className="lg:text-[20px] hidden md:block absolute right-0 top-0 text-md underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2 mr-3"
            onClick={() => router.push("/blogs")}
          >
            View More
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5 md:mt-[40px] mt-[24px]">
          {data?.map((item: any, index: number) => (
            <div
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={index}
              className={`lg:col-span-1 col-span-3 md:mb-[40px] ${animationClass2}`}
            >
              <div className="h-[317px]">
                <Image
                  src={item?.hoveredimage}
                  alt="kalp Logo"
                  className="w-full h-full ease-in-out grayscale hover:grayscale-0 transition-all duration-1500"
                />
              </div>
              <div>
                <p className="lg:text-[20px] text-md mt-4 font-semibold leading-[30px] h-[60px] line-clamp-2">
                  {item?.title}
                </p>
                <p className="my-[19px] lg:text-sm text-[12px] leading-[21px] font-normal h-10 line-clamp-2">
                  {item?.description}
                </p>
                <div className="flex items-center gap-1 mt-4 group">
                  <Image
                    src={arrow}
                    alt="Arrow Icon"
                    className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                  />
                  <p
                    className="lg:text-2xl text-xl underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 -translate-x-6 group-hover:translate-x-2"
                    onClick={() => router.push("/blogDetail")}
                  >
                    Read More
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p
          className="text-xl mt-[32px]  underline decoration-1 cursor-pointer text-center lg:hidden font-semibold transition-transform duration-300 group-hover:translate-x-2"
          onClick={() => router.push("/blogs")}
        >
          View More
        </p>
      </div>
    </div>
  );
};
export default Blogs;
