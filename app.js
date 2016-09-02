var game = {
  player1: {
    name: "Ken",
    health: 100
  },
  player2: {
    name: "Ryu",
    health: 100
  }
}
var distance = $('.Ryu').offset().left - ($('.ken').offset().left + $('.ken').width())

var $ken = $('.ken');

// $(document).keydown(function(e){
// if(e.keycode==65){function of a}

// $ken.keyup(function(event){
//   if(event.keycode == 65){
//     $("#s").click(function(){
//       $ken.removeClass('stance')
//       $ken.addClass('kick')
//
//       setTimeout(function(){
//         $ken.removeClass('kick')
//         $ken.addClass('stance')
//       }, 150)
//
//       var distance = $('.Ryu').offset().left - ($('.ken').offset().left + $('.ken').width())
//
//       if(distance <= -20 && distance >= -130) {
//       game.player2.health -= 15;
//       console.log("there's a kick!");
//
//       if(game.player2.health <= 0){
//         console.log("Ken Wins");
//         window.alert("KEN WINS")
//       } else if (game.player1.health <= 0){
//         console.log("Ryu Wins");
//         }
//       }
//     })
//   }
// })

//ken's kick
$('#s').on('click', function(){
  $ken.removeClass('stance')
  $ken.addClass('kick')

  setTimeout(function(){
    $ken.removeClass('kick')
    $ken.addClass('stance')
  }, 150)

  var distance = $('.Ryu').offset().left - ($('.ken').offset().left + $('.ken').width())

  if(distance <= -20 && distance >= -130) {
  game.player2.health -= 15;
  $('#RyuHp').css("width", game.player2.health);
  console.log("there's a kick!");

  if(game.player2.health <= 0){
    console.log("Ken Wins");
    window.alert("KEN WINS")
  } else if (game.player1.health <= 0){
    console.log("Ryu Wins");
    }
  }
})

// Ken's punch
$('#a').on('click', function() {
  // switch ken position from 'stance' to 'punch`
  $ken.removeClass('stance')
  $ken.addClass('punch')

  // after 80 ms, bring stance back
  setTimeout(function() {
    $ken.removeClass('punch')
    $ken.addClass('stance')
  }, 80)

  var distance = $('.Ryu').offset().left - ($('.ken').offset().left + $('.ken').width())

  if(distance <= -20 && distance >= -130) {
    game.player2.health -= 10;
  $('#RyuHp').css("width", game.player2.health);

    console.log("there's a punch!");

  if(game.player2.health <= 0){
    console.log("Ken Wins");
    window.alert("KEN is the MVP CHAMP")
  } else if (game.player1.health <= 0){
    console.log("Ryu Wins");
      }
    }
})

// $('#right').on('click', function(){
//   $ken.removeClass('stance')
//   $ken.addClass('walk')
//
//   setTimeout(function(){
//     $ken.removeClass('walk')
//     $ken.addClass('stance')
//   },150 )
// })
//Ken's walk function
var walkLeft = function(){
  $ken.addClass('walk').css({ marginLeft:'-=10px' });
};
var walkRight = function(){
  $ken.addClass('walk').css({ marginLeft:'+=10px' });
};

$('#left').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { walkLeft(); }
    else { $ken.removeClass('walk'); }
});
$('#right').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { walkRight(); }
    else { $ken.removeClass('walk'); }
});




var $Ryu = $('.Ryu')
//Ryu punch action
$('#j').on('click', function(){
  $Ryu.removeClass('stance')
  $Ryu.addClass('RyuPunch')

  setTimeout(function(){
    $Ryu.removeClass('RyuPunch')
    $Ryu.addClass('stance')
  }, 80)

  var distance = $('.Ryu').offset().left - ($('.ken').offset().left + $('.ken').width())

  if(distance <= -50 && distance >= -130) {
  // if ($(this.player2) < player1.distance(117))
    // check that distance is good and decrease Ken's health accordingly
    game.player1.health -= 15;
    $('#KenHp').css("width", game.player1.health);

    console.log("there's a hit!");
    // make sure players are both alive
    if(game.player1.health <= 0) {
      console.log("Ryu Wins");
      window.alert("Ryu WINS BY A SWEET KNOCKOUT KICK TO KEN'S HEAD!")
    }else if (game.player2.health <= 0){
      console.log("ken Wins");
    }
    // or else declare stop game and winner
  }


})
//Ryu Kick action
$('#k').on('click',function(){
  $Ryu.removeClass('stance')
  $Ryu.addClass('RyuKick')

  setTimeout(function(){
    $Ryu.removeClass('RyuKick')
    $Ryu.addClass('stance')
  }, 150)

  var distance = $('.Ryu').offset().left - ($('.ken').offset().left + $('.ken').width())

  if(distance <= -50 && distance >= -130) {
  game.player1.health -= 10;
  $('#KenHp').css("width", game.player1.health);
  console.log("there's a kick!");

  if(game.player1.health <= 0){
    console.log("Ryu Wins");
    window.alert("RYU WINS, bitch.")
  } else if (game.player2.health <= 0){
    console.log("Ken Wins");
        }
    }
})
//Ryu walk function
var RyuwalkLeft = function(){
  $Ryu.addClass('walk').css({ marginLeft:'-=10px' });
};
var RyuwalkRight = function(){
  $Ryu.addClass('walk').css({ marginLeft:'+=10px' });
};

$('#RyuLeft').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { RyuwalkLeft(); }
    else { $Ryu.removeClass('walk'); }
});
$('#RyuRight').on('mousedown mouseup', function(e){
    if (e.type == 'mousedown') { RyuwalkRight(); }
    else { $Ryu.removeClass('walk'); }
});


$(document).keydown(function(e){
    if(e.keyCode == 88){
      console.log("walking right");
      $ken.removeClass('stance');
      $ken.addClass('walk').css({ marginLeft:'+=10px' });
    };

    if (e.keyCode == 90){
      console.log("walking left");
      $ken.removeClass('stance');
      $ken.addClass('walk').css({ marginLeft:'-=10px' });
    };
    if (e.keyCode == 65) {
      console.log("ken punch");
      $ken.removeClass('stance');
      $ken.addClass('punch');
      var distance = $('.Ryu').offset().left - ($('.ken').offset().left + $('.ken').width())

      if(distance <= -20 && distance >= -130) {
        game.player2.health -= 10;
        $('#RyuHp').css("width", game.player2.health*2);
        console.log("there's a punch!");

      if(game.player2.health <= 0){
        console.log("Ken Wins");
        // Program.restart();
        window.alert("KEN is the MVP CHAMP")
      } else if (game.player1.health <= 0){
        console.log("Ryu Wins");
          }
        }
    };
    if (e.keyCode == 83) {
      $ken.removeClass('stance');
      $ken.addClass('kick');

      var distance = $('.Ryu').offset().left - ($('.ken').offset().left + $('.ken').width())

      if(distance <= -20 && distance >= -130) {
      game.player2.health -= 15;
      $('#RyuHp').css("width", game.player2.health*2);

      console.log("there's a kick!");

      if(game.player2.health <= 0){
        console.log("Ken Wins");
        window.alert("KEN WINS")
      } else if (game.player1.health <= 0){
        console.log("Ryu Wins");
        }
      }
    };
    if (e.keyCode == 78) {
      $Ryu.removeClass('stance');
      $Ryu.addClass('walk').css({ marginLeft:'-=10px' });
    };
    if (e.keyCode == 77) {
      $Ryu.removeClass('stance')
      $Ryu.addClass('walk').css({ marginLeft:'+=10px' });
    };
    if(e.keyCode == 74){
      $Ryu.removeClass('stance');
      $Ryu.addClass('RyuPunch');
      var distance = $('.Ryu').offset().left - ($('.ken').offset().left + $('.ken').width())

      if(distance <= -50 && distance >= -130) {
      // if ($(this.player2) < player1.distance(117))
        // check that distance is good and decrease Ken's health accordingly
        game.player1.health -= 15;
        $('#KenHp').css("width", game.player1.health*2);

        console.log("there's a hit!");
        // make sure players are both alive
        if(game.player1.health <= 0) {
          console.log("Ryu Wins");
          window.alert("Ryu WINS BY A SWEET KNOCKOUT KICK TO KEN'S HEAD!")
        }else if (game.player2.health <= 0){
          console.log("ken Wins");
        }
        // or else declare stop game and winner
      }
    };
    if (e.keyCode == 75){
      $Ryu.removeClass('stance');
      $Ryu.addClass('RyuKick');var distance = $('.Ryu').offset().left - ($('.ken').offset().left + $('.ken').width())

      if(distance <= -50 && distance >= -130) {
      game.player1.health -= 10;
      $('#KenHp').css("width", game.player1.health*2);

      console.log("there's a kick!");

      if(game.player1.health <= 0){
        console.log("Ryu Wins");
        window.alert("RYU WINS, bitch.")
      } else if (game.player2.health <= 0){
        console.log("Ken Wins");
            }
        }
    };
  })

  // else {
  //   $ken.removeClass('walk');
  //   $Ryu.removeClass('walk')
  // }
  // return false;

$(document).keyup(function(e) {
  if(e.keyCode == 88) {
    $ken.removeClass('walk');
    $ken.addClass('stance');
  };
  if (e.keyCode == 90){
    $ken.removeClass('walk');
    $ken.addClass('stance');
  };
  if (e.keyCode == 65) {
    $ken.removeClass('punch');
    $ken.addClass('stance');
  };
  if (e.keyCode == 83) {
    $ken.removeClass('kick');
    $ken.addClass('stance');
  };
  if (e.keyCode == 78) {
    $Ryu.removeClass('walk');
    $Ryu.addClass('Ryu stance');
  };
  if (e.keyCode == 77) {
        $Ryu.removeClass('walk');
        $Ryu.addClass('Ryu stance');
      };
  if(e.keyCode == 74){
        $Ryu.removeClass('RyuPunch');
        $Ryu.addClass('stance');
      };
  if (e.keyCode == 75){
        $Ryu.removeClass('RyuKick');
        $Ryu.addClass('stance');}

})

// function myFunction(){
//   HTMLFormElement.reset()
// }

// example of finding distance between ken and a box:
// $('.Ryu').offset().left - ($('.ken').offset().left + $('.ken').width())



//on click events
// $('#a').click(punch){if(e.keycode ==65
// && !$ken.hasClass('punch')){
//   punch();
// }
// }

// //on keydown events
// $(document).on('keydown keyup', function(e){
//   if (e.type == 'keydown') {
//     //a - punch
//     if(e.keycode ==65
//     && !$ken.hasClass('punch')){
//       punch();
//     }
//   }
// })
