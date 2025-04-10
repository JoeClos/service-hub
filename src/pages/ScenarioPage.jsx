import React from "react";
import { useParams } from "react-router-dom";
import scenarios from "../data/scenarios";

const ScenarioPage = () => {
  const { name } = useParams();
  const scenario = scenarios[name];

  if (!scenario) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-red-500">
          Scenario not found.
        </h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-6 md:px-10">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">{scenario.title}</h1>
        <p className="mt-2 text-gray-600">{scenario.intro}</p>
      </header>

      <section className="space-y-6">
        {scenario.steps.map((step, idx) => (
          <div
            key={idx}
            className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg shadow"
          >
            <h3 className="text-lg font-semibold">{step.title}</h3>
            <p className="text-sm text-gray-700 mb-2">{step.description}</p>
            {step.link && (
              <a
                href={step.link}
                className="text-yellow-600 underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default ScenarioPage;
