import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  const navLink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/Products">Products</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="px-5 py-4 bg-gray-50">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52 z-10"
              >
                {navLink}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Product Hut</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLink}</ul>
          </div>

          <div className="navbar-end gap-6">
            <div
              className="tooltip"
              data-tip={user?.displayName || "Name not found"}
            >
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={
                        user?.photoURL ||
                        "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            {user ? (
              <button onClick={() => logOut()} className="btn">
                Logout
              </button>
            ) : (
              <Link to="/login" className="btn">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
