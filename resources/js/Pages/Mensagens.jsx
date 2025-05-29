import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import axios from "axios";

const Mensagens = () => {
  const [instituicoes, setInstituicoes] = useState([]);
  const [dropdownStatus, setDropdownStatus] = useState({
    pendente: false,
    aprovada: false,
    recusada: false,
  });
  const [selectedInstituicao, setSelectedInstituicao] = useState(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchInstituicoesEFormularios = async () => {
      try {
        const instResponse = await axios.get("http://localhost:8000/api/instituicoes", {
          headers: { Authorization: `Bearer ${token}` },
        });

        const instituicoesComFormularios = await Promise.all(
          instResponse.data.map(async (inst) => {
            const formResponse = await axios.get(
              `http://localhost:8000/api/instituicoes/${inst.id}/formularios`,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );
            return {
              ...inst,
              formularios: formResponse.data,
            };
          })
        );

        setInstituicoes(instituicoesComFormularios);
      } catch (error) {
        console.error("Erro ao buscar instituições e formulários", error);
      }
    };

    fetchInstituicoesEFormularios();
  }, [token]);

  const toggleDropdown = (status) => {
    setDropdownStatus((prev) => ({
      ...prev,
      [status]: !prev[status],
    }));
  };

  const openModal = (instituicao) => {
    setSelectedInstituicao(instituicao);
  };

  const closeModal = () => {
    setSelectedInstituicao(null);
  };

  const handleStatusChange = async (newStatus) => {
    if (!selectedInstituicao) return;

    try {
      await axios.put(
        `http://localhost:8000/api/instituicoes/${selectedInstituicao.id}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Atualizar estado localmente
      setInstituicoes((prev) =>
        prev.map((inst) =>
          inst.id === selectedInstituicao.id
            ? { ...inst, status: newStatus }
            : inst
        )
      );

      setSelectedInstituicao((prev) =>
        prev ? { ...prev, status: newStatus } : prev
      );
    } catch (error) {
      console.error("Erro ao atualizar status", error);
    }
  };

  const renderInstituicoesPorStatus = (status) => {
    const filtradas = instituicoes.filter((inst) => inst.status === status);

    return filtradas.map((inst) => (
      <div
        key={inst.id}
        onClick={() => openModal(inst)}
        className="bg-[#f9fafb] dark:bg-zinc-700 border border-gray-200 rounded-md p-3 text-sm shadow-sm cursor-pointer mb-2"
      >
        <div className="font-medium dark:text-white">{inst.nome}</div>
        <div className="text-gray-600 dark:text-[#B0B0B0] text-xs">
          {inst.formularios.length} formulário(s)
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-md border border-gray-200 shadow-sm bg-white dark:bg-zinc-900">
      <h1 className="text-2xl font-bold text-[#2f486e] dark:text-[#B0B0B0] mb-6">
        Instituições
      </h1>

      <div className="space-y-6">
        {/* Pendentes */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer mb-2"
            onClick={() => toggleDropdown("pendente")}
          >
            <h3 className="font-semibold text-lg">Pendentes</h3>
            {dropdownStatus.pendente ? <ChevronUp /> : <ChevronDown />}
          </div>
          {dropdownStatus.pendente && renderInstituicoesPorStatus("pendente")}
        </div>

        {/* Aprovadas */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer mb-2"
            onClick={() => toggleDropdown("aprovada")}
          >
            <h3 className="font-semibold text-lg">Aprovadas</h3>
            {dropdownStatus.aprovada ? <ChevronUp /> : <ChevronDown />}
          </div>
          {dropdownStatus.aprovada && renderInstituicoesPorStatus("aprovada")}
        </div>

        {/* Recusadas */}
        <div>
          <div
            className="flex items-center justify-between cursor-pointer mb-2"
            onClick={() => toggleDropdown("recusada")}
          >
            <h3 className="font-semibold text-lg">Recusadas</h3>
            {dropdownStatus.recusada ? <ChevronUp /> : <ChevronDown />}
          </div>
          {dropdownStatus.recusada && renderInstituicoesPorStatus("recusada")}
        </div>
      </div>

      {/* Modal */}
      {selectedInstituicao && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-900 dark:text-[#B0B0B0] w-[90%] max-w-md p-5 rounded-lg shadow-lg relative flex flex-col gap-4">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>

            <h2 className="text-lg font-bold mb-2">{selectedInstituicao.nome}</h2>

            <label className="text-sm mt-2">Alterar status da instituição:</label>
            <select
              value={selectedInstituicao.status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="border rounded px-3 py-1 text-sm dark:bg-zinc-800 dark:text-white"
            >
              <option value="pendente">Pendente</option>
              <option value="aprovada">Aprovada</option>
              <option value="recusada">Recusada</option>
            </select>

            <div className="mt-4">
              <p className="text-sm">
                Total de formulários: {selectedInstituicao.formularios.length}
              </p>
              <ul className="text-sm list-disc ml-5 mt-2">
                {selectedInstituicao.formularios.map((f) => (
                  <li key={f.id}>
                    {f.titulo} - {f.status}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mensagens;
