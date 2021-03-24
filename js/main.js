
$(document).ready(function () {
   registerSW();
    $('.menu-btn').click(function () {
        $('.menu').toggle(300);
    });

    $('#newGame').click(function(){
        $('.index-first').addClass('animate__animated animate__zoomOut');
        $('.index-second').show().addClass('animate__animated animate__zoomInDown');
    });

    playPage();
    m();

    $(window).resize(function(){
        playPage();
        m();
    });

    var gameMenuFlag=0;
    $('.toggle-game-menu-btn').click(function(){
        $('.toggle-game-menu-btn i').toggleClass('fa-angle-double-up').addClass('fa-angle-double-down');
        if(gameMenuFlag==0){
            $('.game-menu').css({'bottom':0});
            $('.toggle-game-menu-btn').css({'left':'calc(50% - 25px)'});
            gameMenuFlag=1;
        }else{
            $('.game-menu').css({'bottom':'-105px'});
            $('.toggle-game-menu-btn').css({'left':'0px'});
            gameMenuFlag=0;
        }
    });

    $('.restart').click(function () {
        $('.restart-div').toggle(50);
    });
    $('.restart-close').click(function(){
        $('.restart-div').toggle(50);
    });
    $('.restart-game').click(function(){
        localStorage.clear();
    });

});

function playPage() {
    var width=$(window).width();
    var height=$(window).height();

    if(width<height){
        $('.table').width(width-25).height(width-25);
        $('.table').css({
            'top':'calc(50% - '+(width-15)/2+'px)',
            'left':'calc(50% - '+(width-15)/2+'px)'
        });
    }
    if(width>height){
        $('.table').width(height-25).height(height-25);
        $('.table').css({
            'top':'calc(50% - '+(height-15)/2+'px)',
            'left':'calc(50% - '+(height-15)/2+'px)'
        });
        
    }

    var stepW=$('td').width();
    $('tr').height(stepW);
}


function m(){
    var mWidth=$('.step').width();
  
    $('.m').width(mWidth);   
    $('.m').height(mWidth);
}

async function registerSW() {
    if ('serviceWorker' in navigator) {
      try {
        await navigator.serviceWorker.register('./sw.js');
      } catch (e) {
        console.log(`SW registration failed`);
      }
    }
  }
