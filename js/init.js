// print pdf
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = window.location.search.match(/print-pdf/gi) ? 'css/print/pdf.css' : 'css/print/paper.css';
document.getElementsByTagName('head')[0].appendChild(link);

// Just press »Esc / o« on your keyboard to toggle the overview mode
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,
  mouseWheel: true,
  transition: 'slide',  // none/fade/slide/convex/concave/zoom
  transitionSpeed: 'default', // default/fast/slow
  backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom
  menu: {
    numbers: true,
    openSlideNumber: true,
    themes: true,
    themesPath: 'css/theme/',
    transitions: true,
    custom: false
  },
  chalkboard: {
    toggleChalkboardButton: { left: "80px" },
    toggleNotesButton: { left: "130px" }
  },
  // Optional reveal.js plugins
  dependencies: [
    { src: 'plugin/markdown/marked.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
    { src: 'plugin/markdown/markdown.js', condition: function () { return !!document.querySelector('[data-markdown]'); } },
    { src: 'plugin/menu/menu.js', async: true },
    { src: 'plugin/notes/notes.js', async: true },
    { src: 'plugin/chalkboard/chalkboard.js', async: true },
    { src: 'plugin/highlight/highlight.js', async: true, callback: function () { 
      hljs.initHighlightingOnLoad(); 
    } }
  ],
  // Just press »F« on your keyboard to show your presentation in fullscreen mode. Press the »ESC« key to exit fullscreen mode.
  keyboard: {
    67: function () { RevealChalkboard.toggleNotesCanvas() },	// toggle chalkboard when 'c' is pressed
    66: function () { RevealChalkboard.toggleChalkboard() },	// toggle chalkboard when 'b' is pressed
    46: function () { RevealChalkboard.clear() },	// clear chalkboard when 'DEL' is pressed
    8: function () { RevealChalkboard.reset() },	// reset all chalkboard data when 'BACKSPACE' is pressed
    68: function () { RevealChalkboard.download() },	// downlad chalkboard drawing when 'd' is pressed
  },
});