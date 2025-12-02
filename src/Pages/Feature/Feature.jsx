import React, { useEffect } from "react";
import { useLoaderData } from "react-router";
import "../../index.css";

const Feature = () => {
  const featureData = useLoaderData();
  console.log(featureData);

  useEffect(() => {
      document.title = "Feature";
    }, []);

  return (
    <section className="py-16 px-6  text-white font-[Poppins]">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-3">
          We have <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#00F260,#0575E6)]">Impressive Features</span>
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
          Discover everything that makes GameHub your ultimate indie gaming destination.
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {featureData.map((feature) => (
          <div
            key={feature.id}
            className="relative group bg-[#111427] hover:bg-[#181B31] border border-transparent hover:border-[#9D50BB] rounded-xl p-8 w-full max-w-sm shadow-lg hover:shadow-[0_0_25px_rgba(157,80,187,0.3)] transition duration-500"
          >
            
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
              {feature.icon?.startsWith("http") ? (
                <img src={feature.icon} alt="" className="w-10 h-10 object-contain" />
              ) : (
                <span className="text-3xl">{feature.icon}</span>
              )}
            </div>

            
            <div className="mt-10 text-center">
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-[#C89EE6] transition duration-300">
                {feature.featureName}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>

          
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-[linear-gradient(to_right,#00F260,#0575E6)] transition duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;


