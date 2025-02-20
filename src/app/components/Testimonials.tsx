"use client";

import { cn } from "@/lib/utils";
import Marquee from "@/app/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Michael Chen",
    username: "@mchen", 
    body: "This AI Telegram bot has transformed how I manage my business communications. The natural language processing is incredibly sophisticated.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "Sarah Miller",
    username: "@sarahm",
    body: "The scheduling features are a game-changer. I can automate responses and set up complex workflows with minimal effort.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "David Park", 
    username: "@dpark",
    body: "Integration with other APIs was seamless. Now my Telegram bot handles everything from customer support to data analytics.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Emma Wilson",
    username: "@emmaw",
    body: "The customization options are endless. I've created a bot that perfectly matches my brand's voice and personality.", 
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "James Rodriguez",
    username: "@jrod",
    body: "Real-time notifications and alerts have helped us respond to customer inquiries faster than ever before.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Lisa Chang",
    username: "@lisac",
    body: "The AI capabilities are impressive. Our bot handles complex queries and learns from interactions to get better over time.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-96 cursor-pointer overflow-hidden rounded-xl border p-6",
        "border-gray-50/[.1] bg-gradient-to-br from-blue-600 to-blue-900 hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-4">
      <Image 
          className="rounded-full"
          width={48}
          height={48}
          alt={`${name}'s profile picture`}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-lg font-medium text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium text-white/90">{username}</p>
        </div>
      </div>
      <blockquote className="mt-4 text-base leading-relaxed text-white/90">{body}</blockquote>
    </figure>
  );
};

export default function Testimonials() {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          Loved by Thousands of Users
        </h2>
        <p className="mt-4 text-lg text-gray-400">
          See what our community has to say about their experience
        </p>
      </div>
      
      <div className="relative flex h-[500px] w-3/4 mx-auto flex-col items-center justify-center overflow-hidden rounded-lg bg-black">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black via-black/50 to-transparent"></div>
      </div>
    </div>
  );
}