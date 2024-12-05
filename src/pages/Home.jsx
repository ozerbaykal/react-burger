import BannerImage from "../assets/images/banner.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1>Burger 34</h1>
        <p>
          Delicious Hamburgers <br /> with 12 Spicy Mix
        </p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
