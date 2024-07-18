export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Next.js",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/playground",
    },
  ],
  links: {
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
