function VideoSection() {
  return (
    <div className="mt-[100px]">
      <div className="bg-plantsimg w-full bg-center h-screen bg-cover  bg-no-repeat flex flex-col">
        <div className="container -mt-[80px]">
          <div className="flex justify-center align-center flex-wrap">
            <div className="w-[1170px]  h-[184px] bg-4BAF47 rounded-[10px] flex justify-center  items-center">
              <ul className="flex justify-center gap-y-[15px] font-medium  max-lg:text-[15px]  max-md:text-[13px]  font-manrope text-white flex-wrap space-x-10 max-xl:space-x-8 max-lg:space-x-6 max-md:space-x-4 ">
                <li>Agriculture Products</li>
                <li>Projects Completed</li>
                <li>Satisfied Clients</li>
                <li>Experts Farmers</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <h1 className="text-[70px] max-md:text-[60px] max-sm:text-[40px] font-manrope font-extrabold text-white max-w-[490px] mt-[180px]">
            Agriculture Matters to the Future of Development
          </h1>
        </div>
      </div>
    </div>
  );
}

export default VideoSection;
