"use client";

import Image from "next/image";
import { AudioPlayer } from "react-audio-play";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Palyer = () => {
  return (
    <div className="mt-0 xl:mt-10">
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="bg-gradient-to-r from-tertiary/70 p-2 bg-primary/10 backdrop-blur-[15px]"
      >
        <div className="container mx-auto flex flex-col justify-between items-center xl:flex-row">
          {/* text & avatar img */}
          <div className="hidden w-[300px] xl:flex items-center gap-x-4">
            {/* image */}
            <div className="relative w-16 h-16 rounded-full bg-[#33335b]">
              <Image
                src={"/assets/player/indila-hero-removebg-preview.png"}
                fill
                alt="no image"
                priority
                className=" object-contain w-full"
              />
            </div>
            {/* text */}
            <div className=" leading-none text-white">
              <div className="text-lg font-medium">Indila Adila</div>
              <div className="text-sm font-light">Freedom</div>
            </div>
          </div>
          {/* palyer */}
          <div className="w-full max-w-4xl">
            <AudioPlayer
              loop
              preload="none"
              color="#fff"
              volume={40}
              volumePlacement="top"
              src="/assets/player/Indila - Derniere Danse.mp3"
              style={{
                background: "transparent",
                boxShadow: "none",
                width: "100%",
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Palyer;
