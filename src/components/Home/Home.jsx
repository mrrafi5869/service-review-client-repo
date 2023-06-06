import HireMe from "./HireMe/HireMe";
import Carousel from './Carousel/Carousel';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';
import ImageSwiper from "./Swiper/ImageSwiper";
import AutoScroll from "./AutoSlider/AutoScroll";
import ShowCase from "./ShowCase/ShowCase";
import Couple from "./Couple/Couple";
import Edit from "./Edit/Edit";
import PortfolioVideo from "./PortfolioVideo/PortfolioVideo";
import MakeOrder from "./MakeOrder/MakeOrder";

const Home = () => {

  return (
    <>
      <Carousel></Carousel>
      <Services></Services>
      <Couple></Couple>
      <HireMe></HireMe>
      <ShowCase></ShowCase>
      <Edit></Edit>
      <PortfolioVideo></PortfolioVideo>
      <AutoScroll></AutoScroll>
      <Gallery></Gallery>
      <ImageSwiper></ImageSwiper>
      <MakeOrder></MakeOrder>
    </>
  );
};

export default Home;
