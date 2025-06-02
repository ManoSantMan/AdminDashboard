import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [instituicoes, setInstituicoes] = useState([]);
  const token = localStorage.getItem("admin_token");

  useEffect(() => {
    fetch("http://localhost:8000/api/instituicoes", {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((dados) => {
        const pendentes = dados.filter((item) => item.status === "pendente");
        setInstituicoes(pendentes);
      });
  }, [token]);

  const atualizarStatus = (id, status) => {
    fetch(`http://localhost:8000/api/instituicoes/${id}`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then(() => {
        setInstituicoes((prev) =>
          prev.filter((inst) => inst.id !== id)
        );
      });
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Painel do Administrador</h1>
      <h2 className="text-xl mb-4">Iniciativas Pendentes</h2>
      {instituicoes.length === 0 && <p>Nenhuma iniciativa pendente.</p>}
      <ul>
        {instituicoes.map((inst) => (
          <li key={inst.id} className="mb-4 p-4 border rounded">
            <h3 className="font-bold">{inst.nm_instituicao}</h3>
            <p>{inst.descricao}</p>
            <div className="mt-2 flex gap-2">
              <button
                className="bg-green-600 text-white px-4 py-1 rounded"
                onClick={() => atualizarStatus(inst.id, "aceito")}
              >
                Aceitar
              </button>
              <button
                className="bg-red-600 text-white px-4 py-1 rounded"
                onClick={() => atualizarStatus(inst.id, "rejeitado")}
              >
                Recusar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}