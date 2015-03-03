/* gitforker
 * v0.0.5
 * Copyright 2013-2015 Andrew Jaswa
 * Adding "Fork me on GitHub" to your site without images.
 */

(function () {
  var d = document,
      ds = d.querySelector('#gitforker').dataset,
      a = d.createElement('a'),
      s = d.createElement('span'),
      bg = ds.bg || '#121212',
      fg = ds.fg || '#eee',
      or = {r: '-45deg', p: 'left:-50px;'};
  if (ds.or === 'right') {
    or = {r: '45deg', p: 'right:-50px;'};
  }
  var styleAnchor = "-webkit-transform:rotate("+or.r+");"+
                    "transform:rotate("+or.r+");"+
                    "position:fixed;"+
                    "top:50px;"+
                    or.p+
                    "padding: 2px 0;"+
                    "display:block;"+
                    "background:"+bg+";"+
                    "text-decoration:none;"+
                    "color:"+fg+";"+
                    "font: 16px/1.4 Geneva,sans-serif;"+
                    "box-shadow:0px 0px 5px "+bg+";",
      styleSpan = "display:block;"+
                  "height:30px;"+
                  "line-height:30px;"+
                  "width:240px;"+
                  "border:1px dashed "+fg+";"+
                  "border-left:0;"+
                  "border-right:0;"+
                  "text-align:center;";

  if (ds.url) {
    a.setAttribute('style', styleAnchor);
    a.setAttribute('href', ds.url);
    s.setAttribute('style', styleSpan)
    s.innerHTML = ds.text || 'Fork me on GitHub';
    a.appendChild(s);
    d.body.appendChild(a);
  }
})();
