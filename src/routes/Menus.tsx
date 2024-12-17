import SidePanel from "../components/sidepanel";
import nykosLogo from "../assets/NYKOS_VECTEUR_PNG 1.png";
import menuData from "../data/menu.json";

type MenuItem = {
  Nom: string;
  Prix: string;
  Description?: string;
};

type Menu = {
  Souvlakis: MenuItem[];
  Assiettes: MenuItem[];
  Accompagnement: MenuItem[];
  Boissons: MenuItem[];
};

const menu: Menu = menuData.Menu;

export default function Dashboard() {
  console.log(menu);
  return (
    <div className="flex">
      <SidePanel />
      <div className="flex flex-col p-20 gap-20 grow ml-80">
        <div className="flex flex-row items-center gap-8">
          <div className=" bg-white rounded-md">
            <img className="px-10 py-5" src={nykosLogo} alt="nykos logo" />
          </div>

          <h1 className="text-5xl font-medium">
            Bienvenue, <br /> Nykos Greek Food
          </h1>
        </div>
        <div className="flex flex-col gap-10">
          {Object.keys(menu).map((category, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">{category}</h2>
              {menu[category as keyof Menu].map((item, itemIndex) => (
                <div key={itemIndex} className="p-4 bg-white rounded-md ">
                  <h3 className="text-2xl font-semibold">{item.Nom}</h3>
                  <p className="text-lg">{item.Description}</p>
                  <p className="text-lg font-medium">{item.Prix}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
