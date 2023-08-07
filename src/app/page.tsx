"use client"

import { About } from "@/components/About"
import { Home } from "@/components/Home"

const Page = ()=> {
  return(
    <div className="overflow-x-hidden">
      <Home/>
      <About/>
    </div>
  )
}

export default Page