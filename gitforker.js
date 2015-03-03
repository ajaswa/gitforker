/* gitforker
 * v0.0.3
 * Copyright 2013-2015 Andrew Jaswa
 * Adding "Fork me on GitHub" to your site without images.
 */

(function () {
  function getParameterByName(url, name) {
    var value = url.match(new RegExp("[\?\&]" + name + "=([^\&]*)(\&?)","i"));
    return value ? value[1] : value;
  }

  function setOrientation(orientation) {
    var or = {'r': '-45deg', 'p': 'left:-50px;'};
    if (orientation === 'right') {
      or['r'] = '45deg';
      or['p'] = 'right:-50px;';
    }
    return or;
  };

  (function () {
    var d = document,
        paramUrl = d.getElementById('gitforker').getAttribute('src'),
        a = d.createElement('a'),
        s = d.createElement('span'),
        text = d.createTextNode(getParameterByName(paramUrl, 'text') || 'Fork me on GitHub'),
        url = getParameterByName(paramUrl, 'url'),
        bg = getParameterByName(paramUrl, 'bg') || '#121212',
        fg = getParameterByName(paramUrl, 'fg') || '#eee',
        or = setOrientation(getParameterByName(url, 'orientation') || 'left'),
        styleAnchor = "-webkit-transform:rotate("+or['r']+");"+
                      "transform:rotate("+or['r']+");"+
                      "position:fixed;"+
                      "top:50px;"+
                      or['p']+
                      "padding: 2px 0;"+
                      "display:block;"+
                      "background:"+bg+";"+
                      "text-decoration:none;"+
                      "color:"+fg+";"+
                      "font-family:Geneva,sans-serif;"+
                      "font-size:16px;"+
                      "box-shadow:0px 0px 5px "+bg+";",
        styleSpan = "display:block;"+
                    "height:30px;"+
                    "line-height:30px;"+
                    "width:240px;"+
                    "border:1px dashed "+fg+";"+
                    "border-left:0;"+
                    "border-right:0;"+
                    "text-align:center;";

    if (!url) {
      return;
    }
    a.setAttribute('style', styleAnchor);
    a.setAttribute('href', url);
    s.setAttribute('style', styleSpan);

    s.appendChild(text);
    a.appendChild(s);
    d.body.appendChild(a);
  })();
})();
