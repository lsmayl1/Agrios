import "../assets/css/Navbar.css";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/images/navbar/logo.png";
import twitterlogo from "../assets/images/navbar/Twitter.svg";
import instagramlogo from "../assets/images/navbar/Instagram.svg";
import facebooklogo from "../assets/images/navbar/FaceBook.svg";
import pinterestlogo from "../assets/images/navbar/Pinterest.svg";

import phonelogo from "../assets/images/navbar/Phone.svg";
import mailboxlogo from "../assets/images/navbar/mailbox.svg";
import locationpick from "../assets/images/navbar/locationpick.svg";

import background from "../assets/images/navbar/Section.png";

import searchicon from "../assets/images/navbar/Searchicon.svg";
import bucket from "../assets/images/navbar/bucket.svg";

function Navbar() {
  return (
    <>
      <div className="colorline">
        <div className="section greenline"></div>
        <div className="section yellowline"></div>
        <div className="section orangeline"></div>
      </div>
      <div className="wrapper">
        <nav className="navbar container">
          <div className="logosection">
            <a href="#">
              {" "}
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="socialmediasection">
            <ul className="sociallist">
              <li className="listelement">
                <div className="logoback">
                  <a href="#">
                    <img src={twitterlogo} alt="" />
                  </a>
                </div>
              </li>
              <li className="listelement">
                <div className="logoback">
                  <a href="#">
                    {" "}
                    <img src={pinterestlogo} alt="" />
                  </a>
                </div>
              </li>
              <li className="listelement">
                <div className="logoback">
                  <a href="#">
                    {" "}
                    <img src={facebooklogo} alt="" />
                  </a>
                </div>
              </li>
              <li className="listelement">
                <div className="logoback">
                  <a href="#">
                    <img src={instagramlogo} alt="" />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="contactsection">
            <div className="innersection">
              <div className="contactlogo">
                <img src={phonelogo} alt="" />
              </div>
              <div className="desc">
                <div className="contacttitle">
                  <h5>Call anytime</h5>
                </div>
                <div className="number ">
                  <h4>+ 98 (000) - 9630</h4>
                </div>
              </div>
            </div>
            <div className="pipesection">
              <div className="contactpipe"></div>
            </div>

            <div className="innersection">
              <div className="contactlogo">
                <img src={mailboxlogo} alt="" />
              </div>
              <div className="desc">
                <div className="contacttitle">
                  <h5>Send email</h5>
                </div>
                <div className="number">
                  <h4>ambed@agrios.com</h4>
                </div>
              </div>
            </div>

            <div className="pipesection">
              <div className="contactpipe"></div>
            </div>
            <div className="innersection">
              <div className="contactlogo">
                <img src={locationpick} alt="" />
              </div>
              <div className="desc">
                <div className="contacttitle">
                  <h5>380 St Kilda Road</h5>
                </div>
                <div className="number">
                  <h4>Melbourne, Australia</h4>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="headerwrapper">
          <div className="headerbackground">
            <div className="backimg">
              <img src={background} alt="" />
            </div>
          </div>

          <div className="header container">
            <div className="navlinks">
              <ul>
                <li>
                  Home
                  <div className="icon-container">
                    <span className="icon">
                      <IoIosArrowDown />
                    </span>
                    <div className="dropdown">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                      <a href="#">Option 3</a>
                    </div>
                  </div>
                </li>
                <li>
                  {" "}
                  <a href="#"> About</a>
                </li>
                <li>
                  Services
                  <div className="icon-container">
                    <span className="icon">
                      <IoIosArrowDown />
                    </span>
                    <div className="dropdown">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                      <a href="#">Option 3</a>
                    </div>
                  </div>
                </li>
                <li>
                  Projects
                  <div className="icon-container">
                    <span className="icon">
                      <IoIosArrowDown />
                    </span>
                    <div className="dropdown">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                      <a href="#">Option 3</a>
                    </div>
                  </div>
                </li>
                <li>
                  News
                  <div className="icon-container">
                    <span className="icon">
                      <IoIosArrowDown />
                    </span>
                    <div className="dropdown">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                      <a href="#">Option 3</a>
                    </div>
                  </div>
                </li>
                <li>
                  Shop
                  <div className="icon-container">
                    <span className="icon">
                      <IoIosArrowDown />
                    </span>
                    <div className="dropdown">
                      <a href="#">Option 1</a>
                      <a href="#">Option 2</a>
                      <a href="#">Option 3</a>
                    </div>
                  </div>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className="pipesection">
              <div className="contactpipe"></div>
            </div>
            <div className="searchbucket">
              <div className="searchicon">
                <img src={searchicon} alt="" />
              </div>
              <div className="bucket">
                <img src={bucket} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
