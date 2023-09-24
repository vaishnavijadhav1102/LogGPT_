import SideBar from '@/components/SideBar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SessionProvider } from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Login from '@/components/Login'



export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)
  return (
    <html lang="en">
      <head /> 
      <body>

      {/* // something is wrong with sign innnnnn
      //will figure it out later */}
        {/* <SessionProvider session={session}>
          {!session ? (
            <Login />
          ): ( */}
          
        <div className = "flex">
          <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]">
          {/* sidebar */}
            <SideBar />
          </div>
          {/* clietprovider - notification */}
          <div className = "bg-[#7D7C7C] flex-1">{children}</div>
        </div>
        {/* //  )} 
        //  </SessionProvider>  */}
      </body>
    </html>
  )
}
