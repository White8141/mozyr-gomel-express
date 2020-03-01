var googleIcon = document.getElementById('android-img');
var appleIcon = document.getElementById('apple-img');

function gglUp () {
    googleIcon.style.transform = 'scale(1.1)';
    setTimeout(function () {
        googleIcon.style.transform = 'scale(1)';
    }, 350);
}
function applUp () {
    appleIcon.style.transform = 'scale(1.1)';
    setTimeout(function () {
        appleIcon.style.transform = 'scale(1)';
    }, 350);
}

var googleTimer = setInterval(gglUp, 3000);
setTimeout(function () {
    var appleTimer = setInterval(applUp, 3000);
}, 100);

Vue.component('form-block', require('./components/FormBlock.vue').default);

var app = new Vue({
    el: '#app',
    data: {}
});

$(document).ready(function(){
     //выпадающая навигационная панель
     var st = $(this).scrollTop();
     var lastScrollTop = st - 1;
     var isLinkPanelVisible = true;
     //спрятать панель, если экран уже прокручен
     if (st > 0) {
         $("nav.navbar").css('top', '-80px');
         isLinkPanelVisible = false;
     }
     $(window).scroll(function(event){
         st = $(this).scrollTop();
         if (st > lastScrollTop){
             if (isLinkPanelVisible) {
                 //console.log ("Спрятать панель");
                 $("nav.navbar").css('top', '-80px');
                 isLinkPanelVisible = false;
             }
         } else {
             if (!isLinkPanelVisible) {
                 //console.log ("Показать панель");
                 $("nav.navbar").css('top', '0px');
                 isLinkPanelVisible = true;
             }
         }
        lastScrollTop = st;
     });

});