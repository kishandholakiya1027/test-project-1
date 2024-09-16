import { useEffect, useState } from "react";
import vision from "../../public/images/vision2.jpg";
import visionOld from "../../public/images/oldVision.jpg";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

export default function Vision() {
  const [transitioned, setTransitioned] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

  useEffect(() => {
    if(inView && isDesktop){
      setTransitioned(true)
    }else{
      setTransitioned(false)
    }
  }, [inView])
  const handleMouseEnter = () => {
    if (!transitioned) {
      setTransitioned(true);
    }
  };

  return (
    <div ref={ref} className="lg:relative w-full my-12 xl:my-[120px] md:my-[80px] flex items-center justify-center overflow-hidden">
      {isDesktop ? (
        <div
          // onMouseEnter={handleMouseEnter}
          className="flex min-h-[417px] justify-between items-center w-full"
        >
          <div
            className={`max-w-[48%] absolute z-10 duration-[1500ms] overflow-hidden ${
              transitioned ? "left-0" : "left-2/4 -translate-x-2/4"
            } `}
          >
            <Image
              src={transitioned ? vision : visionOld}
              alt="New"
              className={`${transitioned ? "w-full" : "w-[418px] grayscale-0"} transition-all duration-[500ms] ease-in-out ml-4 lg:ml-0 grp  min-h-[417px] object-cover`}
            />
          </div>
          <div
            className={`w-[48%] absolute z-10 duration-[1500ms] ${
              transitioned ? "left-2/4" : "left-2/4 -translate-x-2/4"
            } `}
          >
            <div
              className={`flex flex-col justify-center ${
                transitioned ? "" : "hidden"
              }`}
            >
              <p className="text-3xl font-bold">Our Vision</p>
              <p className="text-md mt-10">
                We envision a world where decentralized technology democratizes
                digital access, empowering everyone to participate in a fair,
                transparent global economy. With our compliance-first approach,
                we set the standard for responsible blockchain, enhancing trust,
                reducing inequality, and driving positive change.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="">
          {/* Text behind the image */}
          <Image
            src={transitioned ? vision : visionOld}
            alt="New"
            className={`lg:absolute inset-0 z-10 w-full h-full object-cover transition-transform duration-[1500ms] ${
              transitioned ? "translate-x-[-65%]" : "w-[418px] translate-x-0"
            }`}
          />
          <div
            className={`lg:absolute lg:inset-0 flex z-0 items-center justify-center transition-transform duration-[1500ms] ${
              transitioned ? "translate-x-[56%]" : "translate-x-0"
            }`}
          >
            <div className="flex flex-col justify-center mt-4 ">
              <p className="lg:text-3xl text-md font-bold">Our Vision</p>
              <p className="lg:text-md text-xs  lg:mt-10 mt-4">
                We envision a world where decentralized technology democratizes
                digital access, empowering everyone to participate in a fair,
                transparent global economy. With our compliance-first approach,
                we set the standard for responsible blockchain, enhancing trust,
                reducing inequality, and driving positive change.
              </p>
            </div>
          </div>

          {/* Image in front of the text */}
        </div>
      )}
    </div>
  );
}
