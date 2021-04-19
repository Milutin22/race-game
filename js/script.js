var player1 = document.getElementById('player1');
var player2 = document.getElementById('player2');
var move1 = 0;
var move2 = 0;
var num1 = 0;
var num2 = 0;
var arr = ['-212', '-443', '-212', '0']; //background positions for sprites


//reset button
$('#reset').on('click', playerWon);



    $('body').on('keypress', function(e) {
        let goal = e.which;
        //if key 'D' is pressed with capslock or whitout
        if(goal == '100' || goal == '68') {
            //finish
            if(getTranslateX(player1) === 920) {
                playerWon();
            } else {
                move1 += 20; 
                $('body>div:nth-of-type(1)>.key').toggleClass('position')
                $('#player1').css({
                    transform: 'translate(' + move1 + 'px, 0)',
                    backgroundPositionX: arr[num1] + 'px'
                })
            //numbers for the array 'arr'
            if(num1 === 3) {
                return num1 = 0
            } else {
                num1++
            }
            }
        }
    
    
        //if key 'L' is pressed with capslock or whitout
        if(goal == '108' || goal == '76') {
            //finish
            if(getTranslateX(player2) === 920) {
                playerWon() 
            } else {
                move2 += 20;
                $('body>div:nth-of-type(2)>.key').toggleClass('position')
                $('#player2').css({
                    transform: 'translate(' + move2 + 'px, 0)',
                    backgroundPositionX: arr[num2] + 'px'
                })
            //numbers for the array 'arr'
            if(num2 === 3) {
                return num2 = 0
            } else {
                num2++
            }
            }
        }
    })
    
    //get transformX
    function getTranslateX(player) {
    var style = window.getComputedStyle(player);
    var matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41
    }
           
    //if some of the players win
    function playerWon() {
        if(getTranslateX(player1) === 920) {
            alert('Player 1 won!!!')
        } else if(getTranslateX(player2) === 920) {
            alert('Player 2 won!!!')
        }
        //to get tap display keyout
        $('body>div:nth-of-type(1)>.key, body>div:nth-of-type(2)>.key').removeClass('position')
        $('#player1, #player2').css({
            transform: 'translate(0, 0)',
            backgroundPositionX: '0'
        });
        move1 = 0;
        num1 = 0;
        move2 = 0;
        num2 = 0;
    }
    
    //sound pause/play
    $('document').ready(initAudioPlayer);
    function initAudioPlayer() {
        audio.play()
    }
    
    let audio = new Audio();
    audio.src = 'audio/charlots.mp3';
    audio.loop = true;
    let played = true;
    
    $('#sound').on('click', function() {
        if(played) {
            audio.pause();
            played = false;
            $(this).html('<i class="fas fa-volume-mute"></i>')
        } else {
            audio.play();
            played = true;
            $(this).html('<i class="fas fa-volume-up"></i>')
        }
    })