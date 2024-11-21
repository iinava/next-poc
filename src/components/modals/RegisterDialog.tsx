'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegisterDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#4CAF4F] text-white hover:bg-[#4CAF4F]/90">
          Register Now →
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader className="space-y-3 pb-6">
          <DialogTitle className="text-2xl font-semibold text-center">Register</DialogTitle>
          <DialogDescription className="text-center text-base">
            Enter your details to create an account.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="flex-1 space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" className="h-11" />
            </div>
            <div className="flex-1 space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter your email" className="h-11" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Enter your password" className="h-11" />
          </div>
          <Button className="w-full h-11 bg-[#4CAF4F] text-white hover:bg-[#4CAF4F]/90 mt-2">
            Register
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}