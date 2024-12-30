let h=document.getElementById("main");
var s="";
let arr=["babyboss.jpeg","blackpokemon.jpeg","cuteboy.jpeg","Doraemon.jpeg","golu.jpeg","jerry.jpeg","magicalworld.jpeg","MickeyMouse.jpeg","motupatlu.jpeg","pinkpanter.jpeg","pokemon.jpeg","prince.jpeg","spiderman.jpeg","thunderpokemon.jpeg","toothless.jpeg"]
for (let i = 0;  i< 44; i++) {
    var r=Math.floor(Math.random()*15);
s+=`<div class="card"><img src=${arr[r]}></div>`;
}
h.innerHTML=s;
//<img src="./ce6d0ccf-4e32-49b6-9831-f6e733e0db9f.jpeg" alt="motu"></img>