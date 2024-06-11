let btn=document.querySelectorAll(".boxes")
let imge=document.querySelector(".wins")
let imges=document.querySelector(".draw")
let turn0=true;
let chance=document.querySelector(".chance")
const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const re=document.querySelector(".reset");
const ne=document.querySelector(".new");
const star=document.querySelector(".start")
star.addEventListener("click",()=>{
    chance.classList.remove("hide");
    chance.innerText=`${player1} turn`
    star.classList.add("hide")
    re.classList.remove("hide")
    empty();
})
ne.addEventListener("click",()=>{
    reset();
    up.classList.remove("hide")
    down.classList.add("hide")
})
re.addEventListener("click",()=>{
    reset();
})
let i=0;
let t=0;
btn.forEach((bt) => {
    bt.addEventListener("click",()=>{
        if(t%2==0){
            chance.innerText=`${player2} turn`
        }
        else{
            chance.innerText=`${player1} turn`
        }
        if(turn0){
            bt.innerText="O";
            turn0=false;
            bt.disabled=true;
        }else{
            bt.innerText="X";
            turn0=true;
            bt.disabled=true;
            bt.style.color="#79A9D1";
        }
        i=i+1;
        check();
        draw();
        t=t+1;
    })
});
const draw=()=>{
    if(i==9){
        msgmain.classList.remove("hide");
        msg1.innerText="This match is a draw play new game";
        re.classList.add("hide")
        imges.classList.remove("hide");
        chance.classList.add("hide")
    }
}
let msg=document.querySelector("#msg1");
let msgmain=document.querySelector(".msg");
const reset=()=>{
    turn0=true;
    i=0;
    t=0;
    dis();
    em();
    msgmain.classList.add("hide");
    re.classList.remove("hide");
    msgmain.classList.add("hide");
    imge.classList.add("hide");
    star.classList.remove("hide")
    re.classList.add("hide")
    chance.classList.add("hide");
}
const wins=(winner)=>{
    msgmain.classList.remove("hide");
    imge.classList.remove("hide");
    msg.innerText=`Congratulations! to the Winner who is ${winner} `
    chance.classList.add("hide")
}
const empty=()=>{
    for(b of btn ){
        b.disabled=false;
        b.innerText="";
    }
}
const em=()=>{
    for(b of btn ){
        b.innerText="";
    }
}
const dis=()=>{
    for(b of btn ){
        b.disabled=true;
    }
}
const check=()=>{
    for(let pnc of win){
        let pos1=btn[pnc[0]].innerText;
        let pos2=btn[pnc[1]].innerText;
        let pos3=btn[pnc[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                if (pos1=="O"){
                    wins(player1);
                    re.classList.add("hide");
                    dis();
                }
                else{
                    wins(player2);
                    re.classList.add("hide");
                    dis();
                }
            }
        }
    }
}
let player1;
let player2;
up=document.querySelector(".up")
down=document.querySelector(".down")
txt=document.querySelectorAll("input");
bu=document.querySelector(".go");
bu.addEventListener("click",()=>{
    up.classList.add("hide")
    down.classList.remove("hide")
    player1=txt[0].value
    player2=txt[1].value
    dis();
})