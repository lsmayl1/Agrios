function VideoSection() {
  return (
    <div className="relative mt-20">
      <div className="container">
        <div className="flex justify-center align-center">
          <div className="w-[1170px] h-[184px] bg-4BAF47 rounded-[10px] flex justify-center  items-center">
            <ul className="flex gap-[130px] font-medium font-manrope text-white">
              <li>Agriculture Products</li>
              <li>Projects Completed</li>
              <li>Satisfied Clients</li>
              <li>Experts Farmers</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-plantsimg w-full bg-center -mt-[130px] h-[691px] bg-cover bg-no-repeat flex">
        <div className="container">
          <h1 className="text-[70px] font-manrope font-extrabold text-white w-[490px] mt-[180px]">Agriculture Matters to the Future of Development</h1>
        </div>
      </div>
    </div>
    
  );
}

export default VideoSection;
