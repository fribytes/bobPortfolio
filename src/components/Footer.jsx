import React, { useRef } from "react";
import { HiOutlineArrowTrendingUp as Arrow } from "react-icons/hi2";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Footer = () => {
  const footerRef = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: footerRef.current, start: "top 80%" },
      });

      tl.from(".footer-text1", {
        opacity: 0,
        y: 50,
      }).from(".footer-text2", {
        opacity: 0,
        y: 20,
        stagger: 0.2,
      });
    },
    { scope: footerRef }
  );

  return (
    <footer
      id="contactMe"
      ref={footerRef}
      className="text-white px-[10%] mt-[50px] gap-[50px] vsm:h-screen py-[50px] flex flex-col justify-between"
    >
      <h1 className="footer-text1 text-left vsm:text-center text-[4rem] lg:text-[7rem] font-extrabold leading-none">
        Let's Connect
      </h1>

      <div className="w-full">
        <a
          href="https://t.me/boptheweb"
          target="blank"
          className="footer-text2 flex gap-[5px] py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[3rem]">Telegram</p>
          <Arrow />
        </a>
        <a
          href="https://x.com/boptheweb"
          target="blank"
          className="footer-text2 flex gap-[5px] py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[3rem]">Twitter</p>
          <Arrow />
        </a>
        <a
          href="mailto:boptheweb@gmail.com"
          target="blank"
          className="footer-text2 flex gap-[5px] py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[3rem]">Mail</p>
          <Arrow />
        </a>
        <a
          href="https://github.com"
          target="blank"
          className="footer-text2 flex gap-[5px] py-[2px] border-b border-b-[gray]"
        >
          <p className="text-[3rem]">Github</p>
          <Arrow />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
