class Operations {
  constructor(values) {
    this.values = values;
  }

  //* PROMEDIO
  getAverage() {
    let average = 0;
    for (let i = 0; i < this.values.length; i++) {
      average += this.values[i];
    }

    const result = average / this.values.length;
    return result;
  }

  //* MEDIA
  getMean() {
    const organized = this.values.sort((a,b) => {             //* Ordenar los valores de la lista 
      return a - b;
    });
    
    let filterArray = organized.filter((item,index)=>{        //* Eliminacion de los valores repetidos
      return organized.indexOf(item) === index;
    })

    const valorMedio = parseInt((filterArray.length)/2);
    const isTrue = filterArray.length % 2;
    const isFalse = () => {
      const elem1 = filterArray[valorMedio];
      const elem2 = filterArray[valorMedio - 1];
      return (elem1 + elem2) / 2;
    };

    const result = (isTrue !== 0) ? filterArray[valorMedio] : isFalse() ;
    return result;
  }  

  //* MODA
  getFad() {
    const listCount = {};

    this.values.map((elem) => {
      if (listCount[elem]) {
        listCount[elem] += 1;
      } else {
        listCount[elem] = 1;
      }
    });

    const transformList = Object.entries(listCount).sort((a, b) => {
      return a[1] - b[1];
    });
    const moda = transformList[(transformList.length)-1][0];
    const repeat = transformList[(transformList.length)-1][1];
    const message = `El numero de <b>moda</b> es: ${moda} y se repite ${repeat} veces.`;
    return message;
  }
}

let formatArray, operations;
const getValue = () => {
  const array = document.getElementById("values").value.split(",");
  formatArray = array.map(Number);
  operations = new Operations(formatArray);
};

// *** PROMEDIO ***
const promedio = () => {
  document.getElementById("result").innerHTML = `<b>Resultado:</b> ${operations.getAverage()}`;
};

// *** MEDIA ***
const media = () => {
  document.getElementById("result").innerHTML = `<b>Resultado:</b> ${operations.getMean()}`;
};

// *** MODA ***
const moda = () => {
  document.getElementById("result").innerHTML = operations.getFad();
};
