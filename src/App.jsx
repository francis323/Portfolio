import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/layout/NavBar"
import { Home } from "./components/pages/Home"
function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <main className="max-w-308 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App
