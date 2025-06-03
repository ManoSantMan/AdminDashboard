import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [pendentes, setPendentes] = useState([]);
  const [aceitos, setAceitos] = useState([]);
  const token = localStorage.getItem("admin_token");

  useEffect(() => {
    fetch("http://localhost:8000/api/Instituicao", {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((dados) => {
        setPendentes(dados.filter((item) => item.status === "pendente"));
        setAceitos(dados.filter((item) => item.status === "aceito"));
      });
  }, [token]);

const atualizarStatus = (id, status) => {
  fetch(`http://localhost:8000/api/Instituicao/${id}`, {
    method: "PUT",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ status }),
  })
    .then(async (res) => {
      const dados = await res.json();
      console.log("Resposta da API:", dados);
      if (res.ok && dados.success) {
        // Atualiza as listas após o sucesso
        setPendentes((prev) => prev.filter((inst) => inst.id !== id));
        if (status === "aceito") {
          // Busca a instituição atualizada para adicionar aos aceitos
          fetch(`http://localhost:8000/api/Instituicao/${id}`, {
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          })
            .then((res) => res.json())
            .then((inst) => setAceitos((prev) => [...prev, inst]));
        }
      } else {
        alert(
          dados.message ||
            "Erro ao atualizar o status da instituição."
        );
      }
    })
    .catch((err) => {
      console.error("Erro na requisição:", err);
      alert("Erro ao atualizar o status da instituição.");
    });
};
    
            

  const excluirInstituicao = (id) => {
    fetch(`http://localhost:8000/api/Instituicao/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          setAceitos((prev) => prev.filter((inst) => inst.id !== id));
        } else {
          alert("Erro ao excluir a instituição.");
        }
        
      })
      .catch(() => alert("Erro de conexão ao excluir a instituição."));
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Painel do Administrador</h1>
      <div className="mb-8">
        <h2 className="text-xl mb-4">Iniciativas Pendentes</h2>
        {pendentes.length === 0 && <p>Nenhuma iniciativa pendente.</p>}
        <ul>
          {pendentes.map((inst) => (
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
      <div>
        <h2 className="text-xl mb-4">Iniciativas Aceitas</h2>
        {aceitos.length === 0 && <p>Nenhuma iniciativa aceita.</p>}
        <ul>
          {aceitos.map((inst) => (
            <li key={inst.id} className="mb-4 p-4 border rounded">
              <h3 className="font-bold">{inst.nm_instituicao}</h3>
              <p>{inst.descricao}</p>
              <div className="mt-2 flex gap-2">
                <button
                  className="bg-gray-700 text-white px-4 py-1 rounded"
                  onClick={() => excluirInstituicao(inst.id)}
                >
                  Excluir
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}