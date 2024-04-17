'use client';

import { motion } from 'framer-motion';

import {TitleText, TypingText } 
from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn } 
from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
  <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{once: 'false', amount: 0.25}}
  className={`${styles.innerWidth} mx-auto flex 
  flex-col`}>
    <TypingText
    title="| People on the World"
    textStyles="text-center"/>
    <TitleText
    title={(
    <>
    Track friends around you and invite them to
    play together in the same world
    </>
    )}
    textStyles="text-center"
    />

    <motion.div
    variant={fadeIn('up','tween', 0.3, 1)}
    className="relative mt-[68px] flex w-full
    h-[550px]" style="opacity: 1; transform:none;"
    >
      <img
      src="/map.png"
      alt="map"
      className="w-full h-full object-cover"/>

      <div className="absolute bottom-20 right-20
      w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
        <img
        src="people-01.png" alt="people"
        className="w-full h-full"
        />
      </div>
      <div className="absolute top-10 left-20
      w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
        <img
        src="people-02.png" alt="people"
        className="w-full h-full"
        />
      </div>
      <div className="absolute top-1/2 left-[45%]
      w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
        <img
        src="people-03.png" alt="people"
        className="w-full h-full"
        />
      </div>
      <div className="absolute top-1/2 right-[70%]
      w-[170px] h-[130px] p-[6px] lg:block hidden">
        <img
        src="Mask Group-01.png" alt="people"
        className="w-full h-full"
        />
        <h2 className="absolute top-1/2 mt-[30px] font-semi sm:text-[12px]
      text-[14px] left-[13%] text-white">
        The Upside Down
      </h2>
      </div>
      <div className="absolute top-10 left-[65%]
      w-[170px] h-[130px] p-[6px] lg:block hidden">
        <img
        src="Mask Group-02.png" alt="people"
        className="w-full h-full"
        />
        <h2 className="absolute top-1/2 mt-[26px]  sm:text-[14px]
      text-[14px] left-[10%] text-white">
        Hawkins Labs
      </h2>
      </div>
    </motion.div>

  </motion.div>
  </section>
);

export default World;
