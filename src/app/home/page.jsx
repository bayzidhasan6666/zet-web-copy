import Banner from './Banner';
import TopBrands from './TopBrands';
import ProductsOnZet from './ProductsOnZet';
import WhyChooseUs from './WhyChooseUs';
import ZEffect from './ZEffect';
import EasySteps from './EasySteps';
import Slider from '@/components/Slider';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Slider></Slider>
      <TopBrands></TopBrands>
      <ProductsOnZet></ProductsOnZet>
      <ZEffect></ZEffect>
      <WhyChooseUs></WhyChooseUs>
      <EasySteps></EasySteps>
    </div>
  );
};

export default Home;
