import Image from "next/image"
import { Button } from "@/components/ui/button"
import CommunityServicesModal from "../CommunityServicesDialog"

export default function CalenderSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
        <div className="flex justify-center">
          <Image
            src="/assets/images/calenderillustration.png"
            alt="Illustration of people interacting with interface"
            width={400}
            height={400}
            className="mx-auto aspect-square rounded-xl object-contain"
            priority
          />
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl md:text-3xl lg:text-5xl">
              The unseen of spending three years at Pixelgrade
            </h1>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique lectus. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <CommunityServicesModal/>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}