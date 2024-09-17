import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import kalplogoBlack from "../../public/images/kalp_black.svg";
import logo from "../../public/images/logo.svg";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const router = useRouter();

  return (
    <main
      className={`xl:max-w-[1280px] max-w-full mx-auto py-5 w-full px-4 2xl:px-0  flex flex-wrap items-center justify-between`}
    >
      <Image
        src={logo.src}
        alt="Main Logo"
        width={132}
        height={57}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />

      <div onClick={() => router.push("/blogs")}>
        <Image
          src={kalplogoBlack}
          className="cursor-pointer opacity-50  hover:opacity-100 transition-all duration-1500 ease-in-out"
          alt="kalp Logo"
          width={100}
        />
      </div>
    </main>
  );
};

export default Header;
