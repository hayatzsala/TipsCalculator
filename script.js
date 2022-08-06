const billValue = document.getElementById('bill');
const numOfPeople = document.getElementById('num-of-people');
const totalResult = document.getElementById('total');
const tipResult = document.getElementById('tips');
const tipsButtons = Array.prototype.slice.call(document.getElementsByClassName('tips'));
const reset = document.getElementById('reset');

var tipAmount = 0;
var totalAmount = 0;

tipsButtons.forEach(function(button) {
  button.addEventListener('click', () => Calculate(button));
});
reset.addEventListener('click', () => {
  updateTips(0);
  updateTotal(0);
})
function Calculate(tipButton) {
  var tipAvg = parseFloat(tipButton.value.trim(' ').trim('%'));
  console.log(tipAvg);
  var tipAmount = calculateTips(billValue.value,
    numOfPeople.value,
    tipAvg);
  updateTips(tipAmount);

  var totalAmount = calculateTotal(billValue.value,
    numOfPeople.value,
    tipAmount);
  updateTotal(totalAmount);
}
function calculateTips(bill, people, tipAmount) {
  if (people == 0) {
    people = 1;
  }
  return (bill * (tipAmount / 100)) / people;
}
function calculateTotal(bill, people, tipAmount) {
  if (people == 0) {
    people = 1;
  }
  console.log(people);
  return (bill / people) + tipAmount;
}
function updateTotal(total) {
  totalResult.innerText = total;
}
function updateTips(tip) {
  tipResult.innerText = tip;
}



