import React, { useEffect, useState } from "react";
import closeImage from "../../public/images/do_not_disturb_on.png";
import openImage from "../../public/images/add_circle.png";
import Image from "next/image";

function Accordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.innerWidth > 640);
  }, []);

 
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 640);
    
    handleResize(); // Check initial screen size
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleAccordion = (index: number) => {
    if (index === activeIndex) return; // Prevent re-opening the already open section

    // Automatically open the next section
    setActiveIndex(index);
  };

  const handleCheck =() => {
    if (activeIndex !== null) {
      // Automatically open the next section when the current one is closed
      const nextIndex = (activeIndex + 1) % 3;
      
        setActiveIndex(nextIndex);
// Clean up timer on component unmount or before setting a new timer
    }
  };


  return (
   <>{isDesktop  ?
    <div className={`text-white mx-6`}>
      {/* Key Components */}
      <div
    className={`absolute left-0 ml-1 lg:bottom-[80px] bottom-[53px] lg:w-[32%] w-[70%] py-4 transition-all duration-1000 ease-in-out backdrop-blur-sm ${activeIndex === 0 ? "bg-black/70" : "bg-black/50"}`}
    style={{ height: activeIndex === 0 ? "auto" : "69px" }}
  >
        <button
          className="w-full text-left px-4 lg:text-2xl lg:font-bold font-semibold flex justify-between gap-10 items-center"
          onClick={() => toggleAccordion(0)}
        >
          Key Components
          <span>
            {activeIndex === 0 ? (
              <div onClick={handleCheck} >
              <Image src={closeImage} alt={"do not disturb"} />

              </div>
            ) : (
              <Image src={openImage} alt={"add circle"} />
            )}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-1000 ease-in-out ${activeIndex === 0 ? "max-h-96" : "max-h-0"}`}
        >
          <div className="flex flex-wrap gap-16 mb-4 mt-10 px-4">
            <div className="flex lg:text-md text-sm flex-col gap-5">
              <p>Kalp Compiler</p>
              <p>Kalp Conjurer</p>
              <p>Kalp Insight</p>
            </div>
            <div className="flex flex-col gap-5">
              <p>Kalp Wallet</p>
              <p>Kalp Explorer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div
    className={`absolute lg:bottom-[80px] bottom-[53px] py-4 lg:w-[32%] w-[70%] lg:left-[34%] left-[40%] transition-all duration-1000 ease-in-out backdrop-blur-sm ${activeIndex === 1 ? "bg-black/70" : "bg-black/50"}`}
    style={{ height: activeIndex === 1 ? "auto" : "69px" }}
  >
        <button
          className="w-full text-left lg:text-2xl lg:font-bold font-semibold px-4 flex justify-between items-center"
          onClick={() => toggleAccordion(1)}
        >
          Benefits
          <span>
            {activeIndex === 1 ? (
              <div onClick={handleCheck} >
              <Image src={closeImage} alt={"do not disturb"} />

              </div>
            ) : (
              <Image src={openImage} alt={"add circle"} />
            )}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-1000 ease-in-out  ${activeIndex === 1 ? "max-h-96" : "max-h-0"}`}
        >
          <div className="flex flex-wrap lg:gap-20 gap-6 mb-4 mt-10 px-4">
            <div className="flex lg:text-md text-sm flex-col gap-5">
              <p>Regulatory Compliance</p>
              <p>Scalability</p>
              <p>Interoperability</p>
            </div>
            <div className="flex flex-col gap-5">
              <p>Security</p>
              <p>Inclusivity</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technology */}
      <div
    className={`absolute lg:bottom-[80px] bottom-[53px] py-4 lg:w-[32%] w-[70%] lg:left-[68%] left-[70%] transition-all duration-1000 ease-in-out backdrop-blur-sm ${activeIndex === 2 ? "bg-black/70" : "bg-black/50"}`}
    style={{ height: activeIndex === 2 ? "auto" : "69px" }}
  >
        <button
          className="w-full text-left lg:text-2xl lg:font-bold font-semibold px-4 flex justify-between items-center"
          onClick={() => toggleAccordion(2)}
        >
          Technology
          <span>
            {activeIndex === 2 ? (
               <div onClick={handleCheck} >
               <Image src={closeImage} alt={"do not disturb"} />
 
               </div>
            ) : (
              <Image src={openImage} alt={"add circle"} />
            )}
          </span>
        </button>
        <div
          className={`overflow-hidden transition-all duration-1000 ease-in-out ${activeIndex === 2 ? "max-h-96" : "max-h-0"}`}
        >
          <div className="flex flex-wrap gap-20 mb-4 mt-10 px-4">
            <div className="flex lg:text-md text-sm flex-col gap-5">
              <p>Modular Architecture</p>
              <p>Smart Contract Capabilities</p>
              <p>Cross-Chain Interoperability</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    :
   
    <div className={` text-white mx-6`}>
    <div
      className={`absolute left-0 ml-1 lg:bottom-[80px] bottom-[53px] lg:w-[410px] w-[315px] py-4 transition-all duration-1000 ease-in-out backdrop-blur-sm ${activeIndex === 0 ? "bg-black/70" : "bg-black/50"
        }`}
      style={{ height: activeIndex === 0 ? "auto" : "69px" }} // Dynamically adjust height
    >
      <button
        className="w-full text-left px-4 lg:text-2xl lg:font-bold font-semibold flex justify-between gap-10 items-center"
        onClick={() => toggleAccordion(0)}
      >
        Key Components
        <span>
          {activeIndex === 0 ? (
            <Image src={closeImage} alt={"do not disturb"} />
          ) : (
            <Image src={openImage} alt={"add circle"} />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${activeIndex === 0 ? "max-h-96" : "max-h-0"
          }`}
      >
        <div className="flex flex-wrap gap-16 mb-4 mt-10 px-4">
          <div className="flex lg:text-md text-sm flex-col gap-5">
            <p>Kalp Compiler</p>
            <p>Kalp Conjurer</p>
            <p>Kalp Insight</p>
          </div>
          <div className="flex flex-col gap-5">
            <p>Kalp Wallet</p>
            <p>Kalp Explorer</p>
          </div>
        </div>
      </div>
    </div>

    {/* Benefits */}
    <div
      className={` absolute lg:bottom-[80px] bottom-[53px] py-4 lg:w-[410px] w-[315px] lg:left-[429px] left-[325px] transition-all duration-1000 ease-in-out backdrop-blur-sm ${activeIndex === 1 ? "bg-black/70" : "bg-black/50"
        }`}
      style={{ height: activeIndex === 1 ? "auto" : "69px" }} // Dynamically adjust height
    >
      <button
        className="w-full text-left lg:text-2xl lg:font-bold font-semibold px-4 flex justify-between items-center"
        onClick={() => toggleAccordion(1)}
      >
        Benefits
        <span>
          {activeIndex === 1 ? (
            <Image src={closeImage} alt={"do not disturb"} />
          ) : (
            <Image src={openImage} alt={"add circle"} />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${activeIndex === 1 ? "max-h-96" : "max-h-0"
          }`}
      >
        <div className="flex flex-wrap lg:gap-20 gap-6 mb-4 mt-10 px-4">
          <div className="flex lg:text-md text-sm flex-col gap-5">
            <p>Regulatory Compliance</p>
            <p>Scalability</p>
            <p>Interoperability</p>
          </div>
          <div className="flex flex-col gap-5">
            <p>Security</p>
            <p>Inclusivity</p>
          </div>
        </div>
      </div>
    </div>

    {/* Technology */}
    <div
      className={` absolute ${isDesktop ? 'right-0 ' : 'left-[41rem] '} lg:w-[410px] w-[315px] lg:bottom-[80px] bottom-[53px] py-4 transition-all duration-1000 ease-in-out backdrop-blur-sm ${activeIndex === 2 ? "bg-black/70" : "bg-black/50"
        }`}
      style={{ height: activeIndex === 2 ? "auto" : "69px" }} // Dynamically adjust height
    >
      <button
        className="w-full text-left lg:text-2xl lg:font-bold font-semibold px-4 flex justify-between items-center"
        onClick={() => toggleAccordion(2)}
      >
        Technology
        <span>
          {activeIndex === 2 ? (
            <Image src={closeImage} alt={"do not disturb"} />
          ) : (
            <Image src={openImage} alt={"add circle"} />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-1000 ease-in-out ${activeIndex === 2 ? "max-h-96" : "max-h-0"
          }`}
      >
        <div className="flex flex-wrap gap-20 mb-4 mt-10 px-4">
          <div className="flex lg:text-md text-sm flex-col gap-5">
            <p>Modular Architecture</p>
            <p>Smart Contract Capabilities</p>
            <p>Cross-Chain Interoperability</p>
          </div>
        </div>
      </div>
    </div>
  </div>}
   
   </>
   


  );
}

export default Accordion;
