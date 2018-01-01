var zodiacs=['rat', 'ox', 'tiger', 'rabbit', 'dragon', 'snake', 'horse', 'goat', 'monkey', 'rooster', 'dog', 'pig'];
var hintZ = ['pig', 'snake', 'rat', 'ox', 'horse'];
var numA = [];
var newY = 'Happy New Year';
var gA = 'Guess Again.'
function hint(x){
    for(var i=0; i<x; i++){
        cHint();     
    }
}

function cHint(){
    var pics =[];
    if(ranNum != undefined){        
        zodiacs.splice(ranNum, 0, zodiac); 
    }
    var tempNum = Math.floor(Math.random()*hintZ.length); 
    var ranNum = zodiacs.indexOf(hintZ[tempNum]);
    /*
    if(numA.length>0){
        ranNum = notFound(ranNum, zodiacs);
    }
    */
    var zodiac = zodiacs[ranNum];
    for(var i=0; i<zodiac.length; i++){
        var tempPic = findZ(i, zodiac[i], ranNum);
        pics.push(tempPic);
    }    
    numA.push(ranNum);
    showR(pics, zodiac);
}


function notFound(num, arr1, arr){
    for(var i=0; i<numA.length; i++){
        if(arr1.indexOf(num)){
            num = Math.floor(Math.random()*arr.length);
            notFound(num);
        }
    }

    return num;
}

function findZ(num, char, num2){
    var zSet=[];
    for(var i=0; i<zodiacs.length; i++){
        if(zodiacs[i].indexOf(char) === num){
            zSet.push(i);
        }else if(i === zodiacs.length-1 && zSet.length === 0){
            cHint();
        }
    }
    var resZ;
    if(zSet.length === 1){
        resZ = zodiacs[zSet[0]];
    }else if(zSet.length > 1){
        var num1 = Math.floor(Math.random()*zSet.length); 
        while(num1 === num2){
            num1 = Math.floor(Math.random()*zSet.length);
        }
        resZ = zodiacs[zSet[num1]];       
    }
    return resZ;
}

function showR(arr, str){
    var secD = document.getElementById('hint');
    var resEle = '<div id="problem">';
    for(var i=0; i<arr.length;i++){
        resEle+= '<img id='+arr[i]+' src="1.png">';
    }
    resEle+= '<span>&#61;</span><img id='+str+' src="1.png"></div>';
    secD.innerHTML+=resEle;
}
function sChoices(){
    var choiceEle = [7, 10, 8, 4, 0];
    showC(choiceEle, 'choices1');
}
function showC(arr, idN){
    var secD = document.getElementById(idN);
    secD.style.height = '120px';
    secD.style.width = '700px';
    secD.parentNode.style.borderBottom = '#d0d014 50px solid';
    secD.innerHTML = '<div id=chE>Pick your answer: </div>';
    for(var i=0; i<arr.length; i++){
        var temp = arr[i]
        secD.innerHTML += '<img id='+zodiacs[temp]+' onclick=checkZ(this) src=1.png>';
    }
}

function checkZ(x){
    var secD = document.getElementById('choices1');
    if(x.id == zodiacs[10]){
        document.getElementById('hR').style.backgroundColor = 'white';
        document.getElementById('tO').style.color = 'white';
        document.getElementById('eT').style.color = 'white';
        document.getElementsByTagName('h1')[0].innerHTML = '<img id='+zodiacs[10]+' src=1.png>';
        secD.innerHTML = '<h1 id=nY style=color:red;>'+newY[0]+'</h1>';
        for(var i=1; i<newY.length; i++){
            secD.innerHTML += '<span id=nY>'+newY[i]+'</span>';
        }
    }else{
        secD.innerHTML = '<h2 id=guess>'+gA+'</h2>';
        
    }
}
