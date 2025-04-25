import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe } from "../constants";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex flex-col-reverse md:flex-row items-center ${styles.paddingY}`}
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col xl:px-0 sm:px-12 px-6 text-white">
        <div className="w-full">
          <h1 className="font-poppins font-semibold text-[40px] sm:text-[52px] md:text-[64px] lg:text-[72px] leading-tight">
            Hi there!
            <br className="sm:block hidden" /> I am{" "}
            <span className="text-gradient">{aboutMe.name}</span>
          </h1>
          <p className={`${styles.paragraph} max-w-xl mt-5`}>{aboutMe.intro}</p>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-2">
            Building for{" "}
            <span className="text-gradient">Web2 and Web3 Projects</span>
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl">
            Frontend and Full-Stack Tech Stack:{" "}
            <span className="font-medium">
              React.js, Next.js, React Native, Expo, Tailwind CSS, Node.js,
              Express.js, Firebase, Web3.js, Ethers.js, Redux Toolkit, Tanstack
              Query, and REST APIs.
            </span>
          </p>
        </div>

        {/* Unified Let's Connect button at the bottom
        <div className="mt-10">
          <LetsConnect />
        </div> */}
      </div>

      {/* Animation */}
      <div className="flex-1 flex justify-center items-center md:my-0 my-10 relative w-full h-full">
        <div className="relative z-10 w-[80%] h-[80%] max-w-[500px]">
          <Lottie {...defaultOptions} />
        </div>
        <div className="absolute z-0 w-[60%] h-[60%] rounded-full bottom-10 white__gradient"></div>
      </div>
    </section>
  );
};

export default Hero;
