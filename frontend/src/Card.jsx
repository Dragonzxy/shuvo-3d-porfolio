import { motion } from "framer-motion";
import { useState } from "react";

export default function CardFlip({delay ,img}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
    style={{animationDelay: `${delay}s`}} className="w-full  h-screen perspective flex 
    card 
    items-center justify-center  cursor-pointer" onClick={() => setFlipped(!flipped)}>

      <motion.div
        className="relative w-[345px] h-[500px]  border-5  border-black  rounded-2xl"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d", }}
  
      >
        {/* Front */}
        <img src="card.png" className="absolute w-full h-full bg-blue-500 text-white flex items-center justify-center backface-hidden rounded-xl shadow-lg"/>
       

        {/* Back */}
        <div className="absolute w-full h-full bg-gray-300 text-black flex items-center justify-center backface-hidden rounded-xl shadow-lg relative
       bg-bottom bg-no-repeat bg-contain"
      
          style={{ transform: "rotateY(180deg)" ,
            backgroundImage:`url(${img})`,
            backgroundSize:"cover"
          }}>


        </div>
      </motion.div>
    </div>
  );
}
