import { NavLink } from "react-router";
import logo from "../assets/QwentaMenuMakerLogo.png";

const menuItems = [
  { name: "Dashboard" },
  { name: "Mes menus" },
  { name: "Mon restaurant" },
  { name: "Mon compte" },
];

export default function SidePanel() {
  return (
    <div className="bg-white flex flex-col sticky left-0 w-80 py-9 px-14">
      <NavLink to="/">
        <img className="h-fit" src={logo} alt="logo" width={184} />
      </NavLink>
      <div className="flex flex-col grow justify-around py-20">
        <div className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <NavLink
              to={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                isActive
                  ? "bg-gray-200 text-xl px-6 py-3 rounded"
                  : "text-xl px-6 py-3"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <span className="block bg-black mx-6 w-[39px] h-px" />
        <div className="flex flex-col">
          <NavLink to={"/"} className="px-6 py-3">
            <p className="text-sm">Se déconnecter</p>
          </NavLink>
          <p className="text-sm px-6 py-3">Mentions légales</p>
          <p className="text-sm px-6 py-3">Tous droit réservés</p>
        </div>
      </div>
    </div>
  );
}
