// estilo dos botoes do footer
document
   .querySelector('div.footer button#b')
   .addEventListener('click', ()=>{
       document.querySelector('div.footer button#b')
      .classList.toggle('on')
       document.querySelector('div#text')
         .classList.toggle('b')     
   })


   document
   .querySelector('div.footer button#i')
   .addEventListener('click', ()=>{
       document.querySelector('div.footer button#i')
      .classList.toggle('on-i')
      document.querySelector('div#text')
         .classList.toggle('i')    
   })

   document
   .querySelector('div.footer button#u')
   .addEventListener('click', ()=>{
       document.querySelector('div.footer button#u')
      .classList.toggle('on-u')
      document.querySelector('div#text')
         .classList.toggle('u')
   })

   document
   .querySelector('div.footer button#ab')
   .addEventListener('click', ()=>{
       document.querySelector('div.footer button#ab')
      .classList.toggle('on-ab')
      document.querySelector('div#text')
         .classList.toggle('ab')
   })

   document
   .querySelector('div.footer button#l')
   .addEventListener('click', ()=>{
       document.querySelector('div.footer button#l')
      .classList.toggle('on-5')
      document.querySelector('div#text')
        .classList.toggle('li')
        createList()
   })


   function createList(){
       let div = document.querySelector('div.li')
       let li =  document.createElement('li')
      

        div.appendChild(li)
        li.appendChild(div)
   }

   function removeList(){
    let li =  document.querySelector('li')
    li.remove()
   }

//mudar a cor do section
   document.querySelector('button#color')
    .addEventListener('click', ()=>{
        document.querySelector('div#color')
        .classList.toggle('hidden')
    })
    document.querySelector('button#color-a')
    .addEventListener('click', ()=>{
        document.querySelector('div#color')
        .classList.toggle('hidden')
    })

    document.querySelector('button#yellow')
     .addEventListener('click', ()=>{
        document.querySelector('section').style.backgroundColor = '#fff7d1'
        document.querySelector('div.topo').style.backgroundColor = '#fff2ab'
        document.querySelector('div#color')
        .classList.toggle('hidden')
     })
    
     document.querySelector('button#green')
     .addEventListener('click', ()=>{
        document.querySelector('section').style.backgroundColor = '#e4f9e0'
        document.querySelector('div.topo').style.backgroundColor = '#cbf1c4'
        document.querySelector('div#color')
        .classList.toggle('hidden')
     })

     document.querySelector('button#pink')
     .addEventListener('click', ()=>{
        document.querySelector('section').style.backgroundColor = '#ffe4f1'
        document.querySelector('div.topo').style.backgroundColor = '#ffcce5'
        document.querySelector('div#color')
        .classList.toggle('hidden')
     })

     document.querySelector('button#purple')
     .addEventListener('click', ()=>{
        document.querySelector('section').style.backgroundColor = '#f2e6ff'
        document.querySelector('div.topo').style.backgroundColor = '#e7cfff'
        document.querySelector('div#color')
        .classList.toggle('hidden')
     })

     document.querySelector('button#blue')
     .addEventListener('click', ()=>{
        document.querySelector('section').style.backgroundColor = '#e2f1ff'
        document.querySelector('div.topo').style.backgroundColor = '#cde9ff'
        document.querySelector('div#color')
        .classList.toggle('hidden')
     })