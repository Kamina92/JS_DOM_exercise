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

// bottoni modale

let yesModal = document.querySelector('#yesModal');
let noModal = document.querySelector('#noModal');

// icone

let icons;


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



    showContacts : function (array) {

        contactWrapper.innerHTML='';
        array.forEach(contact => {

            let div = document.createElement('div');
            div.classList.add('col-12','col-md-3','contactCard','d-flex','justify-content-evenly','align-items-center','mt-5');

            div.innerHTML = `
            <p>${contact.phoneName}</p>
            <p>${contact.phoneNumber}</p>
            <i class="fa-solid fa-trash-can"></i>
            `
            contactWrapper.appendChild(div);
            
            
            
        })
        
        icons = document.querySelectorAll('.fa-trash-can');
        icons.forEach((icon,i) => {
            icon.addEventListener('click', ()=>{
                let contact = array[i].phoneName;
                this.delContact(contact);
            })
            
        });
    },

    addContact : function (nome,numero) {
            
        this.contatcs.push({phoneName : nome, phoneNumber : numero});
        this.showContacts(this.contatcs);  
        
    },

    delContact :function(nome) {
        
        let filtered = this.contatcs.filter((contact)=>
            contact.phoneName.toLowerCase() == nome.toLowerCase() )[0];
        let index = this.contatcs.indexOf(filtered);
        if(index>=0){
            this.contatcs.splice(index,1);
        }
        this.showContacts(this.contatcs);

    },

    srcContact : function(nome) {
        let filtered = this.contatcs.filter((contatti)=> contatti.phoneName == nome)
        this.showContacts(filtered)
        console.log(filtered);
    }

}


showContacts.addEventListener('click', ()=>{
    if(verifica == false){
        showContacts.innerHTML = 'Nascondi contatti'
        rubrica.showContacts(rubrica.contatcs);
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


srcContact.addEventListener('click',()=>{

    rubrica.srcContact(inputName.value);

})