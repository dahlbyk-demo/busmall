'use strict';

function getRandomImage() {
  var nextIndex = Math.floor(Math.random() * ImageChoice.all.length);
  //TODO: Verify that no two numbers are the same
  return ImageChoice.all[nextIndex];
}

function displayImages(){
  var imageOne = document.getElementById('imageOne');
  var imageTwo = document.getElementById('imageTwo');
  var imageThree = document.getElementById('imageThree');
  //TODO: Generate 3 random numbers
  
  var randImg1 = getRandomImage();

  // Set once, then re-set until it's not a match
  var randImg2 = getRandomImage();
  while (randImg2 === randImg1) {
    randImg2 = getRandomImage();
  }

  // Keep setting randImg3 until it's not a match
  do {
    var randImg3 = getRandomImage();
  } while (randImg3 === randImg1 || randImg3 === randImg2);

  // Set image sources
  imageOne.src = randImg1.src;
  imageTwo.src = randImg2.src;
  imageThree.src = randImg3.src;

  // Save current image on the <img> object
  imageOne.currentImage = randImg1;
  imageTwo.currentImage = randImg2;
  imageThree.currentImage = randImg3;

  // Track that image has been viewed
  randImg1.timesViewed += 1;
  randImg2.timesViewed += 1;
  randImg3.timesViewed += 1;

  console.log(ImageChoice.all);
}

var clickContainer = document.getElementById('click-container');
clickContainer.addEventListener('click', function (event) {
  // Ignore clicks that aren't on an <img>
  if (event.target.tagName !== 'IMG') {
    return;
  }

  // Find current ImageChoice object from the <img> that was clicked
  var currentImage = event.target.currentImage;

  // Record the click on that ImageChoice
  currentImage.timesClicked++;

  // Log to ensure the click was tracked
  console.log('click', currentImage);

  // Voting done, get more images
  displayImages();
});


function ImageChoice (name, src){
  this.name = name;
  this.src = src;
  this.timesViewed = 0;
  this.timesClicked = 0;
  ImageChoice.all.push(this);
}
ImageChoice.all = []

function initialize() {
  new ImageChoice('r2d2Bag', 'img/bag.jpg');
  new ImageChoice('banana', 'img/banana.jpg');
  new ImageChoice('bathroom', 'img/bathroom.jpg');
  new ImageChoice('boots', 'img/boots.jpg');
  new ImageChoice('breakfast', 'img/breakfast.jpg');
  new ImageChoice('bubblegum', 'img/bubblegum.jpg');
  new ImageChoice('chair', 'img/chair.jpg');
  new ImageChoice('cthulhu', 'img/cthulhu.jpg');
  new ImageChoice('dogDuck', 'img/dog-duck.jpg');
  new ImageChoice('dragonMeat', 'img/dragon.jpg');
  new ImageChoice('pen', 'img/pen.jpg');
  new ImageChoice('petSweeper', 'img/pen.jpg');
  new ImageChoice('scissors', 'img/scissors.jpg');
  new ImageChoice('shark', 'img/shark.jpg');
  new ImageChoice('tauntaun', 'img/tauntaun.jpg');
  new ImageChoice('unicornMeat', 'img/unicorn.jpg');
  new ImageChoice('usbTentacle', 'img/usb.gif');
  new ImageChoice('wateringCan', 'img/water-can.jpg');
  new ImageChoice('wineGlass', 'img/wine-glass.jpg');
  displayImages();
}
initialize();

//typed out from class just to give me a basic idea of how to adjust what i've got.

//Chart info: 

// function showResultChart() {
//   var canvas = document.getElementById('resultsCanvas');
// }

//   //unhide our canvas
//   canvas.style.display = 'block';

//   //need to build up a list of labels

//   var labels = [];
//   var voteCounts = [];
//   var showCounts = [];
//   for (var i = 0; i < Placeholder.all.length: i++) {
//     labels [i] = Placeholder.all[i].name;
//   }

//   var ctx = canvas.getContext('2d'); 
//   //ctx is variable for canvas

//   var chart = new chart(ctx, {
//     type: 'bar',
//     data: {
//       labels: ['Vote Count'],
//       datasets: [{
//         label: labels,
//         datasets: [{
//           label: 'Vote Count',
//           background
//           data: voteCounts
//         }]
//       }]
//     };
//     options: {
//       responsive: true;
//       scales: {
//         yAxes: [{
//           ticks: {
//             beginAtZero: true
//           }
//         }]
//       }
//       title: {
//         dispaly: true;
//         text: 'Voting Results'
//     }
//   });
// }

//now to add the data
