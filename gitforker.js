/* gitforker
 * v0.0.6
 * Copyright 2013-2015 Andrew Jaswa
 * Adding "Fork me on GitHub" to your site without images.
 */

(function () {
  var d = document,
      ds = d.querySelector('#gitforker').dataset,
      bg = ds.bg || '#121212',
      fg = ds.fg || '#eee',
      r = ds.or === 'right' ? '45deg' : '-45deg',
      p = ds.or || 'left',
      a = d.createElement('a'),
      s = d.createElement('span'),
      styleAnchor = p+':-50px;'+
                    "-webkit-transform:rotate("+r+");"+
                    "transform:rotate("+r+");"+
                    "background:"+bg+";"+
                    "color:"+fg+";"+
                    "box-shadow:0px 0px 5px "+bg+";"+
                    "position:fixed;"+
                    "top:50px;"+
                    "text-decoration:none;"+
                    "padding: 2px 0;"+
                    "display:block;"+
                    "font: 16px Geneva,sans-serif;",
      styleSpan = "border:1px dashed "+fg+";"+
                  "display:block;"+
                  "height:30px;"+
                  "line-height:30px;"+
                  "width:240px;"+
                  "border-left:0;"+
                  "border-right:0;"+
                  "text-align:center;";

  if (ds.url) {
    a.setAttribute('href', ds.url);
    a.setAttribute('style', styleAnchor);
    s.setAttribute('style', styleSpan)
    s.innerHTML = ds.text || 'Fork me on GitHub';
    a.appendChild(s);
    d.body.appendChild(a);
  }
})();
