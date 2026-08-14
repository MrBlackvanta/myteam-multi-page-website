import avatarAiysha from "@/assets/images/avatar-aiysha.webp";
import avatarArthur from "@/assets/images/avatar-arthur.webp";
import avatarKady from "@/assets/images/avatar-kady.webp";
import { ChartIcon, CogIcon, PersonIcon } from "@/components/icons";
import type { Feature, Testimonial } from "./types";

export const features: Feature[] = [
  {
    title: "Experienced Individuals",
    body: "Our network is made up of highly experienced professionals who are passionate about what they do.",
    icon: PersonIcon,
  },
  {
    title: "Easy to Implement",
    body: "Our processes have been refined over years of implementation meaning our teams always deliver.",
    icon: CogIcon,
  },
  {
    title: "Enhanced Productivity",
    body: "Our customized platform with in-built analytics helps you manage your distributed teams.",
    icon: ChartIcon,
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”",
    name: "Kady Baker",
    role: "Product Manager at Bookmark",
    avatar: avatarKady,
  },
  {
    quote:
      "“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”",
    name: "Aiysha Reese",
    role: "Founder of Manage",
    avatar: avatarAiysha,
  },
  {
    quote:
      "“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”",
    name: "Arthur Clarke",
    role: "Co-founder of MyPhysio",
    avatar: avatarArthur,
  },
];
