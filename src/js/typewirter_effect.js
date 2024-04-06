// TYPEWRITER EFFECT

var content = "Hey there, my name is Imanuel!\nI'm a self-taught student that likes to share his work with others. I'm mainly interested in photography, coding, engineering and scientific research. On this website you can find some of my work in these areas.\nI hope you enjoy looking at them.";
var ele = '<span>' + content.split('').join('</span><span>') + '</span>';
var delay = 1000; //ms

setTimeout(function() {
  $(ele).hide().appendTo('.typewriter-text').each(function (i) {
    $(this).delay(20 * i).css({
      display: 'inline',
      opacity: 0
    }).animate({
      opacity: 1
    }, 100);
  });
}, delay);


// Ensure the parent container respects line breaks
$('.typewriter-text').parent().css('white-space', 'pre-line');

