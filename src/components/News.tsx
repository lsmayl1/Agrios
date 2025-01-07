import comment from "/image/profile.svg";
import profile from "/image/comment.svg";
function News() {
  return (
    <div>
      <div className="container flex justify-center h-[658px] mt-[113px] w-[1200px] flex-col">
        <div className="flex flex-col text-center justify-center">
          <h5 className="font-grace text-[24px] text-EEC044">From the Blog</h5>
          <h1 className="font-manrope font-extrabold text-[48px] text-1F1E17">
            News & Articles
          </h1>
        </div>
        <div className="flex justify-center gap-[30px] mt-[50px]">
          <div className="bg-newscard1 w-[369.98px] h-[514px]  rounded-[10px] flex shadow-lg">
            <div className="bg-white w-full h-[214px] mt-auto rounded-b-[10px] flex flex-col justify-top items-center">
              <div className="mb-5 -mt-5">
                <div className="w-[134.77px] h-[40px] bg-4BAF47 rounded-[10px] text-center flex justify-center items-center ">
                  <h1 className="font-manrope font-bold text-[14px] text-white">
                    05 July 2022
                  </h1>
                </div>
              </div>
              <div className="flex gap-[35px]">
                <div className="flex gap-2">
                  <img src={profile} alt="" />
                  <h1>Kevin Martin</h1>
                </div>
                <div className="flex gap-2">
                  <img src={comment} alt="" />
                  <h1>1 Comment</h1>
                </div>
              </div>
              <div className="flex text-center w-[245px] mt-5">
                <p className="font-manrope font-extrabold text-[24px] tex-center">
                  Bringing Food Production Back To Cities
                </p>
              </div>
            </div>
          </div>
          <div className="bg-newscard2 w-[369.98px] h-[514px]  rounded-[10px] flex shadow-lg">
            <div className="bg-white w-full h-[214px] mt-auto rounded-b-[10px] flex flex-col justify-top items-center">
              <div className="mb-5 -mt-5">
                <div className="w-[134.77px] h-[40px] bg-4BAF47 rounded-[10px] text-center flex justify-center items-center ">
                  <h1 className="font-manrope font-bold text-[14px] text-white">
                    05 July 2022
                  </h1>
                </div>
              </div>
              <div className="flex gap-[35px]">
                <div className="flex gap-2">
                  <img src={profile} alt="" />
                  <h1>Kevin Martin</h1>
                </div>
                <div className="flex gap-2">
                  <img src={comment} alt="" />
                  <h1>0 Comment</h1>
                </div>
              </div>
              <div className="flex text-center w-[245px] mt-5">
                <p className="font-manrope font-extrabold text-[24px] tex-center">
                  The Future of Farming, Smart Irrigation Solutions
                </p>
              </div>
            </div>
          </div>
          <div className="bg-newscard3 w-[369.98px] h-[514px]  rounded-[10px] flex shadow-lg">
            <div className="bg-white w-full h-[214px] mt-auto rounded-b-[10px] flex flex-col justify-top items-center">
              <div className="mb-5 -mt-5">
                <div className="w-[134.77px] h-[40px] bg-4BAF47 rounded-[10px] text-center flex justify-center items-center ">
                  <h1 className="font-manrope font-bold text-[14px] text-white">
                    05 July 2022
                  </h1>
                </div>
              </div>
              <div className="flex gap-[35px]">
                <div className="flex gap-2">
                  <img src={profile} alt="" />
                  <h1>Kevin Martin</h1>
                </div>
                <div className="flex gap-2">
                  <img src={comment} alt="" />
                  <h1>0 Comment</h1>
                </div>
              </div>
              <div className="flex text-center w-[245px] mt-5">
                <p className="font-manrope font-extrabold text-[24px] tex-center">
                  Agronomy and relation to Other Sciences
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-bgMilk w-full h-[234.5px] mt-[120px]"></div>
    </div>
  );
}

export default News;
