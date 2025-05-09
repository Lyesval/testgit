import { Outlet, Link } from "react-router-dom";
import './index.css'
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
        
          <li>
            <Link to="/Rating">Rating</Link>
          </li>
          <li>
            <Link to="/Comment">Comment</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;