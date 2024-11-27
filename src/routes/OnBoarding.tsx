import Button from "../components/button";

export default function OnBoarding() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex flex-row justify-between items-center p-6 px-20">
        <img
          src="src\assets\QwentaMenuMakerLogo.png"
          alt="Qwenta"
          width={184}
        />
        <div className="flex flex-row gap-12">
          <p>Exemples</p>
          <p>Tarifs</p>
          <p>Se connecter</p>
        </div>
      </div>
      <div className="flex flex-row px-44 gap-20">
        <div className="flex flex-col justify-around">
          <h1 className=" text-5xl">
            Réalisez et diffusez votre menu personnalisé
          </h1>
          <p className=" text-xl">
            Grâce à Menu Maker, donnez à votre établissement sa propre identité.
            Créez votre menu en ligne et partagez-le sur toutes les plateformes
            !
          </p>
          <Button color={"8BC7B1"}>
            <p>Se connecter</p>
          </Button>
        </div>
        <img src="src\assets\onboarding1.png" alt="Image menu" width={438.71} />
      </div>
      <div className="flex flex-row pl-44 gap-20">
        <div className="flex flex-col justify-around">
          <h2 className=" text-3xl">Personnalisez votre menu</h2>
          <p className=" text-xl">
            Ajoutez vos plats, vos boissons, et organisez votre menu comme le
            souhaitez. Pour l’impression ou la diffusion en ligne, récupérez
            votre menu au format que vous souhaitez et diffusez-le auprès de
            votre clientèle !
          </p>
          <Button color={"8BC7B1"} type={"secondary"}>
            <p>Se lancer</p>
          </Button>
        </div>
        <img src="src\assets\onboarding2.png" alt="Image menu" width={720} />
      </div>
    </div>
  );
}
