import Header from "@/components/Header";
import Image from "next/image";
import blogMAin from "../../public/images/blogDetail.jpg";
import blogMAinMob from "../../public/images/blogDetailMob.jpg";
import arrow from "../../public/images/rightArrow.png";
import gartto1 from "../../public/images/gartto1.jpg";
import gartto2 from "../../public/images/gartto2.jpg";
import gartto3 from "../../public/images/gartto3.jpg";
import blogb1 from "../../public/images/b1.jpg";
import blogb2 from "../../public/images/b2.jpg";
import blogb3 from "../../public/images/b3.jpg";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";


export default function Blogs() {
    const [currentPage, setCurrentPage] = useState(1);
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        setIsDesktop(window.innerWidth > 640);
    }, []);
 
    return (
        <>
            <div>
                <Header />
                <div className="lg:px-10 px-4 " >
                    <div className="" >
                      
                        <div className="lg:mt-12 mt-6 ">
                          
                            <div className="lg:grid grid-cols-3 gap-3 " >
                                <div className="lg:col-span-2 col-span-3 lg:mr-5" >
                                <p className="lg:text-[32px] text-lg font-semibold">Grid system for better Design User Interface</p>
                                    <div className="mt-7 lg:mr-3" >
                                        <Image
                                            src={isDesktop ? blogMAin : blogMAinMob}
                                            alt="kalp Logo"
                                            className=""
                                        />
                                        <p className="lg:text-sm text-xs text-[#45525F] mt-4 font-semibold">
                                        Sunday , 1 Jan 2023
                                        </p>
                                        <p className="lg:mt-4 mt-3 lg:text-[15px] text-[12px]">
                                        A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.                                        
                                        </p>
                                        <p className="lg:mt-4 mt-3 lg:text-[15px] text-[12px]">
                                        If you’ve been to New York City and have walked the streets, it is easy to figure out how to get from one place to another because of the grid system that the city is built on. Just as the predictability of a city grid helps locals and tourists get around easily, so do webpage grids provide a structure that guides users and designers alike. Because of their consistent reference point, grids improve page readability and scannability and allow people to quickly get where they need to go.
                                        </p>
                                       
                                    </div>
                                    <div className=" mt-6 lg:pr-5" >
                                        <p className="lg:text-sm lg:pr-64 text-center text-xs text-[#45525F] font-semibold">Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.</p>
                                      <div className="" >
                                      <Image
                                            src={isDesktop ? gartto1 : gartto1}
                                            alt="kalp Logo"
                                            className="mt-6"
                                        />
                                        <p className="lg:text-sm lg:px-32 mt-4 text-center text-xs text-[#45525F] font-semibold">Definition: A grid is made up of columns, gutters, and margins that provide a structure for the layout of elements on a page.</p>
                                        <p className="lg:mt-4 mt-3 lg:text-[15px] text-[12px]">
                                        There are three common grid types used in websites and interfaces: column grid, modular grid, and hierarchical grid.
                                        </p>
                                        <p className="lg:text-sm mt-4 text-sm text-[#45525F] font-semibold">Breaking Down the Grid</p>
                                        <p className="lg:mt-4 mt-3 lg:text-[15px] text-[12px]">
                                        Regardless of the type of grid you are using, the grid is made up of three elements: columns, gutters, and margins.
                                        </p>
                                        <p className="lg:mt-4 mt-3 lg:text-[15px] text-[12px]">
                                        <span className="font-bold" >Columns:</span>Columns take up most of the real estate in a grid. Elements and content are placed in columns. To adapt to any screen size, column widths are generally defined with percentages rather than fixed values and the number of columns will vary. For example, a grid on a mobile device might have 4 columns and a grid on a desktop might have 12 columns.
                                        </p>
                                        <p className="lg:mt-4 mt-3 lg:text-[15px] text-[12px]">
                                        <span className="font-bold" >Gutters:</span>Gutters: The gutter is the space between columns that separates elements and content from different columns. Gutter widths are fixed values but can change based on different breakpoints. For example, wider gutters are appropriate for larger screens, whereas smaller gutters are appropriate for smaller screens like mobile.
                                        </p>
                                        <p className="text-sm mt-4 text-[#45525F] font-semibold">Examples of Grids in Use</p>
                                        <p className="text-sm mt-4 text-[#45525F] ">Example 1: Hierarchical Grid</p>
                                        <p className="lg:mt-4 mt-3 lg:text-[15px] text-[12px]">
                                        Our first example is from The New York Times. This screen utilizes a hierarchical grid to create a newspaper-like reading experience. At desktop screen size, two main columns make up the hierarchical grid. The most important news story takes up the most space in the grid, the left column, followed by secondary and tertiary stories, which take up the smaller column and modules on the right.
                                        </p>
                                        <Image
                                            src={isDesktop ? gartto2 : gartto2}
                                            alt="kalp Logo"
                                            className="mt-6"
                                        />
                                        <p className="lg:px-28 mt-4 text-center lg:text-[16px] text-[12px] ">The New York Times uses a hierarchical grid to achieve its newspaper-like reading experience. (We highlighted the columns in yellow, the gutters in blue, and the margins in purple.)</p>
                                        <p className="lg:text-sm mt-4 text-sm text-[#45525F] font-semibold">Breaking Down the Grid</p>
                                        <p className="lg:mt-4 mt-3 lg:text-[15px] text-[12px]">
                                        Using a grid benefits both end users and the designers alike: </p>
                                        <ul className="list-disc text-start mt-4 px-6">
                        <li className="">
                            Designers can quickly put together well-aligned interfaces.
                        </li>
                        <li className="">
                            Users can easily scan predictable grid-based interfaces.
                        </li>
                        <li className="">
                            A good grid is easy to adapt to various screen sizes and orientations. In fact, grid layouts are an essential component of responsive web design. Responsive design uses breakpoints to determine the screen size threshold at which the layout should change. For example, a desktop screen may have 12 grid columns, which may be stacked on mobile so that the resulting layout has only 4 columns.
                        </li>
                        </ul>
                        <Image
                                            src={isDesktop ? gartto3 : gartto3}
                                            alt="kalp Logo"
                                            className="mt-6"
                                        />
                                        <p className="lg:px-28 mt-4 text-center lg:text-[16px] text-[12px] ">At the mobile size, Behance’s one-column grid (left) was reflowed into a four-column grid structure (right).</p>
                                        <p className="lg:text-sm mt-4 text-sm text-[#45525F] font-semibold">Conclusion</p>
                                        <p className="lg:mt-4 mt-3 lg:text-[15px] text-[12px]">
                                        Grids not only provide designers a structure on which to base layouts, but they also improve readability and scannability for end users. Use a good grid system that easily adapts to various screen sizes.</p>
                                        </div>  
                                     
                                    </div>
                                </div>
                                <div className="lg:col-span-1 col-span-3  " >
                            <p className="lg:text-2xl text-lg font-semibold mt-5 lg:mt-0">Recent blog posts</p>

                                    <div className="mt-6 gap-5" >
                                        <Image
                                            src={isDesktop ? blogb1 : blogb1}
                                            alt="kalp Logo"
                                            className=""
                                        />
                                        <div>
                                            <p className="lg:text-[18px] text-lg mt-4 font-semibold">
                                            KALP Foundation: Pioneering a Decentralized Digital Public Infrastructure
                                            </p>
                                            <p className="mt-3 lg:text-[15px] text-[12px] ">
                                            Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...
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
                                    </div>
                                    <div className="mt-8 gap-5" >
                                        <Image
                                            src={isDesktop ? blogb2 : blogb2}
                                            alt="kalp Logo"
                                            className=""
                                        />
                                        <div>
                                            <p className="lg:text-[18px] text-lg mt-4 font-semibold">
                                            Chain Reactions: Navigating India’s
                                            Progress with Blockchain Technology
                                            </p>
                                            <p className="mt-3 lg:text-[15px] text-[12px] ">
                                            Abstract the origin of Bitcoin was expected to
                                            introduce a new currency in the market - popularly...
                                            </p>
                                            <div className="flex items-center gap-1 mt-4 group">
                                                <Image
                                                    src={arrow}
                                                    alt="Arrow Icon"
                                                    className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                                />
                                                <p className="lg:text-2xl text-xl underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2">
                                                    Read More
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="mt-8 gap-5" >
                                        <Image
                                            src={isDesktop ? blogb3 : blogb3}
                                            alt="kalp Logo"
                                            className=""
                                        />
                                        <div>
                                            <p className="lg:text-[18px] text-lg mt-4 font-semibold">
                                            Embracing the Blockchain Beast to Tame
                                            the AI Tiger
                                            </p>
                                            <p className="mt-3 lg:text-[15px] text-[12px] ">
                                            Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...
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
                                    </div>
                                    <div className="mt-6 gap-5" >
                                        <Image
                                            src={isDesktop ? blogb1 : blogb1}
                                            alt="kalp Logo"
                                            className=""
                                        />
                                        <div>
                                            <p className="lg:text-[18px] text-lg mt-4 font-semibold">
                                            KALP Foundation: Pioneering a Decentralized Digital Public Infrastructure
                                            </p>
                                            <p className="mt-3 lg:text-[15px] text-[12px] ">
                                            Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...
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
                                    </div>
                                    <div className="mt-8 gap-5" >
                                        <Image
                                            src={isDesktop ? blogb2 : blogb2}
                                            alt="kalp Logo"
                                            className=""
                                        />
                                        <div>
                                            <p className="lg:text-[18px] text-lg mt-4 font-semibold">
                                            KALP Foundation: Pioneering a Decentralized Digital Public Infrastructure
                                            </p>
                                            <p className="mt-3 lg:text-[15px] text-[12px] ">
                                            Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...
                                            </p>
                                            <div className="flex items-center gap-1 mt-4 group">
                                                <Image
                                                    src={arrow}
                                                    alt="Arrow Icon"
                                                    className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                                />
                                                <p className="lg:text-2xl text-xl underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2">
                                                    Read More
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="mt-6 gap-5" >
                                        <Image
                                            src={isDesktop ? blogb1 : blogb1}
                                            alt="kalp Logo"
                                            className=""
                                        />
                                        <div>
                                            <p className="lg:text-[18px] text-lg mt-4 font-semibold">
                                            KALP Foundation: Pioneering a Decentralized Digital Public Infrastructure
                                            </p>
                                            <p className="mt-3 lg:text-[15px] text-[12px] ">
                                            Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...
                                            </p>
                                            <div className="flex items-center gap-1 mt-4 group">
                                                <Image
                                                    src={arrow}
                                                    alt="Arrow Icon"
                                                    className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                                />
                                                <p className="lg:text-2xl text-xl underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2">
                                                    Read More
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="mt-8 gap-5" >
                                        <Image
                                            src={isDesktop ? blogb2 : blogb2}
                                            alt="kalp Logo"
                                            className=""
                                        />
                                        <div>
                                            <p className="lg:text-[18px] text-lg mt-4 font-semibold">
                                            KALP Foundation: Pioneering a Decentralized Digital Public Infrastructure
                                            </p>
                                            <p className="mt-3 lg:text-[15px] text-[12px] ">
                                            Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...
                                            </p>
                                            <div className="flex items-center gap-1 mt-4 group">
                                                <Image
                                                    src={arrow}
                                                    alt="Arrow Icon"
                                                    className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                                                />
                                                <p className="lg:text-2xl text-xl underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2">
                                                    Read More
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                 
                                    
                                </div>
                            </div>


                        </div>
                    </div>
                   
                  
                    <Faq />
                </div>

                <Footer />
            </div>
        </>
    );
}
