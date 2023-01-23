// let header=document.getElementById("main-header");
// header.style.borderBottom="solid 3px black";
// let addItems=document.getElementsByClassName("title");
// console.log(addItems);
// addItems[0].style.fontWeight="bold";
// addItems[0].style.color="green"

let items=document.getElementsByClassName('list-group-item');
items[2].style.backgroundColor='green';

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold'
}