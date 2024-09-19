import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import circledown from "../../public/images/expand_circle_down.svg";
import Pradeep from "../../public/images/Pradeep Kumar Sama.png";
import Satheesh from "../../public/images/Satheesh Srinivasan .png";
import Aashish from "../../public/images/Aashish Pasricha.png";
import Kamal from "../../public/images/Kamal Kumar Malkani .png";
import Vibhav from "../../public/images/Vibhav Sharma.png";
import Kotha from "../../public/images/Kotha Raghavendra Raja.png";
import Vishal from "../../public/images/Vishal Singh.png";
import Saharsh from "../../public/images/Saharsh  Sinha.png";
import Siddharth from "../../public/images/Siddharth Jain .png";
import Abhinav from "../../public/images/Abhinav Mishra  .png";
import Gaurav from "../../public/images/Gaurav Singh  .png";
import Chirag from "../../public/images/Chirag Garg  .png";
import Tushar from "../../public/images/Tushar Bansal  .png";
import Yalla from "../../public/images/Yalla Abhinay.png";

const Team: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState(4); // Initially show 4 items
  const [expanded, setExpanded] = useState(false);
  const aboutUsRef = useRef<HTMLDivElement>(null);

  const data = [
    {
      name: "Pradeep Kumar Sama",
      profile: "Blockchain Developer",
      image: Pradeep

    },
    {
      name: "Satheesh Srinivasan ",
      profile: "Blockchain Developer",
      image: Satheesh
    },
    {
      name: "Aashish Pasricha",
      profile: "Blockchain Developer",
      image: Aashish
    },
    {
      name: "Kamal Kumar Malkani ",
      profile: "Senior Blockchain Developer",
      image: Kamal
    },
    {
      name: "Vibhav Sharma",
      profile: "Blockchain Developer - L1",
      image: Vibhav
    },
    {
      name: "Kotha Raghavendra Raja",
      profile: "Security Engineer",
      image: Kotha
    },
    {
      name: "Vishal Singh",
      profile: "Software Developer",
      image: Vishal
    },
    {
      name: "Saharsh  Sinha",
      profile: "SDE - Data Science",
      image: Saharsh
    },
    {
      name: "Siddharth Jain ",
      profile: "Blockchain Engineer - L1",
      image: Siddharth
    },
    {
      name: "Abhinav Mishra  ",
      profile: "Senior Golang Developer",
      image: Abhinav
    },
    {
      name: "Gaurav Singh  ",
      profile: "Software Engineer - L3",
      image: Gaurav
    },
    {
      name: "Chirag Garg  ",
      profile: "Software Engineer - L2",
      image: Chirag
    },
    {
      name: "Tushar Bansal  ",
      profile: "Blockchain Engineer - L2",
      image: Tushar
    },
    {
      name: "Yalla Abhinay",
      profile: "DevOps Engineer - L1",
      image: Yalla
    },
  ];

  const handleViewMore = () => {
    if (!expanded) {
      setVisibleItems(data.length); // Show all items
    } else {
      setVisibleItems(4); // Collapse back to 4 items
    }
    setExpanded(!expanded);
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    } // Toggle expanded state
  };

  const [animationClass, setAnimationClass] = useState("");
  const [animationClassZoom, setAnimationClassZoom] = useState("");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setAnimationClass("animate__animated animate__slideInDown");
      setAnimationClassZoom("animate__animated animate__fadeInUp");
    } else {
      setAnimationClass("");
      setAnimationClassZoom("");
    }
  }, [inView]);

  return (
    <div className="lg:mt-28 mt-12" ref={ref}>
      <div
        ref={aboutUsRef}
        className="flex flex-col justify-center items-center"
      >
        <div className={`text-center ${animationClass}`}>
          <h1 className="lg:text-[32px] text-md font-bold md:mb-4 mb-2">
            Meet the Team
          </h1>
          <p className="lg:text-[16px] text-sm md:mb-2 lg:mb-0 text-center">
            Introducing the individuals making it happen
          </p>
        </div>
      </div>
      <div className={`grid grid-cols-4 gap-6 md:mt-[40px] mt-[24px] overflow-hidden`}>
        {data.slice(0, visibleItems).map((item: any, index: number) => (
          <div
            key={index}
            className={`lg:col-span-1 col-span-2 flex flex-col gap-2 ${animationClassZoom}`}
          >
            <div className="bg-[#D9D9D9] h-full w-full">
              <Image
                src={item?.image}
                alt="kalp Logo"
                className="w-full h-full object-cover ease-in-out grayscale hover:grayscale-0 transition-all duration-1500"
              />
            </div>
            <div>
              <p className="lg:text-[20px] text-sm font-semibold truncate">
                {item?.name}
              </p>
              <p className="lg:text-base text-xs truncate">{item?.profile}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap items-center cursor-pointer justify-center md:mt-[48px] mt-[24px] gap-2">
        <Image
          src={circledown}
          alt="Toggle Image"
          className={`transition-transform duration-300 ${
            expanded ? "rotate-180" : "rotate-0"
          }`}
          onClick={handleViewMore}
        />
        <p className="text-xl font-semibold" onClick={handleViewMore}>
          {expanded ? "View Less" : "View More"}
        </p>
      </div>
    </div>
  );
};
export default Team;
