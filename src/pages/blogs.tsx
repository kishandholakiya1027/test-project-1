import Header from "@/components/Header";
import Image from "next/image";
import blogMAin from "../../public/images/blog1.jpg";
import blog1 from "../../public/images/blog2.jpg";
import arrow from "../../public/images/rightArrow.png";
import blog2 from "../../public/images/blog3.jpg";
import blog3 from "../../public/images/blog4.jpg";
import blogb1 from "../../public/images/b1.jpg";
import blogb2 from "../../public/images/b2.jpg";
import blogb3 from "../../public/images/b3.jpg";
import blogMainMob from "../../public/images/blogMobile.jpg";
import blogMainMob2 from "../../public/images/blogMobile2.jpg";
import blogMainMob3 from "../../public/images/blogMobile3.jpg";
import blogMainMob4 from "../../public/images/blogMobile4.jpg";
import arrowLeft from "../../public/images/arrow-left.png";
import arrowRight from "../../public/images/arrow-right.png";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import { useRouter } from "next/router";


export default function Blogs() {
    const router = useRouter()
    const [currentPage, setCurrentPage] = useState(1);
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        setIsDesktop(window.innerWidth > 640);
    }, []);
    const totalPages = 10; // Total number of pages

    const handlePrevious = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const renderPageNumbers = () => {
        const pages = [];
    
        // Always show the first 3 pages (1, 2, 3)
        for (let i = 1; i <= 3; i++) {
          pages.push(i);
        }
    
        // Show dots if currentPage > 4 and currentPage < totalPages - 3
        if (currentPage > 4 && currentPage < totalPages - 3) {
          pages.push("...");
          pages.push(currentPage - 1); // Show page before current
          pages.push(currentPage); // Show current page
          pages.push(currentPage + 1); // Show page after current
          pages.push("...");
        } else if (currentPage <= 4) {
          pages.push("...");
        }
    
        // Always show the last 3 pages (8, 9, 10)
        for (let i = totalPages - 2; i <= totalPages; i++) {
          pages.push(i);
        }
    
        return pages;
      };
    

    let data = [{
        title: "KALP Foundation: Pioneering a Decentralized Digital Public Infrastructure",
        image: blogb1,
        description: "Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...",
    },
    {
        title: "Chain Reactions: Navigating India’s Progress with Blockchain Technology",
        image: blogb2,
        description: "Abstract the origin of Bitcoin was expected to introduce a new currency in the market - popularly...",
    },
    {
        title: "Embracing the Blockchain Beast to Tame the AI Tiger",
        image: blogb3,
        description: "Abstract the origin of Bitcoin was expected to introduce a new currency in the market - popularly...",
    }, {
        title: "KALP Foundation: Pioneering a Decentralized Digital Public Infrastructure",
        image: blogb1,
        description: "Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...",
    },
    {
        title: "Chain Reactions: Navigating India’s Progress with Blockchain Technology",
        image: blogb2,
        description: "Abstract the origin of Bitcoin was expected to introduce a new currency in the market - popularly...",
    },
    {
        title: "Embracing the Blockchain Beast to Tame the AI Tiger",
        image: blogb3,
        description: "Abstract the origin of Bitcoin was expected to introduce a new currency in the market - popularly...",
    }]
    return (
        <>
            <div>
                <Header />
                <div className="lg:px-10 px-4 " >
                    <div className="lg:px-12" >
                        <p className="lg:text-[56px] text-2xl font-semibold mt-7">Resources and Insights
                        </p>
                        <p className="lg:text-lg text-sm lg:pr-[20rem] mt-4">We are licensed and regulated by leading international governing bodies, allowing you to trade knowing your financial security is protected.
                        </p>
                        <div className="lg:mt-20 mt-6 lg:px-4">
                            <p className="lg:text-2xl text-lg font-semibold">Recent blog posts</p>
                            <div className="lg:grid grid-cols-2 " >
                                <div className="lg:col-span-1 col-span-2 lg:mr-5" >
                                    <div className="mt-7" >
                                        <Image
                                            src={isDesktop ? blogMAin : blogMainMob}
                                            alt="kalp Logo"
                                            className=""
                                        />
                                        <p className="lg:text-xl text-lg mt-4 font-semibold">
                                            UX review presentations
                                        </p>
                                        <p className="lg:mt-4 mt-3 lg:text-[15px] text-[12px]">
                                            How do you create compelling presentations that wow your colleagues and impress your managers?
                                        </p>
                                        <div className="flex items-center gap-1 mt-4 group">
                                                <Image
                                                    src={arrow}
                                                    alt="Arrow Icon"
                                                    className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                                />
                                                <p className="lg:text-2xl text-xl underline decoration-1 decoration-1 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2">
                                                    Read More
                                                </p>
                                            </div>
                                    </div>
                                    <div className="lg:mt-24 mt-8" >
                                        <Image
                                            src={isDesktop ? blog3 : blogMainMob2}
                                            alt="kalp Logo"
                                            className=""
                                        />
                                        <div className="lg:hidden" >
                                            <p className=" text-md mt-4 font-semibold">
                                                Grid system for better Design User Interface
                                            </p>
                                            <p className="mt-4 text-[12px]">
                                                A grid system is a design tool used to arrange content on a webpage...</p>
                                                <div className="flex items-center gap-1 mt-4 group">
                                                <Image
                                                    src={arrow}
                                                    alt="Arrow Icon"
                                                    className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                                />
                                                <p className="lg:text-2xl text-xl underline decoration-1 decoration-1 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2">
                                                    Read More
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:col-span-1 col-span-2 mt-7 " >
                                    <div className="lg:flex flex--wrap gap-5" >
                                        <Image
                                            src={isDesktop ? blog1 : blogMainMob4}
                                            alt="kalp Logo"
                                            className=""
                                        />
                                        <div>
                                            <p className="lg:text-xl text-lg mt-4 font-semibold">
                                                Migrating to Linear 101
                                            </p>
                                            <p className="mt-3 lg:text-[15px] text-[12px] ">
                                                Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...
                                            </p>
                                            <div className="flex items-center gap-1 mt-4 group">
                                                <Image
                                                    src={arrow}
                                                    alt="Arrow Icon"
                                                    className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                                />
                                                <p className="text-2xl underline cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2">
                                                    Read More
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="lg:flex flex--wrap gap-5 mt-6" >
                                        <Image
                                            src={isDesktop ? blog2 : blogMainMob3}
                                            alt="kalp Logo"
                                            className=""
                                        />
                                        <div>
                                            <p className="lg:text-xl text-lg  mt-4 font-semibold">
                                                Building your API Stack
                                            </p>
                                            <p className="mt-3 lg:text-[15px] text-[12px]  ">
                                                The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag... </p>
                                            <div className="flex items-center gap-1 mt-4 group">
                                                <Image
                                                    src={arrow}
                                                    alt="Arrow Icon"
                                                    className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                                />
                                                <p className="text-2xl underline cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2" onClick={() => router.push('/blogDetail')}>
                                                    Read More
                                                </p>
                                            </div>

                                        </div>

                                    </div>
                                    <div className="mt-16 hidden lg:inline-block " >
                                        <p className="text-xl mt-4 font-semibold">
                                            Grid system for better Design User Interface
                                        </p>
                                        <p className="mt-4 text-[15px]">
                                            A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.                                        </p>
                                            <div className="flex items-center gap-1 mt-4 group">
                                                <Image
                                                    src={arrow}
                                                    alt="Arrow Icon"
                                                    className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                                />
                                                <p className="lg:text-2xl text-xl underline decoration-1 decoration-1 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2">
                                                    Read More
                                                </p>
                                            </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="mt-12" >
                        <p className="lg:text-2xl text-lg  font-semibold">All blog posts</p>
                        <div className="grid grid-cols-3 gap-4 " >
                            {data?.map((item: any,index:number) => (
                                <div key={index} className="lg:col-span-1 col-span-3 mt-6" >
                                    <div className="lg:w-[390px] w-[344px]" >
                                        <Image src={item?.image} alt="kalp Logo" className="" />

                                    </div>
                                    <div>
                                        <p className="lg:text-[19px] text-md mt-4 font-semibold">
                                            {item?.title}
                                        </p>
                                        <p className="mt-3 lg:text-sm text-[12px] ">
                                            {item?.description}  </p>
                                        <div className="flex items-center gap-1 mt-4 group">
                                            <Image
                                                src={arrow}
                                                alt="Arrow Icon"
                                                className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                            />
                                            <p className="lg:text-2xl text-xl underline cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2" onClick={() => router.push('/blogDetail')}>
                                                Read More
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mt-12">
                        <div className="flex items-center justify-between py-4 border-y border-gray-200">
                            {/* Previous Button */}
                            <button
                                onClick={handlePrevious}
                                className="flex items-center text-gray-900 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={currentPage === 1}
                            >
                                <Image src={arrowLeft} alt="Previous" className="h-5 w-5" />
                                {/* <span className="ml-2 text-sm font-semibold block sm:hidden">Previous</span> Visible on mobile */}
                                <span className="hidden sm:block ml-2 text-sm font-semibold">Previous</span> {/* Visible on desktop */}
                            </button>

                            {/* Pagination for Mobile */}
                            <div className="flex items-center text-sm mx-6 space-x-2 sm:hidden">
                                <button
                                    onClick={() => setCurrentPage(1)}
                                    className={`px-3 py-1 rounded-lg transition-colors ${currentPage === 1 ? "bg-black text-white" : "text-gray-500 hover:text-black"
                                        }`}
                                >
                                    1
                                </button>
                                {currentPage > 2 && <span className="px-2 py-1 text-gray-500">...</span>}
                                {currentPage !== 1 && currentPage !== totalPages && (
                                    <button className="px-4 py-2 rounded-lg bg-black text-white">{currentPage}</button>
                                )}
                                {currentPage < totalPages - 1 && <span className="px-2 py-1 text-gray-500">...</span>}
                                <button
                                    onClick={() => setCurrentPage(totalPages)}
                                    className={`px-3 py-1 rounded-lg transition-colors ${currentPage === totalPages ? "bg-black text-white" : "text-gray-500 hover:text-black"
                                        }`}
                                >
                                    {totalPages}
                                </button>
                            </div>

                            {/* Pagination for Desktop */}
                            <div className="hidden sm:flex items-center text-sm mx-6 space-x-2">
                                {renderPageNumbers().map((page: any, index: number) =>
                                    page === "..." ? (
                                        <span key={index} className="px-2 py-1 text-gray-500">
                                            ...
                                        </span>
                                    ) : (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-4 py-2 rounded-lg transition-colors ${currentPage === page
                                                ? "bg-black text-white"
                                                : "text-gray-500 hover:text-black"
                                                }`}
                                        >
                                            {page}
                                        </button>
                                    )
                                )}
                            </div>

                            {/* Next Button */}
                            <button
                                onClick={handleNext}
                                className="flex items-center text-gray-500 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={currentPage === totalPages}
                            >
                                {/* <span className="block sm:hidden mr-2 text-sm font-semibold">Next</span> Visible on mobile */}
                                <span className="hidden sm:block mr-2 text-sm font-semibold">Next</span> {/* Visible on desktop */}
                                <Image src={arrowRight} alt="Next" className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                    <Faq />
                </div>

                <Footer />
            </div>
        </>
    );
}
