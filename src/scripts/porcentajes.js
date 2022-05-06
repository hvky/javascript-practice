class Descuento {
  constructor(price, percentage) {
    this.price = price;
    this.percentage = percentage;
  }
  getDescuento() {
    return (this.price * (100 - this.percentage)) / 100;
  }
}

const descuento = () => {
  const priceValue = Number(document.getElementById("price").value);
  const percentageValue = Number(document.getElementById("percentage").value);
  const priceDiscount = new Descuento(priceValue, percentageValue);
  document.getElementById("discount").innerHTML = `<b>Descuento:</b> ${priceDiscount.getDescuento()}$`;
};
