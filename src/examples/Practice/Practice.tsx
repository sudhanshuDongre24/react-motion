import { useMotionValue, motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

const cardData = [
  { id: 1, title: "Card 1", content: "This is the first card" },
  { id: 2, title: "Card 2", content: "This is the second card" },
  { id: 3, title: "Card 3", content: "This is the third card" },
];

const Practice = () => {
  const [cards, setCards] = useState(cardData);

  const handelSwipe = (id, direction) => {
    console.log(`Card ${id} swipe ${direction}`);
    setCards((prevCard) => prevCard.filter((card) => card.id !== id));
  };

  const reorderCard = (dragIndex, hoverIndex) => {
    const reordered = Array.from(cards);
    const [moved] = reordered.splice(dragIndex, 1);
    reordered.splice(hoverIndex, 0, moved);
    setCards(reordered);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-300 p-4">
      <h1 className="text-2xl font-bold mb-6">Swipable Card</h1>
      <div className="w-ful max-w-md space-y-4 relative flex gap-10">
        <AnimatePresence>
          <div className="flex flex-col">
            {cards.map((card, index) => (
              <motion.div
                key={card.id}
                className="p-4 bg-white rounded-lg shadow-lg cursor-pointer my-4"
                whileHover={{ scale: 1.05, zIndex: 1 }}
                whileTap={{ scale: 0.95 }}
                drag
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(event, info) => {
                  if (info.offset.x > 100) handelSwipe(card.id, "right");
                  if (info.offset.x < -100) handelSwipe(card.id, "left");
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{
                  top: index * 20,
                  left: 0,
                  right: 0,
                }}
              >
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p>{card.content}</p>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Practice;
