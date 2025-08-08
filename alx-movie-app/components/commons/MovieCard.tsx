import { MovieProps } from "@/interfaces";
// import Image from "next/image";

const MovieCard: React.FC<MovieProps> = ({
  title,
  posterImage,
  releaseYear,
}) => {
  return (
    <div className="h-[563px]">
      <div>
        <img
          className="h-[430px] w-full rounded-md hover:cursor-pointer"
          src={posterImage}
          width={400}
          height={300}
          alt={title}
        />
      </div>
      <div className="flex justify-between py-4">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-xl text-[#E2D609]">{releaseYear}</p>
      </div>
    </div>
  );
};

export default MovieCard;
