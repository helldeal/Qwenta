import SidePanel from "../components/sidepanel";
import nykosLogo from "../assets/NYKOS_VECTEUR_PNG 1.png";
import illu1 from "../assets/illu1.png";
import illu2 from "../assets/illu2.png";
import illu3 from "../assets/illu3.png";

const menuItems = [
  "+ Créer un menu",
  "+ Diffuser un menu",
  "+ Imprimer un menu",
];

const additionalItems = [
  {
    text: "Faites réaliser vos supports par un graphiste pro",
    image: illu1,
  },
  {
    text: "Découvrez nos conseils pour un menu réussi",
    image: illu2,
  },
  {
    text: "Comment poster son menu sur Instagram ?",
    image: illu3,
  },
];

export default function Dashboard() {
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
        <div className="flex flex-row justify-between w-full gap-5">
          {menuItems.map((item) => (
            <div
              className="flex bg-white w-full h-48 rounded-lg text-center justify-center items-center"
              key={item}
            >
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-medium pb-5">Pour aller plus loin</h2>
          <div className="flex flex-row justify-between w-full gap-5">
            {additionalItems.map((item) => (
              <div
                className="bg-white flex w-[295px] flex-col rounded-xl"
                key={item.text}
              >
                <img
                  src={item.image}
                  alt="illustration"
                  width={295}
                  className=""
                />
                <p className="text-base px-5 py-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
