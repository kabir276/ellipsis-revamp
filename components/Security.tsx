import React from "react";
import { motion } from "framer-motion";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";
import { useRouter } from "next/navigation";

const Security = () => {
  const router = useRouter();

  return (
    <motion.div
      id="Security"
      className="py-20 w-full bg-transparent "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="heading text-8xl font-bold text-center mb-12"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        Built with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
          security in mind⚡️
        </span>
      </motion.h1>
      <div className="flex flex-col md:flex-row gap-10">
        <motion.div
          className="md:w-[50rem] w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {workExperience.map((card, index) => (
            <motion.div
              key={card.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Button
                duration={Math.floor(Math.random() * 10000) + 10000}
                borderRadius="1.75rem"
                className="flex-1 text-white border-neutral-200 dark:border-slate-800 bg-gradient-to-br from-blue-800 via-purple-800 to-pink-300 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="flex flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 relative z-10">
                  <div className="lg:ms-5">
                    <h1 className="text-start text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                      {card.title}
                    </h1>
                    <p className="text-start text-gray-300 mt-3 font-semibold group-hover:text-white transition-colors duration-300">
                      {card.desc}
                    </p>
                  </div>
                  <br />
                  <motion.span
                    className="cursor-pointer px-8 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold hover:from-purple-500 hover:to-pink-500 transition-all duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => { window.open(`${card.Link}`) }}
                  >
                    Learn More
                  </motion.span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="flex flex-col gap-6 mt-12 md:p-8 p-2 w-auto md:w-[25rem] bg-gradient-to-br from-gray-900 to-black rounded-lg shadow-2xl"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="p-6 rounded-lg bg-gradient-to-r from-purple-800 to-indigo-800 shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="text-start text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">Confidence = Trust</h1>
            <p className="text-gray-300 text-sm mt-2">We understand that a wrong, confident answer is worse than a non-answer. When Ellipsis is confused, it's explicit about it.</p>
          </motion.div>
          <motion.div
            className="p-6 rounded-lg bg-gradient-to-r from-blue-800 to-cyan-800 shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h1 className="text-start text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">No rogue commits</h1>
            <p className="text-gray-300 text-sm mt-2">Ellipsis will never commit code without your explicit permission. You can configure Ellipsis to raise a side-PR so it's changes are clear.</p>
          </motion.div>
          <motion.button
            onClick={() => router.push("https://www.ycombinator.com/launches/KW7-ellipsis-automated-code-reviews-bug-fixes")}
            className="flex flex-col items-start border-2 h-auto p-8 border-orange-500 text-orange-500 bg-gradient-to-br from-orange-900 to-red-900 rounded-md px-4 py-1 text-xs w-auto m-auto hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-row">
              <span className="mr-4 my-auto font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">Y</span>
              <div className="flex flex-row justify-between gap-16 items-center w-auto">
                <div className="flex w-auto flex-col">
                  <span className="text-[10px] text-left uppercase font-medium text-gray-400 -mb-1">Featured on</span>
                  <span className="font-bold w-auto text-xl text-left text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Launch YC</span>
                </div>
                <div className="my-auto flex flex-col -ml-5">
                  <span className="text-3xl text-orange-500 -mb-5 animate-bounce">^</span>
                  <span className="text-2xl text-orange-500">81</span>
                </div>
              </div>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Security;
