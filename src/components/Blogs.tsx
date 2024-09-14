import { useEffect, useState } from 'react';
import arrow from "../../public/images/rightArrow.png";
import Image from 'next/image';
import blogb1 from "../../public/images/b1.jpg";
import blogb2 from "../../public/images/b2.jpg";
import blogb3 from "../../public/images/b3.jpg";
import cblogb1 from "../../public/images/1.png";
import cblogb2 from "../../public/images/2.png";
import cblogb3 from "../../public/images/3.png";
import { useRouter } from 'next/router';

const Blogs: React.FC = () => {
    const [isDesktop, setIsDesktop] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Hover state

    useEffect(() => {
        setIsDesktop(window.innerWidth > 640);
    }, []);
    const router = useRouter();
    let data = [{
        title: "KALP Foundation: Pioneering a Decentralized Digital Public Infrastructure",
        hoveredimage: blogb1,
        image: cblogb1,
        description: "Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...",
    },
    {
        title: "Chain Reactions: Navigating India’s Progress with Blockchain Technology",
        hoveredimage: blogb2,
        image: cblogb2,
        description: "Abstract the origin of Bitcoin was expected to introduce a new currency in the market - popularly...",
    },
    {
        title: "Embracing the Blockchain Beast to Tame the AI Tiger",
        hoveredimage: blogb3,
        image: cblogb3,
        description: "Abstract the origin of Bitcoin was expected to introduce a new currency in the market - popularly...",
    },
    ]
    return (
        <div className='lg:mt-[120px] mt-24'>
            <div className='flex flex-col justify-center items-center' >
                <h1 className="lg:text-[32px] text-md font-bold mb-4">Blogs</h1>
                <div className={`w-full items-center relative`}>
                    <p className='text-[16px] text-center'>Dive into the Insights</p>
                    <p className='lg:text-[20px] hidden md:block absolute right-0 top-0 text-md underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2 mr-3' onClick={() => router.push('/blogs')} >View More</p>
                </div>
                <div className="grid grid-cols-3 gap-5 mt-[40px]" >
                    {data?.map((item: any, index: number) => (
<div onMouseEnter={() => setHoveredIndex(index)}
                             onMouseLeave={() => setHoveredIndex(null)} 
                             key={index} className="lg:col-span-1 col-span-3 md:mb-[40px]">
                                <div className='h-[317px]'>
                        <Image src={item?.image} alt="kalp Logo" className="w-full h-full" />
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
                        onClick={() => router.push("/blogs")}
                      >
                        Read More
                      </p>
                    </div>
                  </div>
                </div>
                        
                    ))}
                </div>
                <p className='text-xl mt-[32px]  underline decoration-1 cursor-pointer text-center lg:hidden font-semibold transition-transform duration-300 group-hover:translate-x-2' onClick={() => router.push('/blogs')}>View More</p>
            </div >
        </div>
    );
}
export default Blogs;
