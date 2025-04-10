import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import scenarios from "../data/scenarios";
import { useKeenSlider } from "keen-slider/react";

const emojiMap = {
  sara: "🧳",
  mikko: "👴",
  emma: "💔",
};

const LifeStoryCarousel = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1.2,
      spacing: 12,
    },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2.2, spacing: 16 },
      },
      "(min-width: 768px)": {
        slides: { perView: 3, spacing: 24 },
      },
    },
  });

  const scenarioEntries = Object.entries(scenarios);

  return (
    <section className="mt-10 mb-10">
      <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">
        Explore Life Stories
      </h2>

      <div ref={sliderRef} className="mx-auto max-w-screen-lg keen-slider px-2">
        {scenarioEntries.map(([id, story]) => (
          <div
            key={id}
            className="keen-slider__slide bg-yellow-100 hover:bg-yellow-200 transition-colors rounded-xl p-4 shadow-md flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{emojiMap[id]}</span>
              <h3 className="font-semibold text-md md:text-lg">
                {story.title}
              </h3>
            </div>
            <p className="text-sm text-gray-700 mb-4">{story.intro}</p>
            <button
              onClick={() => navigate(`/scenario/${id}`)}
              className="self-start text-sm font-medium text-blue-600 hover:underline"
            >
              Explore →
            </button>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-4 md:hidden">
        {scenarioEntries.map((_, index) => (
          <button
            key={index}
            onClick={() => instanceRef.current?.moveToIdx(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              currentSlide === index
                ? "bg-blue-600"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default LifeStoryCarousel;
