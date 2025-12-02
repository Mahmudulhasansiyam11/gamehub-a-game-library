// Banner.jsx
import { Suspense, use, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperSlideDesign from "../SwiperSlide/SwiperSlideDesign";

const gamePromise = fetch("/game.json").then((res) => res.json());

const Banner = () => {
  const gameData = use(gamePromise);
  // console.log(gameData);

  const [currentSlide, setCurrentSlide] = useState(0);

  // Filter only popular games
  const popularGames = gameData.filter((game) => game.popular === true);
  //   console.log(popularGames);

  return (
    <div className="mt-5">
      <Swiper
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="rounded-xl shadow-lg max-h-[500px]"
      >
        {popularGames.map((game, index) => (
          <Suspense>
            <SwiperSlide key={game.id}>
              <SwiperSlideDesign
                key={game.id}
                game={game}
                active={currentSlide === index}
              ></SwiperSlideDesign>
            </SwiperSlide>
          </Suspense>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
