import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import blogb1 from "../../public/images/b1.jpg";
import blogb2 from "../../public/images/b2.jpg";
import blogb3 from "../../public/images/b3.jpg";
import blogMAin from "../../public/images/blogDetail.jpg";
import blogMAinMob from "../../public/images/blogDetailMob.jpg";
import arrow from "../../public/images/east-2.svg";
import gartto1 from "../../public/images/gartto1.jpg";
import gartto2 from "../../public/images/gartto2.jpg";
import gartto3 from "../../public/images/gartto3.jpg";

export default function Blogs() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    setIsDesktop(window.innerWidth > 768);
  }, []);

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

  const [animationClass, setAnimationClass] = useState("");
  const [animationClass2, setAnimationClass2] = useState("");
  const [animationClass3, setAnimationClass3] = useState("");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setAnimationClass("animate__animated animate__slideInDown");
      setAnimationClass2("animate__animated animate__fadeInUp");
      setAnimationClass3("animate__animated animate__flipInX");
    } else {
      setAnimationClass("");
      setAnimationClass2("");
      setAnimationClass3("");
    }
  }, [inView]);

  return (
    <>
      <div>
        <Header />
        <div className="xl:max-w-[1360px] max-w-full mx-auto w-full px-4 2xl:px-0">
          <div className="">
            <div className="lg:mt-12 mt-6 ">
              <div className="lg:grid grid-cols-3 gap-[62px] ">
                <div className="lg:col-span-2 col-span-3" ref={ref}>
                  <p
                    className={`md:text-[36px] text-[18px] font-semibold ${animationClass}`}
                  >
                    Grid system for better Design User Interface
                  </p>
                  <div className="mt-4 md:mt-8">
                    <Image
                      src={isDesktop ? blogMAin : blogMAinMob}
                      alt="kalp Logo"
                      className="w-full mx-auto md:mx-0"
                    />
                    <p className={`md:text-sm text-xs text-[#45525F] mt-2 md:mt-8 font-semibold ${animationClass3}`}>
                      Sunday , 1 Jan 2023
                    </p>
                    <p className={`${animationClass3} mt-2 md:mt-8 md:text-[15px] text-[12px]`}>
                      A grid system is a design tool used to arrange content on
                      a webpage. It is a series of vertical and horizontal lines
                      that create a matrix of intersecting points, which can be
                      used to align and organize page elements. Grid systems are
                      used to create a consistent look and feel across a
                      website, and can help to make the layout more visually
                      appealing and easier to navigate.
                    </p>
                    <p className={`mt-4 md:text-[15px] text-[12px] ${animationClass3}`}>
                      If you’ve been to New York City and have walked the
                      streets, it is easy to figure out how to get from one
                      place to another because of the grid system that the city
                      is built on. Just as the predictability of a city grid
                      helps locals and tourists get around easily, so do webpage
                      grids provide a structure that guides users and designers
                      alike. Because of their consistent reference point, grids
                      improve page readability and scannability and allow people
                      to quickly get where they need to go.
                    </p>
                  </div>
                  <div className=" mt-4 lg:pr-5">
                    <p className="md:text-sm max-w-[567px] text-center text-xs text-[#45525F] font-semibold">
                      Definition: A grid is made up of columns, gutters, and
                      margins that provide a structure for the layout of
                      elements on a page.
                    </p>
                    <div className="">
                      <Image
                        src={isDesktop ? gartto1 : gartto1}
                        alt="kalp Logo"
                        className="mt-6 md:mt-4 mx-auto md:mx-0 w-full"
                      />
                      <p className="md:text-sm md:px-32 mt-2 md:mt-3 text-center text-xs text-[#45525F] font-semibold">
                        Definition: A grid is made up of columns, gutters, and
                        margins that provide a structure for the layout of
                        elements on a page.
                      </p>
                      <p className="md:mt-4 mt-[33px] md:text-[15px] text-[12px]">
                        There are three common grid types used in websites and
                        interfaces: column grid, modular grid, and hierarchical
                        grid.
                      </p>
                      <p className="md:text-sm mt-[20px] md:mt-4 text-sm text-[#45525F] font-semibold">
                        Breaking Down the Grid
                      </p>
                      <p className="md:mt-4 mt-[6px] md:text-[15px] text-[12px]">
                        Regardless of the type of grid you are using, the grid
                        is made up of three elements: columns, gutters, and
                        margins.
                      </p>
                      <p className="mt-4 md:text-[15px] text-[12px]">
                        <span className="font-bold">Columns:</span>Columns take
                        up most of the real estate in a grid. Elements and
                        content are placed in columns. To adapt to any screen
                        size, column widths are generally defined with
                        percentages rather than fixed values and the number of
                        columns will vary. For example, a grid on a mobile
                        device might have 4 columns and a grid on a desktop
                        might have 12 columns.
                      </p>
                      <p className="mt-4 md:text-[15px] text-[12px]">
                        <span className="font-bold">Gutters:</span>Gutters: The
                        gutter is the space between columns that separates
                        elements and content from different columns. Gutter
                        widths are fixed values but can change based on
                        different breakpoints. For example, wider gutters are
                        appropriate for larger screens, whereas smaller gutters
                        are appropriate for smaller screens like mobile.
                      </p>
                      <p className="text-sm mt-[20px] md:mt-4 text-[#45525F] font-semibold">
                        Examples of Grids in Use
                      </p>
                      <p className="text-sm mt-4 text-[#45525F] ">
                        Example 1: Hierarchical Grid
                      </p>
                      <p className="md:mt-4 mt-[8px] md:text-[15px] text-[12px]">
                        Our first example is from The New York Times. This
                        screen utilizes a hierarchical grid to create a
                        newspaper-like reading experience. At desktop screen
                        size, two main columns make up the hierarchical grid.
                        The most important news story takes up the most space in
                        the grid, the left column, followed by secondary and
                        tertiary stories, which take up the smaller column and
                        modules on the right.
                      </p>
                      <Image
                        src={isDesktop ? gartto2 : gartto2}
                        alt="kalp Logo"
                        className="mt-8 md:mt-4 mx-auto md:mx-0 w-full"
                      />
                      <p className="md:px-28 mt-4 md:mt-3 text-center md:text-[16px] text-[12px] ">
                        The New York Times uses a hierarchical grid to achieve
                        its newspaper-like reading experience. (We highlighted
                        the columns in yellow, the gutters in blue, and the
                        margins in purple.)
                      </p>
                      <p className="md:text-sm mt-[20px] md:mt-4 text-sm text-[#45525F] font-semibold">
                        Breaking Down the Grid
                      </p>
                      <p className="md:mt-4 mt-2 md:text-[15px] text-[12px]">
                        Using a grid benefits both end users and the designers
                        alike:{" "}
                      </p>
                      <ul className="list-disc text-start mt-4 px-6">
                        <li className="">
                          Designers can quickly put together well-aligned
                          interfaces.
                        </li>
                        <li className="">
                          Users can easily scan predictable grid-based
                          interfaces.
                        </li>
                        <li className="">
                          A good grid is easy to adapt to various screen sizes
                          and orientations. In fact, grid layouts are an
                          essential component of responsive web design.
                          Responsive design uses breakpoints to determine the
                          screen size threshold at which the layout should
                          change. For example, a desktop screen may have 12 grid
                          columns, which may be stacked on mobile so that the
                          resulting layout has only 4 columns.
                        </li>
                      </ul>
                      <Image
                        src={isDesktop ? gartto3 : gartto3}
                        alt="kalp Logo"
                        className="mt-8 md:mt-4 mx-auto md:mx-0 w-full"
                      />
                      <p className="md:px-28 mt-4 md:mt-3 text-center md:text-[16px] text-[12px] ">
                        At the mobile size, Behance’s one-column grid (left) was
                        reflowed into a four-column grid structure (right).
                      </p>
                      <p className="md:text-sm mt-[20px] md:mt-4 text-sm text-[#45525F] font-semibold">
                        Conclusion
                      </p>
                      <p className="md:mt-4 mt-2 md:text-[15px] text-[12px]">
                        Grids not only provide designers a structure on which to
                        base layouts, but they also improve readability and
                        scannability for end users. Use a good grid system that
                        easily adapts to various screen sizes.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-1 col-span-3  ">
                  <p
                    className={`md:text-2xl text-md font-semibold mt-12 md:mt-0 mb-[24px] md:mb-8 lg:h-[54px] flex items-center ${animationClass}`}
                  >
                    Recent blog posts
                  </p>
                  {data?.map((item: any, index: number) => (
                    <div
                      key={index}
                      className={`md:col-span-1 col-span-3 mb-[35px] md:mb-8 ${animationClass2}`}
                    >
                      <div className="h-[317px]">
                        <Image
                          src={item?.image}
                          alt="kalp Logo"
                          className="ease-in-out grayscale hover:grayscale-0 transition-all duration-1500 w-full h-full mx-auto md:mx-0 object-cover"
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
                          <p className="md:text-2xl text-[20px] underline decoration-1 cursor-pointer font-semibold transition-transform duration-300 -translate-x-6 group-hover:translate-x-2">
                            Read More
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
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
