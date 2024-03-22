/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { ProfileSearch } from "../components/profiles-search";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div className="bg-slate-50">
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex align-center max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Hire DevOps Engineers
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            1200+ DevOps engineers looking for their next gig. Juniors to
            seniors and everyone in between, you'll find them all here.
          </p>
        </div>
        <div className="mx-auto justinfy-center md:max-w-[84rem]">
          <ProfileSearch />
        </div>
        <div className="hidden mx-auto text-center md:max-w-[58rem]">
          <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Sign in to view more profiles
          </p>
        </div>
      </section>
    </div>
  );
}
