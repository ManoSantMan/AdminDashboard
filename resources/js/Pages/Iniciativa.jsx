import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useNavigate } from "react-router-dom";

// Card individual
const CardInstituicao = ({ instituicao, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white break-inside-avoid rounded-lg shadow-md overflow-hidden cursor-pointer relative transition-transform hover:scale-[1.015]"
  >
    <div className="relative w-full h-48">
      <img
        src={instituicao.imagem}
        alt={instituicao.nm_instituicao}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
      <h3 className="absolute bottom-2 left-2 right-2 text-white text-xl font-bold truncate">
        {instituicao.nm_instituicao}
      </h3>
    </div>
  </div>
);

// Modal para visualização da iniciativa
const Modal = ({ initiative, onClose, onConfirmSuccess }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      onConfirmSuccess();
    }, 3000);
  };

  const handleEnviarPerfil = () => {
    const isLoggedIn = localStorage.getItem("userLogged");
    if (!isLoggedIn) {
      navigate("/LoginVoluntario");
    } else {
      handleConfirm();
    }
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-zinc-800 w-full max-w-4xl p-6 rounded-xl shadow-lg text-black dark:text-[#d4d4d4] flex flex-col gap-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-2xl"
        >
          &times;
        </button>

        {showSuccess ? (
          <div className="flex flex-col items-center justify-center py-12">
            <DotLottieReact
              src="https://lottie.host/1744fdb6-3af1-4284-b661-cd9a1d455738/UVRVaY59jR.lottie"
              autoplay
              loop={false}
              style={{ height: 200 }}
            />
            <p className="mt-4 text-lg font-semibold text-green-600">
              Enviamos a sua solicitação à campanha
            </p>
          </div>
        ) : (
          <div className="flex gap-6">
            <img
              src={initiative.imagem}
              alt={initiative.nm_instituicao}
              className="w-1/2 h-auto rounded-lg object-cover"
            />
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  {initiative.nm_instituicao}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                  {initiative.descricao}
                </p>
              </div>
              <button
                onClick={handleEnviarPerfil}
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full"
              >
                Enviar perfil
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Componente principal
const Iniciativas = () => {
  const [instituicoes, setInstituicoes] = useState([]);
  const [selecionada, setSelecionada] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/instituicoes")
      .then((res) => res.json())
      .then((dados) => {
        const aprovadas = dados.filter((item) => item.status === "aceito");
        setInstituicoes(aprovadas);
      })
      .catch((erro) => console.error("Erro ao buscar instituições:", erro));
  }, []);

  const handleCardClick = (instituicao) => {
    setSelecionada(instituicao);
  };

  const handleCloseModal = () => {
    setSelecionada(null);
  };

  return (
    <div className="min-h-screen dark:bg-zinc-900 bg-gray-50 px-4 pb-8">
      <div className="pt-4">
        <img
          src="./Assets/banner_clear.png"
          alt="Banner"
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {instituicoes.map((item) => (
          <CardInstituicao
            key={item.id || item.title}
            instituicao={item}
            onClick={() => handleCardClick(item)}
          />
        ))}
      </div>

      {selecionada && (
        <Modal
          initiative={selecionada}
          onClose={handleCloseModal}
          onConfirmSuccess={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Iniciativas;
