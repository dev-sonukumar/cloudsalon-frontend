import { fadeIn } from "@/utils/varients";
import { motion } from "framer-motion";
import { CalendarDays, FolderOpenDot, Globe, Smile } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const HappyClientServicesCount = () => {
  // Stats configuration
  const stats = [
    {
      label: "Projects Executed",
      key: "projects",
      value: 250,
      icon: (
        <FolderOpenDot
          size={44}
          strokeWidth={1.5}
          style={{
            color: "#6E260E",
          }}
        />
      ),
    },
    {
      label: "Happy Clients",
      key: "clients",
      value: 1500,
      icon: (
        <Smile
          size={44}
          strokeWidth={1.25}
          style={{
            color: "#DAA06D	",
          }}
        />
      ),
    },
    {
      label: "Locations",
      key: "locations",
      value: 30,
      icon: (
        <Globe
          size={44}
          strokeWidth={1.25}
          style={{
            color: "#7dcea0",
          }}
        />
      ),
    },
    {
      label: "Years in Business",
      key: "years",
      value: 10,
      icon: (
        <CalendarDays
          size={44}
          strokeWidth={1.25}
          style={{
            color: "#722F37",
          }}
        />
      ),
    },
  ];

  // State for keeping track of counts
  const [count, setCount] = useState({
    projects: 0,
    clients: 0,
    locations: 0,
    years: 0,
  });
  const [loading, setLoading] = useState(true); // Set loading state
  const [inView, setInView] = useState(false); // Track if the component is in view

  const statsRef = useRef(null); // Reference to the stats container

  useEffect(() => {
    // Function to increment the count
    const increment = (target, category) => {
      const duration = 3; // duration in seconds for the count animation
      const step = target / (duration * 60); // Number of increments per frame
      let current = 0;
      const interval = setInterval(() => {
        if (current < target) {
          current += step;
          setCount((prev) => ({
            ...prev,
            [category]: Math.floor(current),
          }));
        } else {
          clearInterval(interval); // Stop the interval once the target is reached
        }
      }, 1000 / 60); // 60 frames per second
    };

    // Use Intersection Observer to check if the component is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setLoading(false); // Hide the skeleton loader once the component is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    // Start observing the stats container
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    // Start counting when the component is in view
    if (inView) {
      stats.forEach((stat) => {
        increment(stat.value, stat.key);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [inView]);

  return (
    <motion.div
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
      ref={statsRef}
      className="  flex flex-col justify-center items-center py-10 lg:mt-12  lg:my-12 "
    >
      {/* <h2 className="font-bold text-2xl md:text-3xl mb-10 ">
        Experience and Expertize
      </h2> */}
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full  ">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center ">
            {loading ? (
              // Skeleton Loader
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="h-8 bg-gray-300 rounded w-24 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-32 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-24 animate-pulse"></div>
              </div>
            ) : (
              // Actual Content
              <>
                <div className="text-4xl font-bold">{stat.icon}</div>
                <div className="text-4xl font-extrabold text-[var(--main-color1)] mt-5">
                  {count[stat.key]}+
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mt-2">
                  {stat.label}
                </h3>
                <p className="text-sm text-gray-600 mt-1">And counting...</p>
              </>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HappyClientServicesCount;
