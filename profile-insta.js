function changeGrid(){
    const innerHtmlGrid=document.querySelector(".grid-pics");
    innerHtmlGrid.innerHTML=`<img src="images/taken-pp9.jpg" alt="" class="grid-pic">
    `;
    const button2 = document.getElementById('secondB'); // Select the button element
    button2.classList.add('first-button');
    const button1 = document.getElementById('firstB'); // Select the button element
    button1.classList.remove('first-button');

}
function changeGridMain(){
    const innerHtmlGrid=document.querySelector(".grid-pics");
    innerHtmlGrid.innerHTML=`<img src="images/taken-pp3.jpg" alt="" class="grid-pic">
    <img src="images/taken-pp4.jpg" alt="" class="grid-pic">
    <img src="images/taken-pp8.jpg" alt="" class="grid-pic">
    <img src="images/landscape.png" alt="" class="grid-pic">
    <img src="images/taken-pp7.jpg" alt="" class="grid-pic">
    <img src="images/taken-pp2.jpg" alt="" class="grid-pic">`;

    const button2 = document.getElementById('firstB'); // Select the button element
    button2.classList.add('first-button');
    const button1 = document.getElementById('secondB'); // Select the button element
    button1.classList.remove('first-button');


}

function follow(){
    const followval=document.getElementById('follow');
    console.log(followval);
    if(followval.innerHTML==="Follow"){
        followval.innerHTML='Following';
        followval.classList.add('following')

    }
    else{
        followval.innerHTML='Follow';
        followval.classList.remove('following')
    }
    
}