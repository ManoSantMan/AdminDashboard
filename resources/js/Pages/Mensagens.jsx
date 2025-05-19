import React, { useState } from "react";
import { MessageCircleHeart, ChevronDown, X } from "lucide-react";

const Mensagens = () => {
  // Estado para controlar qual dropdown está aberto
  const [activeDropdown, setActiveDropdown] = useState('');

  // Estado para armazenar a notificação selecionada e abrir o modal
  const [selectedNotification, setSelectedNotification] = useState(null);

  // Dados simulados de notificações por iniciativa
  const Notifications = [
    {
      id: '122',
      title: 'Iniciativa TalTal',
      icon: MessageCircleHeart,
      dropdownItems: [
        {
          title: 'Mensagem de Pessoa1',
          content: 'Conteúdo da notificação 1',
          extraInfo: 'Detalhes completos da notificação 1...',
          imageUrl: 'data:image/png;base64,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'
        },
        {
          title: 'Mensagem de Pessoa2',
          content: 'Conteúdo da notificação 2',
          extraInfo: 'Mais informações sobre Pessoa2...',
          imageUrl: 'data:image/png;base64,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'
        }
      ]
    },
    {
      id: '456',
      title: 'Iniciativa Voluntária',
      icon: MessageCircleHeart,
      dropdownItems: [
        {
          title: 'Atualização importante',
          content: 'Detalhes sobre mudança no cronograma.',
          extraInfo: 'O evento foi reagendado para a próxima semana.',
          imageUrl: 'data:image/png;base64,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'
        },
        {
          title: 'Nova tarefa atribuída',
          content: 'Você foi designado a um novo grupo.',
          extraInfo: 'Confira seus compromissos e atualizações no painel.',
          imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAkFBMVEX///8tcbo6d7u8zOD///0wc7szdbz///s+fL9BfsBGgsI2d71EgMEqb7k8er4gbLcbargAYbX09/ZLhsTg5+/Bz9pNhLpIf7b09vl4m8UAY7Ti6u4kbbHQ2+irwNiEpctoksSovNmbs85fir0AY6+NrM5ul8XH0+OYs9ctc7CfvNEAWK63yOE1d69birfU3uRtpck1AAAG5ElEQVR4nO2cDXOiPBCARRICgSUBbOXDb0Xb6tX//+/eYH0Vq1XgepM4s8/M2Z7TzvHcZrObBOz1EARBEARBEARBEARBEARBEARBEARBEARBmkBY7fvjn2eFpOngZZ7NXofD1/V08TJIY92X1AkVg3RgZ6NtnudSKGQu862T2YNU96W1hxWbbBRJsCyLUusIBRmNsk3BHv++MaioFJOlMjlZnFE++eekeKL0SXezlbwW+d9H5rPJcww29T8+zkDeCEpdB7KxGoqmR4eReMLFrQF2OdgEn8TEdJlePAVx3+QLAVPThxqLZwKauFgWyHVs9rQWD2VDF2WTDw0eZ4yRP/mDbKlDoz/M3EmALfPGcfmKzaehA430SBnRFoGpeoOoZIaWz13zfDnFRtq6r/omZM8flZdbNsHexMikWdNJ+TI0mXnlhvQmow4uqniOduZlTTFrVPivkbOB7mv/DrF/bpPvA3JnWmSKWVcZFZpC99VfQFRgOmXMV2hso0LD4jLv6mI5zjQ2ymbw3jH9FX3XGxgls+kcGCd0gtVG9/XXiUvhdFIBh7sQ+guTCmeagNO+lVEuFg88aoVLk2SK3KJ+h8bM4b6jbECYJDOOoIMNOInrgRMEEI11G5whk6iqMq1tkhB4AE5oRRODprPFV8lsZwOhGmAW99S3+UK3wQnWy76Wy9DGBiAM1BePqxeZ6XaosT6WmRY2NHTVtBzypDKSa2P2Akhveeoym9o4nAdJGHDXd1VQxZKZYsPIeS3TdE4LAwCf90Gh/iZmPWNkeutz/0+bVM8qX0ANyvDYasu1MTKEZLXFzGMbcNzQD/qV0/EdNQGYItMjFwuARyMNqKqV3OPh+Z28NGgfYHLRNN+3UXU/pJbrheHppyCa6Dao8RJdXv49G3DV/AX9oLYypdGLboMaxff98ns2NPGqwl9fZucm7QKk/Nt2xr3qCVYS8HpgLDk0qWtOp1crzXs2h9jUZYw6RGN2dHXtd20uZSLbmIm5YjC62tC4N6ddbkuJkVl7mml2fWTWqBeofi6fpuZUmQr71lZTQxth2hlNsbyxPdus65RLs0aZ6mjmt/aaaZNjQTk3a5CpzmpwKzQNRhqtAmOczeL21vnDFlq8GefCSLzutN0s1zEx8GaAF/f2qcbd2EBo1D7zCbJoHxqQCwPDUmVNnLU9C6B5FpuWMUdIvGxz64wiXxp7O62an4etTjbzoWnlsg4Zv7YYafmrQfvl11S1M2p2UkutyLxq+Z0i+8HmWzZBlJm0Vv6BeLG6WVqoU9/CsFYLY3P/gvHw5i1B9HzsCauh0elSJy5dCdc+1D+qCL9U5cXwfDnCmMocT1w3no5a34AUicqWJ1Hp9Q77xvty6Ut52eAACOksyyrxn8blACOFXa6TUZ5L5STUS54Lvi7t4nmCcuLwIFMxtudv0/VSsZ6+ze1x8XwidVicFgNFkZp1t09bDouumgE5vvWksHi/2c3fyum0fJvvNntjTi5bcHgIMN6Un+8jWc3FB9RMLUbvy3JTVX6Db5v/DmP7xXC7qibmeu2sTmOFzLf9cvAsMiQdzN2tKyy40QRUb1GZR6Nyb9LG/w+o6vI5cpyAP1gIyNWnbXjXzAa7peX1Q+7eV7HAcWT+OhkYPCEMPl4dCAL3+5nFLahDZfT6YWR0VI8S72a5xV0v9Brd4qhsVPasdwb2z4Ttp5Yb0oS7tQP++zZqRUDFaLo3bKyRHrG56u0p+J7X0OVoAyKxDXsgKC4t8GjgtbvtnPpQLdVgatAKmhE2ExYPAZIuNtQSa2bMvTMkHkVWwLmvbH7YPP/ZpnoFOTKlpSbxSlLeBzfxW4nUbCyxMsOGFO9AOXd9ZdNe5njuCfBuwLqN9IpAgOdBGCibDjLHE3YQw0L/nBbPJFA1J4Mb0G6P0Bxt5Ex360niUgqV9yHQsEvKnG1AiDLV2QsQxmxVX7jX52oy490e1LBOc5oz0bvMGSdCpb7H/dB3OjzZcGkjEq17tmmZh4ED1OMd8+VsU/2+3lu1NhLCw3zc/yuVs42+o2eWzqhLmzbJD22qBfVMW7UhY5HwJEweLZFb2Gy1hSZe+xb0OeW/4WId7h2U2o6fB8Kpbuj/y9w/U9Wb7V5PH0CmDnfUGuaXVA42kE/1FM5YqCnZ87pXlxs4IPWMs/GWUq9zD/MDdKuncE5l9XxS5x7mBxlZahlm77+V+BfAuw6X3upfuFjWSocLcf5NZBwtw+wj+hcy0YcOF8JafMhUU0AOtSxpGCuWolpm/h5CwrLQclRYfbjkYsb7vwifVR8MoK1vLsb2L6L3NoFf/7e1bzYhCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgyFPyHy/2c1k+uIIhAAAAAElFTkSuQmCC'
        }
      ]
    }
  ];

  // Alterna o dropdown de uma iniciativa
  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? '' : id);
  };

  // Abre o modal com os detalhes da notificação clicada
  const openNotification = (notification) => {
    setSelectedNotification(notification);
  };

  // Fecha o modal
  const closeModal = () => {
    setSelectedNotification(null);
  };

  return (
    <div className="w-full max-w-4xl dark:bg-zinc-900 mx-auto bg-white p-6 rounded-md border border-gray-200 shadow-sm relative">
      <h1 className="text-2xl font-bold dark:text-[#B0B0B0] text-[#2f486e] mb-6">Notificações</h1>

      {/* Lista de iniciativas em 2 colunas */}
      <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
        {Notifications.map((notif) => {
          const Icon = notif.icon;
          const isOpen = activeDropdown === notif.id;

          return (
            <div key={notif.id}>
              {/* Cabeçalho da iniciativa */}
              <div
                onClick={() => toggleDropdown(notif.id)}
                className="flex items-center justify-between bg-gray-100 dark:bg-zinc-800 p-4 rounded-md cursor-pointer  transition"
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} />
                  <div>
                    <div className="font-semibold dark:text-[#B0B0B0]">{notif.title}</div>
                    <div className="text-xs text-gray-600">ID: {notif.id}</div>
                  </div>
                </div>
                {/* Ícone que gira quando o dropdown está aberto */}
                <ChevronDown
                  size={18}
                  className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </div>

              {/* Lista de notificações dentro da iniciativa */}
              {isOpen && (
                <div className="mt-2   space-y-2">
                  {notif.dropdownItems.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => openNotification(item)}
                      className="bg-[#f9fafb] border  dark:bg-zinc-700  border-gray-200 rounded-md p-3 text-sm shadow-sm cursor-pointer "
                    >
                      <div className="font-medium dark:text-[#fff]">{item.title}</div>
                      <div className="text-gray-600  dark:text-[#B0B0B0] text-xs">{item.content}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Modal com imagem e detalhes */}
      {selectedNotification && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white  dark:text-[#B0B0B0] dark:bg-zinc-900 w-[90%] max-w-md p-5 rounded-lg shadow-lg relative flex gap-4">
            {/* Botão para fechar o modal */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>

            {/* Imagem quadrada da notificação */}
            <img
              src={selectedNotification.imageUrl}
              alt="Notificação"
              className="w-24 h-24 object-cover rounded-md"
            />

            {/* Informações detalhadas da notificação */}
            <div>
              <h2 className="text-lg font-bold mb-2">{selectedNotification.title}</h2>
              <p className="text-gray-600 text-sm">{selectedNotification.extraInfo}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mensagens;
