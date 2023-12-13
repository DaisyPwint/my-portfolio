import { Routes,Route } from "react-router-dom"
import Layout from "./layout/Layout"
import { About, Contact, Home, Projects } from "./pages"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="projects" element={<Projects/>} />
        <Route path="contact" element={<Contact/>} />
      </Route>
    </Routes>
  )
}

export default App
