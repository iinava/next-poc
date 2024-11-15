'use client'

export default function MarketingSection() {
  const posts = [
    {
      title: "Creating Streamlined Safeguarding Processes with OneRen",
      imageUrl: "/assets/images/marketing1.png",
      link: "#",
    },
    {
      title: "What are your safeguarding responsibilities and how can you manage them?",
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
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {posts.map((post, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
          >
            <img src={post.imageUrl} alt={post.title} className="h-48 w-full object-cover" />
            <div className="p-6">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <a href={post.link} className="inline-flex items-center mt-4 text-green-600 font-medium">
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
