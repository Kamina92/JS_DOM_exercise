let garage = {
    'cars' : [
        {brand :'renault',model : 'twingo'},
        {brand :'toyota',model : 'chr'},
        {brand :'fiat',model : 'panda'},
        {brand :'jeep',model : 'renegade'}
    ],

    search : function(marca) {

       
        let filtered = this.cars.filter((el) => el.brand.toLowerCase() == marca.toLowerCase())

        if (filtered.length == 0){
            return console.log('Non ci sono macchine di questa marca in garage');
        } else {
            return filtered[0].model;
            }
    }
};

let search = garage.search('Toyota')

console.log(search);
