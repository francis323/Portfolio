import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className='bg-amber-600'>
            <ChevronDown />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}>
              Hello World
            </motion.h2>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
