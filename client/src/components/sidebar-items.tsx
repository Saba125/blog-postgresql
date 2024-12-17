import { LucideIcon } from "lucide-react"
import { Link, useLocation } from "react-router-dom"
import clsx from "clsx" // Ensure you have clsx installed: `npm install clsx`

interface SidebarItemProps {
  label: string
  href: string
  icon: LucideIcon
}

const SidebarItem = ({ href, icon: Icon, label }: SidebarItemProps) => {
  const { pathname } = useLocation() // Get the current path
  const isActive = pathname === href // Check if the current path matches the href

  return (
    <Link
      to={href}
      className={clsx(
        "w-full flex items-center gap-x-6 p-3 rounded-full transition-all group",
        isActive ? "bg-neutral-200 text-black" : "hover:bg-neutral-300"
      )}
    >
      <Icon
        className={clsx(
          "size-5 transition-colors",
          isActive ? "text-black" : "text-neutral-500 group-hover:text-black"
        )}
      />
      <span
        className={clsx(
          "transition-colors",
          isActive
            ? "text-black font-bold"
            : "text-neutral-600 group-hover:text-black"
        )}
      >
        {label}
      </span>
    </Link>
  )
}

export default SidebarItem
