import HireMe from "./HireMe/HireMe";
import Carousel from './Carousel/Carousel';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';

const Home = () => {

  return (
    <>
      {/* carousel */}
      <Carousel></Carousel>
      {/* services */}
      <Services></Services>
      {/* Reason for hire us */}
      <HireMe></HireMe>
      {/* gallery/Photos */}
      <Gallery></Gallery>
    </>
  );
};

export default Home;
