"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ScheduleDemoDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className=" bg-green-500 hover:bg-green-600 text-white text-lg font-semibold h-12">Schedule a Demo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-4xl font-bold">Schedule a Demo</DialogTitle>
          </div>
          <p className="text-left text-lg text-gray-600">
            Fill out the form below to schedule a personalized demo of our product
          </p>
        </DialogHeader>
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" required />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input id="company" placeholder="Enter your company name" required />
          </div>
          <Button 
            type="submit" 
            className="w-full bg-green-500 hover:bg-green-600 text-white text-lg font-semibold h-12"
          >
            Schedule Demo
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}