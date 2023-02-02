import { NavItem } from "@/types/nav"

interface SiteConfig {
  name: string
  description: string
  mainNav: NavItem[]
  links: {
    twitter: string
    github: string
    medium: string
    docs: string
  }
}

export const siteConfig: SiteConfig = {
  name: "Powered by Nextjs",
  description:
    "Beautifully designed components from Shadcn built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Your Tree",
      href: "/your-tree",
    },
    {
      title: "Find a Service",
      href: "/find-a-service",
    },
  ],
  links: {
    twitter: "https://twitter.com/jycodes",
    github: "https://github.com/jyar",
    medium: "https://medium.com/@jy.codes1",
    docs: "https://ui.shadcn.com",
  },
}
