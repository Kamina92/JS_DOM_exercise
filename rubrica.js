// Bottoni

let showContacts = document.querySelector('#showContacts');
let addContact = document.querySelector('#addContact');
let delContact = document.querySelector('#delContact');
let srcContact = document.querySelector('#srcContact')

// Wrapper

let contactWrapper = document.querySelector('#contactWrapper')

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

    }
}

showContacts.addEventListener('click', ()=>{
    if(verifica == false){
        showContacts.innerHTML = 'Nascondi contatti'
        rubrica.showContacts();
        verifica = true;
    } else if(verifica = true){
        showContacts.innerHTML = 'Mostra contatti'
        contactWrapper.innerHTML ='';
        verifica = false;
    }  
})


