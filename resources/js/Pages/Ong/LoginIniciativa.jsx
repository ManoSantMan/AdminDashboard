import { useState } from "react";

export default function LoginForm() {
  const [showModal, setShowModal] = useState(false);
  const [showUpload, setShowUpload] = useState(false);
  const [imagemBase64, setImagemBase64] = useState(null);
  const [previews, setPreviews] = useState([]);

  // Campos do formulário
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cep, setCep] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [telefone, setTelefone] = useState("");
  const [descricao, setDescricao] = useState("");

  // Função para upload múltiplo com previews
  const handleImageChange = (e) => {
    const files = e.target.files;
    if (!files) return;

    // Atualiza previews com as imagens selecionadas
    const newPreviews = [];
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviews.push(reader.result);
        // Atualiza previews e imagem base64 (última imagem)
        setPreviews((prev) => [...prev, reader.result]);
        setImagemBase64(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };

  // login.jsx
const handleLogin = async () => {
  const response = await fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ email, senha }),
  });

  const data = await response.json();

  if (data.access_token) {
    localStorage.setItem('token', data.access_token);
    alert('Login feito!');
  } else {
    alert('Erro no login');
  }
};

  // Submit do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      nm_instituicao: nome,
      email_instituicao: email,
      senha: senha,
      cnpj: cnpj,
      cep: cep,
      rua: rua,
      numero: numero,
      bairro: bairro,
      cidade: cidade,
      telefone: telefone,
      descricao: descricao,
      imagem: imagemBase64 || null,
    };

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:8000/api/instituicoes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        "Authorization": `Bearer ${token}`,
      },
              body: JSON.stringify(payload),

    });
      
      const data = await response.json();

      if (response.ok) {
        alert("Instituição cadastrada com sucesso!");
        console.log("Resposta:", data);
        setShowModal(false); // fecha modal ao cadastrar
      } else {
        alert("Erro no cadastro: " + (data.message || "Erro desconhecido"));
        console.log("Erros:", data.errors);
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-zinc-800 bg-gray-100 p-4">
      <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center dark:text-[#7a7a7a] text-gray-800">
          Login
        </h2>
<form className="space-y-4" onSubmit={(e) => { e.preventDefault(); handleLogin(); }}>
          <div>
            <label className="block mb-1 dark:text-[#7a7a7a] font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block dark:text-[#7a7a7a] mb-1 font-medium">Senha</label>
            <input
              type="password"
              className="w-full border rounded-lg px-4 py-2"
              placeholder="••••••••"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 dark:bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>
        <button
          onClick={() => setShowModal(true)}
          className="w-full mt-2 border border-blue-600 text-blue-600 py-2 rounded-lg dark:hover:bg-zinc-900 hover:bg-blue-50"
        >
          Cadastre-se
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
              aria-label="Fechar"
            >
              ×
            </button>
            <h3 className="text-xl font-bold dark:text-[#7a7a7a] text-center mb-4">Cadastro</h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Campos do formulário */}
              <Input label="Nome da Instituição" value={nome} onChange={setNome} />
              <Input label="Email" value={email} onChange={setEmail} type="email" />
              <Input label="Senha" value={senha} onChange={setSenha} type="password" />
              <Input label="Confirmar Senha" type="password" />
              <Input label="CNPJ (opcional)" value={cnpj} onChange={setCnpj} />
              <Input label="CEP" value={cep} onChange={setCep} />
              <Input label="Rua" value={rua} onChange={setRua} />
              <Input label="Número" value={numero} onChange={setNumero} />
              <Input label="Bairro" value={bairro} onChange={setBairro} />
              <Input label="Cidade" value={cidade} onChange={setCidade} />
              <Input label="Telefone" value={telefone} onChange={setTelefone} />

              <div>
                <label className="block mb-1 dark:text-[#7a7a7a] font-medium">Descrição Detalhada</label>
                <textarea
                  className="w-full border rounded-lg px-4 py-2"
                  rows={4}
                  placeholder="Fale um pouco mais sobre sua organização ou propósito..."
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>

              {/* Upload de imagem (com preview) */}
              <div>
                <button
                  type="button"
                  onClick={() => setShowUpload(!showUpload)}
                  className="w-full border border-sky-800 text-sky-600 py-2 rounded-lg dark:hover:bg-sky-950 hover:bg-blue-50"
                >
                  {showUpload ? "Cancelar Upload" : "Adicionar Imagem"}
                </button>

                {showUpload && (
                  <div className="mt-3">
                    <label className="flex items-center justify-center border-2 border-dashed border-gray-400 rounded-xl h-32 cursor-pointer hover:bg-gray-50 transition-colors">
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <div className="flex flex-col items-center text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 mb-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 7h2l2-3h10l2 3h2a1 1 0 011 1v11a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 11a3 3 0 100 6 3 3 0 000-6z"
                          />
                        </svg>
                        <span className="text-sm font-medium">Selecionar imagem</span>
                      </div>
                    </label>

                    {/* Previews das imagens selecionadas */}
                    {previews.length > 0 && (
                      <div className="mt-4 grid grid-cols-3 gap-3">
                        {previews.map((src, index) => (
                          <img
                            key={index}
                            src={src}
                            alt={`Preview ${index}`}
                            className="w-full h-32 object-cover rounded-lg border"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-sky-800 text-white py-2 rounded-xl hover:bg-sky-700"
              >
                Cadastrar
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Componente auxiliar para campos de input
function Input({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block mb-1 dark:text-[#7a7a7a] font-medium">{label}</label>
      <input
        type={type}
        className="w-full border rounded-lg px-4 py-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label}
      />
    </div>
  );
}
