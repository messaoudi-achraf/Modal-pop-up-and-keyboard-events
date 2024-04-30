'use strict';

const modal =document.querySelector('.modal');
const overlay =document.querySelector('.overlay');
const btnsCloseModal =document.querySelector('.close-modal');
const btnsOpenModal =document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);
for(let i=0;i<btnsOpenModal.length;i++) {
  //fnct for opening 
const openModal =function (){
  console.log('Button clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden')}
  //open
btnsOpenModal[i].addEventListener('click',openModal)}
  //fnct for closing
const closeModal = function (){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
  //close button
btnsCloseModal.addEventListener('click', closeModal)

  //close when clicking on ovelay 
overlay.addEventListener('click',closeModal)
  // keyboard events
document.addEventListener('keydown',function(e){
// console.log(e.key);
if(e.key==='Escape' &&!modal.classList.contains('hidden'))  closeModal();
  

})
