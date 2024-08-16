const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPerguntas = document.querySelector(".caixa-perguntas");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [

    {

        enunciado: "Um cachorro extremamente raivoso está prestes e te morder, o que você faz?",

        alternativas: [

            {

                texto: "Mordo o cachorro primeiro",

                afirmacao: "Você mordeu um cachorro? KKKKKKK. "

            },

            {

                texto: "Invoco um hipopótamo para a luta, ele se chama Popó.",

                afirmacao: "O hipopótamo faz cara de mal."

            }

        ]

    },

    {

        enunciado: "O cachorro começa a ficar com muita raiva, e parte para cima.",

        alternativas: [

            {

                texto: "Não faço nada, porque meu hipopótamo é muito foda.",

                afirmacao: "O hipopótamo Popó dá uma sequência de socos no cachorro."

            },

            {

                texto: "Você começa a competir com o cachorro",

                afirmacao: "O cachorro demostra ser muito superior."

            }

        ]

    },

    {

        enunciado: "O cachorro parece ficar com muita mais raiva, está vermelho de raiva.",

        alternativas: [

            {

                texto: "Idai? Meu hipopótamo é o fodão.",

                afirmacao: "O cachorro tenta morder a mão do hipopótamo Popó, mas sem sucesso."

            },

            {

                texto: "Eu pergunto para o cachorro o porquê de tanta raiva.",

                afirmacao: "Cachorro: Eu não aguento mais ser um cachorro, só decepção."

            }

        ]

    },

    {

        enunciado: "O cachorro parece estar mais calmo",

        alternativas: [

            {

                texto: "Pergunto: O que é tão decepcionante em ser um cachorro?",

                afirmacao: "Cachorro: Eu...Eu... EU COMO BOSTA!!!"

            },

            {

                texto: "Claro nér, depois de levar uma surra.",

                afirmacao: "O cachorro para de ser raivoso e começa a lamber o hipopótamo Popó."

            }

        ]

    },

    {

        enunciado: "O cachorro, agora calmo, começa a subir para o céu.",

        alternativas: [

            {

                texto: "Olho atentamente para esse evento.",

                afirmacao: "O cachorro aceitou o fato de que ele come bosta, e agora pode descansar."

            },

            {

                texto: "Deixo o hipopótamo Popó subir junto dele.",

                afirmacao: "O hipopótamo Popó sobe aos céus, junto ao cachorro misterioso. "

            }

        ]

    },

];





let atual = 0;

let perguntaAtual;

let historiaFinal = "";



function mostraPergunta() {

    if (atual >= perguntas.length) {

        mostraResultado();

        return;

    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();

}



function mostraAlternativas(){

    for(const alternativa of perguntaAtual.alternativas) {

        const botaoAlternativas = document.createElement("button");

        botaoAlternativas.textContent = alternativa.texto;

        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));

        caixaAlternativas.appendChild(botaoAlternativas);

    }

}



function respostaSelecionada(opcaoSelecionada) {

    const afirmacoes = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacoes + " ";

    atual++;

    mostraPergunta();

}



function mostraResultado() {

    caixaPerguntas.textContent = "Desfecho:";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "(nenhum animal se machucou de verdade)";

}



mostraPergunta();