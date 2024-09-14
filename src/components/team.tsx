import { useEffect, useRef, useState } from 'react';
import circledown from "../../public/images/circle_down.png";
import circleUp from "../../public/images/circle-up.png";
import  Image  from 'next/image';

const Team: React.FC = () => {
    const [visibleItems, setVisibleItems] = useState(4); // Initially show 4 items
    const [expanded, setExpanded] = useState(false);
    const aboutUsRef = useRef<HTMLDivElement>(null);

  const data = [
    {
      name: "Pradeep Kumar Sama",
      profile: "Blockchain Developer"
    },
    {
      name: "Satheesh Srinivasan ",
      profile: "Blockchain Developer"
    },
    {
      name: "Aashish Pasricha",
      profile: "Blockchain Developer"
    },
    {
      name: "Kamal Kumar Malkani ",
      profile: "Senior Blockchain Developer"
    },
    {
      name: "Vibhav Sharma",
      profile: "Blockchain Developer - L1"
    },
    {
      name: "Kotha Raghavendra Raja",
      profile: "Security Engineer"
    },
    {
      name: "Vishal Singh",
      profile: "Software Developer"
    },
    {
      name: "Saharsh  Sinha",
      profile: "SDE - Data Science"
    },
    {
      name: "Siddharth Jain ",
      profile: "Blockchain Engineer - L1"
    },
    {
      name: "Abhinav Mishra  ",
      profile: "Senior Golang Developer"
    },
    {
      name: "Gaurav Singh  ",
      profile: "Software Engineer - L3"
    },
    {
      name: "Chirag Garg  ",
      profile: "Software Engineer - L2"
    },
    {
      name: "Tushar Bansal  ",
      profile: "Blockchain Engineer - L2"
    },
    {
      name: "Yalla Abhinay",
      profile: "DevOps Engineer - L1"
    }
]

const handleViewMore = () => {
    if (!expanded) {
      setVisibleItems(data.length); // Show all items
    } else {
      setVisibleItems(4); // Collapse back to 4 items
    }
    setExpanded(!expanded); 
    if (aboutUsRef.current) {
      aboutUsRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }// Toggle expanded state
  };

  return (
    <div>
        <div ref={aboutUsRef}  className='flex flex-col justify-center items-center lg:mt-28 mt-12' >
        <h1 className="lg:text-[32px] text-md font-bold mb-4">Meet the Team</h1>
        <p className='lg:text-[16px] text-sm mb-2 lg:mb-0 text-center' >Introducing the individuals making it happen</p>
        </div >
        <div className='grid grid-cols-4 gap-4'>
        {data.slice(0, visibleItems).map((item:any, index:number) => (
            <div key={index} className='lg:col-span-1 col-span-2 mt-5  flex flex-col gap-1 ' >
            <div className='bg-[#D9D9D9] lg:h-[297px] lg:w-[297px]  h-[166px] w-[163px] ' ></div>
            <p className='lg:text-lg text-sm font-semibold' >{item?.name}</p>
            <p className='lg:text-sm text-xs '>{item?.profile}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-wrap items-center cursor-pointer justify-center mt-14 gap-2'>
        <Image 
          src={expanded ? circleUp : circledown} 
          alt="Toggle Image" 
          className='' 
          onClick={handleViewMore} 
        />
        <p className='text-xl font-semibold' onClick={handleViewMore}>
          {expanded ? "View Less" : "View More"}
        </p>
      </div>
      
      
    </div>
   
  );
}
export default Team;
