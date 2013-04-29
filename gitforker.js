/* gitforker
 * v0.0.1
 *
 * Adding "Fork me on GitHub" to your site without images.
 */

(function () {
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
  };
  function setOrientation(orientation) {
    var or = {};
    if (orientation === 'right') {
      or['r'] = '45deg';
      or['p'] = 'right: -50px;';
    } else {
      or['r'] = '-45deg';
      or['p'] = 'left: -50px;';
    }
    return or;
  }

  (function () {
    var d = document,
        body = d.getElementsByTagName('body')[0],
        url = d.getElementById('gitforker').getAttribute('src'),
        qs = getQueryStrings(url);
        a = d.createElement('a'),
        s = d.createElement('span'),
        text = d.createTextNode('Fork me on GitHub'),
        styleA = '',
        styleB = '',
        bg = qs['bg'] || '#121520',
        fg = qs['fg'] || '#eeeeee',
        or = setOrientation(qs['orientation'] || 'left');
    if (!qs['url']) {
      return;
    }

    styleA = "-webkit-transform: rotate("+or['r']+");"+
              "-o-transform: rotate("+or['r']+");"+
              "-moz-transform: rotate("+or['r']+");"+
              "-ms-transform: rotate("+or['r']+");"+
              "transform: rotate("+or['r']+");"+
              "position: fixed;"+
              "top: 50px;"+
              or['p']+
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
  })();

})()
