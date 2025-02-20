"use client";
import React, { useState } from "react";

export default function Projects() {
  const features = [
    {
      title: "Diabetic Healthcare Programme",
      description: "Transform diabetes care with our expert-led program—personalized plans, real-time monitoring, and lasting health benefits!",
      image: "/banners/diabetic.png",
    },
    {
      title: "Cardiac Healthcare Programme", 
      description: "Enhance heart health with our advanced cardiac program—personalized care, real-time monitoring, and expert guidance!",
      image: "/banners/cardiac.png",
    },
    {
      title: "Renal Healthcare Programme",
      description: "Optimize kidney health with our specialized renal program—personalized care, real-time monitoring, and expert support!",
      image: "/banners/renal.png",
    },
    {
      title: "Hepatic Healthcare Programme",
      description: "Support liver health with our expert-led hepatic program—personalized care, real-time monitoring, and proactive wellness solutions!",
      image: "/banners/hepatic.png",
    },
    {
      title: "Pulmonary Healthcare Programme",
      description: "Improve lung health with our advanced pulmonary program—personalized care, real-time monitoring, and expert respiratory support!",
      image: "/banners/pulmonary.png",
    },
    {
      title: "Dermatological Healthcare Programme",
      description: "Revitalize skin health with our dermatological program—personalized treatments, expert care, and long-lasting results!",
      image: "/banners/dermal.png",
    },
    {
      title: "Gastroentritic Healthcare Programme",
      description: "Enhance digestive health with our gastroenteric program—personalized care, expert guidance, and real-time wellness solutions!",
      image: "/banners/gastroentritic.png",
    },
    {
      title: "Maternal Healthcare Programme",
      description: "Empower motherhood with our maternal health program—personalized care, expert support, and holistic wellness solutions!",
      image: "/banners/maternal.png",
    },
    {
      title: "Carcinogenic Healthcare Programme",
      description: "Fight cancer with our carcinogenic care program—personalized treatment, expert guidance, and proactive health solutions!",
      image: "/banners/carcinogenic.png",
    },
    {
      title: "Endocrine Healthcare Programme", 
      description: "Balance hormones with our endocrine health program—personalized care, expert support, and long-term wellness solutions!",
      image: "/banners/endocrine.png",
    },
    {
      title: "Immunological Healthcare Programme",
      description: "Strengthen immunity with our immunological program—personalized care, expert guidance, and proactive health solutions!",
      image: "/banners/immunization.png",
    },
    {
      title: "Neural Healthcare Programme",
      description: "Boost brain health with our neural care program—personalized treatments, expert support, and cognitive wellness solutions!",
      image: "/banners/neural.png",
    },
    {
      title: "Osteo Healthcare Programme",
      description: "Strengthen bones with our osteo health program—personalized care, expert support, and long-term mobility solutions!",
      image: "/banners/osteo.png",
    },
    {
      title: "Psychological Healthcare Programme",
      description: "Enhance mental well-being with our psychological program—personalized therapy, expert guidance, and lasting emotional balance!",
      image: "/banners/psychological.png",
    },
    {
      title: "Dental Healthcare Programme",
      description: "Brighten your smile with our dental care program—personalized treatments, expert care, and long-lasting oral health!",
      image: "/banners/oral.png",
    },
    {
      title: "Auditary Healthcare Programme",
      description: "Enhance hearing with our auditory care program—personalized treatments, expert support, and cutting-edge hearing solutions!",
      image: "/banners/audiotary.png",
    },
    {
      title: "Insect Borne Disease Care Programme",
      description: "Prevent and treat insect-borne diseases with our expert care program—personalized protection, rapid diagnosis, and recovery!",
      image: "/banners/insect-borne.png",
    },
    {
      title: "Addiction Relief Care Programme",
      description: "Break free with our addiction relief program—personalized support, expert guidance, and a lasting recovery journey!",
      image: "/banners/addiction.png",
    },
  ];

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(features.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const displayedFeatures = features.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="relative bg-black overflow-hidden py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[40rem] w-[40rem] bg-blue-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
            Check Out Our Projects
          </h2>
          <p className="text-lg md:text-xl text-blue-200/90 max-w-2xl mx-auto">
            Browse through our wide gallery of display and experience the power of AI and Data Science in action.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedFeatures.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>

        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-white">Page {currentPage} of {totalPages}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

const Feature = ({ title, description, image }: { title: string; description: string; image: string }) => {
  return (
    <div className="relative">
      <div 
        className="relative h-full bg-black/70 border border-neutral-800/50 rounded-xl overflow-hidden"
      >
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-8">
          <h3 className="text-xl font-semibold text-blue-100">
            {title}
          </h3>
          <p className="text-blue-300/80 text-sm leading-relaxed mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};