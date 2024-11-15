import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TestimonialSection() {
  const logos = [
    { imageUrl: "/assets/logos/c1.png" },
    { imageUrl: "/assets/logos/c2.png" },
    { imageUrl: "/assets/logos/c3.png" },
    { imageUrl: "/assets/logos/c4.png" },
    { imageUrl: "/assets/logos/c5.png" },
    { imageUrl: "/assets/logos/c6.png" },
  ];

  return (
    <section className="w-full py-12 md:py-24 px-4 sm:px-[3vw]  md:px-[100.23px] bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[400px_1fr] items-start">
          <div>
            <Image
              src="/assets/images/Teslaillustration.png"
              alt="Tesla logo on dark background"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-between h-full ">
            <div className="space-y-4">
              <blockquote className="text-gray-600 text-lg">
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultricies, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </blockquote>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#22C55E]">
                  Tim Smith
                </h3>
                <p className="text-gray-500">
                  British Dragon Boat Racing Association
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-10  items-center">
              <div className="flex flex-wrap gap-6 items-center">
                {logos.map((logo, i) => (
                  <div key={i} className="w-12 h-12">
                    <Image
                      src={logo.imageUrl}
                      alt={`Partner logo ${i + 1}`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>
              <Link
                href="#"
                className="inline-flex items-center text-[#22C55E] hover:text-[#1ea34d] transition-colors"
              >
                Meet all customers
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}