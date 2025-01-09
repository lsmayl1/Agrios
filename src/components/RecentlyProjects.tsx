
function RecentlyProjects() {
  return (
    <div className="container mt-[50px] flex justify-center flex-col">
      <div className="flex flex-col text-center">
        <div>
          <h5 className="font-grace text-EEC044 text-[24px]">
            Recently Completed
          </h5>
        </div>
        <div>
          <h1 className="font-manrope font-extrabold  text-1F1E17 text-[48px]">
            Explore Projects
          </h1>
        </div>
      </div>
      <div className="flex justify-center gap-[20px] mt-10 max-xl:flex-wrap">
        <div className="w-[362px] h-[558px] bg-recentlyProjectsCard2 bg-no-repeat flex felx-col">
          <div className="mt-auto">
            <h1 className="font-manrope font-extrabold  text-white text-[30px] w-[163px] pb-[60px] px-[40px]	">
              Easy Harvesting
            </h1>
          </div>
        </div>
        <div className="w-[362px] h-[558px] bg-recentlyProjectsCard1 bg-no-repeat flex felx-col">
          <div className="mt-auto">
            <h1 className="font-manrope font-extrabold  text-white text-[30px] w-[163px] pb-[60px] px-[40px]	">
              Agriculture Farming
            </h1>
          </div>
        </div>
        <div className="w-[362px] h-[558px] bg-recentlyProjectsCard2 bg-no-repeat flex felx-col">
          <div className="mt-auto">
            <h1 className="font-manrope font-extrabold  text-white text-[30px] w-[163px] pb-[60px] px-[40px]	">
              Easy Harvesting
            </h1>
          </div>
        </div>
        <div className="w-[362px] h-[558px] bg-recentlyProjectsCard3 bg-no-repeat flex felx-col">
          <div className="mt-auto">
            <h1 className="font-manrope font-extrabold  text-white text-[30px] w-[163px] pb-[60px] px-[40px]	">
              Organic Solutions
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentlyProjects;
