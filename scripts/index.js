console.log('*********');
const boxContainer = document.querySelector('.box-container');
const boxes = document.querySelectorAll('.box');

const push = document.querySelector('.push');
push.addEventListener('click',(e) =>{
    const box = document.createElement('div');
    box.classList.add('box');
    const Ynode = document.querySelector('.place');
    const Xnode = document.querySelector('.spot');
    const xStr= Xnode.value ||Math.floor(Math.random()* 350) ;
    const yStr = Ynode.value ||Math.floor(Math.random()* 550);
    if (Xnode.value > 350 || Ynode.value >550 && Xnode.value < 0 || Ynode.value < 0) {
        alert("NO BITCH!")}
    else {
    box.style.top = `${xStr}px`;
    box.style.left = `${yStr}px`;
    box.style.backgroundColor = select.value;
    boxContainer.appendChild(box);
    box.addEventListener("click",(event) =>{
        box.remove() 
    });  
        let colorRan = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
        let colorstr = "#";
        for(colorIndex = 0; colorIndex < 6; colorIndex++){
        colorstr += colorRan[Math.floor(Math.random()*16)]; 
    box.style.backgroundColor =colorstr;    
            }
    };
    
        box.addEventListener("mouseover",(e)=>{
        box.style.top = Math.floor(Math.random()* 350) +1 + "px"
        box.style.left = Math.floor(Math.random()* 550) +1 + "px"
        }); 
});



