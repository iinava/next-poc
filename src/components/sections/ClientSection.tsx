import Image from "next/image";
import React from "react";

export default function ClientSection() {
  const logos = [
    "/assets/logos/c1.png",
    "/assets/logos/c2.png",
    "/assets/logos/c3.png",
    "/assets/logos/c4.png",
    "/assets/logos/c5.png",
    "/assets/logos/c6.png",
    "/assets/logos/c7.png",
  ];

  return (
    <section
      className="w-full px-4 sm:px-[3vw] md:px-[100.23px] flex justify-center items-center flex-col py-10"
      style={{ textShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)" }}
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#4D4D4D]">
            Our Clients
          </h2>
          <p className="max-w-[700px] text-[#717171] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-between items-center gap-10 lg:gap-12 lg:flex-nowrap">
          {logos.map((logo, index) => (
            <div key={index} className="flex  ">
              <Image
                src={logo}
                alt={`Client logo ${index + 1}`}
                width={50}
                height={40}
                className="max-w-[120px] h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
