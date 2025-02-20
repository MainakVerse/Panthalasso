import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/app/components/ui/calendar";
import {AnimatedBeamMultipleOutputDemo} from "@/app/components/animated-beam-multiple-outputs";
import {AnimatedListDemo} from "@/app/components/animated-list-demo";
import { BentoCard, BentoGrid } from "./ui/magicui-bento-grid";
import Marquee from "@/app/components/ui/marquee";

const files = [
  {
    name: "chat.json",
    body: "Natural language processing enables our bot to understand and respond to user messages in a human-like way.",
  },
  {
    name: "commands.txt", 
    body: "Custom commands and shortcuts help users quickly access the bot's most useful features and functionalities.",
  },
  {
    name: "config.yml",
    body: "Easy configuration options let you customize the bot's behavior, responses, and integration with other services.",
  },
  {
    name: "analytics.db",
    body: "Track usage patterns and gather insights about how users interact with your Telegram bot.",
  },
  {
    name: "responses.md",
    body: "Template responses and conversation flows ensure consistent and helpful interactions with users.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Smart Conversations",
    description: "AI-powered natural language processing chatbots for curated answers.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-blue-400/[.1] bg-blue-400/[.10] hover:bg-blue-400/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-blue-100">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-blue-200">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: BellIcon,
    name: "Instant Updates",
    description: "Get real-time notifications and updates at your gmail and whatsapp, so that you don't miss crucial leads.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 text-blue-200" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Pipeline Generation",
    description: "Connect with external data sources and ingest data seamlessly.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 text-blue-200" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Schedule Analytics", 
    description: "Make your system intelligent with scheduled analytics.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <Calendar
        mode="single"
        selected={new Date(2022, 4, 11, 0, 0, 0)}
        className="absolute right-0 top-10 origin-top rounded-md border border-blue-400/30 bg-blue-950/30 text-blue-200 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:scale-105"
      />
    ),
  },
];

export function BentoDemo() {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
