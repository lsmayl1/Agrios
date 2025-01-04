import "../assets/css/index.css";
function ServicesSection() {
  return (
    <>
      <div className="wrapper relative bg-bgMilk h-96">
        <div className="container relative mx-auto mt-16">
          <h1 className="text-EEC044 text-center text-2xl font-grace pt-[113px]">
            Our Services
          </h1>
        </div>
        <div className="container relative mx-auto">
          <h1 className="text-black font-manrope font-[800] text-[48px] text-center">
            What We Offer
          </h1>
        </div>

        <div className="container relative flex justify-center gap-[20px] mt-[60px] ">
          <div className="w-[270px] h-[430px] bg-card1img rounded-[10px] flex  justify-center items-end ">
            <div className="flex-col relative">
              <div className="w-[70px] h-[80px] left-1/2 transform -translate-x-1/2 top-[-40px] absolute bg-C5CE38 rounded-[10px] items-center flex items-center justify-center">
                <div className="bg-card1icon w-[50px] h-[50px] bg-no-repeat "></div>
              </div>

              <div className="w-[220px] h-[128px] bg-white rounded-[10px] mb-[45px] flex items-center justify-center pt-[10px]">
                <h1 className="font-manrope font-extrabold text-[20px] text-center">
                  Agriculture <br />
                  Products
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[430px] bg-card2img rounded-[10px] flex  justify-center items-end ">
            <div className="flex-col relative">
              <div className="w-[70px] h-[80px] left-1/2 transform -translate-x-1/2 top-[-40px] absolute bg-C5CE38 rounded-[10px] items-center flex items-center justify-center">
                <div className="bg-card2icon w-[50px] h-[50px] bg-no-repeat "></div>
              </div>

              <div className="w-[220px] h-[128px] bg-white rounded-[10px] mb-[45px] flex items-center justify-center pt-[10px]">
                <h1 className="font-manrope font-extrabold text-[20px] text-center">
                  Organic <br />
                  Products
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[430px] bg-card3img rounded-[10px] flex  justify-center items-end ">
            <div className="flex-col relative">
              <div className="w-[70px] h-[80px] left-1/2 transform -translate-x-1/2 top-[-40px] absolute bg-C5CE38 rounded-[10px] items-center flex items-center justify-center">
                <div className="bg-card3icon w-[50px] h-[50px] bg-no-repeat "></div>
              </div>

              <div className="w-[220px] h-[128px] bg-white rounded-[10px] mb-[45px] flex items-center justify-center pt-[10px]">
                <h1 className="font-manrope font-extrabold text-[20px] text-center">
                  Fresh <br />
                  Vegetables
                </h1>
              </div>
            </div>
          </div>
          <div className="w-[270px] h-[430px] bg-card4img rounded-[10px] flex  justify-center items-end ">
            <div className="flex-col relative">
              <div className="w-[70px] h-[80px] left-1/2 transform -translate-x-1/2 top-[-40px] absolute bg-C5CE38 rounded-[10px] items-center flex items-center justify-center">
                <div className="bg-card4icon w-[50px] h-[50px] bg-no-repeat "></div>
              </div>

              <div className="w-[220px] h-[128px] bg-white rounded-[10px] mb-[45px] flex items-center justify-center pt-[10px]">
                <h1 className="font-manrope font-extrabold text-[20px] text-center ">
                  Dairy <br />
                  Products
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServicesSection;
