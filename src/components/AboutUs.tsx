import Image from "next/image";
import aboutMainImg from "../../public/images/aboutMain.jpg";
import overlayImg from "../../public/images/ABOUT US (1).png";
import aboutUs1 from "../../public/images/aboutUs1.jpg";
import aboutUs2 from "../../public/images/about.png";
import member1 from "../../public/assets/about us/founding members/black and white/tapan.png";
import member2 from "../../public/assets/about us/founding members/black and white/shubham.png";
import cmember1 from "../../public/assets/about us/founding members/colored/tapan.png";
import cmember2 from "../../public/assets/about us/founding members/colored/shubham.png";
import caboutUs1 from "../../public/images/caboutUs1.png";
import caboutUs2 from "../../public/images/cabout.jpg";
import governance from "../../public/images/about1.png";
import cgovernance from "../../public/images/cabout1.png";
import { gsap } from "gsap";
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from "react";

const AboutUs: React.FC = () => {
    const containerRef = useRef(null);
    const [select, setSelect] = useState('OUR STORY');
    const [transitioning, setTransitioning] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        setIsDesktop(window.innerWidth > 640);
    }, []);
    let text = ['OUR STORY', 'FOUNDING MEMBERS', 'OUR VALUES', 'GOVERNANCE FRAMEWORK']

    const handleChange = (data: string) => {
        gsap.to(containerRef.current, {
            opacity: 0, duration: 0.3, onComplete: () => {
                setSelect(data);
                gsap.from(containerRef.current, { opacity: 0, duration: 1 });
            }
        });
    };
    const [hoveredImage, setHoveredImage] = useState<any>(null);

    // Dummy image sources for hovering
    const hoverImages: any = {
        aboutUs1: caboutUs1,
        member1: cmember1,
        member2: cmember2,
        aboutUs2: caboutUs2,
        governance: cgovernance
    };

    useEffect(() => {
        // Set up GSAP animation for initial load
        gsap.from(containerRef.current, { opacity: 0, duration: 1 });
    }, []);

    const handleMouseOver = (imageKey: any) => {
        const targetImage = document.querySelector(`#image-${imageKey}`);
        if (targetImage) {
            gsap.to(targetImage, { opacity: 1, duration: 1 });
        }
        gsap.to(hoverImages[imageKey], { opacity: 1, duration: 1 });
        setHoveredImage(hoverImages[imageKey]);
    };

    const handleMouseOut = (imageKey: string) => {
        gsap.to(hoveredImage, { opacity: 0, scale: 1, duration: 1 });
        const targetImage = document.querySelector(`#image-${imageKey}`);
        if (targetImage) {
            gsap.to(targetImage, { opacity: 0.8, duration: 1 });
        }
        setHoveredImage(null);
    };

    const OurStory = () => {
        return (
            <div ref={containerRef} className=" lg:w-[62%] ">
                <div className={` transition-opacity transform ${transitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
                    } duration-[1500ms] ease-in-out`}>
                    <div>
                        <Image
                            id="image-aboutUs1"
                            src={hoveredImage === hoverImages.aboutUs1 ? hoverImages.aboutUs1 : aboutUs1}
                            alt="Overlay"
                            onMouseOver={() => handleMouseOver('aboutUs1')}
                            onMouseOut={() => handleMouseOut('aboutUs1')}
                            className="lg:w-full object-cover lg:h-[100%]  h-[136px]"
                        />
                    </div>
                    <div className="lg:text-[14px] text-[12px]">
                        <p className="mt-4 custom-text ">
                            Born from a vision of a more equitable digital future, the Kalp Decentra Foundation emerged in 2020 before formally consolidating in the year 2023 as a response to the growing need for secure, compliant, and inclusive blockchain infrastructure. Our founders, led by Tapan Sangal, recognized that the true potential of decentralized technology could only be realized if it was built on a foundation of regulatory compliance and community-driven governance.
                        </p>
                        <p className="mt-6">
                            Motivated by the challenges of fragmented liquidity, regulatory uncertainty, and the need for scalable, interoperable solutions, we set out to create a Digital Public Infrastructure that would democratize access to blockchain technology while maintaining the highest standards of security and compliance.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    const FoundingMembers = () => {
        return (
            <div ref={containerRef} className="flex lg:flex-wrap lg:gap-20 lg:ml-[46px] lg:mt-0 mt-4 overflow-x-auto space-x-8 ">
                <div className="transition-transform duration-[1500ms] lg:max-w-[264px]">
                    <div>
                        <Image
                            id="image-member1"
                            src={hoveredImage === hoverImages.member1 ? hoverImages.member1 : member1}
                            alt="Overlay"
                            onMouseOver={() => handleMouseOver('member1')}
                            onMouseOut={() => handleMouseOut('member1')}
                        />
                    </div>
                    <div className="mt-4">
                        <p className="lg:text-[20px] text-[15px]  font-semibold">Tapan Sangal</p>
                        <p className="lg:text-md text-sm" >Founder and Permanent Director</p>
                        <p className="mt-6 lg:text-[14px] text-sm">
                            Lorem ipsum dolor sit amet consectetur. Elementum risus lorem proin dignissim neque. Et euismod sem risus sollicitudin a placerat libero viverra. Ut pharetra sit in libero tortor tellus. Mi a diam fringilla mauris.
                        </p>
                    </div>
                </div>

                <div className="transition-transform duration-[1500ms] max-w-[264px]">
                    <div>
                        <Image
                            id="image-member2"
                            src={hoveredImage === hoverImages.member2 ? hoverImages.member2 : member2}
                            alt="Overlay"
                            onMouseOver={() => handleMouseOver('member2')}
                            onMouseOut={() => handleMouseOut('member2')}
                        />
                    </div>
                    <div className="mt-4">
                        <p className="lg:text-[20px] text-[15px]  font-semibold">Shubham Raj</p>
                        <p className="lg:text-md text-sm" >Head - CTO</p>
                        <p className="mt-6 lg:text-[14px] text-sm custom-text   ">
                            Lorem ipsum dolor sit amet consectetur. Elementum risus lorem proin dignissim neque. Et euismod sem risus sollicitudin a placerat libero viverra. Ut pharetra sit in libero tortor tellus. Mi a diam fringilla mauris.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
 const OurValues = () => {
    return (
        <div ref={containerRef} className="lg:w-[63%] w-full px-4">
            <div className="transition-transform duration-[1500ms]">
                <div>
                    <Image
                        id="image-aboutUs2"
                        src={hoveredImage === hoverImages.aboutUs2 ? hoverImages.aboutUs2 : aboutUs2}
                        alt="Overlay"
                        onMouseOver={() => handleMouseOver('aboutUs2')}
                        onMouseOut={() => handleMouseOut('aboutUs2')}
                        className="lg:w-full w-full object-cover lg:h-[100%] h-[136px]"
                    />
                </div>
                <div className="text-[14px] lg:text-xs custom-text">
                    <p className="mt-4 text-xs lg:text-[14px]">At Kalp Decentra Foundation, our actions are guided by a set of core principles:</p>
                    <ul className="list-decimal text-sm lg:text-[13px] list-inside text-start mt-4 pl-3 lg:space-y-3 space-y-2">
                        <li className="text-sm lg:text-[14px]" >
                            <span className="text-sm lg:text-[14px] font-semibold">Compliance-First Approach:</span> We believe innovation thrives within ethical and legal frameworks.
                        </li>
                        <li>
                            <span className="text-sm lg:text-[14px] font-semibold">Transparency:</span> We commit to open governance and clear communication in all our operations.
                        </li>
                        <li>
                            <span className="text-sm lg:text-[14px] font-semibold">Inclusivity:</span> We strive to create technology that empowers all, regardless of background or resources.
                        </li>
                        <li>
                            <span className="text-sm lg:text-[14px] font-semibold">Sustainability:</span> Our commitment to the environment is embedded in our technological solutions.
                        </li>
                        <li>
                            <span className="text-sm lg:text-[14px] font-semibold">Innovation:</span> We continuously push the boundaries of what&apos;s possible in decentralized technology.
                        </li>
                        <li>
                            <span className="text-sm lg:text-[14px] font-semibold">Community-Driven:</span> We believe in the power of collective wisdom and shared governance.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

const Governance = () => {
    return (
        <div ref={containerRef} className="lg:w-[62%] w-full px-4">
            <div className="transition-transform duration-[1500ms]">
                <div>
                    <Image
                        id="image-governance"
                        src={hoveredImage === hoverImages.governance ? hoverImages.governance : governance}
                        alt="Overlay"
                        onMouseOver={() => handleMouseOver('governance')}
                        onMouseOut={() => handleMouseOut('governance')}
                        className="lg:w-full w-full object-cover lg:h-[100%] h-[136px]"
                    />
                </div>
                <div className="text-[12px] lg:text-[13px] custom-text">
                    <p className="mt-4">
                        The Kalp Decentra Foundation operates under a robust governance structure designed to ensure transparency, accountability, and community participation. Our framework includes:
                    </p>
                    <ul className="list-disc text-start pl-3 lg:py-5 lg:text-[13px]">
                        <li>A diverse Board of Directors with expertise across relevant fields</li>
                        <li>Multiple specialized committees overseeing various aspects of our operations</li>
                        <li>A two-tier grievance redressal mechanism to ensure fair resolution of issues</li>
                        <li>Regular internal and external audits to maintain the highest standards of operation</li>
                    </ul>
                    <p className="">
                        Our governance model is designed to evolve with the needs of our community and the changing landscape of blockchain technology. We believe in the power of decentralized decision-making, balanced with the need for expert guidance and regulatory compliance.
                    </p>
                    <p>
                        For a detailed look at our governance structure, please review our full Governance Framework Document.
                    </p>
                    {isDesktop ? (
                        <p className="mt-4">
                            Join us in our mission to create a more equitable, secure, and innovative digital future. Together, we are not just building technology – we are shaping the future of global digital interaction.
                        </p>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

    return (
        <div className="relative w-full mt-12 lg:mt-0 lg:h-screen">
            {/* Background Image */}
            <Image
                src={aboutMainImg}
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="z-0"
            />

            {/* Content over the background */}
            <div className="relative z-10 lg:flex flex-wrap lg:gap-16 h-full lg:px-10 px-4 lg:py-10 py-6 text-[#fff]">
                <div className={`${isDesktop ? '' : 'flex overflow-x-auto space-x-8'}`}>
                    {text?.map((data: any, index: any) => (
                        <div
                            key={index}
                            className={`w-full lg:text-[24px] text-sm lg:pb-6 pb-5 ${index === 3 ? '' : 'lg:border-b border-[#B1B1B1]/40'} transition-transform duration-[1500ms] cursor-pointer ${data === select ? 'font-bold ' : 'text-[#B1B1B1]/40'
                                } lg:mb-6`}
                            onClick={() => handleChange(data)}
                        >
                            <p className={`${data === select ? 'font-semibold' : '' }`}>{data}</p>
                        </div>
                    ))}
                </div>

                {select === 'OUR STORY' ? <OurStory /> : null}

                {select === 'FOUNDING MEMBERS' ? (
                    <FoundingMembers />
                ) : null}

                {select === 'OUR VALUES' ? (
                    <OurValues />
                ) : null}

                {select === 'GOVERNANCE FRAMEWORK' ? (
                    <Governance />
                ) : null}

            </div>
             <div className="absolute top-0 right-0 bg-[#000] pt-32 pb-8 h-full w-[7%] z-20 ">
                <Image
                    src={overlayImg}
                    alt="Overlay"
                    width={60}
                />
            </div> 
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        </div>
    );
};

export default AboutUs;
