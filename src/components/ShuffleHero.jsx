import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import image1 from "../assets/11.svg";
import image2 from "../assets/12.svg";
import image3 from "../assets/13.svg";
import image4 from "../assets/14.svg";
import image5 from "../assets/15.svg";
import image6 from "../assets/16.svg";

const ShuffleHero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <span className="block mb-4 text-xs md:text-sm text-indigo-500 font-medium">
          Welcome to Our Blog
        </span>
        <h3 className="text-4xl md:text-6xl font-semibold">
          Share Your Thoughts, Spark a Conversation
        </h3>
        <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
          Together, we can create a community that celebrates creativity and
          meaningful dialogue.
        </p>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: image1,
  },
  {
    id: 2,
    src: image2,
  },
  {
    id: 3,
    src: image3,
  },
  {
    id: 4,
    src: image4,
  },
  {
    id: 5,
    src: image5,
  },
  {
    id: 6,
    src: image6,
  },
  {
    id: 7,
    src: image1,
  },
  {
    id: 8,
    src: image2,
  },
  {
    id: 9,
    src: image3,
  },
  {
    id: 10,
    src: image4,
  },
  {
    id: 11,
    src: image5,
  },
  {
    id: 12,
    src: image6,
  },
  {
    id: 13,
    src: image1,
  },
  {
    id: 14,
    src: image2,
  },
  {
    id: 15,
    src: image3,
  },
  {
    id: 16,
    src: image4,
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default ShuffleHero;
