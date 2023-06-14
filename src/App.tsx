import "./app.scss"
import { BrowserRouter } from "react-router-dom"
import Router from "routes/router.tsx"

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}

export default App
