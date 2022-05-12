// Bottoni

let showContacts = document.querySelector('#showContacts');
let addContact = document.querySelector('#addContact');
let delContact = document.querySelector('#delContact');
let srcContact = document.querySelector('#srcContact')

// Wrapper

let contactWrapper = document.querySelector('#contactWrapper')

// Input

let inputName = document.querySelector('#inputName');
let inputNumber = document.querySelector('#inputNumber');


// Verifica

let verifica = false;

// Rubrica

let rubrica = {
    
    contatcs : [
        {phoneName : 'Filippo', phoneNumber : 3808610448},
        {phoneName : 'Elone', phoneNumber : 3808610558},
        {phoneName : 'Billone', phoneNumber : 3808610668},
        {phoneName : 'Stevvone', phoneNumber : 3808610778},
        {phoneName : 'Linussone', phoneNumber : 3808610888},
        {phoneName : 'Phillone', phoneNumber : 3808610998}
    ],



    showContacts : function () {

        contactWrapper.innerHTML='';
        this.contatcs.forEach(contact => {

            let div = document.createElement('div');
            div.classList.add('col-12','col-md-3','contactCard','d-flex','justify-content-evenly','align-items-center','mt-5');

            div.innerHTML = `
            <p>${contact.phoneName}</p>
            <p>${contact.phoneNumber}</p>
            `
            contactWrapper.appendChild(div);
            
        });
    },

    addContact : function (nome,numero) {
            
        this.contatcs.push({phoneName : nome, phoneNumber : numero});
        this.showContacts();  
        
    },

    delContact :function(nome) {
        
        let filtered = this.contatcs.filter((contact)=>
            contact.phoneName.toLowerCase() == nome.toLowerCase() )[0];
        let index = this.contatcs.indexOf(filtered);
        if(index>=0){
            this.contatcs.splice(index,1);
        }
        this.showContacts();

    },

}



showContacts.addEventListener('click', ()=>{
    if(verifica == false){
        showContacts.innerHTML = 'Nascondi contatti'
        rubrica.showContacts();
        showContacts.classList.add('btnCustomActive')
        verifica = true;
    } else if(verifica == true){
        showContacts.innerHTML = 'Mostra contatti'
        contactWrapper.innerHTML ='';
        showContacts.classList.remove('btnCustomActive')
        verifica = false;
    }  
})




addContact.addEventListener('click', ()=>{
console.dir(inputNumber);
    if(inputName.value !='' && inputNumber.value != ''){
        rubrica.addContact(inputName.value,inputNumber.value);
        if(verifica == false){
            showContacts.innerHTML = 'Nascondi contatti';
            showContacts.classList.add('btnCustomActive');
            verifica = true;
        }
        
    } else if (inputName.value != '' && inputNumber.value == ''){
        alert('Non hai inserito un numero')
    }else if (inputName.value =='' && inputNumber.value !=''){
        alert('Non hai inserito un nome')
    }else if (inputName.value =='' && inputNumber.value == ''){
        alert('Non hai inserito un nome e numero')
    }
    
        inputName.value = '';
        inputNumber.value = '' ;
})




delContact.addEventListener('click', ()=>{

    rubrica.delContact(inputName.value);
    if(verifica == false){
        showContacts.innerHTML = 'Nascondi contatti';
        showContacts.classList.add('btnCustomActive');
        verifica = true;
    }
    inputName.value = '';

})


