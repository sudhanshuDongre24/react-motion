import { useMotionValue, motion } from "motion/react";
import React, { useState } from "react";

const cardData = [
  { id: 1, title: "Card 1", content: "This is the first card" },
  { id: 2, title: "Card 2", content: "This is the second card" },
  { id: 3, title: "Card 3", content: "This is the third card" },
];

const Practice = () => {
  const [cards, setCards] = useState(cardData);

  const handelSwipe = () => {
    setCards((prevCard) => prevCard.filter((card) => card.id !== id));
  };

  const reorderCard = (dragIndex, hoverIndex) => {
    const reordered = Array.from(cards);
    const [moved] = reorderCard.splice(dragIndex, 1);
    reordered.splice(hoverIndex, 0, moved);
    setCards(reordered);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-4">
      <motion.div
        className="w-full max-w-sm p-4 bg-white rounded-lg shadow-lg cursor-pointer relative"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.5}
        onDragEnd={handelSwipe}
      >
        <div className="text-center">
          <h1>Swipe me</h1>
          <p>Swipe to right to reveal or left to hide!</p>
        </div>

        {revealed && (
          <motion.div
            className="absolute inset-0 bg-blue-500 flex items-center justify-center text-white text-lg rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Content Revealed
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Practice;
