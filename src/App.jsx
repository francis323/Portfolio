import { BrowserRouter, Routes, Route } from "react-router-dom"
import { NavBar } from "./components/layout/NavBar"
function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <main className="mt-36">
        <Routes>
          <Route path="/" element={
            <div className='bg-amber-600'>
              <h1 className='text-3xl text-amber-950'>Hello World</h1>
            </div>
          } />
        </Routes>
      </main>

    </BrowserRouter>
  )
}

export default App
