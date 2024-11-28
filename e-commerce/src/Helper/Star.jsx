import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ star }) => {
  const ratings = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar className="text-yellow-500" />
        ) : star >= number ? (
          <FaStarHalfAlt className="text-yellow-500" />
        ) : (
          <AiOutlineStar className="text-yellow-500" />
        )}
      </span>
    );
  });

  return (
    <div className="relative group flex justify-center items-center">
      <div className="flex">{ratings}</div>
      {/* Tooltip */}
      <div className="absolute  bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-orange-500 text-white text-xs px-2 py-1 rounded shadow-lg">
        {star}
      </div>
    </div>
  );
};

export default Star;
