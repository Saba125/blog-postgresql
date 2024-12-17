import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "./ui/button"
import { Menu } from "lucide-react"
import Sidebar from "./sidebar"

const MobileSidebar = () => {
  return (
    <Sheet modal={false}>
      <SheetTrigger>
        <Button variant="outline">
          <Menu />
        </Button>
        <SheetContent className="p-0" side="left">
          <Sidebar />
        </SheetContent>
      </SheetTrigger>
    </Sheet>
  )
}

export default MobileSidebar
