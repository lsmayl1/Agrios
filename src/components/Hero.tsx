import background from "../assets/images/hero/background-image.png";
import "../assets/css/Hero.css";
import wheat from "../assets/images/hero/hero-element.png";
import future01 from "../assets/images/hero/future01.png";
import future02 from "../assets/images/hero/future02.png";
import future03 from "../assets/images/hero/future03.png";
import introducsion from "../assets/images/hero/introducstion_img.png";
import basket from "../assets/images/hero/introducstion_img2.svg";
import searchlogo from "../assets/images/hero/introducstion_img3.svg";
import tick from "../assets/images/hero/tick.svg";
function Hero() {
  return (
    <>
      <div className="wrapper">
        <div className="herocontainer">
          <div className="background">
            <img src={background} alt="" />
          </div>
          <div className="container hero">
            <div className="heroBanner">
              <div className="heading">
                <h5>WELCOME TO AGRIOS FARMING</h5>
              </div>
              <div className="subheadingtitle">
                <h1>
                  Agriculture <span style={{ color: "#EEC044" }}>&</span>
                  <br />
                  Eco Farming
                </h1>
              </div>
              <div className="subheading">
                <h5>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus,
                  <br />
                  luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </h5>
              </div>
              <div className="call-to-action">
                <div className="button">
                  <button>
                    <p className="btntxt">Discover More</p>
                  </button>
                </div>
                <div className="actionimg">
                  <img src={wheat} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container cards">
          <div className="card">
            <div className="cardheading">
              <span style={{ color: "#EEC044" }}>Feature 01</span>
            </div>
            <div className="cardsubheading">
              <h5>
                We're using a<br />
                new technology
              </h5>
            </div>
            <div className="cardimg">
              <img src={future01} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="cardheading">
              <span style={{ color: "#EEC044" }}>Feature 02</span>
            </div>
            <div className="cardsubheading">
              <h5>
                Good in smart
                <br />
                organic services
              </h5>
            </div>
            <div className="cardimg">
              <img src={future02} alt="" />
            </div>
          </div>
          <div className="card">
            <div className="cardheading">
              <span style={{ color: "#EEC044" }}>Feature 03</span>
            </div>
            <div className="cardsubheading">
              <h5>
                Reforming
                <br />
                in the systems
              </h5>
            </div>
            <div className="cardimg">
              <img src={future03} alt="" />
            </div>
          </div>
        </div>
        <div className="container introducstionsection">
          <div className="introducstion_img">
            <img src={introducsion} alt="" />
          </div>
          <div className="introducstion_content">
            <div className="content-title">
              <h5>Our Introductions</h5>
            </div>
            <div className="content-header">
              <h1>
                Agriculture & Organic <br /> Product Farm
              </h1>
            </div>
            <div className="content-info">
              <h5>Agrios is the largest global organic farm.</h5>
            </div>
            <div className="content-desc">
              <p>
                There are many variations of passages of lorem ipsum available
                but the majority have suffered alteration in some form by
                injected humor or random word which don’t look even.
              </p>
            </div>
            <div className="content-area">
              <div className="item">
                <div className="item_icon">
                  <img src={basket} alt="" />
                </div>
                <div className="content_subtitle">
                  <p>
                    Growing fruits <br /> vegetables
                  </p>
                </div>
              </div>
              <div className="item">
                <div className="item_icon">
                  <img src={searchlogo} alt="" />
                </div>
                <div className="content_subtitle">
                  <p>
                    Tips for ripening <br />
                    your fruits
                  </p>
                </div>
              </div>
            </div>
            <div className="introducsion_list">
              <ul>
                <li>
                  <img src={tick} alt="" />
                  <h5>Lorem Ipsum is not simply random text.</h5>
                </li>
                <li>
                  <img src={tick} alt="" />
                  <h5>Making this the first true generator on the internet.</h5>
                </li>
              </ul>
            </div>
            <div className="introbutton">
              <button>Discover More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
