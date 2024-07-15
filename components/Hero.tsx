import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map absolute inset-0 bg-blue-900 opacity-25" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={100}
          height={100}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <div className="mb-20">
          <h2 className="bold-52 lg:bold-40 text-center text-blue-600">
            UN ACCOMPAGNEMENT SUR-MESURE POUR VOUS AIDER À CRÉER, GÉRER ET
            DÉVELOPPER VOTRE ACTIVITÉ.
          </h2>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button type="button" title="DEVENIR PARTENAIRE" variant="btn_blue" />
          <Button
            type="button"
            title="NOS DOMAINES"
            icon="/play.svg"
            variant="btn_blue"
          />
        </div>

        <div className="my-11 flex flex-wrap gap-10">
          <div className="flex items-center gap-4">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star-icon.png"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-30 flex w-[268px] flex-col gap-10 rounded-3xl bg-green-90 px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Emplacement</p>
              <Image src="/close.svg" alt="close" width={30} height={30} />
            </div>
            <p className="bold-20 text-white">Tunis</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Élévation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
