let bowling = {
    players : [
        {name : 'Qui', scores :[] },
        {name : 'Quo', scores :[] },
        {name : 'Qua', scores :[] },
        {name : 'Zio Paperino', scores :[] },
    ],

    maxPoint : 0,

    scores : function(){

        for(let i = 0; i<10; i++){

        this.players.forEach(player => {
            player.scores.push(Math.floor(Math.random() * (10 - 0 + 1) + 1));
        });
        }
    },

    finalScore : function(){

        this.players.forEach((player) =>{
            player.finalScore = player.scores.reduce((acc,n) => acc + n);

            if (player.finalScore > this.maxPoint){
                this.maxPoint = player.finalScore;
            };
        })

        this.players.sort((a,b) => b.finalScore - a.finalScore);

        if (this.players[0].finalScore>this.players[1].finalScore){

            return (console.log(`Il vincitore ${this.players[0].name} ha totalizzato ${this.maxPoint} punti`));
        } else {
            return console.log(`i giocatori ${this.players[0].name} e ${this.players[1].name} hanno pareggiato con ${this.players[0].finalScore} punti`);
        }

    }


}

bowling.scores();

bowling.finalScore();
console.log(bowling.players);