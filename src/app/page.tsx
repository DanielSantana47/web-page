"use client"

import { About } from "@/components/About"
import { Contact } from "@/components/Contact"
import { Home } from "@/components/Home"
import { Works } from "@/components/Works"

const Page = ()=> {
  return(
      <div className="overflow-x-hidden">
        <Home/>
        <About/>
        <Works/>
        <Contact/>
      </div>
  )
}

export default Page