import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import arrowDown from "../../public/images/arrow_down.svg";
import arrowUp from "../../public/images/arrow_forward_ios.svg";

const Faq: React.FC = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState(0);
  const handleToggle = (index: any) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  const accordionData = [
    {
      title: "What is the Kalp Foundation?",
      content:
        "The Kalp Foundation is a non-profit organization dedicated to maintaining the Kalp Cross Chain ecosystem, which is designed to be regulatory compliant and permissioned. Our mission is to develop digital public infrastructure that fosters equality and inclusivity.",
    },
    {
      title:
        "What does it mean that the Kalp Cross Chain ecosystem is permissioned and regulatory compliant?",
      content:
        "Being permissioned means that the Kalp Cross Chain ecosystem requires users to obtain permissions to participate, ensuring a secure and controlled environment. Regulatory compliance means that our system adheres to all applicable laws and regulations, providing trust and safety for its users.",
    },
    {
      title: "How does the Kalp Foundation promote equality and inclusivity?",
      content:
        "The Kalp Foundation works to make blockchain technology accessible and beneficial for all, regardless of their background or resources. We focus on eliminating barriers to entry and engaging with diverse communities to ensure broad participation and benefit distribution.",
    },
    {
      title: "Who can benefit from the Kalp Foundation’s initiatives?",
      content:
        "Our initiatives are aimed at developers, enterprises, non-profits, and individuals interested in leveraging blockchain for social good. We support those who require a permissioned and compliant blockchain environment for their applications.",
    },
    {
      title: "How is the Kalp Foundation funded?",
      content:
        "We rely on funding from grants, donations, and strategic partnerships with organisations and institutions that share our vision. On top of that, Kalp foundation is funded by the digital currency of Kalp ecosystem called Gini. Contributions from the community are crucial to our sustainability and help us expand our impact.",
    },
    {
      title: "How can I participate in the Kalp Cross Chain ecosystem?",
      content:
        "To participate in the Kalp Cross Chain ecosystem as node owners and builders, individuals and organizations need to apply for permission. This process ensures that all participants are compliant with the necessary regulations and standards.",
    },
    {
      title: "What types of projects does the Kalp Foundation support?",
      content:
        "We support projects that utilize the Kalp Cross Chain ecosystem to drive innovation in areas such as finance, healthcare, and education. Our focus is on projects that have a clear impact on promoting inclusivity and creating equitable opportunities.",
    },
    {
      title:
        "Where can I find resources to learn more about blockchain and the Kalp Cross Chain ecosystem?",
      content:
        "Our website offers educational resources, including tutorials, case studies, and detailed documentation about the Kalp Cross Chain ecosystem. We also conduct workshops and seminars to educate the public about the benefits and operations of blockchain technology.",
    },
    {
      title: "Can I donate to the Kalp Foundation?",
      content: `Yes, donations are welcome and greatly appreciated as they help us continue our work in developing and maintaining the Kalp Cross Chain ecosystem. For information on how to donate, please visit the "Support Us" section of our website.`,
    },
  ];

  const [animationClass, setAnimationClass] = useState("");
  const [animationClass2, setAnimationClass2] = useState("");

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setAnimationClass("animate__animated animate__slideInDown");
      setAnimationClass2("animate__animated animate__flipInX");
    } else {
      setAnimationClass("");
      setAnimationClass2("");
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <div
        className={`flex flex-col justify-center items-center md:mt-[122px] mt-20 ${animationClass}`}
      >
        <h1 className="md:text-[32px] text-[16px] text-md font-bold md:leading-[48px] leading-6 md:mb-4 mb-2">
          Frequently Asked Questions
        </h1>
        <p className="md:text-[16px] text-[14px] font-light md:leading-6 leading-[21px] text-center">
          Common Queries Addressed for Quick Understanding
        </p>
      </div>
      <div className="mx-auto md:mt-[60px] mt-8">
        {accordionData.map((item, index) => (
          <div
            key={index}
            className="border-b border-gray-200 md:py-2 md:px-10"
          >
            <button
              onClick={() => handleToggle(index)}
              className="w-full text-left py-4 flex justify-between items-center"
            >
              <span className={`md:text-[16px] text-[14px] font-semibold md:leading-6 leading-[21px] pr-3 w-[calc(100%-25px)] ${animationClass2}`}>
                {item.title}
              </span>
              <div className="h-5 w-8 flex justify-end text-end">
                {openAccordionIndex === index ? (
                  <Image src={arrowUp} alt="kalp Logo" className="" />
                ) : (
                  <Image src={arrowDown} alt="kalp Logo" className="" />
                )}
              </div>
            </button>
            {openAccordionIndex === index && (
              <div className={`pb-4 text-[14px] font-normal leading-[21px] ${animationClass2}`}>
                {item.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Faq;
