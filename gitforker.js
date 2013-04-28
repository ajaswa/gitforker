(function (window) {
  function getQueryStrings(url) { 
    var assoc  = {},
        decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); },
        queryString = url.substring(url.indexOf("?")+1),
        keyValues = queryString.split('&'); 

    for(var i in keyValues) { 
      var key = keyValues[i].split('=');
      if (key.length > 1) {
        assoc[decode(key[0])] = decode(key[1]);
      }
    } 

    return assoc; 
  }
  function go() {
    var d = document,
        body = d.getElementsByTagName('body')[0],
        url = d.getElementById('gitforker').getAttribute('src'),
        qs = getQueryStrings(url);
        a = d.createElement('a'),
        s = d.createElement('span'),
        text = d.createTextNode('Fork me on GitHub'),
        styleA = '',
        styleB = '',
        position = '',
        bg = qs['bg'] || '#121520',
        fg = qs['fg'] || '#eeeeee',
        orentation = qs['orentation'] || 'right';
    if (!qs['url']) {
      return;
    }
    if (orentation === 'right') {
      rotate = '45deg';
      position = 'right: -50px;';
    } else {
      rotate = '-45deg';
      position = 'left: -50px;';
    }

    styleA = "-webkit-transform: rotate("+rotate+");"+
              "-o-transform: rotate("+rotate+");"+
              "-moz-transform: rotate("+rotate+");"+
              "-ms-transform: rotate("+rotate+");"+
              "transform: rotate("+rotate+");"+
              "position: fixed;"+
              "top: 50px;"+
              position+
              "padding: 2px 0;"+
              "display: block;"+
              "background-color: "+bg+";"+
              "text-decoration: none;"+
              "color: "+fg+";"+
              "font-family: Geneva, Tahoma, Verdana, sans-serif;"+
              "font-size: 16px;"+
              "-moz-box-shadow: 0px 0px 5px "+bg+";"+
              "-webkit-box-shadow: 0px 0px 5px "+bg+";"+
              "box-shadow: 0px 0px 5px "+bg+";",
    styleS = "display: block;"+
              "height: 30px;"+
              "line-height: 30px;"+
              "width: 240px;"+
              "border-top: 1px dashed "+fg+";"+
              "border-bottom: 1px dashed "+fg+";"+
              "padding: 0 0px;"+
              "text-align: center;";

    s.setAttribute('style', styleS);
    a.setAttribute('style', styleA);
    a.setAttribute('href', qs['url']);

    s.appendChild(text);
    a.appendChild(s);
    body.appendChild(a);
  }
  go();

})(window, document)
