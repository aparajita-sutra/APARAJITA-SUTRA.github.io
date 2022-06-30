/* .js files add interaction to your website */
var factList = [
  "With the use of solar energy, electricty bills decrease",
  "In hydroelectric energy, the dam controls flooding",
  "Geothermal energy does not cause harm to habitats",
  "Wind Energy can be either inshore or offshore",
  "Developing countries rely on biomass for energy source as it is accessible",
];

var fact= document.getElementById("fact");
var myButton= document.getElementById("myButton");
var count= 0;

if (myButton) {
myButton.addEventListener("click", displayFact);
}

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}
