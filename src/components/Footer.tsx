import Image from "next/image";
import Insta from "../../public/images/insta.png";
import Facebook from "../../public/images/facebook.png";
import Twitter from "../../public/images/insta.png";
import Linkdin from "../../public/images/linkdin.png";
import { useEffect, useState } from "react";


interface FooterProps {
}

const Footer: React.FC<FooterProps> = (props) => {
    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        setIsDesktop(window.innerWidth > 640);
      }, []);
    return (
        <>
            <div className="grid lg:grid-cols-3 grid-cols-5 bg-[#000] font-thin mt-24 w-full text-[#fff] lg:px-9 py-4 px-4 lg:py-6" >
                <div className="col-span-3 order-2 lg:order-1 lg:col-span-1 " >
                    <div>
                    <p className="lg:text-3xl text-2xl mt-12 lg:mt-0" >Contact us</p>
                    <p className="text-sm mt-3" >Registered Office:</p>
                        </div>
                    <div className="mt-7" >
                        <p className="lg:text-sm text-xs " >16192 Coastal Highway</p>
                        <p className="lg:text-sm text-xs " >Lewes, Delaware 19958,</p>
                        <p className="lg:text-sm text-xs " >County of Sussex. </p>


                    </div>

                </div>
                <div className="col-span-5 order-1 lg:flex flex-wrap justify-center lg:order-2 lg:col-span-1" >
                   <div>
                   <p className="lg:text-3xl text-2xl " >Quick Links</p>
                    <div className="mt-7 flex lg:flex-col wrap lg:gap-0 gap-12" >
                        <div>
                        <p className="lg:text-sm text-xs mt-2 " >About Kalp </p>
                        <p className="lg:text-sm text-xs lg:mt-2 mt-4" >Mission & Vision</p>
                        <p className="lg:text-sm text-xs lg:mt-2 mt-4" >About Us </p>
                        </div>
                     <div>
                     <p className="lg:text-sm text-xs mt-2 mt-1" >KALP Network</p>
                        <p className="lg:text-sm text-xs lg:mt-2 mt-4" >GINI: Digital Currency</p>
                        <p className="lg:text-sm text-xs lg:mt-2 mt-4" >Blogs</p>
                     </div>
                     
                    </div>
                    </div> 
                </div>
                <div className="col-span-2 order-3 flex flex-wrap lg:pl-10 justify-around lg:col-span-1 mt-12 lg:mt-0 " >
                   <div  >
                   <p className="lg:text-3xl text-xl" >Follow us on</p>
                    <div className="lg:mt-7 mt-5" >
                        <div className="flex flex-wrap gap-4 mt-2 items-center" >
                            <Image src={Facebook} alt={""} />
                            <p className="lg:text-sm text-xs" >Facebook</p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-2 items-center" >
                            <Image src={Linkdin} alt={""} />
                            <p className="lg:text-sm text-xs" >LinkedIn</p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-2 items-center" >
                            <Image src={Twitter} alt={""} />
                            <p className="lg:text-sm text-xs" >Twitter</p>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-2 items-center" >
                            <Image src={Insta} alt={""} />
                            <p className="lg:text-sm text-xs" >Instagram</p>
                        </div>
                    </div>

                   </div>
                   
                </div>
            </div>
            <div className="lg:px-9 bg-[#000] font-thin  text-[#fff]" >
                <div className={`border-t border-[#fff]/40 flex py-6 ${isDesktop ? 'flex-wrap ' : ' flex-col'}  lg:gap-0 gap-4 justify-between items-center`}>
                    <p className="lg:text-xs text-[9px] " >Copyright © 2024 KALP Decentra Foundation. All rights reserved.</p>
                    <p className="lg:text-xs text-[10px] " ><span className="underline " >Terms & Conditions</span>  | <span className="underline " >Privacy Policy</span>  </p>
                </div>
            </div>
        </>


    );
};

export default Footer;
