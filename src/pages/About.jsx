import BannerImage from "../assets/images/1beef.jpg";
const About = () => {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem porro
          enim ipsam provident dolor, accusantium deserunt sapiente laborum
          ducimus ex ut numquam sed, et suscipit ullam ipsum libero repellendus
          quae.
        </p>
      </div>
    </div>
  );
};

export default About;
