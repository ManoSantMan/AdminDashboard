import React, { useState, useEffect } from "react";


const initialInitiatives = [
  {
    title: "Orfanatos",
    description: "Texto sobre orfanatos e sua importância.",
    image: "../assets/inicitiva1.jpg",
  },
  {
    title: "Educação",
    description: "Texto aleatório sobre uma iniciativa linda e transformadora.",
    image: "../assets/iniciativa2.jpg",
  },
  {
    title: "Saúde",
    description: "Texto aleatório sobre cuidados com a saúde e bem-estar.",
    image: "../assets/iniciativa3.jpg",
  },
  {
    title: "Meio Ambiente",
    description: "Ações para um futuro mais verde.",
    image: "../assets/iniciativa4.jpg",
  },
  {
    title: "Comunidade",
    description: "Fortalecendo vínculos e apoio mútuo.",
    image: "../assets/iniciativa5.jpg",
  },
  {
    title: "Inclusão",
    description: "Promovendo igualdade de oportunidades.",
    image: "../assets/iniciativa6.jpg",
  },
  {
    title: "Tecnologia",
    description: "Projetos de inovação para o bem comum.",
    image: "../assets/iniciativa7.jpg",
  },
];

const InitiativeCard = ({ title, description, image, onClick }) => (
  <div
    onClick={onClick}
    className="bg-white break-inside-avoid rounded-lg shadow-md overflow-hidden cursor-pointer relative transition-transform hover:scale-[1.015]"
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
      <div className="p-4 text-white">
        <h3 className="text-xl font-bold mb-1 truncate">{title}</h3>
        <p className="text-sm line-clamp-3">{description}</p>
      </div>
    </div>
  </div>
);

const ConfirmDialog = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded  shadow-lg max-w-sm w-full text-center">
      <p className="text-lg mb-4">Tem certeza que deseja confirmar sua participação?</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={onCancel}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-full items-center justify-center w-100"
        >
          Cancelar
        </button>
        <button
          onClick={onConfirm}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full items-center justify-center w-100"
        >
          Confirmar
        </button>
      </div>
    </div>
  </div>
);

const Modal = ({
  initiative,
  onClose,
  onOpenConfirm,
  isRegisterMode = false,
  onSubmit,
  setNewInitiative,
  newInitiative
}) => (
  <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
  <div className="bg-white dark:bg-zinc-800 w-full max-w-4xl p-6 rounded-xl shadow-lg text-black dark:text-[#d4d4d4] flex flex-col gap-6 relative">
    <button
      onClick={onClose}
      className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 text-2xl"
    >
      &times;
    </button>

    {isRegisterMode ? (
      <>
        <h2 className="text-2xl font-bold">Cadastrar Iniciativa</h2>
        <input
          type="text"
          placeholder="Título"
          value={newInitiative.title}
          onChange={(e) =>
            setNewInitiative({ ...newInitiative, title: e.target.value })
          }
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-700 text-black dark:text-white p-2 rounded w-full"
        />
        <textarea
          placeholder="Descrição"
          value={newInitiative.description}
          onChange={(e) =>
            setNewInitiative({ ...newInitiative, description: e.target.value })
          }
          className="border border-gray-300 dark:border-gray-600 bg-white dark:bg-zinc-700 text-black dark:text-white p-2 rounded w-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setNewInitiative({
              ...newInitiative,
              image: URL.createObjectURL(e.target.files[0]),
            })
          }
          className="dark:text-white"
        />
        <button
          onClick={onSubmit}
          className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded self-start"
        >
          Salvar Iniciativa
        </button>
      </>
    ) : (
      <div className="flex gap-6">
        <img
          src={initiative.image}
          alt={initiative.title}
          className="w-1/2 h-auto rounded-lg object-cover"
        />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-4">{initiative.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              {initiative.description}
            </p>
          </div>
          <button
            onClick={onOpenConfirm}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full items-center justify-center w-1000"
          >
            Confirmar Participação
          </button>
        </div>
      </div>
    )}
  </div>
</div>


);


const SplashScreen = ({ message }) => (
  <div className="fixed bottom-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg transition-opacity duration-300">
    {message}
  </div>
);

const Iniciativas = () => {
  const [initiatives, setInitiatives] = useState(initialInitiatives);
  const [selected, setSelected] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [newInitiative, setNewInitiative] = useState({
    title: "",
    description: "",
    image: "",
  });
  

  const handleCardClick = (initiative) => setSelected(initiative);
  const handleCloseModal = () => {
    setSelected(null);
    setShowConfirm(false);
    setIsRegisterOpen(false);
  };
  const handleOpenConfirm = () => setShowConfirm(true);
  const handleConfirm = () => {
    setConfirmed(true);
    setShowConfirm(false);
    setSelected(null);
  };

  const handleRegister = () => {
    if (newInitiative.title && newInitiative.description && newInitiative.image) {
      setInitiatives([newInitiative, ...initiatives]);
      setNewInitiative({ title: "", description: "", image: "" });
      setIsRegisterOpen(false);
      setConfirmed(true);
    }
  };

  useEffect(() => {
    if (confirmed) {
      const timer = setTimeout(() => setConfirmed(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [confirmed]);

  return (
    <div className="min-h-screen dark:bg-zinc-900 bg-gray-50 px-4 pb-8">
      {/* Banner */}
      <div className="pt-4">
        <img
          src="./assets/banner_clear.png"
          alt="Banner"
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
        />
      </div>

    

      {/* Cards */}
      <div className="mt-8 columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
        {initiatives.map((initiative, index) => (
          <InitiativeCard
            key={index}
            {...initiative}
            onClick={() => handleCardClick(initiative)}
          />
        ))}
      </div>

      {selected && !showConfirm && (
        <Modal
          initiative={selected}
          onClose={handleCloseModal}
          onOpenConfirm={handleOpenConfirm}
        />
      )}

      {isRegisterOpen && (
        <Modal
          isRegisterMode
          onClose={handleCloseModal}
          onSubmit={handleRegister}
          newInitiative={newInitiative}
          setNewInitiative={setNewInitiative}
        />
      )}

      {showConfirm && (
        <ConfirmDialog
          onConfirm={handleConfirm}
          onCancel={() => setShowConfirm(false)}
        />
      )}

      {confirmed && (
        <SplashScreen message="Confirmação realizada com sucesso!" />
      )}
    </div>
  );
};

export default Iniciativas;
