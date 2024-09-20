
import { NavLink, Outlet } from "react-router-dom";


export default function NavBar() {

  return (
    <div className=" fixed flex  h-screen"  >
      <aside className="w-40 bg-gray-100 shadow-md border-1 h-screen flex-col flex   p-3">
        <NavLink className="m-1 px-5  py-1 rounded hover:bg-blue-100 hover:text-blue-700 text-lg font-bold " to="/" style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "white" : "black",
            backgroundColor: isActive ? "skyBlue " : "",
            backgroundColor: isActive ? "skyBlue " : "",


          };
        }} >

          CC
        </NavLink>
        <NavLink className=" px-5 py-1 rounded  text-lg hover:bg-blue-100 hover:text-blue-700 m-1 " to="/HR" style={({ isActive, isPending, isTransitioning }) => {
          return {
            fontWeight: isActive ? "bold" : "bold",
            color: isActive ? "white" : "black",
            backgroundColor: isActive ? "skyBlue " : "",

          };
        }} >
          HR
        </NavLink>
      </aside>

      <Outlet />
    </div>
  );
}