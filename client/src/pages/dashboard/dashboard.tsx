import DashboardBlogCard from "@/components/dashboard-card"
import React from "react"

const Dashboard = () => {
  return (
    <div>
      {/* Title */}
      <div>
        <h3 className="text-[35px] font-bold break-words max-w-[850px]">
          Your destination for Creativity, Knowledge, and Growth
        </h3>
        <p className="text-lg mt-3 text-neutral-500">
          Discover insight, tips, and trends to fuel your creativity and success
        </p>
        {/* Dashboard only blog card */}
        <div className="mt-20">
          <DashboardBlogCard />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
