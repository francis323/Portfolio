import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/layout/NavBar"
import { Footer } from "./components/layout/Footer"
import { Home } from "./components/pages/Home"
import { ProjectDetail } from "./components/pages/ProjectDetail"
function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1 max-w-308 mx-auto px-6 xl:px-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
