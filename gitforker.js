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
        styleA = "-webkit-transform: rotate(45deg);-o-transform: rotate(45deg);-moz-transform: rotate(45deg);-ms-transform: rotate(45deg);transform: rotate(45deg);position: fixed;top: 50px;right: -50px;padding: 2px 0;display: block;background-color: blue;text-decoration: none;color: white;font-family: Geneva, Tahoma, Verdana, sans-serif;font-size: 16px;",
        styleS = "display: block;height: 30px;line-height: 30px;width: 240px;border-top: 1px dashed white;border-bottom: 1px dashed white;padding: 0 0px;text-align: center;";
    
    s.setAttribute('style', styleS);
    a.setAttribute('style', styleA);
    a.setAttribute('href', qs['url']);

    s.appendChild(text);
    a.appendChild(s);
    body.appendChild(a);
  }
  go();

})(window, document)
