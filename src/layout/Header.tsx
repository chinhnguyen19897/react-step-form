import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/home">
          <li>Home</li>
        </Link>
        <Link to="/form-subscription">
          <li>Form Subscription</li>
        </Link>
      </ul>
    </nav>
  )
}
