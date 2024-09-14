import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import linesImage from '../../public/images/lines.png';
import frame from '../../public/images/Frame.svg';
import frameW from '../../public/images/Group.svg';
import frame2 from '../../public/images/Frame (1).svg';
import frame2W from '../../public/images/Frame (5).svg';
import frame3 from '../../public/images/Frame (2).png';
import frame3W from '../../public/images/Frame (6).png';
import frame4 from '../../public/images/Frame (3).svg';
import frame4W from '../../public/images/Frame (7).png';
import frame5 from '../../public/images/fram.png';
import frame5W from '../../public/images/framW.png';
import frame6 from '../../public/images/circularIcon.png';
import frame6W from '../../public/images/circularW.png';
import frame7 from '../../public/images/Frame (4).png';
import frame7W from '../../public/images/Frame (8).png';

// Array holding all the data for the 8 boxes
const boxData = [
  {
    id: 8,
    normalImage: frame,
    hoverImage: frameW,
    title: "Key Pillars",
    description: "Key pillars of Digital Public Infrastructures"
  },
  {
    id: 1,
    normalImage: frame,
    hoverImage: frameW,
    title: "Decentralized Governance",
    description: "Empowering stakeholders through transparent, community-driven decision-making processes.."
  },
  {
    id: 2,
    normalImage: frame2,
    hoverImage: frame2W,
    title: "Regulatory Compliance",
    description: "Pioneering a 'compliance-first' approach, embedding legal and ethical standards into our technological foundation.."
  },
  {
    id: 3,
    normalImage: frame3,
    hoverImage: frame3W,
    title: "Interoperability",
    description: "Facilitating seamless integration across diverse blockchain networks and traditional systems.."
  },
  {
    id: 4,
    normalImage: frame4,
    hoverImage: frame4W,
    title: "Security and Privacy",
    description: "Implementing state-of-the-art cryptographic protocols and privacy-preserving technologies.."
  },
  {
    id: 5,
    normalImage: frame5,
    hoverImage: frame5W,
    title: "Scalability",
    description: "Developing infrastructure capable of supporting global-scale operations without compromising performance.."
  },
  {
    id: 6,
    normalImage: frame6,
    hoverImage: frame6W,
    title: "Sustainability",
    description: "Promoting environmentally responsible practices in blockchain technology.."
  },
  {
    id: 7,
    normalImage: frame7,
    hoverImage: frame7W,
    title: "Inclusivity",
    description: "Ensuring equitable access to digital infrastructure, regardless of socioeconomic status.."
  },
];

const Dpi: React.FC = () => {
  return (
    <div className="lg:mt-20 mt-12 w-full">
      <div className="lg:flex flex-col gap-3 justify-center lg:px-12 text-center">
        <h1 className="lg:text-[32px] text-md font-bold mb-4">
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
      <div className="grid grid-cols-4 gap-4 py-8">
        {boxData.map((box,index) => (
          <div key={index} className='lg:col-span-1 col-span-2' >
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
  description
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
      y: -30, 
      opacity:0,// Scale down
      duration:0.1,
      ease: 'power2.out',
      onStart: () => console.log('Animation started'),
      onComplete: () => console.log('Animation completed')
    })
      .to(image1, {
        width: 0,
        duration: 1,
        ease: 'power2.inOut',
        left: '50%',
        right: '50%',
        opacity: 0,
      })
      .fromTo(
        image2,
        { width: 0, left: '50%', right: '50%', opacity: 0 },
        {
          width: '100%',
          duration: 1,
          ease: 'power2.inOut',
          left: '0%',
          right: '0%',
          opacity: 1,
        },
        '-=0.5'
      )
      .fromTo(
        textContainer,
        { y: 50, opacity: 0 },  
        { y: 0, opacity: 8, duration: 0.2, ease: 'power.inOut' }, 
        '-=0.3'
      )
      .to(
        whitetextContainer,
        { y: 0, duration: 0.1, ease: 'power2.out' }, // Faster movement and adjusted scale
        '-=0.1'
      );

    const onMouseEnter = () => {
      if (id !== 8) { // Check if the id is not 8
        hoverTimeline.play();
      }
    };
    const onMouseLeave = () => {
      if (id !== 8) { // Check if the id is not 8
        hoverTimeline.reverse();
      }
    };

    // Add hover listeners
    if (imageContainer) {
      imageContainer.addEventListener('mouseenter', onMouseEnter);
      imageContainer.addEventListener('mouseleave', onMouseLeave);
    }

    return () => {
      if (imageContainer) {
        imageContainer.removeEventListener('mouseenter', onMouseEnter);
        imageContainer.removeEventListener('mouseleave', onMouseLeave);
      }
    };
  }, [id]);


  return (
    <div
      ref={imageContainerRef}
      className="relative w-full lg:h-[300px] h-[216px] cursor-pointer overflow-hidden"
    >
      {id === 8 ? <div
        ref={image1Ref}
        className="absolute top-0 left-0 w-full h-full border-[4px] border-black flex flex-col justify-center items-center"
        style={{ position: 'absolute', left: '0%', right: '0%' }}
      >
        <div className="absolute top-4 lg:left-4 left-2 text-black z-10">
          <p className="lg:text-3xl text-xl uppercase font-bold">{title}</p>
        <p className="lg:text-2xl text-md mt-4 lg:mt-5">{description}</p>

        </div>
      </div>
   :  <>
   <div
      ref={image1Ref}
      className="absolute top-0 left-0 w-full h-full border border-black flex flex-col justify-center items-center"
      style={{ position: 'absolute', left: '0%', right: '0%' }}
    >
      <Image src={linesImage} alt={title} layout="fill" objectFit="cover" />
      <div className="absolute lg:left-6 left-2 top-5 z-10">
        <Image className='lg:h-14 lg:w-14 h-10 w-10'  src={normalImage} alt={title} />
      </div>
      <div ref={whitetextContainerRef} className="absolute lg:bottom-16 left-5 bottom-4  text-black z-10">
        <p className="lg:text-[20px] text-sm  font-semibold">{title}</p>
      </div>
    </div>

    <div
      ref={image2Ref}
      className="absolute bg-black top-0 left-0 w-full h-full opacity-0 flex flex-col justify-center items-center"
      style={{ position: 'absolute', left: '50%', right: '50%' }}
    >
      <div className="absolute left-6 top-5 z-10">
        <Image className='lg:h-14 lg:w-14 h-10 w-10'  src={hoverImage} alt={title} />
      </div>
     
     <div ref={textContainerRef} className='absolute lg:bottom-10 bottom-2'>
     <div
        
        className=" flex flex-col gap-3   px-4 text-white z-10"
      >
        <p className=" lg:text-[20px] text-sm  font-semibold">{title}</p>
        <p className="lg:text-[16px] text-[12px]">{description}</p>
      </div>
      </div> 
   </div></> }
    
    </div>
  );
};


export default Dpi;
