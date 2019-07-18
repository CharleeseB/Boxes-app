
//createElement
const el = document.createElement('div')
//add the box class
el.classList.add('box')
//append the new element to the DOM
const container = document.querySelector('.box-container');
container.appendChild(el);

//Change backgroung color of all boxes
// get the boxes from the dom
const boxes = document.querySelectorAll('.box')
// loop thru boxes 
boxes.forEach((box) =>{
// add the event listener when u click it updates background color
//update their bg color
    box.addEventListener('click',(event)=>{
        const currentBG= event.target.style.backgroundColor;
// ternary for backgound change
        event.target.style.backgroundColor =
// if background is org/ change to grn/if not change to org
        (currentBG === 'orange') ? '#bada55':
// modify color accordingly
        (currentBG==='red') ? 'orange': 'red';
    });
});
