// bottoni 

let newGame = document.querySelector('#newGame');
let setScore = document.querySelector('#setScore');
let setWinner = document.querySelector('#setWinner');

// card wrapper

let cardWrapper = document.querySelector('#cardWrapper');


let exampleModalCenter = document.querySelector('#exampleModalCenter');

let bowling = {

    players : [
        {playerName: 'Homer', score:[], url: './media-bowl/homer.jpeg'},
        {playerName: 'Apu', score:[], url: './media-bowl/apu.jpeg'},
        {playerName: 'Burns', score:[], url: './media-bowl/Mr_Burns_evil.webp'},
        {playerName: 'Boe', score:[], url: './media-bowl/boe.png'}

    ],

    showPlayers : function(array){

        cardWrapper.innerHTML='';

        array.forEach(player => {
            let div = document.createElement('div');
            div.classList.add('col-12','col-md-3');

            div.innerHTML = `
                <div class="cardPlayer text-center">
                    <img src="${player.url}" alt="" class="img-fluid img-card">
                    <p>${player.playerName}</p>
                    <p id='playerScore' class='d-none d-flex justify-content-around'><span>${player.score[0]}</span><span>${player.score[1]}</span><span>${player.score[2]}</span><span>${player.score[3]}</span><span>${player.score[4]}</span><span>${player.score[5]}</span><span>${player.score[6]}</span><span>${player.score[7]}</span><span>${player.score[8]}</span><span>${player.score[9]}</span></p>
                    <p id='finalPunti' class='d-none'>${player.finalScore}</p>
                    <p id='winner'></p>

                </div>  
            `
            cardWrapper.appendChild(div);

        });
    },

    setScore : function (){
        
        for(let i=0; i<10; i++){
            this.players.forEach((player,i) =>{

                player.score.push(Math.floor(Math.random() * (11)))
            });
        }
        this.showPlayers(this.players);

        let playerScore = document.querySelectorAll('#playerScore');
        
        playerScore.forEach((el,i)=>{
            el.classList.remove('d-none')
        });

        
        
        
    },
    
    setWinner : function(){

        this.players.forEach((player,i) =>{
            player.finalScore = 0;
            player.finalScore = player.score.reduce((acc,n)=> acc+n)
        });

        
        
        
        let finalPunti = document.querySelectorAll('#finalPunti');
        console.log(finalPunti);
        
        
        finalPunti.forEach((el,i)=>{
            
            el.classList.remove('d-none');
            
        })
        
        finalPunti.forEach((el,i)=>{
            let counter = 0;
            let interval = setInterval(() => {
                if(counter<this.players[i].finalScore){
                    counter++;
                    el.innerHTML =`${counter}`
                }else {
                    clearInterval(interval);
                    this.showPlayers(this.players)
                    this.players.sort((a,b)=> b.finalScore-a.finalScore);
                    let finalPunti = document.querySelectorAll('#finalPunti');
                    finalPunti.forEach((el,i)=>{
            
                        el.classList.remove('d-none');
                        
                    })
                    
                    let winner = document.querySelector('#winner')
                    
                    winner.innerHTML = 'Il vincitore !!!!!';
                }

            }, 70);
        })


    },

        
    
}



newGame.addEventListener('click',()=>{

    bowling.players.forEach((el)=>{
        el.score=[];
    })
    bowling.showPlayers(bowling.players);
})

// bowling.showPlayers(bowling.players)

setScore.addEventListener('click',()=>{
    bowling.players.forEach(player => player.score = []);
    bowling.setScore();
})

setWinner.addEventListener('click', ()=>{
    bowling.setWinner()

})

console.log(bowling.players.score);