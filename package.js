Package.describe({
  summary: "rewrap of Glyphicons (http://glyphicons.com/)"
});

Package.on_use(function (api) {
  api.use('bootstrap')
  var path = Npm.require('path');
  cssFiles = _([
    'filetypes.css',  
    'glyphicons.css', 
    'halflings.css', 
    'social.css'
  ]).map(function (file) { return path.join('css', file) })
  imgFiles = _([
    'glyphicons_halflings.png',
    'glyphicons_halflings.svg',
    'glyphicons_halflings-white.png',
    'glyphicons_halflings-white.svg',
    'glyphicons.png',
    'glyphicons_social.png',
    'glyphicons_social.svg',
    'glyphicons_social-white.png',
    'glyphicons_social-white.svg',
    'glyphicons.svg',
    'glyphicons-white.png',
    'glyphicons-white.svg'
  ]).map(function (file) { return path.join('images', file) })

  api.add_files(cssFiles, 'client');

  /* XXX override.css must be last to change the URL() paths */
  api.add_files(path.join('css', 'override.css'), 'client')

  api.add_files(imgFiles, 'client');
});

