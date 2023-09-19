import { StarIcon } from "@heroicons/react/24/outline";

const ProductRate = ({ avgRating, ratings }) => {
  const startNumber = avgRating;
  const ratingNumber = ratings;
  return (
    <div className="flex items-center">
      {Array.from({ length: startNumber }, (_, i) => {
        return (
          <StarIcon
            key={i}
            className=" stroke-[#F1B61F] fill-[#F1B61F] h-[20px]"
          />
        );
      })}
      {Array.from({ length: 5 - startNumber }, (_, i) => {
        return (
          <StarIcon
            key={i}
            className=" stroke-[#F1B61F] h-[20px]"
          />
        );
      })}
      <span className="ml-3 text-blue-600">{ratingNumber} ratings</span>
    </div>
  );
};

export default ProductRate;
