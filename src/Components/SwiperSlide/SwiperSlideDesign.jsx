import { animated, useSpring } from "@react-spring/web";
import { Link } from "react-router";

const SwiperSlideDesign = ({ game }) => {
  // Image animation: slow zoom in and out continuously
  const imageStyle = useSpring({
    from: { transform: "scale(1.1)" },
    to: { transform: "scale(1)" },
    config: { duration: 4000 }, // slower for smooth effect
    loop: { reverse: true }, // continuous back-and-forth
  });

  // Content animation: fade & slide continuously
  const contentStyle = useSpring({
    from: { opacity: 0, transform: "translateY(10px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { duration: 1200 },
    loop: { reverse: true }, // continuous looping
  });

  return (
    <div className="relative overflow-hidden">
      <animated.img
        style={imageStyle}
        src={game.coverPhoto}
        alt={game.title}
        className="w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px] object-cover rounded-xl"
      />

      <animated.div
        style={contentStyle}
        className="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-center text-white p-4 sm:p-6 md:p-8"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 text-center px-2">
          {game.title}
        </h2>
        <Link
          to="/allGames"
          className="btn border-0 bg-[linear-gradient(to_right,#FF3A3A,#5B5BFF)] text-white mt-4 px-4 py-2 text-sm sm:text-base md:text-lg rounded-md tracking-wide transition-transform transform hover:scale-105"
        >
          Download Now
        </Link>
      </animated.div>
    </div>
  );
};

export default SwiperSlideDesign;



