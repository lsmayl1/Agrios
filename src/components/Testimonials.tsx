import avatar from "/image/avatar.png"
function Testimonials() {
  return (
    <div className="bg-bgMilk w-full h-[700px] mt-[120px]">
      <div className="container pt-[110px] flex justify-center ">
        <div className="flex-1 ">
          <div>
            <h5 className="font-grace text-[36px] text-EEC044">
              Our Testimonials
            </h5>
          </div>
          <div>
            <h1 className="font-manrope font-extrabold text-[48px] text-1F1E17 max-xl:text-[30px]">
              What They're Talking About Agrios
            </h1>
          </div>
          <div className="mt-[40px]">
            <p className="font-manrope font-medium text-[16px] text-878680 max-w-[500px]  ">
              There are many variations of passages of available but the
              majortity have sufferred alteration in some form by injected humor
              or random word which don't look even.
            </p>
          </div>
          <div className="mt-[50px]">
            <button className="w-[241.59px] h-[60px] bg-4BAF47 rounded-[10px] text-white">
              View All Testimonials
            </button>
          </div>
        </div>
        <div className=" flex justify-center h-1/2 flex-1">

          <div className=" p-[50px] h-auto  bg-white rounded-[10px] flex flex-wrap max-xl:flex-nowrap max-xl:flex-col max-xl:items-center">
            <div className="w-3/4  justify-between flex flex-col">
              <h1 className="font-manrope leading-7 font-medium text-[18px] max-xl:text-[
              0px] max-xl:leading-2">
                There are many variations of passages of available but the
                majority have suffered alteration in some form by injected humor
                or random word which don't look even.
              </h1>
              <div className="flex order-3 max-xl:order-2 justify-between  max-lg:items-center max-xl:pt-[20px]">
                <h1 className="font-manrope font-extrabold text-[24px]">Bonnie Tolbert</h1>
                <h5 className="font-manrope font-extrabold text-[24px]">^/^/^/^/^/^</h5>
              </div>
            </div>
            <div className="flex justify-center  items-center max-xl:pt-[20px]  order-2 flex-1">
                
                <img src={avatar} alt="" />
             
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
