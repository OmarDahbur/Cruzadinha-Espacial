// Definição das células ativas
const celulasCruzadinha = [

  //PALAVRA 1
  {
    dica: 'Ele recebe dados, recebe a instrução e executa toda essa operação, é o componente que é responsável por executar as principais operações matemáticas',
    posicoes: [
      { linha: 1, coluna: 2, letra: 'U' },
      { linha: 2, coluna: 2, letra: 'L' },
      { linha: 3, coluna: 2, letra: 'A' }
    ]
  },

  //PALAVRA 2
  {
    dica: 'Podemos dizer que ela é o cérebro do computador, ela interpreta e executa as tarefas que o computador precisa realizar',
    posicoes: [
      { linha: 8, coluna: 7, letra: 'C' },
      { linha: 8, coluna: 8, letra: 'P' },
      { linha: 8, coluna: 9, letra: 'U' }
    ]
  },

  //PALAVRA 3
  {
    dica: 'Localizada na CPU, sua principal função é guardar dados temporariamente e as instruções desses dados durante a execução. ',
    posicoes: [
      { linha: 4, coluna: 5, letra: 'R' },
      { linha: 5, coluna: 5, letra: 'E' },
      { linha: 6, coluna: 5, letra: 'G' },
      { linha: 7, coluna: 5, letra: 'I' },
      { linha: 8, coluna: 5, letra: 'S' },
      { linha: 9, coluna: 5, letra: 'T' },
      { linha: 10, coluna: 5, letra: 'R' },
      { linha: 11, coluna: 5, letra: 'A' },
      { linha: 12, coluna: 5, letra: 'D' },
      { linha: 13, coluna: 5, letra: 'O' },
      { linha: 14, coluna: 5, letra: 'R' },
      { linha: 15, coluna: 5, letra: 'E' },
      { linha: 16, coluna: 5, letra: 'S' }
    ]
  },

  //PALAVRA 4
  {
    dica: 'Qual a sigla do tipo de memória volátil que é usada para armazenar dados enquanto o computador está ligado? ',
    posicoes: [
      { linha: 4, coluna: 5, letra: 'R' },
      { linha: 4, coluna: 6, letra: 'A' },
      { linha: 4, coluna: 7, letra: 'M' }
    ]
  },

  //PALAVRA 5
  {
    dica: 'Qual a sigla do tipo de memória não volátil com dados permanentes sendo esses dados apenas par a leitura? ',
    posicoes: [
      { linha: 16, coluna: 2, letra: 'R' },
      { linha: 17, coluna: 2, letra: 'O' },
      { linha: 18, coluna: 2, letra: 'M' }
    ]
  },

  //PALAVRA 6
  {
    dica: 'Seu conteúdo só é apagado com luz UV além de ser um tipo de memória não volátil. ',
    posicoes: [
      { linha: 14, coluna: 2, letra: 'E' },
      { linha: 15, coluna: 2, letra: 'P' }
    ]
  },

  //PALAVRA 7
  {
    dica: 'Também é um tipo de memória não volátil, é rápida e regravável, usada principalmente em SSDs e pendrives. ',
    posicoes: [
      { linha: 7, coluna: 8, letra: 'F' },
      { linha: 8, coluna: 8, letra: 'L' },
      { linha: 9, coluna: 8, letra: 'A' },
      { linha: 10, coluna: 8, letra: 'S' },
      { linha: 11, coluna: 8, letra: 'H' }
    ]
  },

  //PALAVRA 8
  {
    dica: 'É usada para guardar todo tipo de arquivo e programa, seu conteúdo vai para a RAM, funciona como um grande armazenamento tipo um HD ou SSD. ',
    posicoes: [
      { linha: 2, coluna: 9, letra: 'M' },
      { linha: 3, coluna: 9, letra: 'E' },
      { linha: 4, coluna: 9, letra: 'M' },
      { linha: 5, coluna: 9, letra: 'Ó' },
      { linha: 6, coluna: 9, letra: 'R' },
      { linha: 7, coluna: 9, letra: 'I' },
      { linha: 8, coluna: 9, letra: 'A' },
      { linha: 9, coluna: 9, letra: '-' },
      { linha: 10, coluna: 9, letra: 'D' },
      { linha: 11, coluna: 9, letra: 'E' },
      { linha: 12, coluna: 9, letra: '-' },
      { linha: 13, coluna: 9, letra: 'M' },
      { linha: 14, coluna: 9, letra: 'A' },
      { linha: 15, coluna: 9, letra: 'S' },
      { linha: 16, coluna: 9, letra: 'S' },
      { linha: 17, coluna: 9, letra: 'A' }
    ]
  },

  //PALAVRA 9
  {
    dica: 'Qual a sigla que permite algo mais rápido e direto para a RAM sem usar a CPU? ',
    posicoes: [
      { linha: 12, coluna: 5, letra: 'D' },
      { linha: 12, coluna: 6, letra: 'M' },
      { linha: 12, coluna: 7, letra: 'A' }
    ]
  },

  //PALAVRA 10
  {
    dica: ' É usado para ativar um chip específico entre vários que estão conectados no computador. ',
    posicoes: [
      { linha: 18, coluna: 6, letra: 'C' },
      { linha: 18, coluna: 7, letra: 'S' }
    ]
  },

  //PALAVRA 11
  {
    dica: 'Ele funciona como um tipo de transmissor de endereço das memórias, e é nisso que dados podem ser lidos. ',
    posicoes: [
      { linha: 16, coluna: 0, letra: 'A' },
      { linha: 16, coluna: 1, letra: 'D' },
      { linha: 16, coluna: 2, letra: 'R' },
      { linha: 16, coluna: 3, letra: 'E' },
      { linha: 16, coluna: 4, letra: 'S' },
      { linha: 16, coluna: 5, letra: 'S' },
      { linha: 16, coluna: 6, letra: '-' },
      { linha: 16, coluna: 7, letra: 'B' },
      { linha: 16, coluna: 8, letra: 'U' },
      { linha: 16, coluna: 9, letra: 'S' }
    ]
  },

  //PALAVRA 12
  {
    dica: 'Ele serve como um carregador de dados, carrega para o processador, memória e para os periféricos.',
    posicoes: [
      { linha: 11, coluna: 7, letra: 'D' },
      { linha: 12, coluna: 7, letra: 'A' },
      { linha: 13, coluna: 7, letra: 'T' },
      { linha: 14, coluna: 7, letra: 'A' },
      { linha: 15, coluna: 7, letra: '-' },
      { linha: 16, coluna: 7, letra: 'B' },
      { linha: 17, coluna: 7, letra: 'U' },
      { linha: 16, coluna: 7, letra: 'S' }
    ]
  },

  //PALAVRA 13
  {
    dica: 'Processador extremamente famoso da Intel que foi lançado em 2009 ',
    posicoes: [
      { linha: 7, coluna: 9, letra: 'I' },
      { linha: 7, coluna: 10, letra: '5' }
    ]
  },

  //PALAVRA 14
  {
    dica: 'Um dos melhores processadores do mercado e mais fortes da Intel que foi lançado em 2008 e que tem mais desempenho do que foi lançado em 2009 ',
    posicoes: [
      { linha: 7, coluna: 5, letra: 'I' },
      { linha: 7, coluna: 6, letra: '7' }
    ]
  },

  //PALAVRA 15
  {
    dica: 'É um tipo de processador que tem 2 núcleos de processamento. ',
    posicoes: [
      { linha: 3, coluna: 1, letra: 'D' },
      { linha: 3, coluna: 2, letra: 'U' },
      { linha: 3, coluna: 3, letra: 'A' },
      { linha: 3, coluna: 4, letra: 'L' },
      { linha: 3, coluna: 5, letra: '-' },
      { linha: 3, coluna: 6, letra: 'C' },
      { linha: 3, coluna: 7, letra: 'O' },
      { linha: 3, coluna: 8, letra: 'R' },
      { linha: 3, coluna: 9, letra: 'E' }
    ]
  },

  //PALAVRA 16
  {
    dica: 'É o mesmo tipo de processador que o dual-core, porém tem o dobro de núcleos de processamento. ',
    posicoes: [
      { linha: 1, coluna: 3, letra: 'Q' },
      { linha: 2, coluna: 3, letra: 'U' },
      { linha: 3, coluna: 3, letra: 'A' },
      { linha: 4, coluna: 3, letra: 'D' },
      { linha: 5, coluna: 3, letra: '-' },
      { linha: 6, coluna: 3, letra: 'C' },
      { linha: 7, coluna: 3, letra: 'O' },
      { linha: 8, coluna: 3, letra: 'R' },
      { linha: 9, coluna: 3, letra: 'E' }
    ]
  }

];

//Variavél que mapeia as primeiras letras das palavras
const primeirasLetras = celulasCruzadinha.map(celula => celula.posicoes[0]);

//Função que define o tamanho máximo de linhas e colunas para a tabela da cruzadinha com base no tamanho das palavras
function definirTamanhoTabela(celulas) {

  let maximolinhas = 0, maximoColunas = 0;

  celulas.forEach(palavra => {

    palavra.posicoes.forEach(celula => {

      if (celula.linha > maximolinhas) maximolinhas = celula.linha;
      if (celula.coluna > maximoColunas) maximoColunas = celula.coluna;

    });

  });

  return { linhas: maximolinhas + 2, colunas: maximoColunas + 2 };

}

//Função para criar a tabela com as celulas e tamanho correto
function criarTabela(idContainer, palavras) {
  let container = document.getElementById(idContainer);
  let { linhas, colunas } = definirTamanhoTabela(palavras);
  let tabela = document.createElement('table');

  const celulasIniciais = new Map();

  primeirasLetras.forEach((celula, index) => {
    const chave = `${celula.linha},${celula.coluna}`;
    if (!celulasIniciais.has(chave)) {
      celulasIniciais.set(chave, []);
    }
    celulasIniciais.get(chave).push(index + 1); // +1 porque os índices começam em 0
  });

  for (let i = 0; i < linhas; i++) {
    let linha = document.createElement('tr');

    for (let j = 0; j < colunas; j++) {
      let coluna = document.createElement('td');
      let verificacaoLetra = palavras.flatMap(palavra => palavra.posicoes).find(palavra => palavra.linha === i && palavra.coluna === j);

      if (verificacaoLetra) {
        let input = document.createElement('input');
        input.maxLength = 1;
        input.dataset.linha = i;
        input.dataset.coluna = j;
        input.dataset.answer = verificacaoLetra.letra.toUpperCase();

        // Verificar se é uma célula inicial
        const chave = `${i},${j}`;
        if (celulasIniciais.has(chave)) {
          const numeros = celulasIniciais.get(chave);

          let divNumero = document.createElement('div');
          divNumero.className = 'number-badge';
          divNumero.textContent = numeros.join('/'); // Formato "1/2" para múltiplas palavras

          coluna.appendChild(divNumero)

          input.className = 'has-badge'
        }

        coluna.appendChild(input);
      } else {
        coluna.classList.add('black');
      }

      linha.appendChild(coluna);
    }

    tabela.appendChild(linha);
  }

  container.appendChild(tabela);
}

//Função para verificar as respostas escritas nas celulas
function verificarRespostas() {

  let inputs = document.querySelectorAll('input');

  let corretas = 0
  let total = 0

  inputs.forEach(input => {

    const respostaEsperada = input.dataset.answer.toUpperCase();
    const respostaEncontrada = input.value.toUpperCase();

    if (respostaEsperada) {

      total++

      if (respostaEncontrada === respostaEsperada) {
        corretas++
        input.style.background = '#c4f7c4'
      } else {
        input.style.background = '#f7c4c4'
      }

    }

  });

  if (corretas === total) {
    document.getElementById("botao_cruzadinha_verificar")
  }
}

function iniciarCruzadinha() {
  criarTabela('cruzadinha-container', celulasCruzadinha);
}

function iniciar() {


  let informacoes = document.getElementById("informacoes");
  let inicio = document.getElementById("inicio");
  let fundo = document.getElementById("fundo");
  let conteudo = document.getElementById("conteudo");

  inicio.style.display = "none";
  informacoes.style.display = "none";
  // fundo.style.display = "none";


  conteudo.style.display = "flex";
  conteudo.classList.add("segundof");
  iniciarCruzadinha()
  let botao_iniciar = document.getElementById("botao_cruzadinha_iniciar")
  let botao_verificar = document.getElementById("botao_cruzadinha_verificar")

  botao_iniciar.style.display = "none";
  botao_verificar.style.display = "flex";



}