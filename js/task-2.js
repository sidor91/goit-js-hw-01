function getShippingMessage(country, price, deliveryFee){
  return `Shipping to ${country} will cost ${price + deliveryFee} credits`
}

console.log(getShippingMessage("Australia", 120, 50));