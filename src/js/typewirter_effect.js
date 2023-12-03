// TYPEWRITER EFFECT

var content = "My name is Imanuel. I'm a student and like to share my work. I'm mainly interested in photography, coding and engineering. On this website you can find some of my work in these areas.\nI hope you enjoy looking at them.";
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

