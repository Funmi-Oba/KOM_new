import React, { useState } from "react";

const campuses = [
  {
    name: "IJOKO CAMPUS",
    shortDesc: "Click to see more details",
    fullDetails: (
      <>
        <p className="font-bold">Address:</p>
        <p className="text-sm">8, Salisu Street, off Gas-Line Road, Ijoko-Sango Otta, Ogun State.</p>
         <p className="mt-2 font-bold">Day and Time:</p>
        <p className="text-sm">Every Friday - 9:00 AM - 12:00 Noon</p>
      </>
    ),
  },
  {
    name: "IBARAGUN CAMPUS",
    shortDesc: "Click to see more details",
    fullDetails: (
      <>
        <p className="font-bold">Address:</p>
        <p className="text-sm">Preach The Word Revival Ministry, 9,Irepodun St, Idi-Orogbo,Ibaragun, Ogun State.</p>
        <p className="mt-2 font-bold">Day and Time:</p>
        <p className="text-sm">Every Friday - 9:00 AM - 12:00 Noon</p>
      </>
    ),
  },
  {
    name: "RAFCO CAMPUS",
    shortDesc: "Click to see more details",
    fullDetails: (
      <>
        <p className="font-bold">Address:</p>
        <p className="text-sm">
          Unity in Power of God Church, Oju-Irin,Aboro Rd, off Ope-ilu
          Rd,Agbado,Ogun State.{" "}
        </p>
       <p className=" mt-2 font-bold">Day and Time:</p>
        <p className=" text-sm">Every Friday - 9:00 AM - 12:00 Noon</p>
      </>
    ),
  },
];

export default function TrainingSchedule() {
  const [flipped, setFlipped] = useState(null);

  return (
    <div className="">
      <h2 className="text-2xl font-bold text-center mb-8 text-[#6A00A3]">
        Our Training Campuses
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mx-auto">
        {campuses.map((campus, index) => (
          <div
            key={index}
            onClick={() => setFlipped(flipped === index ? null : index)}
            className="relative h-52 cursor-pointer perspective"
          >
            <div
              className={`w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                flipped === index ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div className="absolute inset-0 bg-white rounded-xl shadow-lg shadow-[#6A00A3] 
               p-6 backface-hidden flex flex-col justify-center items-center">
                <h3 className="text-xl font-bold text-[#6A00A3] mb-2">
                  {campus.name}
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  {campus.shortDesc}
                </p>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-[#6a00a3]/10 rounded-xl shadow-lg border-white border-2 
              p-6 backface-hidden transform rotate-y-180 flex flex-col justify-center shadow-[#ffffff] items-center">
                <h3 className="text-lg font-semibold text-[#6A00A3] mb-2">
                  {campus.name}
                </h3>
                <div className="text-center text-gray-700 text-sm">
                  {campus.fullDetails}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
