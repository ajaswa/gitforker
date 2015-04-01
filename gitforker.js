/* gitforker
 * v0.0.6
 * Copyright 2013-2015 Andrew Jaswa
 * Adding 'Fork me on GitHub' to your site without images.
 */

(function () {
  var d = document,
      ds = d.querySelector('#gitforker').dataset,
      bg = ds.bg || '#111',
      fg = ds.fg || '#eee',
      p = ds.or || 'left',
      r = p === 'left' ? '-' : '',
      a = d.createElement('a'),
      s = d.createElement('span'),
      ro = 'transform:rotate('+r+'45deg);',
      styleAnchor = p+':-50px;'+
                    '-webkit-'+ro+ro+
                    'background:'+bg+';'+
                    'color:'+fg+';'+
                    'box-shadow:0 0 5px '+bg+';'+
                    'position:fixed;'+
                    'top:50px;'+
                    'text-decoration:none;'+
                    'font:16px Geneva,sans-serif;',
      styleSpan = 'border:1px dashed '+fg+';'+
                  'display:block;'+
                  'line-height:30px;'+
                  'width:240px;'+
                  'margin:2px;'+
                  'text-align:center;';

  if (ds.url) {
    a.setAttribute('href', ds.url);
    a.setAttribute('style', styleAnchor);
    s.setAttribute('style', styleSpan)
    s.innerHTML = ds.text || 'Fork me on GitHub';
    a.appendChild(s);
    d.body.appendChild(a);
  }
})();
