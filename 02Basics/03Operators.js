var num1 = 7;
var num2 =6;

console.log(num1+num2);
console.log(num1*num2);
console.log(num1>num2);

var price = 1000;
var discountPercentage = 75;

var discountPrice =price -( price * (discountPercentage/100));
console.log("Discount percentage is :"+discountPrice);

price = 799;
discountPrice = 199;

discountPercentage = ((price-discountPrice)/price)* 100;
console.log("Discount percentage is :"+discountPercentage);

displayDiscountPercentage = Math.round(discountPercentage);
console.log("Discount percentage is :"+displayDiscountPercentage+"% off");

var result = price > discountPrice;

console.log(result);
console.log("Type of result :"+ typeof result);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence