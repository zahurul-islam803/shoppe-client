import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Header/Banner";
import Blog from "../Products/Blog";
import Deals from "../Products/Deals";
import Products from "../Products/Products";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>K-RITE Shoppe</title>
      </Helmet>
      <div className="mt-[69px]">
        <Banner></Banner>
      </div>
      <div>
        <Products></Products>
      </div>
      <div>
        <Deals></Deals>
      </div>
      <div>
        <Blog></Blog>
      </div>
    </>
  );
};

export default Home;