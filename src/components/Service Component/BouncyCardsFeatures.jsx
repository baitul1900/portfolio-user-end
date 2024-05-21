/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import allData from "../../api/api";
import { Link } from "react-router-dom";

export const BouncyCardsFeatures = () => {
  const { serviceList, serviceRequestList } = allData();

  useEffect(() => {
    serviceRequestList();
  }, []);

  return (
    <section className="mx-auto  px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Grow faster with 
          <span className="text-slate-400"> all in one solution</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-400"
        >
          <Link to="/service-list">View More</Link>
        </motion.button>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        {serviceList.map((card, index) => (
          <BounceCard key={index} className="col-span-12 md:col-span-4">
            <CardTitle>{card.serviceName}</CardTitle>
            <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-amber-400 to-orange-400 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
              <span className="block text-center font-semibold text-orange-50">
                {card.feature.map((feature, index) => (
                  <p key={index}>{feature}</p>
                ))}
              </span>
            </div>
          </BounceCard>
        ))}
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};
