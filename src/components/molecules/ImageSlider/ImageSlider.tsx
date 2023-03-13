
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./ImageSlider.css";

// import required modules
import { Autoplay, Pagination} from "swiper";

type image = {
	url: string;
	alt: string;
}

const ImageSlider = ({images}:{images:image[]}) => {
	return (
		<>
			 <Swiper
			 	slidesPerView={"auto"}
        spaceBetween={20}
				loop={true}
				centeredSlides={true}
				autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
				{
					images.map((img:image) => {
						return <SwiperSlide><img src={img.url} alt={img.alt}/></SwiperSlide>
					})
				}
      </Swiper>
		</>
	);
};

export default ImageSlider;
