const {createApp} = Vue;

createApp({
  data() {
    return {
      display: "0",
      numeroAtual: null,
      numeroAnterior: null,
      operador: null,
    };
  },
  methods: {
    lidarBotao(botao) {
      if (!isNaN(botao)) {
        this.lidarNumeros(botao);
      } else {
        switch (botao) {
          case "+":
          case "-":
          case "*":
          case "/":
            this.lidarOperador(botao);
            break;
          case "=":
            this.lidarIgual();
            break;
          case ".":
            this.lidarPonto();
            break;
          default:
            break;
        }
      }
    },

    limpar() {
        this.display = "0";
        this.numeroAnterior = null;
        this.numeroAtual = null;
        this.operador = null;
    },
      

    lidarNumeros(numero) {
      if (this.display === "0") {
        this.display = numero;
      } else {
        this.display += numero.toString();
      }
      this.numeroAtual = Number(this.display);
    },

    lidarOperador(operador) {
      this.numeroAnterior = Number(this.display);
      this.display = "0";
      this.operador = operador;
    },

    lidarPonto() {
      if (!this.display.includes(".")) {
        this.display += ".";
      }
    },

    lidarIgual() {
        const resultado = this.calcular(parseFloat(this.numeroAnterior), parseFloat(this.numeroAtual), this.operador);
        this.display = resultado.toString();
        this.numeroAnterior = null;
        this.numeroAtual = null;
        this.operador = null;
      },
      calcular(numeroAnterior, numeroAtual, operador) {
        let resultado;
        switch (operador) {
          case "+":
            resultado = numeroAnterior + numeroAtual;
            break;
          case "-":
            resultado = numeroAnterior - numeroAtual;
            break;
          case "*":
            resultado = numeroAnterior * numeroAtual;
            break;
          case "/":
            resultado = numeroAnterior / numeroAtual;
            break;
          default:
            return 0;
        }
      },
  },
}).mount("#app");
