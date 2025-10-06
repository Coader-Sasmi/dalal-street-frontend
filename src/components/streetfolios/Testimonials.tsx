"use client";
import { ArrowBackIos, ArrowForwardIos, Star } from "@mui/icons-material";
import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "I've always struggled with choosing the right stocks. DalalStreet' curated portfolios take the guesswork out of it. I now follow a clear, research-backed strategy that keeps me focused on long-term growth.",
      name: "Ramesh I",
      location: "Mumbai",
      rating: 5,
    },
    {
      text: "DalalStreet helped me invest with confidence. Their expert-curated portfolios align perfectly with my financial goals. Highly recommended!",
      name: "Priya S",
      location: "Bangalore",
      rating: 5,
    },
    {
      text: "I love the transparency and ease of investing with DalalStreet. It's like having a personal financial advisor guiding me at every step.",
      name: "Arjun K",
      location: "Delhi",
      rating: 4,
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          What Our Investors Say
        </h2>
        <p className="text-gray-600 mb-10">
          Don’t just take our word for it, here’s what real investors have to
          say about their experience with Portfolios by DalalStreet.
        </p>

        {/* Slider */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 p-3 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <ArrowBackIos fontSize="small" />
          </button>

          {/* Testimonial Content */}
          <div className="px-10">
            <p className="text-lg text-gray-800 italic mb-6">
              {`"${testimonials[current].text}"`}
            </p>

            {/* Rating */}
            <div className="flex justify-center mb-2">
              {Array.from({ length: testimonials[current].rating }).map(
                (_, i) => (
                  <Star key={i} className="text-yellow-500" />
                )
              )}
            </div>

            {/* Name */}
            <p className="font-semibold text-gray-900">
              {testimonials[current].name}{" "}
              <span className="text-gray-600">
                ({testimonials[current].location})
              </span>
            </p>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 p-3 bg-white rounded-full shadow hover:bg-gray-100"
          >
            <ArrowForwardIos fontSize="small" />
          </button>
        </div>
      </div>
    </section>
  );
}
