import HireMe from "./HireMe/HireMe";
import Carousel from './Carousel/Carousel';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';
import ImageSwiper from "./Swiper/ImageSwiper";
import AutoScroll from "./AutoSlider/AutoScroll";

const Home = () => {

  return (
    <>
      {/* carousel */}
      <Carousel></Carousel>
      {/* services */}
      <Services></Services>
      {/* Reason for hire us */}
      <HireMe></HireMe>
      <AutoScroll></AutoScroll>
      {/* gallery/Photos */}
      <Gallery></Gallery>
      {/* swiper */}
      <ImageSwiper></ImageSwiper>
    </>
  );
};

export default Home;
