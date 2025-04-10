import React from "react";
import { useNavigate } from "react-router-dom";
import lifeMoments from "../data/lifeMoments";
import TimelineNavigation from "../components/TimelineNavigation";
import LifeStoryCarousel from "../components/LifeStoryCarousel";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSelect = (id) => {
    navigate(`/life-moment/${id}`);
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-6 md:px-10">
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold leading-snug text-center">
          Welcome to the Helsinki Cultural Compass
        </h1>
        {/* <p className="text-base md:text-lg text-gray-600 mt-2 text-center">
          Discover services tailored to your life moments. From housing to
          health, from education to support — we guide you through it all.
        </p> */}
      </header>

      {/* Timeline Navigation */}
      <TimelineNavigation />

      {/* Life Moments Wizard Cards */}
      <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center mb-6">
          Choose your current situation:
        </h2>

        <div className="mx-auto max-w-screen-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {lifeMoments.map((moment) => (
              <button
                key={moment.id}
                onClick={() => handleSelect(moment.id)}
                className="flex items-center gap-4 bg-blue-100 hover:bg-blue-200 text-blue-900 rounded-xl p-4 text-left shadow-md transition"
              >
                <span className="text-2xl">{moment.icon}</span>
                <span className="font-medium text-sm md:text-base">
                  {moment.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Scenarios */}
      {/* <section className="mt-10">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Explore Life Stories
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { id: "sara", name: "Sara just moved", emoji: "🧳" },
            { id: "mikko", name: "Mikko just retired", emoji: "👴" },
            { id: "emma", name: "Emma is divorcing", emoji: "💔" },
          ].map((person) => (
            <button
              key={person.id}
              onClick={() => navigate(`/scenario/${person.id}`)}
              className="p-4 bg-yellow-100 hover:bg-yellow-200 rounded-xl text-left shadow-md flex items-center gap-3"
            >
              <span className="text-2xl">{person.emoji}</span>
              <span className="font-medium text-sm md:text-base">
                {person.name}
              </span>
            </button>
          ))}
        </div>
      </section> */}

      {/* Carousel */}
      <LifeStoryCarousel />
    </main>
  );
};

export default HomePage;
