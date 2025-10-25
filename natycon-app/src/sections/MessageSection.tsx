const MessageSection = () => {
  return (
    <section className="message-content">
      <div className="container mx-auto flex-center py-28 relative">
        <div className="w-full h-full">
          <div className="msg-wrapper">
            <h1 className="first-message">"Despierta tu pasado valiente y</h1>

            <div
              style={{
                clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
              }}
              className="msg-text-scroll"
            >
              <div className="bg-light-brown md:pb-5 pb-3 px-5">
                <h2 className="text-red-brown">Recarga energías</h2>
              </div>
            </div>

            <h1 className="second-message">
              TU FUTURO EN CADA SORBO DE ELIXIR Perfecto
            </h1>
          </div>

          <div className="flex-center md:mt-20 mt-10">
            <div className="max-w-md px-10 flex-center overflow-hidden">
              <p>
                Enciende tu espíritu y alimenta la aventura de la vida con
                Lemon, donde un solo sorbo te lleva a una épica nostalgia y
                diversión sin miedo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageSection;
