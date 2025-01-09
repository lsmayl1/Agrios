import background from "../assets/images/hero/background-image.png";

import "../assets/css/index.css";
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
      <div className="flex flex-col order-3 -mt-4 ">
        <div className="">
          <div className="bg-heroback w-full h-screen bg-no-repeat  bg-center  bg-cover">
            <div className="container">
              <div className="pt-[180px] flex flex-col flex-wrap ">
                <div className="font-manrope font-semibold text-white text-[16px] leading-[30px] ">
                  <h5>WELCOME TO AGRIOS FARMING</h5>
                </div>
                <div className="">
                  <h1
                    className="font-grace  text-[120px] max-sm:text-[80px] 
                max-[430px]:text-[50px] 

                leading-[110px] text-white"
                  >
                    Agriculture <span style={{ color: "#EEC044" }}>&</span>
                    <br /> Eco Farming
                  </h1>
                </div>
                <div className="">
                  <h5 className="font-manrope font-semibold text-white text-16px max-sm:text-[11px] max-w-[400px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus,luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </h5>
                </div>
                <div className="flex mt-[44px]">
                  <div className="bg-4BAF47 w-[200px] h-[60px] rounded-[10px] text-center justify-center flex text-white">
                    <button>
                      <p className="font-manrope font-bold text-[14px] leading-[30px]">
                        Discover More
                      </p>
                    </button>
                  </div>
                  <div className="pl-[20px]">
                    <img src={wheat} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container  -mt-[60px] gap-[15px] max-md:flex-col flex-center">
          <div className="bg-white w-[370px] h-[264px] rounded-[10px] shadow-lg flex flex-col items-center justify-center">
            <div className="mt-[48px] mb-[29px]ing">
              <span className="font-grace text-[24px] text-EEC044 ">
                Feature 01
              </span>
            </div>
            <div className="text-center">
              <h5 className="font-manrope font-extrabold text-[24px] leading-[30px]">
                We're using a<br />
                new technology
              </h5>
            </div>
            <div className="cardimg">
              <img src={future01} alt="" />
            </div>
          </div>
          <div className="bg-white w-[370px] h-[264px] rounded-[10px] shadow-lg flex flex-col items-center justify-center">
            <div className="mt-[48px] mb-[29px]ing">
              <span className="font-grace text-[24px] text-EEC044 ">
                Feature 02
              </span>
            </div>
            <div className="text-center">
              <h5 className="font-manrope font-extrabold text-[24px] leading-[30px]">
                Good in smart <br />
                organic services
              </h5>
            </div>
            <div className="cardimg">
              <img src={future02} alt="" />
            </div>
          </div>
          <div className="bg-white w-[370px] h-[264px] rounded-[10px] shadow-lg flex flex-col items-center justify-center">
            <div className="mt-[48px] mb-[29px]ing">
              <span className="font-grace text-[24px] text-EEC044 ">
                Feature 03
              </span>
            </div>
            <div className="text-center">
              <h5 className="font-manrope font-extrabold text-[24px] leading-[30px]">
                Reforming <br />
                in the systems
              </h5>
            </div>
            <div className="cardimg">
              <img src={future03} alt="" />
            </div>
          </div>
        </div>

        <div className="container flex mt-[120px] mx-auto">
          <div className="w-[600px] flex-1 max-lg:hidden">
            <img src={introducsion} alt="" />
          </div>
          <div className="flex-1 hero">
            <h5 className="font-grace  text-[24px] text-EEC044 ">
              Our Introductions
            </h5>
            <h1 className="font-manrope font-extrabold text-[48px] leading-[60px] text-1F1E17 max-xl:text-[24px] max-xl:leading-[35px]">
              Agriculture & Organic <br /> Product Farm
            </h1>

            <h5
              className="font-manrope font-extrabold text-[26px] leading-[66px] 
            text-4BAF47 max-xl:leading-[35px] max-[430px]:text-[13px]"
            >
              Agrios is the largest global organic farm.
            </h5>

            <p
              className="font-manrope font-medium text-[16px] leading-[25px] 
            text-878680 mb-[41px] max-xl:mb-[20px] w-[500px] max-sm:w-[400px] max-[430px]:w-[300px]"
            >
              There are many variations of passages of lorem ipsum available but
              the majority have suffered alteration in some form by injected
              humor or random word which don’t look even.
            </p>

            <div className="flex">
              <div className="flex">
                <div className="flex">
                  <img src={basket} alt="" />
                </div>
                <div className="ml-[20px] flex items-center">
                  <p
                    className="font-manrope font-extrabold text-[20px] leading-[28px] 
            text-1F1E17  dynamic-size"
                  >
                    Growing fruits <br /> vegetables
                  </p>
                </div>
              </div>
              <div className="flex ml-4">
                <div className="">
                  <img src={searchlogo} alt="" />
                </div>
                <div className="ml-[20px] flex items-center">
                  <p
                    className="font-manrope font-extrabold text-[20px] leading-[28px] 
            text-1F1E17   dynamic-size"
                  >
                    Tips for ripening <br />
                    your fruits
                  </p>
                </div>
              </div>
            </div>
            <div className="flex mt-[5px]">
              <ul>
                <li className="flex gap-[15px]">
                  <img src={tick} alt="" />
                  <h5
                    className="font-manrope font-semibold text-[16px] leading-[30px] 
            text-1F1E17"
                  >
                    Lorem Ipsum is not simply random text.
                  </h5>
                </li>
                <li className="flex gap-[15px]">
                  <img src={tick} alt="" />
                  <h5
                    className="font-manrope font-semibold text-[16px] leading-[30px] 
            text-1F1E17"
                  >
                    Lorem Ipsum is not simply random text.
                  </h5>
                </li>
              </ul>
            </div>
            <div className="mt-[20px] bg-4BAF47 w-[200px] h-[60px] rounded-[10px] text-center justify-center flex text-white  ">
              <button className="">Discover More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
