import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Layout = () => {
  return (
    <>
      <Header/>
        <main className="bg-bkg py-16">
          <Outlet/>
        </main>
      <Footer/>
    </>
  )
}

export default Layout