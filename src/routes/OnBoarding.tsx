import Button from "../components/button";
import Logo from "../assets/QwentaMenuMakerLogo.png";
import Image1 from "../assets/onboarding1.png";
import Image2 from "../assets/onboarding2.png";
import ContentBackground from "../assets/Rectangle 3.png";
import { NavLink } from "react-router";

export default function OnBoarding() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-row justify-between items-center p-6 px-20">
        <img src={Logo} alt="Qwenta" width={184} />
        <div className="flex flex-row gap-12">
          <p>Exemples</p>
          <p>Tarifs</p>
          <NavLink to="/Dashboard">Se connecter</NavLink>
        </div>
      </div>
      <div className="flex flex-row px-44 pb-24 gap-20">
        <div className="flex flex-col justify-around">
          <h1 className=" text-5xl">
            Réalisez et diffusez votre menu personnalisé
          </h1>
          <p className=" text-xl">
            Grâce à Menu Maker, donnez à votre établissement sa propre identité.
            Créez votre menu en ligne et partagez-le sur toutes les plateformes
            !
          </p>
          <NavLink to="/Dashboard">
            <Button color={"8BC7B1"}>
              <p>Se connecter</p>
            </Button>
          </NavLink>
        </div>
        <div className="relative min-w-[439px]">
          <img src={Image1} alt="Image menu" width={439} />
          <div className="absolute inset-0 border border-[#C5A073] rounded-lg -bottom-5 -left-5 top-5 right-5 -z-10" />
        </div>
      </div>
      <div
        className="flex flex-row pl-44 gap-20 py-24 "
        style={{ backgroundImage: `url(${ContentBackground})` }}
      >
        <div className="flex flex-col justify-around">
          <h2 className=" text-3xl">Personnalisez votre menu</h2>
          <p className=" text-xl">
            Ajoutez vos plats, vos boissons, et organisez votre menu comme le
            souhaitez. Pour l’impression ou la diffusion en ligne, récupérez
            votre menu au format que vous souhaitez et diffusez-le auprès de
            votre clientèle !
          </p>
          <NavLink to="/Dashboard">
            <Button color={"8BC7B1"} type={"secondary"}>
              <p>Se lancer</p>
            </Button>
          </NavLink>
        </div>
        <img src={Image2} alt="Image menu" width={720} />
      </div>
      <div className=" px-40 py-24">
        <h2 className="text-center text-3xl pb-2">
          Comment créer votre menu ?
        </h2>
        <p className="text-center text-xl pb-16">
          Réalisez votre menu en seulement trois étapes
        </p>
        <div className=" justify-between flex flex-row gap-10">
          <div className="flex bg-white w-96 flex-col p-2 rounded relative">
            <div className="absolute inset-0 border border-[#C5A073] rounded-lg -bottom-3 -left-3 top-3 right-3 -z-10" />
            <div className="absolute rounded-full w-3 h-3 bg-[#C5A073] left-4 top-4" />
            <h1
              className="text-right text-7xl font-black text-white"
              style={{ WebkitTextStroke: "1px #D97606" }}
            >
              1
            </h1>
            <p className=" text-base px-8 pb-8">
              Listez l’ensemble de vos boissons, entrées, plats, desserts,
              accompagnements... à afficher sur votre menu.
            </p>
          </div>
          <div className="flex bg-white w-96 flex-col p-2 rounded relative">
            <div className="absolute inset-0 border border-[#C5A073] rounded-lg -bottom-3 -left-3 top-3 right-3 -z-10" />
            <div className="absolute rounded-full w-3 h-3 bg-[#C5A073] left-4 top-4" />
            <h1
              className="text-right text-7xl font-black text-white"
              style={{ WebkitTextStroke: "1px #D97606" }}
            >
              2
            </h1>
            <p className=" text-base px-8 pb-8">
              Choisissez le style qui correspond à votre restaurant (logo,
              couleurs, typos).
            </p>
          </div>
          <div className="flex bg-white w-96 flex-col p-2 rounded relative">
            <div className="absolute inset-0 border border-[#C5A073] rounded-lg -bottom-3 -left-3 top-3 right-3 -z-10" />
            <div className="absolute rounded-full w-3 h-3 bg-[#C5A073] left-4 top-4" />
            <h1
              className="text-right text-7xl font-black text-white"
              style={{ WebkitTextStroke: "1px #D97606" }}
            >
              3
            </h1>
            <p className=" text-base px-8 pb-8">
              Enregistrez votre menu en PDF et diffusez-le sur vos plateformes
              de vente en ligne.
            </p>
          </div>
        </div>
      </div>
      <div className=" bg-white p-3 pr-10">
        <p className="text-right">Tous droits réservés. Mentions légales</p>
      </div>
    </div>
  );
}
