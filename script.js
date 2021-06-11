// Write your JavaScript code here!

/*This block of code shows how to format the HTML once you fetch some planetary JSON!*/
window.addEventListener("load", function(){
   let launchForm = document.getElementById("launchForm");
   let pilotName = document.getElementById("pilotName");
   let copilotName = document.getElementById("copilotName");
   let fuelLevel = document.getElementById("fuelLevel");
   let cargoMass = document.getElementById("cargoMass");
   let pilotTest= Number(pilotName);
   let copilotTest=Number(copilotName);
   let fuelTest= Number(fuelLevel);
   let cargoTest= Number(cargoMass)
   launchForm.addEventListener("submit", function(event) {
    event.preventDefault;
      if(pilotName.value === ""||copilotName.value===""||fuelLevel.value===""||cargoMass.value=== ""){
         alert("All fields are required!")
      }else if(isNaN(pilotTest)===false){
         alert(`${pilotName.value}`)
      }else if (isNaN(copilotTest)===false){
         alert("Copilot can not be a number.")
      }else if (isNaN(fuelTest)){
         alert(`${typeof fuelTest}`)
      }else if (isNAN(cargoTest)){
         alert("Cargo Mass number required")
      }
      if (fuelLevel.value < 10000){
         let launchStatus=''
         launchStatus +=`<div faultyItems style: visable>
         <h2 text-color: red>Shuttle not ready for launch</h2>
         <ol>
         <li>Pilot ${pilotName} is ready for launch</li>
         <li>Co-pilot ${copilotName} is ready for launch</li>
         <li>>Fuel level too low for launch</li>
         <li>Cargo mass low enough for launch</li>
         </ol>
         </div>
         `
      }
 

   });
});

// { <h2>Mission Destination</h2>
// <ol>
//    <li>Name: ${}</li>
//    <li>Diameter: ${}</li>
//    <li>Star: ${}</li>
//    <li>Distance from Earth: ${}</li>
//    <li>Number of Moons: ${}</li>
// </ol>
// <img src="${}"> }

