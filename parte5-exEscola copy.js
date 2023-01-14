// Considere o array de objetos 'alunos' que contém as informações dos alunos de uma escola do ensino médio
// Esta no final do ano e os alunos ja fizeram todas as provas dos 4 bimestres do ano letivo e voce esta
// desenvolvendo a tela do sistema da escola onde os alunos irao acessar para saber em qual dos casos eles
// se encontram: passou direto, reprovado direto, recuperacao final
// de acordo com as regras abaixo, escreva o algorimo que calcule e separe corretamente cada aluno
// no respectivo array: alunosRecuperacaoFinal, alunosPassaramDireto, alunosReprovados.

// devera ser inserido um objeto com as informacoes do aluno como: nome, media, percentual de presença.

// As regras sao as

// se tiver 80% ou mais de presenca e media maior ou igual a 7 -> passou direto

// se tiver menos de 80% de presenca e nota maior ou igual a 7 ou

// 80% ou mais de presenca e nota inferior a 7 -> prova de recuperacao final

// se tiver menos que 80% de presenca e nota menor que 7 -> reprovado direto

// a quantidade total de aulas dadas no ano e de 240 aulas

const alunos = [
  {
    nome: 'Fábio',
    n1: 7,
    n2: 5,
    n3: 9,
    n4: 4,
    p: 120
  },
  {
    nome: 'Bruna',
    n1: 7,
    n2: 8,
    n3: 9,
    n4: 10,
    p: 200
  },
  {
    nome: 'Carla',
    n1: 2,
    n2: 5,
    n3: 8,
    n4: 10,
    p: 200
  },
  {
    nome: 'Keilla',
    n1: 7,
    n2: 6,
    n3: 8,
    n4: 10,
    p: 45
  },
  {
    nome: 'Marcos',
    n1: 5,
    n2: 7,
    n3: 4,
    n4: 8,
    p: 130
  },
  {
    nome: 'Ana',
    n1: 10,
    n2: 10,
    n3: 3,
    n4: 2,
    p: 221
  },
  {
    nome: 'Thiago',
    n1: 1,
    n2: 3,
    n3: 3,
    n4: 9,
    p: 240
  },
  {
    nome: 'Athos',
    n1: 1,
    n2: 4,
    n3: 4,
    n4: 5,
    p: 50
  }
]

const alunosRecuperacaoFinal = alunos.filter(obj => {
  let mediaAluno = calculaMedia(obj.n1, obj.n2, obj.n3, obj.n4)
  let presencaAluno = calculaPresenca(obj.p)

  if (
    (presencaAluno < 80 && mediaAluno >= 7) ||
    (presencaAluno >= 80 && mediaAluno < 7)
  ) {
    obj.media = mediaAluno
    obj.presenca = `${presencaAluno}%`

    delete obj.n1
    delete obj.n2
    delete obj.n3
    delete obj.n4
    delete obj.p

    return obj
  }
})

const alunosPassaramDireto = alunos.filter(obj => {
  let mediaAluno = calculaMedia(obj.n1, obj.n2, obj.n3, obj.n4)
  let presencaAluno = calculaPresenca(obj.p)

  if (presencaAluno >= 80 && mediaAluno >= 7) {
    obj.media = mediaAluno
    obj.presenca = `${presencaAluno}%`

    delete obj.n1
    delete obj.n2
    delete obj.n3
    delete obj.n4
    delete obj.p

    return obj
  }
})

const alunosReprovados = alunos.filter(obj => {
  let mediaAluno = calculaMedia(obj.n1, obj.n2, obj.n3, obj.n4)
  let presencaAluno = calculaPresenca(obj.p)

  if (presencaAluno < 80 && mediaAluno < 7) {
    obj.media = mediaAluno
    obj.presenca = `${presencaAluno}%`

    delete obj.n1
    delete obj.n2
    delete obj.n3
    delete obj.n4
    delete obj.p

    return obj
  }
})

function calculaMedia(n1, n2, n3, n4) {
  let soma = n1 + n2 + n3 + n4
  let media = soma / 4
  return media
}

function calculaPresenca(presencaAluno) {
  const qtdAulas = 240
  let presenca = presencaAluno
  let porcentagemPresenca = Math.round((presencaAluno / qtdAulas) * 100)
  return porcentagemPresenca
}

console.log('Alunos Aprovados:', alunosPassaramDireto)
console.log('Alunos em recuperação:', alunosRecuperacaoFinal)
console.log('Alunos reprovados:', alunosReprovados)
