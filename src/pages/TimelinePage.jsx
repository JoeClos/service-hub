// import React from "react";
// import { useParams } from "react-router-dom";
// import timelines from "../data/timelines";

// const TimelinePage = () => {
//   const { stage } = useParams();
//   const timeline = timelines[stage];

//   if (!timeline) {
//     return (
//       <div className="p-6 text-center">
//         <h2 className="text-xl font-semibold text-red-500">
//           Timeline not found.
//         </h2>
//       </div>
//     );
//   }

//   return (
//     <main className="min-h-screen bg-white text-gray-900 px-4 py-6 md:px-10">
//       <header className="mb-6">
//         <h1 className="text-2xl md:text-3xl font-bold">{timeline.title}</h1>
//         <p className="mt-2 text-gray-600">{timeline.description}</p>
//       </header>

//       <section className="space-y-6">
//         {timeline.steps.map((step, idx) => (
//           <div
//             key={idx}
//             className="p-4 bg-green-50 border border-green-200 rounded-lg shadow"
//           >
//             <h3 className="text-lg font-semibold">{step.title}</h3>
//             <p className="text-sm text-gray-700 mb-2">{step.description}</p>
//             {step.link && (
//               <a
//                 href={step.link}
//                 className="text-green-600 underline text-sm"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Learn more
//               </a>
//             )}
//           </div>
//         ))}
//       </section>
//     </main>
//   );
// };

// export default TimelinePage;


import React from "react";
import { useParams } from "react-router-dom";
import timelines from "../data/timelines";

const TimelinePage = () => {
  const { stage } = useParams();
  const timeline = timelines[stage];

  if (!timeline) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold text-red-500">
          Page not found.
        </h2>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-gray-900 px-4 py-6 md:px-10">
      <header className="mb-8 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700">{timeline.title}</h1>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{timeline.description}</p>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {timeline.steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-purple-50 hover:bg-purple-100 transition border border-purple-200 rounded-lg p-4 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-purple-800 mb-1">{step.title}</h3>
            <p className="text-sm text-gray-700 mb-3">{step.description}</p>
            {step.link && (
              <a
                href={step.link}
                className="inline-block text-purple-600 text-sm font-medium underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Discover →
              </a>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default TimelinePage;
