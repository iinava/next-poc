import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function CommunityServicesModal() {
  return (
    <Dialog>
      <DialogTrigger
       asChild>
        <Button className="bg-[#4CAF4F] text-white hover:bg-[#4CAF4F]/90">
          Learn More
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] p-8">
        <DialogHeader className="text-center">
          <DialogTitle className="text-2xl font-semibold">Community Management Services</DialogTitle>
          <DialogDescription className="text-base mt-2">
            Our community management services are designed to help you build and engage a thriving online community.
            From moderation to content curation, we’ve got you covered.
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Moderation</h3>
            <p className="text-sm">
              Our team of experienced moderators will ensure your community stays safe and on-topic.
              We handle flagging, banning, and conflict resolution.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Content Curation</h3>
            <p className="text-sm">
              We’ll work with you to curate high-quality content that keeps your community engaged and coming back.
              From blog posts to discussion topics, we’ve got you covered.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Analytics</h3>
            <p className="text-sm">
              Our advanced analytics tools will give you insights into your community’s activity, engagement, and growth.
              Make data-driven decisions to improve your community.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Engagement</h3>
            <p className="text-sm">
              We’ll help you foster a thriving, engaged community through events, challenges, and other interactive experiences.
              Keep your members coming back.
            </p>
          </div>
        </div>
        <Button className="w-full mt-6 bg-[#4CAF4F] text-white hover:bg-[#4CAF4F]/90">
          Close
        </Button>
      </DialogContent>
    </Dialog>
  )
}