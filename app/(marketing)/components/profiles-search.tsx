import { Icons } from "@/components/icons"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Badge } from "@/components/ui/badge"
import { Search } from "./search"
import { Separator } from "@/components/ui/separator"
import { CheckboxReactHookFormMultiple } from "./role-level"
import { Check } from "lucide-react"
import profileList from "@/data/profiles.json"

export function ProfileSearch() {
    const profiles = profileList
  return (
    <Card>
      <CardHeader className="py-12">
        <div className="flex">
              <div className="flex-1">
                  <CardTitle>DevOps Engineers</CardTitle>
                  <CardDescription>
                      1200+ DevOps engineers looking for their next gig.
                  </CardDescription>
              </div>
               <Button variant={"default"}>
                <Icons.add className="mr-2 h-4 w-4" />
                Add my profile
                </Button>
        </div>
      </CardHeader>
      <Separator className="" />
      <CardContent className="grid gap-6 p-0">
      <div className="flex min-h-[500px]">
        <div className="flex-2 p-6 min-w-[300px] border-r">
            <Search />
            <Separator className="my-4" />
            <CheckboxReactHookFormMultiple />
            <Separator className="my-4" />
            <CheckboxReactHookFormMultiple />
            <Separator className="my-4" />
            <CheckboxReactHookFormMultiple />
            <Separator className="my-4" />
            <CheckboxReactHookFormMultiple />
            </div>
        <div className="flex-1">
            <div className="p-6 flex w-full justify-center">
                          <p>
                              Showing 1180 of 1200+ profiles. {" "} <span className="underline">Reset Filter</span>
                          </p>
            </div>
            <Separator className="" />
            <div className="p-6">
        {profiles.map((profile) => (
        <div> 
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src={profile.profileImage} />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div className="space-y-2">
              <p className="text-sm font-medium leading-none flex gap-4 items-center">{profile.title}</p>
                <Badge className="bg-green-500">{profile.profileStatus}</Badge>
              <p className="text-sm text-muted-foreground">
                {profile.description}
              </p>
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        </div>
        ))}
            </div>
                      <div className="flex justify-center mb-6">
                          <Button variant="default" className="w-56">
                              <Icons.more className="mr-2 h-4 w-4" />
                              Show more
                          </Button>
                      </div>
            </div>
      </div>
      </CardContent>
    </Card>
  )
}