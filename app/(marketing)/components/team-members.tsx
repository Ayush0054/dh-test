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
import profileList from "@/data/profiles.json"

export function TeamMembers() {
  const profiles = profileList
  console.log({profiles })
  return (
    <Card>
      <CardHeader>
        <CardTitle>DevOps Engineers</CardTitle>
        <CardDescription>
            1200+ DevOps engineers looking for their next gig.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        {profiles.map((profile) => (
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src={profile.profileImage} />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none flex gap-4 items-center">{profile.title} <Badge className="bg-green-500">{profile.profileStatus}</Badge></p>
              <p className="text-sm text-muted-foreground">
                {profile.description}
              </p>
            </div>
          </div>
          <Button variant="outline">
            <Icons.open className="mr-2 h-4 w-4" />
            Visit Profile
          </Button>
        </div>
        ))}
        <Button variant={"outline"}>
            <Icons.more className="mr-2 h-4 w-4" />
          Browse More
          </Button>
      </CardContent>
    </Card>
  )
}