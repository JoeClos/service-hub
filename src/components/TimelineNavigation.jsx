import React from "react";
import { NavLink } from "react-router-dom";
// import {
//   FaChild,
//   FaSchool,
//   FaUserGraduate,
//   FaHome,
//   FaUser,
// } from "react-icons/fa";
import {
  FaPaintBrush,
  FaTheaterMasks,
  FaMusic,
  FaRunning,
  FaLeaf,
  FaBook,
} from "react-icons/fa";

const cultureSteps = [
  {
    label: "Art & Museums",
    path: "/explore/art",
    icon: <FaPaintBrush size={20} />,
  },
  {
    label: "Theatre & Film",
    path: "/explore/theatre",
    icon: <FaTheaterMasks size={20} />,
  },
  { label: "Live Music", path: "/explore/music", icon: <FaMusic size={20} /> },
  {
    label: "Sports & Fitness",
    path: "/explore/sports",
    icon: <FaRunning size={20} />,
  },
  {
    label: "Parks & Nature",
    path: "/explore/nature",
    icon: <FaLeaf size={20} />,
  },
  {
    label: "Libraries & Learning",
    path: "/explore/libraries",
    icon: <FaBook size={20} />,
  },
];

// const steps = [
//   {
//     label: "Childhood",
//     path: "/timeline/childhood",
//     icon: <FaChild size={20} />,
//   },
//   { label: "School", path: "/timeline/school", icon: <FaSchool size={20} /> },
//   {
//     label: "Young Adulthood",
//     path: "/timeline/young-adult",
//     icon: <FaUserGraduate size={20} />,
//   },
//   { label: "Family", path: "/timeline/family", icon: <FaHome size={20} /> },
//   { label: "Retirement", path: "/timeline/senior", icon: <FaUser size={20} /> },
// ];

const TimelineNavigation = () => {
  return (
    // <section className="mt-10">
    //   <h2 className="text-xl md:text-2xl text-center font-semibold mb-4">
    //     Explore Life Stage Timelines
    //   </h2>
    //   <nav className="w-full overflow-x-auto py-4 px-2 md:px-6">
    //     <ul className="flex md:gap-12 justify-start sm:justify-center sm:withespace-wrap md:whitespace-nowrap">
    //       {steps.map((step, index) => (
    //         <li
    //           key={index}
    //           className="flex flex-col items-center text-xs md:text-sm text-gray-700 md:px-2"
    //         >
    //           <NavLink
    //             to={step.path}
    //             className={({ isActive }) =>
    //               `group relative flex flex-col items-center justify-center w-12 h-12 rounded-full border transition-all duration-200 ${
    //                 isActive
    //                   ? "border-blue-600 text-blue-600 bg-blue-50 shadow"
    //                   : "border-gray-300 text-gray-500 hover:border-blue-400 hover:text-blue-500"
    //               }`
    //             }
    //           >
    //             {step.icon}
    //           </NavLink>
    //           <span className="mt-1 text-center">{step.label}</span>
    //         </li>
    //       ))}
    //     </ul>
    //   </nav>
    // </section>

    <section className="mt-10">
      <h2 className="text-xl md:text-2xl text-center font-semibold mb-4">
        Explore Culture & Leisure in Helsinki
      </h2>
      <nav className="w-full overflow-x-auto py-4 px-2 md:px-6">
        <ul  className="flex md:gap-12 justify-start sm:justify-center sm:withespace-wrap md:whitespace-nowrap">
          {cultureSteps.map((step, index) => (
            <li
              key={index}
              className="flex flex-col items-center text-xs md:text-sm text-gray-700 md:px-2"
            >
              <NavLink
                to={step.path}
                className={({ isActive }) =>
                  `group relative flex flex-col items-center justify-center w-12 h-12 rounded-full border transition-all duration-200 ${
                    isActive
                      ? "border-purple-600 text-purple-600 bg-purple-50 shadow"
                      : "border-gray-300 text-gray-500 hover:border-purple-400 hover:text-purple-500"
                  }`
                }
              >
                {step.icon}
              </NavLink>
              <span className="mt-1 text-center">{step.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default TimelineNavigation;
