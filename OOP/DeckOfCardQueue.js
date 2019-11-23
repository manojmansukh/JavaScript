var rl=require('readline-sync');
var que=require('../DataStructure/Utility/QueueUsingLinkList')
var card=require('./utility/DeckCard');
var deck=new card.DeckCard();
var queue=new que.QueueUsingLinkList();
class DeckOfCards
{  
    game(){
        //create decks of Card 
        var cards=deck.deckOfCard();
        console.log(cards);
        
        //Number Of Cards.
        var noOfCards=cards.length;
        console.log(noOfCards);

        //Shuffle Card
        var ShuffleCards=deck.shuffleCard(noOfCards,cards);
        console.log(ShuffleCards);

        for (var k = 0; k < noOfCards; k++) {
            queue.enqueue(ShuffleCards[k]);
        }
            

       //queue.display();
        //Distribute 9 cards to 4 players
        console.log("Distributing 9 cards to palyers");
        var k = 0;
        for (let i = 1; i <= 4; i++) {
            console.log("\nPlayer number " + i + " have cards:");
            for (let j = 0; j < 9; j++) {
                var arr="";
                console.log(queue.dequeue());
                k++;
            }
        }
        // //Distribute the 9 cards to 4 Player & represent in 2D Array. 
        // var players=rl.questionInt("enter the no of Players:");
        // var cards=rl.questionInt("Enter the no Of cards distribute:")
        // var distribute=deck.diustributeCard(players,cards,ShuffleCards);
        // console.log(distribute);

        //
    }     
}
    var play=new DeckOfCards();
    play.game(); 
