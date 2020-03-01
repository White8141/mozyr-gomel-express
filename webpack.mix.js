let mix = require('laravel-mix');

//mix.sourceMaps();

mix.js('resources/js/main.js', 'public/js/').sass('resources/sass/style.scss', 'public/css/');
