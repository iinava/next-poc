import Image from "next/image";

export default function HeroSection() {
  return (
<section>
    <div className="bg-[#F5F7FA] mt-3 px-10 lg:px-24 flex flex-col lg:flex-row justify-center items-center h-[90vh] lg:h-[80vh]">
        <div className="lg:w-4/5 ">
            <div className=" lg:text-[25px] font-semibold text-[#524e4e] leading-[52.9px] mb-4 text-center lg:text-left">
                <h1 className="sm:text-7xl text-3xl" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}
                >
                    Lessons and insights
                </h1>
                <span className="text-green-600 sm:text-7xl text-2xl" style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>
                    from 8 years
                </span>
            </div>
            <div className="text-gray-500 mt-1 text-center lg:text-left">
                Where to grow your business as a photographer: site or social media?
            </div>
            <button className="bg-green-600 flex justify-center items-center p-6 px-12 text-white h-[34px] w-[85px] mt-6  hover:bg-green-700 mx-auto lg:mx-0">
                Register
            </button>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center lg:justify-end mt-8 lg:mt-0">
            <Image src="/assets/images/illustration.png" width={262.16} height={253.3} className="lg:h-1/2 lg:w-3/4 h-[13rem] w-[200px] " alt="error" />
        </div>
    </div>
</section>
  );
}
