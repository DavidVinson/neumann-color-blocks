//call onReady function when index loads...
onReady();

function onReady() {
  console.log('🟥 🟦 🟩 🟨');
}

//get one color block working
//look for refactor after the code is working as expected
//test as you go

function addRedBlock(event) {
  //ensure addRedBlock is hooked up to red button in index file
  console.log('add a red block');

  //red button pushed; use event.target
  //the red button has an 'id'; we can get the button id by using event.target.id
  const redButton = event.target.id;
  console.log('redButton', redButton);

  //to make a red block use: class="block red-fill"
  const redBlock = `<div class="block red-fill"></div>`;
  console.log('red block', redBlock);

  //put the red block in the 'blocks' section
  const blockSection = document.getElementById('blocks');
  blockSection.innerHTML += redBlock;
}

function addBlueBlock(event) {
  //ensure addBlueBlock is hooked up to blue button in index file
  console.log('add a blue block');

  //blue button pushed; use event.target
  //the blue button has an 'id'; we can get the button id by using event.target.id
  const blueButton = event.target.id;
  console.log('blueButton', blueButton);

  //to make a blue block use: class="block blue-fill"
  const blueBlock = `<div class="block blue-fill"></div>`;
  console.log('blue block', blueBlock);

  //put the blue block in the 'blocks' section
  const blockSection = document.getElementById('blocks');
  blockSection.innerHTML += blueBlock;
}
