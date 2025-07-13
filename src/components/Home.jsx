import SplitText from "./ui/SplitText";
import GradientText from "./ui/GradientText";

import SpotlightCard from "./ui/SpotlightCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between px-4 py-6">
      <div className="flex flex-col items-center text-center">
        <GradientText
          colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
          animationSpeed={3}
          showBorder={false}
          className="custom-class text-4xl font-bold mb-6"
        >
          Welcome to Habit Tracker!
        </GradientText>

        <div className="text-2xl mb-6">
          <SplitText
            text="Add new habits and complete them as your daily goals"
            className="text-2xl text-center"
            delay={10}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <br />
          <SplitText
            text="Track your progress in an integrated calendar"
            className="text-2xl text-center"
            delay={10}
            duration={0.5}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>
        <Link to="/">
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer">
            Get Started!
          </button>
        </Link>
      </div>

      <div className="pt-6">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Here is how it works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[
            {
              img: "src/assets/number-1.png",
              text: "Enter your desired habits that you would like to follow every day",
            },
            {
              img: "src/assets/number-2.png",
              text: "Mark them as complete or incomplete",
            },
            {
              img: "src/assets/number-3.png",
              text: "Track your progress in the calendar",
            },
            {
              img: "src/assets/number-4.png",
              text: "Check your daily Streak!",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <SpotlightCard
                className="custom-spotlight-card h-full flex flex-col items-center justify-center text-center p-4"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <img
                  src={item.img}
                  alt={`Step ${idx + 1}`}
                  className="h-12 w-12 mb-4"
                />
                <p className="text-white">{item.text}</p>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
