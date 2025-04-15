import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeartIcon, StarIcon } from '@heroicons/react/solid';

export const Card = ({ onClick }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleHeartPress = () => {
    setIsLiked(!isLiked);
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300);
  };

  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl overflow-hidden shadow-lg shadow-black/20 cursor-pointer"
    >
      <div className="relative w-full">
        <img
          src="https://fastly.picsum.photos/id/931/3000/2000.jpg?hmac=jCGUNVvmitTF0RmikgMPadC8ulo38D6ZtPt6caK_aHw"
          alt="Paint Ball"
          className="w-full aspect-square object-cover"
        />

        <motion.div
          animate={animate ? { scale: 1.2 } : { scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="absolute right-5 top-5 bg-white rounded-full p-2 shadow-md"
        >
          <button onClick={(e) => { e.stopPropagation(); handleHeartPress(); }}>
            <HeartIcon
              className={`w-6 h-6 ${isLiked ? 'text-red-500' : 'text-white stroke-black stroke-2'}`}
            />
          </button>
        </motion.div>
      </div>

      <div className="p-2">
        <p className="text-lg font-semibold">Paint Ball Nord Italia</p>
        <div className="flex items-center space-x-1 mt-1">
          {Array(4).fill(null).map((_, index) => (
            <StarIcon key={index} className="w-6 h-6 text-yellow-400" />
          ))}
        </div>
        <p className="text-lg font-bold mt-2">A partire da 20$</p>
      </div>
    </div>
  );
};
