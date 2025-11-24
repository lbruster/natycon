import ClipPathTitle from "../components/ClipPathTitle";

const BenefitSection = () => {
  return (
    <section className="benefit-section">
      <div className="container mx-auto pt-20">
        <div className="col-center">
          <p className="">
            Descubre los Beneficios:
            <br />
            Explora las Ventajas Clave de nuestra limonada medicinal 🍋
          </p>

          <div className="mt-20 col-center">
            <ClipPathTitle
              title={"Anís verde"}
              color={"#faeade"}
              bg={"#c88e64"}
              className={"first-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Albahaca"}
              color={"#222123"}
              bg={"#faeade"}
              className={"second-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Limón"}
              color={"#faeade"}
              bg={"#7F3B2D"}
              className={"third-title"}
              borderColor={"#222123"}
            />
            <ClipPathTitle
              title={"Maracuyá"}
              color={"#2E2D2F"}
              bg={"#FED775"}
              className={"fourth-title"}
              borderColor={"#222123"}
            />
          </div>

          <div className="md:mt-0 mt-10">
            <p>And much more ...</p>
          </div>
        </div>
      </div>

      <div className="relative overlay-box">{/* <VideoPinSection /> */}</div>
    </section>
  );
};

export default BenefitSection;
