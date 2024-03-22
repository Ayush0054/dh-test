import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import img from "@/public/avatars/krieger.jpeg";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Page() {
  const technologies: string[] = [
    "MongoDB",
    "Javascript",
    "HTML",
    "CSS",
    "React",
    "Figma",
    "EJS",
    "Firebase",
    "NodeJS",
    "TailwindCSS",
    "Supabase",
  ];

  return (
    <div className="  flex justify-center ">
      <div className="   space-y-6 lg:w-[1000px] border-2 rounded-lg     pb-8 dark:bg-transparent md:pb-12 lg:pb-24">
        <div className="relative flex flex-col ">
          <div className="w-full h-[200px]   bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-t-lg "></div>
          <Avatar className=" bg-slate-100 p-2 -mt-16 ml-4 w-32 h-32">
            <AvatarImage
              className=" rounded-full"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
        </div>
        <div className=" flex justify-between p-5">
          <div className=" lg:w-3/4 ">
            <div className="  flex justify-between">
              <h1 className=" font-bold text-2xl">Ruby on Rails Developer</h1>
              <div className=" flex gap-3">
                <Button variant="outline">Hire me</Button>
                <Button variant="outline">Edit</Button>
              </div>
            </div>
            <h1 className=" text-gray-500 text-lg mb-6">Kristian Krieger</h1>
            <div className=" mb-6 flex gap-4">
              <FaGithub />
              <FaLinkedin />
              <FaTwitter />
            </div>
            <div className=" flex flex-wrap gap-2 items-center mb-6">
              {/* <h1 className=" text-gray-500 text-md  ">Skills :</h1> */}
              {technologies.map((tech, index) => (
                <h1
                  className=" text-gray-500 text-sm bg-gray-200 px-2 py-1  "
                  key={index}
                >
                  {tech}
                </h1>
              ))}
            </div>
            <hr />
            <div className=" lg:hidden block ">
              <h1 className=" text-gray-500 text-lg text-start">
                Interested in roles
              </h1>
              <h1 className=" text-gray-900 text-lg">Part-time contract</h1>
              <h1 className=" text-gray-900 text-lg mb-2">Junior</h1>
              <hr />
              <h1 className=" text-gray-900 text-lg mt-2">Bengaluru, India</h1>
              <h1 className=" text-gray-900 text-lg">Chennai (GMT+5.5)</h1>
            </div>
            <h1 className=" text-gray-500 text-lg mt-5">
              about me : DevOps Administrator with experience in Kubernetes,
              Docker, and Jenkins. I am looking for a role where I can continue
              to grow my skills and contribute to a team. I am open to
              full-time, part-time, contract, and internship opportunities. I am
              located in San Francisco, California and I am available to work in
              the PST timezone. DevOps Administrator with experience in
              Kubernetes, Docker, and Jenkins. I am looking for a role where I
              can continue to grow my skills and contribute to a team. I am open
              to full-time, part-time, contract, and internship opportunities. I
              am located in San Francisc DevOps Administrator with experience in
              Kubernetes, Docker, and Jenkins. I am looking for a role where I
              can continue to grow my skills and contribute to a team. I am open
              to full-time, part-time, contract, and internship opportunities. I
              am located in San Francisc DevOps Administrator with experience in
              Kubernetes, Docker, and Jenkins. I am looking for a role where I
              can continue to grow my skills and contribute to a team. I am open
              to full-time, part-time, contract, and internship opportunities. I
              am located in San Francisc DevOps Administrator with experience in
              Kubernetes, Docker, and Jenkins. I am looking for a role where I
              can continue to grow my skills and contribute to a team. I am open
              to full-time, part-time, contract, and internship opportunities. I
              am located in San Francisc DevOps Administrator with experience in
              Kubernetes, Docker, and Jenkins. I am looking for a role where I
              can continue to grow my skills and contribute to a team. I am open
              to full-time, part-time, contract, and internship opportunities. I
              am located in San Francisc DevOps Administrator with experience in
              Kubernetes, Docker, and Jenkins. I am looking for a role where I
              can continue to grow my skills and contribute to a team. I am open
              to full-time, part-time, contract, and internship opportunities. I
              am located in San Francisc DevOps Administrator with experience in
              Kubernetes, Docker, and Jenkins. I am looking for a role where I
              can continue to grow my skills and contribute to a team. I am open
              to full-time, part-time, contract, and internship opportunities. I
              am located in San Francisc
            </h1>
          </div>
          <div className=" w-1/4  lg:block hidden   border-l-[1px] ml-6 pl-6">
            {/* <h1 className=" text-gray-500 text-lg text-start">
              Interested in roles
            </h1> */}
            <Badge className=" bg-orange-300 hover:bg-orange-300 text-gray-100 rounded-sm text-base">
              Part-time contract
            </Badge>
            <Badge className=" bg-cyan-300 hover:bg-cyan-300 text-gray-100 rounded-sm text-base my-2">
              Junior
            </Badge>
            <hr />
            <h1 className=" text-gray-900 text-lg mt-2">Bengaluru, India</h1>
            <h1 className=" text-gray-900 text-lg">Chennai (GMT+5.5)</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
