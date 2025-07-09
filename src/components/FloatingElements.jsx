import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Users, Star, Heart, Trophy } from 'lucide-react';

const FloatingElements = () => {
  const elements = [
    { Icon: BookOpen, color: 'text-blue-400', delay: 0 },
    { Icon: Award, color: 'text-yellow-400', delay: 0.5 },
    { Icon: Users, color: 'text-green-400', delay: 1 },
    { Icon: Star, color: 'text-purple-400', delay: 1.5 },
    { Icon: Heart, color: 'text-red-400', delay: 2 },
    { Icon: Trophy, color: 'text-orange-400', delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute ${element.color} opacity-20`}
          initial={{ 
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            scale: 0
          }}
          animate={{
            y: [0, -20, 0],
            scale: [0.5, 1, 0.5],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
          style={{
            left: `${10 + (index * 15)}%`,
            top: `${20 + (index * 10)}%`
          }}
        >
          <element.Icon size={24 + Math.random() * 16} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;