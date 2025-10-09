
export default function TeamSpace() {
  return (
    <div className="main-container flex flex-col gap-8 py-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 text-center">Team Space</h2>

        <div className="flex flex-col md:flex-row w-full gap-6">
        {/* Large image */}
        <div className="w-full md:w-3/4 flex flex-col gap-6">
            <img
            src="/Team.jpg"
            alt="team"
            className="rounded-xl w-full h-80 md:h-[29rem] object-cover"
            />
            <div className="flex md:flex-row flex-col gap-6">
            <img
            src="/Team4.jpeg"
            alt="team"
            className="rounded-xl w-full h-80 md:h-[16rem] object-cover"
            />
            <img
            src="/Team5.jpeg"
            alt="team"
            className="rounded-xl w-full h-80 md:h-[16rem] object-cover"
            />

            </div>
        </div>

        {/* Small images */}
        <div className="w-full md:w-1/4 flex flex-col gap-4 sm:gap-6">
            <img
            src="/Team1.jpeg"
            alt="team"
            className="rounded-xl w-full h-80 md:h-[14.5rem] object-cover"
            />
            <img
            src="/Team2.jpeg"
            alt="team"
            className="rounded-xl w-full h-80 md:h-[14.5rem] object-cover"
            />
            <img
            src="/Team3.jpeg"
            alt="team"
            className="rounded-xl w-full h-80 md:h-[14.5rem] object-cover"
            />
        </div>
        </div>

    </div>
  )
}
