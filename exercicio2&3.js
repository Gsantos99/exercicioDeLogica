// Questao 2 - Uso do for in, for of
// Imagine que estamos trabalhando em uma tarefa em que precisamos enviar a lista de usuários logados no sistema para o nosso backend
// Nos ja temos uma funcao nativa no sistema que nos retorna a lista de usuarios logados, a funcao se chama getLoggedUsers.
// Usando o for in e for of, crie uma funcao que salve somente o valor de email dos usuarios em um novo array

const getLoggedUsers = () => {
  return [
    {
      name: 'Gabriel',
      email: 'gabriel@gmail.com'
    },
    {
      name: 'Joao',
      email: 'joao@gmail.com'
    }
  ]
}

const usuarios = [...getLoggedUsers()]
const email = []

function filtraEmail(array) {
  for (obj of array) {
    'email' in obj ? email.push(obj.email) : ''
  }
}

filtraEmail(usuarios)
console.log('Questão 2:', 'Users email', email)

// Questao 3 - Uso de funções
// Imagine que voce esteja executando uma tarefa onde voce devera mostra um "modal" para o usuario com um titulo, e dois botoes
// um de confirmar e outro de cancelar. Porem, voce sabe que essa funcao podera ser usada em diversos cenarios e diversas vezes
// no futuro, entao voce com um otimo desenvolvedor, resolveu criar essa funcao com o seguinte padrao

// modal(tituloModal, callbackBtnConfirmar, callbackBtnCancelar). Dessa forma, quando essa funcao for usada, o desenvolvedor
// tera a liberdade de mudar nao so o titulo do modal, como tambem o comportamento que ira ser disparado quando o usuario
// clicar no botao aceitar ou rejeitar. Desenvolva essa funcao. Dica, uso o confirm para mostrar o "modal".

function modal(tituloModal, callbackBtnConfirmar, callbackBtnCancelar) {
  const escolhaUser = confirm(tituloModal)

  if (escolhaUser) {
    callbackBtnConfirmar()
  }

  if (!escolhaUser) {
    callbackBtnCancelar()
  }
}

function confirmar() {
  alert('Arquivo excluido!')
}

function cancelar() {
  alert('Arquivo não excluido!')
}

modal('Deseja excluir o arquivo?', confirmar, cancelar)
