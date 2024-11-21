'use client'

export default function MarketingSection() {
  const posts = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      imageUrl: "/assets/images/marketing1.png",
      link: "#",
    },
    {
      title: "What are your safeguarding responsibilities ?",
      imageUrl: "/assets/images/marketing2.png",
      link: "#",
    },
    {
      title: "Revamping the Membership Model with Triathlon Australia",
      imageUrl: "/assets/images/marketing3.png",
      link: "#",
    },
  ]

  return (
    <section className="py-12 px-4 sm:px-[3vw]  md:px-[100.23px]">
      <div className="text-center">
        <h2 className="text-3xl font-semibold">Caring is the new marketing</h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          The Nextcent blog is the best place to read about the latest membership insights,
          trends and more. See who's joining the community, read about how our community
          are increasing their membership income and more.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-12 px-2">
        {posts.map((post, index) => (
        <div
        key={index}
        className=" rounded-lg   pb-5 overflow-hidden transition-transform transform hover:scale-105"
      >
        <div className="relative">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="h-56 w-full object-cover rounded-xl" 
          />
        </div>
        <div className="p-10 -mt-8 mx-8 bg-[#F5F7FA] rounded-lg shadow-lg relative z-10 text-center">
          <h3 className="text-base font-medium text-gray-900 leading-tight">
            {post.title}
          </h3>
          <a
            href={post.link}
            className="inline-flex items-center mt-3 text-green-600 font-semibold"
          >
            Read more →
          </a>
        </div>
      </div>
      
       
        ))}
      </div>
    </section>
  )
}
