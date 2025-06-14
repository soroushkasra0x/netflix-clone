import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import info_icon from "../../assets/info_icon.png";
import play_icon from "../../assets/play_icon.png";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TitleCards from "../../components/TitleCards/TitleCards";
import "./Home.css"; // Import the CSS file for styling
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient, a young man living in
            modern istanbul imbarks on a quest to save the city from an imortal
            enemy.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} catogory={"top_rated"} />
        <TitleCards title={"Only On Netflix"} catogory={"popular"} />
        <TitleCards title={"Upcoming"} catogory={"upcoming"} />
        <TitleCards title={"Top Pics For You"} catogory={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
