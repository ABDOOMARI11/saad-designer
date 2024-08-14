"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import {
  SiCanva,
  SiLatex,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiMicrosoftword,
  SiDavinciresolve
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { ScrollArea } from "../components/ui/scroll-area";

const TAB_DATA = [
  {
    title: "Tools",
    id: "skills",
    content: (
      <div className="flex flex-col gap-[30px]">
        <ScrollArea className="h-[350px]">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
            {[
              { icon: <SiCanva />, name: "Canva" },
              { icon: <SiMicrosoftword />, name: "MS Word" },
              { icon: <SiLatex />, name: "LaTeX" },
              { icon: <SiAdobephotoshop />, name: "Adobe Photoshop" },
              { icon: <SiAdobeillustrator />, name: "Adobe Illustrator" },
              { icon: <SiDavinciresolve  />, name: "Da Vinci Resolve" },
            ].map((skill, index) => (
              <li key={index}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="group w-full h-[156px] bg-[#232329] rounded-xl flex justify-center items-center">
                      <div className="text-6xl transition-all duration-300 rounded-xl flex justify-center items-center group-hover:text-accent">
                        {skill.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="capitalize">{skill.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </li>
            ))}
          </ul>
        </ScrollArea>
      </div>
    ),
  },

];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-section.jpeg" width={600} height={600} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a versatile professional specializing in a range of creative
            services, including video editing, report authoring, logo design,
            and CV creation. My expertise in tools like Canva, Adobe
            Illustrator, Adobe Photoshop, LaTeX, and MS Word allows me to
            deliver high-quality, visually compelling, and polished results
            tailored to meet diverse client needs. With a keen eye for detail
            and a passion for design, I excel at transforming ideas into
            visually appealing content. Whether it &apos;s crafting engaging
            video content, designing unique and professional logos, authoring
            well-structured reports, or creating standout CVs that capture
            attention, I approach each project with creativity and precision.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Tools{" "}
            </TabButton>


          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
