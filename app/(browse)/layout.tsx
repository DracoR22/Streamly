import { Navbar } from "@/components/browse/navbar"
import { Sidebar } from "@/components/browse/sidebar"

const BrowseLayout = ({ children }: { children: React.ReactNode}) => {
  return (
     <>
     <Navbar/>
       <div className="flex h-full pt-20">
        <Sidebar/>
        {children}
        </div>
     </>
  )
}

export default BrowseLayout