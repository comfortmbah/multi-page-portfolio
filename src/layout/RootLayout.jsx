import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

const RootLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
        
      <Navbar />

      <main className="grow">
            <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default RootLayout