const HeroSection = () => {
  return (
    <section className="bg-main-bg">
      <div className="hero-container">
        <img
          src="/images/static-img.png"
          alt="hero-img"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-120"
        />
        <div className="hero-content">
          {" "}
          {/* opacity-0 */}
          <div className="overflow-hidden">
            <h1 className="hero-title">Naturales y Concentrados</h1>
          </div>
          <div
            /* style={{ clipPath: "polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)" }} */
            className="hero-text-scroll"
          >
            <div className="hero-subtitle">
              <h1>Limon + Caffeine</h1>
            </div>
          </div>
          <h2>
            Live life to the fullest with SPYLT: Shatter boredom and embrace
            your inner kid with every deliciously smooth chug.
          </h2>
          <div className="hero-button">
            <p>Prueba un SHOT</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
