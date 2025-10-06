"use client";

import { Apps, ArrowCircleDown, CheckCircle, EmojiObjects, Groups, ListAlt, MilitaryTech } from "@mui/icons-material";

export default function CreditsFeatures() {
  return (
    <section className="main-container">
        
        {/* Top Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 text-center">
          
          {/* Feature 1 */}
          <div className="flex flex-col justify-start items-start gap-5">
            <div className="bg-blue-600 rounded-full p-2 w-fit">
            <ArrowCircleDown className="text-white text-6xl!" />
            </div>
            <h3 className="text-xl text-start font-bold text-gray-800">Receive credits upon subscribing.</h3>
            <p className="mt-2 text-gray-600 text-start">
              {`Upon subscribing, you'll receive a set number of credits to access our research-backed trade calls.`}
            </p>
          </div>

          {/* Feature 2 */}
            <div className="flex flex-col justify-start items-start gap-5">
            <div className="bg-yellow-600 rounded-full p-2 w-fit">
            <Apps className="text-white text-6xl!" />
            </div>
            <h3 className="text-xl text-start font-bold text-gray-800">Credits are deducted only for successful trades.</h3>
            <p className="mt-2 text-gray-600 text-start">
              {`Credits are only deducted when a trade is successful, ensuring you pay solely for successful outcomes.`}
            </p>
          </div>

          {/* Feature 3 */}
            <div className="flex flex-col justify-start items-start gap-5">
            <div className="bg-green-600 rounded-full p-2 w-fit">
            <CheckCircle className="text-white text-6xl!" />
            </div>
            <h3 className="text-xl text-start font-bold text-gray-800">Credits remain intact if the trade isn’t successful.</h3>
            <p className="mt-2 text-gray-600 text-start">
              {`Your credits are preserved if a trade doesn't reach expected target.`}
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 mt-16">
          <div className=" shadow rounded-xl p-6 flex flex-col gap-3 justify-start items-start">
            <ListAlt className="text-blue-600 text-5xl!" />
            <h3 className="text-4xl font-bold text-blue-600">100+</h3>
            <p className="">Registrations Daily</p>
          </div>
          <div className=" shadow rounded-xl p-6 flex flex-col gap-3 justify-start items-start">
            <MilitaryTech className="text-blue-600 text-5xl!" />
            <h3 className="text-4xl font-bold text-blue-600">20+ Years</h3>
            <p className="">Industry Experience</p>
          </div>
          <div className=" shadow rounded-xl p-6 flex flex-col gap-3 justify-start items-start">
            <Groups className="text-blue-600 text-5xl!" />
            <h3 className="text-4xl font-bold text-blue-600">3.4 Lakhs+</h3>
            <p className="">Subscribers</p>
          </div>
          <div className=" shadow rounded-xl p-6 flex flex-col gap-3 justify-start items-start">
            <EmojiObjects className="text-blue-600 text-5xl!" />
            <h3 className="text-4xl font-bold text-blue-600">5 Lakhs +</h3>
            <p className="">Total Research Ideas</p>
          </div>
        </div>

    </section>
  );
}
