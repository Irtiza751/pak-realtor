import { useNavigate, useLocation, Link } from "react-router-dom";
import { Home, User, Tag } from "react-feather";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const matchPathFromRoute = (route) => {
    if (route === location.pathname) {
      return true;
    }
    return false;
  };

  return (
    <nav className="fixed bottom-0 w-full">
      <ul className="flex justify-between py-4 px-8 shadow-lg border-t">
        <li>
          <Link to="/" className="flex flex-col items-center">
            <Home color={matchPathFromRoute("/") ? "#1D4ED8" : "#1e293b"} />
            <p
              className={
                matchPathFromRoute("/") ? "text-blue-700" : "text-slate-800"
              }
            >
              Explore
            </p>
          </Link>
        </li>
        <li>
          <Link to="/offers" className="flex flex-col items-center">
            <Tag
              color={matchPathFromRoute("/offers") ? "#1D4ED8" : "#1e293b"}
            />
            <p
              className={
                matchPathFromRoute("/offers")
                  ? "text-blue-700"
                  : "text-slate-800"
              }
            >
              Offers
            </p>
          </Link>
        </li>
        <li>
          <Link to="/profile" className="flex flex-col items-center">
            <User
              color={matchPathFromRoute("/profile") ? "#1D4ED8" : "#1e293b"}
            />
            <p
              className={
                matchPathFromRoute("/profile")
                  ? "text-blue-700"
                  : "text-slate-800"
              }
            >
              Profile
            </p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
