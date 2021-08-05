if($(window).width()<800){
    var notesDraw=[
        "<line x1=47% y1=35% x2=53% y2=35% style='stroke:rgb(0,0,0);stroke-width:2'/><circle id='c1' cx=50% cy=35% r=10 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='d1' cx=50% cy=32.5% r=10 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='e1' cx=50% cy=30% r=10 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='f1' cx=50% cy=27.5% r=10 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='g1' cx=50% cy=25% r=10 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='a1' cx=50% cy=22.5% r=10 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='b1' cx=50% cy=20% r=10 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='c1' cx=50% cy=17.5% r=10 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='d1' cx=50% cy=15% r=10 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='e2' cx=50% cy=12.5% r=10 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='f2' cx=50% cy=10% r=10 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='g2' cx=50% cy=7.5% r=10 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='a2' cx=50% cy=5% r=10 stroke='black' stroke-width='3' fill='black'/><line x1=47% y1=5% x2=53% y2=5% style='stroke:rgb(0,0,0);stroke-width:2'/>"
    ];
}
else{
    var notesDraw=[
        "<line x1=47% y1=35% x2=53% y2=35% style='stroke:rgb(0,0,0);stroke-width:2'/><circle id='c1' cx=50% cy=35% r=25 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='d1' cx=50% cy=32.5% r=25 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='e1' cx=50% cy=30% r=25 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='f1' cx=50% cy=27.5% r=25 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='g1' cx=50% cy=25% r=25 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='a1' cx=50% cy=22.5% r=25 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='b1' cx=50% cy=20% r=25 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='c1' cx=50% cy=17.5% r=25 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='d1' cx=50% cy=15% r=25 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='e2' cx=50% cy=12.5% r=25 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='f2' cx=50% cy=10% r=25 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='g2' cx=50% cy=7.5% r=25 stroke='black' stroke-width='3' fill='black'/>",
        "<circle id='a2' cx=50% cy=5% r=25 stroke='black' stroke-width='3' fill='black'/><line x1=47% y1=5% x2=53% y2=5% style='stroke:rgb(0,0,0);stroke-width:2'/>"
    ];
}

var notes = ['C','D','E','F','G','A','B','C','D','E','F','G','A'];
var nums = ['1','2','3','4','5','6','7','8'];

var numIndex;

function compare(input2){
    input1 = nums[numIndex];
    if(input1==input2){
        nScore(0);
        location.reload();
    }
    else
        nScore(1);
    return;
}



function getNote(){
    var noteSelection = Math.floor(Math.random()*notes.length);
    var noteSelection2 = Math.floor(Math.random()*notes.length);
    while(noteSelection2==noteSelection || noteSelection-noteSelection2 > 8 || noteSelection2-noteSelection > 8)
        noteSelection2 = Math.floor(Math.random()*notes.length);
    
    $("body").append("<svg id='staff' width=100% height=100%><line x1=25% y1=10% x2=95% y2=10% style='stroke:rgb(0,0,0);stroke-width:2'/><line x1=25% y1=15% x2=95% y2=15% style='stroke:rgb(0,0,0);stroke-width:2'/><line x1=25% y1=20% x2=95% y2=20% style='stroke:rgb(0,0,0);stroke-width:2'/><line x1=25% y1=25% x2=95% y2=25% style='stroke:rgb(0,0,0);stroke-width:2'/><line x1=25% y1=30% x2=95% y2=30% style='stroke:rgb(0,0,0);stroke-width:2'/>"+notesDraw[noteSelection]+notesDraw[noteSelection2]+"</svg>");
    
    if(noteSelection-noteSelection2<1)
        numIndex = noteSelection2-noteSelection-1;
    else
        numIndex = noteSelection-noteSelection2-1;
    
    
}

function nScore(whichFnc){
    if(!sessionStorage.nScore)
        sessionStorage.nScore = 0;
    switch(whichFnc){
        case 0:
            sessionStorage.nScore = parseInt(sessionStorage.nScore) + 1;
            if(localStorage.nHighScore){
                if(parseInt(localStorage.nHighScore) < parseInt(sessionStorage.nScore))
                    localStorage.nHighScore = sessionStorage.nScore;
            }
            else
                localStorage.setItem("nHighScore",sessionStorage.nScore);
            break;
        case 1:
            sessionStorage.nScore = 0;
            $(document).ready(function(){
                $("#perfectionCounter").text(sessionStorage.nScore);
            });
            break;
        case 2:
            $(document).ready(function(){
                $("#perfectionCounter").text(sessionStorage.nScore);
            });
            break;   
        case 3:
            if(localStorage.nHighScore)
                alert("High Score: " + localStorage.nHighScore);
            else
                alert("There is currently no recorded high score");
            break;
        case 4:
            if(confirm("Are you sure you want to clear the current high score?")){
                localStorage.removeItem("nHighScore");
                sessionStorage.removeItem("nScore");
                $("#perfectionCounter").text(0);
            };
            break;
    }
}

var sideBarOpen = false;
function toggleSideBar(){
    if(sideBarOpen){
        $("#sideBar").animate({right:'100%'});
        sideBarOpen = false;
    }
    else{
        $("#sideBar").animate({right:'20%'});
        sideBarOpen = true;
    }
}

$(document).ready(function(){
    nScore(2);
    getNote();
});