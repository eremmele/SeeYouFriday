document.getElementById("MyPath").setAttribute("d", document.getElementById("Path").getAttribute("d"));
var tl = new TimelineMax({
  repeat: -1,
  delay: 1
});
tl.to("#Text", 3, {
  attr: {
    startOffset: '0%',
    opacity: 1
  }
});
tl.to("#Text", 3, {
  attr: {
    startOffset: '100%',
    opacity: 1
  }
});
window.addEventListener('scroll', function() {
  tl.to("#Text", 3, {
    attr: {
      startOffset: '0%',
      opacity: 0
    }
  });
}, true);
