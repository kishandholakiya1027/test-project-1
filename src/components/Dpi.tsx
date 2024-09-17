import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import f1 from "../../public/images/f1.svg";
import f2 from "../../public/images/f2.svg";
import f3 from "../../public/images/f3.svg";
import f4 from "../../public/images/f4.svg";
import f5 from "../../public/images/f5.svg";
import f6 from "../../public/images/f6.svg";
import f7 from "../../public/images/f7.svg";
import fh1 from "../../public/images/fh1.svg";
import fh2 from "../../public/images/fh2.svg";
import fh3 from "../../public/images/fh3.svg";
import fh4 from "../../public/images/fh4.svg";
import fh5 from "../../public/images/fh5.svg";
import fh6 from "../../public/images/fh6.svg";
import fh7 from "../../public/images/fh7.svg";
import frame from "../../public/images/Frame.svg";
import frameW from "../../public/images/Group.svg";
import linesImage from "../../public/images/lines.png";

// Array holding all the data for the 8 boxes
const boxData = [
  {
    id: 8,
    normalImage: frame,
    hoverImage: frameW,
    title: "Key Pillars",
    description: "Key pillars of Digital Public Infrastructures",
  },
  {
    id: 1,
    normalImage: f1,
    hoverImage: fh1,
    title: "Decentralized Governance",
    description:
      "Empowering stakeholders through transparent, community-driven decision-making processes..",
  },
  {
    id: 2,
    normalImage: f2,
    hoverImage: fh2,
    title: "Regulatory Compliance",
    description:
      "Pioneering a 'compliance-first' approach, embedding legal and ethical standards into our technological foundation..",
  },
  {
    id: 3,
    normalImage: f3,
    hoverImage: fh3,
    title: "Interoperability",
    description:
      "Facilitating seamless integration across diverse blockchain networks and traditional systems..",
  },
  {
    id: 4,
    normalImage: f4,
    hoverImage: fh4,
    title: "Security and Privacy",
    description:
      "Implementing state-of-the-art cryptographic protocols and privacy-preserving technologies..",
  },
  {
    id: 5,
    normalImage: f5,
    hoverImage: fh5,
    title: "Scalability",
    description:
      "Developing infrastructure capable of supporting global-scale operations without compromising performance..",
  },
  {
    id: 6,
    normalImage: f6,
    hoverImage: fh6,
    title: "Sustainability",
    description:
      "Promoting environmentally responsible practices in blockchain technology..",
  },
  {
    id: 7,
    normalImage: f7,
    hoverImage: fh7,
    title: "Inclusivity",
    description:
      "Ensuring equitable access to digital infrastructure, regardless of socioeconomic status..",
  },
];

const Dpi: React.FC = () => {
  const [animationClass, setAnimationClass] = useState("");
  const [animationClassUp, setAnimationClassUp] = useState("");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setAnimationClass("animate__animated animate__slideInDown");
      setAnimationClassUp("animate__animated animate__fadeInUp");
    } else {
      setAnimationClass("");
      setAnimationClassUp("");
    }
  }, [inView]);
  return (
    <div className="lg:mt-[120px] mt-12 w-full overflow-hidden" ref={ref}>
      <div
        className={`lg:flex flex-col gap-[10px] justify-center lg:px-12 text-center ${animationClass}`}
      >
        <h1 className={`lg:text-[32px] text-md font-bold`}>
          Digital Public Infrastructure (DPI)
        </h1>
        <p className="lg:text-[16px] text-sm mb-2 lg:mb-0 text-center">
          <span className="font-semibold">POWERED BY BLOCKCHAIN</span> by
          blockchain delivers secure, transparent, and decentralized access to
          public services, enhancing trust and efficiency. By leveraging
          blockchain, DPI ensures data privacy, integrity, and seamless service
          delivery for all.
        </p>
      </div>

      {/* 4x4 Grid */}
      <div className={`grid grid-cols-4 gap-[5px] md:gap-[24px] pt-4 md:pt-[48px] ${animationClassUp}`}>
        {boxData.map((box, index) => (
          <div key={index} className="lg:col-span-1 col-span-2">
            <AnimatedImageBox
              key={box.id}
              id={box.id}
              normalImage={box.normalImage}
              hoverImage={box.hoverImage}
              title={box.title}
              description={box.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// Component for each individual box

interface AnimatedImageBoxProps {
  id: number;
  normalImage: any;
  hoverImage: any;
  title: string;
  description: string;
}

const AnimatedImageBox: React.FC<AnimatedImageBoxProps> = ({
  id,
  normalImage,
  hoverImage,
  title,
  description,
}) => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const image1Ref = useRef<HTMLDivElement>(null);
  const image2Ref = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const whitetextContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageContainer = imageContainerRef.current;
    const image1 = image1Ref.current;
    const image2 = image2Ref.current;
    const textContainer = textContainerRef.current;
    const whitetextContainer = whitetextContainerRef.current;

    // Animation timeline
    const hoverTimeline = gsap.timeline({ paused: true });

    hoverTimeline
      .to(whitetextContainer, {
        y: -60,
        opacity: 0.5, // Scale down
        duration: 1,
        ease: "power2.out",
        onStart: () => console.log("Animation started"),
        onComplete: () => console.log("Animation completed"),
      })
      .to(
        image1,
        {
          width: 0,
          duration: 1,
          ease: "power2.inOut",
          left: "50%",
          right: "50%",
          opacity: 0,
        },
        0
      )
      .fromTo(
        image2,
        { width: 0, left: "50%", right: "50%", opacity: 0 },
        {
          width: "100%",
          duration: 1,
          ease: "power2.inOut",
          left: "0%",
          right: "0%",
          opacity: 1,
        },
        "-=0.5"
      )
      .fromTo(
        textContainer,
        { y: 100, opacity: 0, transform: "translateY(-50%)" },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          transform: "translateY(0)",
          ease: "power.inOut",
        },
        "-=0.5"
      )
      .to(
        whitetextContainer,
        { y: 0, opacity: 0.5, duration: 0.2, ease: "power2.out" }, // Faster movement and adjusted scale
        "-=0.5"
      );

    const onMouseEnter = () => {
      if (id !== 8) {
        // Check if the id is not 8
        hoverTimeline.play();
      }
    };
    const onMouseLeave = () => {
      if (id !== 8) {
        // Check if the id is not 8
        hoverTimeline.reverse();
      }
    };

    // Add hover listeners
    if (imageContainer) {
      imageContainer.addEventListener("mouseenter", onMouseEnter);
      imageContainer.addEventListener("mouseleave", onMouseLeave);
    }

    return () => {
      if (imageContainer) {
        imageContainer.removeEventListener("mouseenter", onMouseEnter);
        imageContainer.removeEventListener("mouseleave", onMouseLeave);
      }
    };
  }, [id]);

  return (
    <div
      ref={imageContainerRef}
      className="relative w-full lg:h-[300px] h-[216px] cursor-pointer overflow-hidden"
    >
      {id === 8 ? (
        <div
          ref={image1Ref}
          className="absolute top-0 left-0 w-full h-full border-[4px] border-black flex flex-col justify-center items-center"
          style={{ position: "absolute", left: "0%", right: "0%" }}
        >
          <div className="absolute top-4 lg:left-4 lg:right-4 left-2 text-black z-10 ">
            <p className="lg:text-3xl text-xl uppercase font-bold">{title}</p>
            <p className="lg:text-2xl text-md mt-4 lg:mt-5">{description}</p>
          </div>
        </div>
      ) : (
        <>
          <div
            ref={image1Ref}
            className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center"
            style={{ position: "absolute", left: "0%", right: "0%" }}
          >
            <Image src={linesImage} alt={title} layout="fill" />
            <div className="absolute left-[10px] lg:left-[24px] top-5 z-10">
              <Image
                className="lg:h-14 lg:w-14 h-10 w-10"
                src={normalImage}
                alt={title}
              />
            </div>
            <div
              ref={whitetextContainerRef}
              className="absolute lg:bottom-16  left-[10px] lg:left-[24px] bottom-4  text-black z-10"
            >
              <p className="lg:text-[20px] text-sm  font-semibold">{title}</p>
            </div>
          </div>

          <div
            ref={image2Ref}
            className="absolute bg-black top-0 left-0 w-full h-full opacity-0 flex flex-col justify-center items-center"
            style={{ position: "absolute", left: "50%", right: "50%" }}
          >
            <div className="absolute left-6 top-5 z-10">
              <Image
                className="lg:h-14 lg:w-14 h-10 w-10"
                src={hoverImage}
                alt={title}
              />
            </div>

            <div
              ref={textContainerRef}
              className="absolute lg:bottom-10 bottom-2 top-[70px] sm:top-[auto]"
            >
              <div className=" flex flex-col gap-3   px-4 text-white z-10">
                <p className=" lg:text-[20px] text-sm  font-semibold">
                  {title}
                </p>
                <p className="lg:text-[16px] text-[12px]">{description}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Dpi;
