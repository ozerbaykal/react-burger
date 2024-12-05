import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <p> &copy; 2024 burger34.com</p>
        <div className="media">
          <FaInstagram />
          <FaFacebook />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
