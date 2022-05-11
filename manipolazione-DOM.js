let btnHide = document.querySelector('#btnHide');
let btnColor = document.querySelector('#btnColor');
let btnBold = document.querySelector('#btnBold');


let wrapper = document.querySelector('#wrapper');


let counter = false;

wrapper.innerHTML = `
<div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolore animi debitis obcaecati nobis totam, maxime, ipsam ea expedita, numquam repellendus officia nam eveniet voluptatum ullam sint aperiam explicabo! Qui!</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, quos quis ipsum quia libero debitis pariatur aspernatur sequi suscipit labore iste corrupti deleniti voluptatum odio error dolor eos dignissimos culpa?</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eligendi quaerat neque odio unde quo nihil perspiciatis voluptas dicta ab. Est quos laborum id, doloremque corrupti architecto eligendi nemo ratione!
  </p>
  </div>
  `;
let p = document.querySelectorAll('p');





btnHide.addEventListener('click', ()=>{
  
  if(counter == false){
    wrapper.innerHTML = '';
    counter = true;
    } else {  
      wrapper.innerHTML = `
      <div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolore animi debitis obcaecati nobis totam, maxime, ipsam ea expedita, numquam repellendus officia nam eveniet voluptatum ullam sint aperiam explicabo! Qui!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, quos quis ipsum quia libero debitis pariatur aspernatur sequi suscipit labore iste corrupti deleniti voluptatum odio error dolor eos dignissimos culpa?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eligendi quaerat neque odio unde quo nihil perspiciatis voluptas dicta ab. Est quos laborum id, doloremque corrupti architecto eligendi nemo ratione!
      </p>
      </div>
      `;  
       p = document.querySelectorAll('p');

      counter = false
      }
    })
    

    

    btnColor.addEventListener('click', ()=> {
      
          p.forEach(element => {
            element.style.color = `rgb(${Math.floor(Math.random() * (255 - + 1))},${Math.floor(Math.random() * (255 - + 1))},${Math.floor(Math.random() * (255 - + 1))})`;
            });
      

})


btnBold.addEventListener('click',()=> {
      
  wrapper.classList.toggle('fwBold');
  
})

