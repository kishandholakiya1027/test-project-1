import Header from "@/components/Header";
import Image from "next/image";
import blogMAin from "../../public/images/blog1.jpg";
import blog1 from "../../public/images/blog2.jpg";
import arrow from "../../public/images/east-2.svg";
import blog2 from "../../public/images/blog3.jpg";
import blog3 from "../../public/images/blog4.jpg";
import blogb1 from "../../public/images/b1.jpg";
import blogb2 from "../../public/images/b2.jpg";
import blogb3 from "../../public/images/b3.jpg";
import blogMainMob from "../../public/images/blogMobile.jpg";
import blogMainMob2 from "../../public/images/blogMobile2.jpg";
import blogMainMob3 from "../../public/images/blogMobile3.jpg";
import blogMainMob4 from "../../public/images/blogMobile4.jpg";
import arrowLeft from "../../public/images/arrow-left.svg";
import arrowRight from "../../public/images/arrow-right.svg";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Faq from "@/components/Faq";
import { useRouter } from "next/router";

export default function Blogs() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
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

  let data = [
    {
      title:
        "KALP Foundation: Pioneering a Decentralized Digital Public Infrastructure",
      image: blogb1,
      description:
        "Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...",
    },
    {
      title:
        "Chain Reactions: Navigating India’s Progress with Blockchain Technology",
      image: blogb2,
      description:
        "Abstract the origin of Bitcoin was expected to introduce a new currency in the market - popularly...",
    },
    {
      title: "Embracing the Blockchain Beast to Tame the AI Tiger",
      image: blogb3,
      description:
        "Abstract the origin of Bitcoin was expected to introduce a new currency in the market - popularly...",
    },
    {
      title:
        "KALP Foundation: Pioneering a Decentralized Digital Public Infrastructure",
      image: blogb1,
      description:
        "Step into the realm of the KALP Foundation and discover how a non-profit is using blockchain technology...",
    },
    {
      title:
        "Chain Reactions: Navigating India’s Progress with Blockchain Technology",
      image: blogb2,
      description:
        "Abstract the origin of Bitcoin was expected to introduce a new currency in the market - popularly...",
    },
    {
      title: "Embracing the Blockchain Beast to Tame the AI Tiger",
      image: blogb3,
      description:
        "Abstract the origin of Bitcoin was expected to introduce a new currency in the market - popularly...",
    },
  ];
  return (
    <>
      <div>
        <Header />
        <div className="xl:max-w-[1360px] max-w-full mx-auto w-full px-4 2xl:px-0">
          <div>
            <p className="md:text-[56px] text-[24px] font-semibold mt-[29px] md:leading-[84px] leading-[28px]">
              Resources and Insights
            </p>
            <p className="md:text-[20px] font-normal md:leading-7 leading-6 text-[14px] md:max-w-[71%] md:mt-[14px] mt-2">
              We are licensed and regulated by leading international governing
              bodies, allowing you to trade knowing your financial security is
              protected.
            </p>
            <div className="md:mt-[62px] mt-6 md:px-4">
              <p className="md:text-2xl text-[16px] md:leading-8 leading-6 md:font-[500] font-[700] md:mb-8 mb-6">
                Recent blog posts
              </p>
              <div className="lg:grid lg:grid-cols-2 gap-8">
                <div className="md:col-span-1 col-span-2">
                  <div>
                    <Image
                      src={isDesktop ? blogMAin : blogMainMob}
                      alt="kalp Logo"
                      className="w-full bg-cover"
                    />
                    <p className="md:text-[20px] md:leading-8 leading-6 text-[16px] mt-4 font-semibold">
                      UX review presentations
                    </p>
                    <p className="md:mt-3 mt-2 md:text-[16px] md:leading-6 leading-[18px] font-light text-[12px]">
                      How do you create compelling presentations that wow your
                      colleagues and impress your managers?
                    </p>
                    <div className="flex items-center gap-1 md:mt-6 mt-4 group">
                      <Image
                        src={arrow}
                        alt="Arrow Icon"
                        className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      />
                      <p className="md:text-2xl text-xl underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2 leading-9 -translate-x-6">
                        Read More
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-1 col-span-2 lg:mt-0 md:mt-8">
                  <div className="md:flex flex--wrap gap-6 md:mt-0 mt-[35px]">
                    <Image
                      src={isDesktop ? blog1 : blogMainMob4}
                      alt="kalp Logo"
                      className="md:w-[320px] md:h-[200px] w-full h-full"
                    />
                    <div>
                      <p className="md:text-[20px] md:leading-8 leading-6 text-[16px] mt-4 font-semibold">
                        Migrating to Linear 101
                      </p>
                      <p className="md:mt-3 mt-2 md:text-[16px] md:leading-6 leading-[18px] font-light text-[12px]">
                        Linear helps streamline software projects, sprints,
                        tasks, and bug tracking. Here’s how to get...
                      </p>
                      <div className="flex items-center gap-1 md:mt-6 mt-4 group">
                        <Image
                          src={arrow}
                          alt="Arrow Icon"
                          className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                        <p className="md:text-2xl text-xl underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2 -translate-x-6">
                          Read More
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="md:flex gap-6 mt-8">
                    <Image
                      src={isDesktop ? blog2 : blogMainMob3}
                      alt="kalp Logo"
                      className="md:w-[320px] md:h-[200px] w-full h-full"
                    />
                    <div>
                      <p className="md:text-[20px] md:leading-8 leading-6 text-[16px] mt-4 font-semibold">
                        Building your API Stack
                      </p>
                      <p className="md:mt-3 mt-2 md:text-[16px] md:leading-6 leading-[18px] font-light text-[12px]">
                        The rise of RESTful APIs has been met by a rise in tools
                        for creating, testing, and manag...{" "}
                      </p>
                      <div className="flex items-center gap-1 md:mt-6 mt-4 group">
                        <Image
                          src={arrow}
                          alt="Arrow Icon"
                          className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                        />
                        <p
                          className="md:text-2xl text-[20px] underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 -translate-x-6 group-hover:translate-x-2"
                          onClick={() => router.push("/blogDetail")}
                        >
                          Read More
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:grid lg:grid-cols-2 gap-8 lg:mt-[60px] mt-[35px] lg:h-[246px] h-full mb-8">
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src={isDesktop ? blog3 : blogMainMob2}
                    alt="kalp Logo"
                    className="w-full bg-cover"
                  />
                  <div className="lg:hidden">
                    <p className=" text-md mt-4 font-semibold">
                      Grid system for better Design User Interface
                    </p>
                    <p className="mt-4 text-[12px]">
                      A grid system is a design tool used to arrange content on
                      a webpage...
                    </p>
                    <div className="flex items-center gap-1 mt-4 group">
                      <Image
                        src={arrow}
                        alt="Arrow Icon"
                        className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      />
                      <p className="md:text-2xl text-[20px] underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2 -translate-x-6">
                        Read More
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:inline-block hidden">
                  <p className="md:text-[20px] leading-8 text-lg font-semibold">
                    Grid system for better Design User Interface
                  </p>
                  <p className="mt-3 text-[16px] leading-6 font-light">
                    A grid system is a design tool used to arrange content on a
                    webpage. It is a series of vertical and horizontal lines
                    that create a matrix of intersecting points, which can be
                    used to align and organize page elements. Grid systems are
                    used to create a consistent look and feel across a website,
                    and can help to make the layout more visually appealing and
                    easier to navigate.{" "}
                  </p>
                  <div className="flex items-center gap-1 mt-4 group">
                    <Image
                      src={arrow}
                      alt="Arrow Icon"
                      className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                    <p className="md:text-2xl text-[20px] underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 group-hover:translate-x-2 -translate-x-6">
                      Read More
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:mt-[30px] mt-[48px]">
            <p className="md:text-[24px] md:leading-8 leading-6 text-[16px] md:font-semibold font-bold">
              All blog posts
            </p>
            <div className="grid grid-cols-3 md:gap-[50px] gap-8 md:mt-8 mt-6">
              {data?.map((item: any, index: number) => (
                <div key={index} className="md:col-span-1 col-span-3">
                  <div className="h-[317px]">
                    <Image
                      src={item?.image}
                      alt="kalp Logo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="md:text-[20px] text-[16px] mt-4 font-semibold md:leading-[30px] leading-6 md:h-[60px] h-[48px] line-clamp-2">
                      {item?.title}
                    </p>
                    <p className="md:my-[19px] mt-2 mb-4 md:text-[14px] text-[12px] md:leading-[21px] leading-[18px] md:font-normal font-light md:h-10 h-[18px] line-clamp-2">
                      {item?.description}
                    </p>
                    <div className="flex items-center gap-1 mt-4 group">
                      <Image
                        src={arrow}
                        alt="Arrow Icon"
                        className="h-3 transform -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      />
                      <p
                        className="md:text-2xl text-[20px] underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 -translate-x-6 group-hover:translate-x-2"
                        onClick={() => router.push("/blogDetail")}
                      >
                        Read More
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="md:mt-[60px] mt-[57px]">
            <div className="flex items-center justify-between md:py-5 py-[10px] border-y border-gray-200">
              <button
                onClick={handlePrevious}
                className="flex items-center text-gray-900 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === 1}
              >
                <Image src={arrowLeft} alt="Previous" className="h-3 w-3" />
                <span className="hidden sm:block ml-2 text-sm font-[500] leading-5">
                  Previous
                </span>
              </button>
              <div className="flex items-center text-sm mx-6 space-x-2 sm:hidden">
                <button
                  onClick={() => setCurrentPage(1)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors font-[500] leading-5 text-sm ${
                    currentPage === 1
                      ? "bg-black text-white"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  1
                </button>
                {currentPage > 2 && (
                  <span className="w-10 h-10 flex items-center justify-center text-gray-500 font-[500] leading-5 text-sm">
                    ...
                  </span>
                )}
                {currentPage !== 1 && currentPage !== totalPages && (
                  <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-black text-white font-[500] leading-5 text-sm">
                    {currentPage}
                  </button>
                )}
                {currentPage < totalPages - 1 && (
                  <span className="w-10 h-10 flex items-center justify-center text-gray-500 font-[500] leading-5 text-sm">
                    ...
                  </span>
                )}
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors font-[500] leading-5 text-sm ${
                    currentPage === totalPages
                      ? "bg-black text-white"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {totalPages}
                </button>
              </div>

              <div className="hidden sm:flex items-center text-sm mx-6 space-x-2">
                {renderPageNumbers().map((page: any, index: number) =>
                  page === "..." ? (
                    <span
                      key={index}
                      className="w-10 h-10 flex items-center justify-center text-gray-500 font-[500] leading-5 text-sm"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors font-[500] leading-5 text-sm ${
                        currentPage === page
                          ? "bg-black text-white"
                          : "text-gray-500 hover:text-black"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                onClick={handleNext}
                className="flex items-center text-gray-900 hover:text-black disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={currentPage === totalPages}
              >
                <span className="hidden sm:block mr-2 text-sm font-[500] leading-5">
                  Next
                </span>

                <Image src={arrowRight} alt="Next" className="h-3 w-3" />
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
