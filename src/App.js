import React, { useEffect } from "react";

const links = [
  {
    title: "Programación - Enlaces",
    url: "https://www.guialocaldolores.com.ar/acp",
    image: "logo.png"
  },
  {
    title: "Radio Online",
    url: "https://server.radiostreaming.com.ar/8174/stream",
    image: "radio.png"
  },
  {
    title: "Streaming",
    url: "https://www.youtube.com/@acpcontenidos",
    image: "streaming.png"
  },
  {
    title: "Blog",
    url: "https://www.guialocaldolores.com.ar/acp-blog/",
    image: "blog.png"
  }
];

export default function App() {
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      window.deferredPrompt = event;
      document.getElementById("installButton").style.display = "block";
    });
  }, []);

  const handleInstallClick = () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) return;
    promptEvent.prompt();
    promptEvent.userChoice.then(() => {
      window.deferredPrompt = null;
      document.getElementById("installButton").style.display = "none";
    });
  };

  return (
    <div className="relative flex flex-col items-center p-4 min-h-screen w-full text-center overflow-hidden bg-black">
      {/* Marca de agua como fondo completo (más oscura) */}
      <img
        src="logo.png"
        alt="Marca de agua"
        className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none select-none"
      />

      {/* Botón de instalación */}
      <button
        id="installButton"
        onClick={handleInstallClick}
        className="bg-blue-900 text-white px-4 py-2 rounded-lg mb-6 shadow-md hover:bg-blue-950 hidden z-10"
      >
        📲 INSTALÁ LA APP EN TU DISPOSITIVO!
      </button>

      {/* Sección de enlaces */}
      <div className="grid grid-cols-1 gap-6 w-full max-w-sm z-10">
        {links.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition bg-gray-800 bg-opacity-60 text-center"
          >
            <div className="w-full h-40 flex items-center justify-center bg-transparent">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-4 text-lg font-bold italic text-white uppercase bg-blue-900 bg-opacity-90">
              {item.title}
            </div>
          </a>
        ))}
      </div>

      {/* Redes sociales */}
      <div className="flex justify-center gap-6 mt-10 z-10">
        <a
          href="https://www.facebook.com/acp.contenidos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="facebook.png"
            alt="Facebook"
            className="w-12 h-12 hover:scale-110 transition-transform"
          />
        </a>
        <a
          href="https://www.instagram.com/acp.contenidos/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="instagram.png"
            alt="Instagram"
            className="w-12 h-12 hover:scale-110 transition-transform"
          />
        </a>
        <a
          href="https://wa.me/5492245470550"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="whatsapp.png"
            alt="Whatsapp"
            className="w-12 h-12 hover:scale-110 transition-transform"
          />
        </a>
      </div>

      {/* Botón de Políticas de Privacidad y Descargo (abajo de todo) */}
      <a
        href="https://www.guialocaldolores.com.ar/acp/app/app-politica-de-privacidad/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-4 py-2 bg-red-700 text-white text-sm font-semibold rounded-md w-full max-w-sm z-10"
      >
        Políticas de privacidad y descargo de responsabilidad
      </a>
    </div>
  );
}
