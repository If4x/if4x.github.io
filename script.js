// TYPEWRITER EFFECT
if (window.innerWidth > 600) {
    var content = "My name is Imanuel. I'm a student and like to share my work.\nI'm mainly interested in photography, coding and engineering.\nOn this website you can find some of my work in these areas.\nI hope you enjoy looking at them.";
}
else {
    var content = "My name is Imanuel. I'm a student and like to share my work. I'm mainly interested in photography, coding and engineering. On this website you can find some of my work in these areas. \nI hope you enjoy looking at them.";
}
var ele = '<span>' + content.split('').join('</span><span>') + '</span>';

$(ele).hide().appendTo('.typewriter-text').each(function (i) {
  $(this).delay(20 * i).css({
    display: 'inline',
    opacity: 0
  }).animate({
    opacity: 1
  }, 100);
});

// Ensure the parent container respects line breaks
$('.typewriter-text').parent().css('white-space', 'pre-line');


// GALLERY
//load images from foldervar folder = "images/";

// see html of gallery, local JS


// CODE PAGE
const carouselText = [
  {text: "Coding", color: "#fffcf2ff"},
  {text: "Creativity", color: "orange"},
  {text: "Create", color: "yellow"},
  {text: "Don't giving up", color: "lightblue"},
  {text: "Learning", color: "green"}
]

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while(letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++
      if(i >= carouselList.length) {i = 0;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}


function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}