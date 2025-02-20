"use client";
import Image from "next/image";

const companies = [
  { name: "Adobe", logo: "/adobe.png", isSvg: false, width: 150, height: 60 },
  { name: "Google", logo: "/google.png", isSvg: false, width: 150, height: 60 },
  { name: "Amazon", logo: "/amazon.png", isSvg: false, hasBackground: true, width: 200, height: 60 },
  { name: "Next JS", logo: "/next.svg", isSvg: true, width: 150, height: 60 },
  // Add more companies as needed
];

export default function TrustedBy() {
  return (
    <section className="pb-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-white mb-8">
          Trusted by leading companies worldwide
        </h2>
        
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-infinite-scroll">
            {/* First set of logos */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center w-[350px] h-24 px-12 shrink-0"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className={`object-contain transition-opacity duration-300 ${
                    company.isSvg 
                      ? 'filter invert brightness-0 opacity-60 hover:opacity-100' 
                      : company.hasBackground
                      ? 'filter grayscale contrast-100 brightness-200 opacity-80 hover:opacity-100'
                      : 'filter grayscale brightness-150 contrast-150 opacity-80 hover:opacity-100'
                  }`}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center w-[350px] h-24 px-12 shrink-0"
              >
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={company.width}
                  height={company.height}
                  className={`object-contain transition-opacity duration-300 ${
                    company.isSvg 
                      ? 'filter invert brightness-0 opacity-60 hover:opacity-100' 
                      : company.hasBackground
                      ? 'filter grayscale contrast-100 brightness-200 opacity-80 hover:opacity-100'
                      : 'filter grayscale brightness-150 contrast-150 opacity-80 hover:opacity-100'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 