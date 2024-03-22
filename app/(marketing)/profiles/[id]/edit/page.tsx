import { Input } from "@/components/ui/input";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

function Page() {
  return (
    <div className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24">
      <div className=" lg:flex ">
        <div className=" lg:w-1/4 lg:flex lg:justify-center">
          <h1 className=" text-2xl font-bold max-lg:my-6">Edit Profile</h1>
        </div>
        <div className=" lg:w-3/4 ">
          <label className="font-semibold text-sm ml-3 text-gray-500">
            Avatar
          </label>
          <div className="flex items-center mt-1 space-x-4">
            <Avatar className=" bg-slate-100 p-2   w-32 h-32">
              <AvatarImage
                className=" rounded-full"
                src="https://github.com/shadcn.png"
              />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <Button>Upload</Button>
          </div>
          <div>
            <label className="font-semibold text-sm  text-gray-500">Name</label>

            <Input className="" />
          </div>
          <div className=" mt-6">
            <div className="col-span-1 md:col-span-2">
              <label
                className="font-semibold text-sm  text-gray-500 "
                htmlFor="city"
              >
                City
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-1">
                <Input id="city" placeholder="Bengaluru" />
                <Input id="state" placeholder="Karnataka" />
                <Input id="country" placeholder="India" />
              </div>
            </div>
          </div>
          <div className=" w-1/2 my-6">
            <label className="font-semibold text-sm  text-gray-500">
              Select Time Zone
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Roles" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className=" w-full my-6">
            <label className="font-semibold text-sm  text-gray-500">
              Interested Role Level
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Roles" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className=" w-full mb-6">
            <label className="font-semibold text-sm  text-gray-500">
              Interested Role Type{" "}
            </label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Role Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className=" lg:flex  lg:justify-evenly gap-4">
            <div className=" w-full">
              <label className="font-semibold text-sm  text-gray-500">
                Github
              </label>
              <Input className=" w-full" />
            </div>
            <div className=" w-full">
              <label className="font-semibold text-sm  text-gray-500">
                Twitter
              </label>
              <Input className=" w-full" />
            </div>
            <div className=" w-full">
              <label className="font-semibold text-sm  text-gray-500">
                Linkedin
              </label>
              <Input className=" w-full" />
            </div>
          </div>
          <div className=" mt-6">
            <label className="font-semibold text-sm  text-gray-500">
              Scheduling link (calendly/cal)
            </label>

            <Input className="" />
          </div>
          <div className=" mt-6">
            <label className="font-semibold text-sm  text-gray-500">Bio</label>
            <Textarea />
          </div>
        </div>
      </div>
      <div className=" lg:flex lg:justify-end">
        <Button>Save</Button>
      </div>
    </div>
  );
}

export default Page;
