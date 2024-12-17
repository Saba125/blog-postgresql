import React from "react"
import Logo from "./logo"
import { Compass, Home, Star } from "lucide-react"
import SidebarItem from "./sidebar-items"
const routes = [
  {
    label: "Home",
    href: "/",
    icon: Home,
  },
  {
    label: "Discover",
    href: "/discover",
    icon: Compass,
  },
  {
    label: "Favorites",
    href: "/favorites",
    icon: Star,
  },
]
const Sidebar = () => {
  return (
    <div className="space-y-5 p-3">
      <Logo />
      {/* Sidebar menu items */}

      {/* Must add Dotted seperator */}
      <div>
        {routes.map((item) => (
          <SidebarItem
            key={item.href}
            href={item.href}
            label={item.label}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  )
}

export default Sidebar
