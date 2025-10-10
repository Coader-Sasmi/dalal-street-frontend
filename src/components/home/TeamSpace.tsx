export default function TeamSpace() {
  return (
    <div className="main-container flex flex-col gap-8 py-10 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
        Team Space
      </h2>

      {/* Main grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* LEFT SIDE (large section) */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* Large main image */}
          <div className="w-full h-64 sm:h-80 md:h-[26rem] lg:h-[31rem] overflow-hidden rounded-xl">
            <img
              src="/Team.jpg"
              alt="team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Two smaller images below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="w-full h-48 sm:h-56 md:h-[14rem] lg:h-[18rem] overflow-hidden rounded-xl">
              <img
                src="/Team4.jpeg"
                alt="team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full h-48 sm:h-56 md:h-[14rem] lg:h-[18rem] overflow-hidden rounded-xl">
              <img
                src="/Team5.jpeg"
                alt="team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (3 stacked images) */}
        <div className="flex flex-col gap-6">
          <div className="w-full h-52 sm:h-56 md:h-[14rem] lg:h-[15.9rem] overflow-hidden rounded-xl">
            <img
              src="/Team1.jpeg"
              alt="team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-52 sm:h-56 md:h-[14rem] lg:h-[15.9rem] overflow-hidden rounded-xl">
            <img
              src="/Team2.jpeg"
              alt="team"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-52 sm:h-56 md:h-[14rem] lg:h-[15.9rem] overflow-hidden rounded-xl">
            <img
              src="/Team3.jpeg"
              alt="team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
