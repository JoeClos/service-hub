import React from "react";
import { useParams } from "react-router-dom";
import lifeMoments from "../data/lifeMoments";
import services from "../data/services";

const LifeMomentPage = () => {
  const { id } = useParams();
  const moment = lifeMoments.find((m) => m.id === id);
  const relatedServices = services[id] || [];

  if (!moment) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-red-500">
          Life moment not found.
        </h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-6 md:px-10">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold">
          {moment.icon} {moment.label}
        </h1>
        <p className="mt-2 text-gray-600">
          Here's how Helsinki can support you during this time:
        </p>
      </header>

      <section className="space-y-4">
        {relatedServices.length === 0 ? (
          <p className="text-gray-600">
            No services available yet for this moment.
          </p>
        ) : (
          relatedServices.map((service, idx) => (
            <div
              key={idx}
              className="p-4 bg-blue-50 border border-blue-200 rounded-lg shadow"
            >
              <h3 className="text-lg font-semibold">{service.title}</h3>
              <p className="text-sm text-gray-700 mb-2">
                {service.description}
              </p>
              <a
                href={service.link}
                className="text-blue-600 underline text-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn more
              </a>
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default LifeMomentPage;
