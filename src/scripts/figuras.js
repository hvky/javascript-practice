const message = `<b>Resultado:</b>`;
let resultado;

//* CUADRADO
class Cuadrado {
  constructor(base) {
    this.base = base;
  }
  getArea() {
    return this.base * this.base;
  }
  getPerimetro() {
    return this.base * 4;
  }
}

const valorCuadrado = () => {
  const base = Number(document.getElementById("inputCuadrado").value);
  resultado = new Cuadrado(base);
};
const cuadradoArea = () => {
  document.getElementById("resultCuadrado").innerHTML = `${message} ${resultado.getArea()}u2`;
};
const cuadradoPerimetro = () => {
  document.getElementById("resultCuadrado").innerHTML = `${message} ${resultado.getPerimetro()}u`;
};

//* TRIANGULO
class Triangulo {
  constructor(lado1, lado2, lado3) {
    this.lado1 = lado1;
    this.lado2 = lado2;
    this.lado3 = lado3;
  }
  getArea() {
    const semiP = (this.lado1 + this.lado2 + this.lado3) / 2;
    const resultado = Math.sqrt(semiP * (semiP - this.lado1) * (semiP - this.lado2) * (semiP - this.lado3));
    return resultado;
  }
  getPerimetro() {
    return this.lado1 + this.lado2 + this.lado3;
  }
}

const valorTriangulo = () => {
  const lado1 = Number(document.getElementById("ladoTriangulo1").value);
  const lado2 = Number(document.getElementById("ladoTriangulo2").value);
  const lado3 = Number(document.getElementById("ladoTriangulo3").value);
  resultado = new Triangulo(lado1, lado2, lado3);
};
const trianguloArea = () => {
  document.getElementById("resultdoTriangulo").innerHTML = `${message} ${Math.round(resultado.getArea())}u2`;
};
const trianguloPerimetro = () => {
  document.getElementById("resultdoTriangulo").innerHTML = `${message} ${resultado.getPerimetro()}u`;
};

//* CIRCUNFERENCIA
class Circunferencia {
  constructor(radio) {
    this.radio = radio;
  }
  getArea() {
    return this.radio * this.radio * Math.PI;
  }
  getPerimetro() {
    return this.radio * 2 * Math.PI;
  }
}

const valorCircunferencia = () => {
  const radio = Number(document.getElementById("inputCircunferencia").value);
  resultado = new Circunferencia(radio);
};
const circunferenciaArea = () => {
  document.getElementById("resultCircunferencia").innerHTML = `${message} ${Math.round(resultado.getArea())}u2`;
};
const circunferenciaPerimetro = () => {
  document.getElementById("resultCircunferencia").innerHTML = `${message} ${Math.round(resultado.getPerimetro())}u`;
};

////////////////////////////////////////////////////
console.log("Los resultados estan redondeados!!!");
