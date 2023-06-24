//For creating a deck of cards
const createDeck = () => 
{
    const suits = ['Hearts' , 'Diamonds' , 'Spades' , 'Clubs'];
    const ranks = ['Ace',2,3,4,5,6,7,8,9,10,'Jack','King','Queen'];
    const deck = [];
    for(const suit of suits)
    {
         for(let i = 0; i < ranks.length ;i++)
         {
             const obj = {
                suit : suit,
                card : ranks[i]
             }

             deck.push(obj)
         }
    }
    return deck;
}

//To draw a card from the deck 
const drawCard = (deck) =>
{
     const indexofCard = Math.floor(Math.random()* deck.length);
     const card = deck[indexofCard];
     deck.splice(indexofCard,1);
     //console.log(card);
     return card;
}

// Getting the score of the card chosen
function getScore(temp)
{
    const arr = ['Jack','Queen','King'];
   if(arr.includes(temp))
   {
      return 10;
   }
   else if(temp == "Ace")
   {
     return 1;
   }

   else 
   {
    return temp;
   }
}

//Returning the sum of both cards , which was in the initial hand of the player and dealer
const checkScore = (hand) =>
{
  
let score = 0;
  for(const obj of hand)
  {
    score += getScore(obj.card);
    
  }
  return score;
   
}


//creating a deck and storing it in deck variable
const deck = createDeck();

//creating two empty arrays
const playerHand = [];
const dealerHand = [];


//pushing the initial two cards to the both hands
playerHand.push(drawCard(deck));
dealerHand.push(drawCard(deck));
playerHand.push(drawCard(deck));
dealerHand.push(drawCard(deck));






//Logging the initial hand and score 

console.log('starting player Hand',playerHand);
console.log('starting player score' , checkScore(playerHand));
console.log('starting dealer Hand' , dealerHand);
console.log('starting dealer score' , checkScore(dealerHand));


// Driver code for the game or the game loop

while(1)
{
  //deal a card to the player
  playerHand.push(drawCard(deck));

  //check if the player exceeds 21
  let dealerscore = checkScore(dealerHand);
  const playerscore = checkScore(playerHand);
  //check if the player gets 21 

  
  if(playerscore > 21)
  {
    console.log(`The Player lose!! Player final score ${playerscore}`);
    console.log(`Dealer final score ${dealerscore}`);
    break;
  }
  if(playerscore == 21)
  {
    console.log(`The player Win!! Player final score ${playerscore}`);
    console.log(`Dealer final score ${dealerscore}`);
    break;
  }
  

  // deal a card to the dealer
  dealerHand.push(drawCard(deck));
  //update the scores
  dealerscore = checkScore(dealerHand);
  // check if the dealer exceeds 21
  if(dealerscore > 21)
  {
    console.log(`The Dealer lose!! Dealer final score ${dealerscore}`);
    console.log(`Player final score ${playerscore}`);
    break;
  }
  //check if the player gets 21
  if(dealerscore == 21)
  {
    console.log(`The Dealer Won!! Dealer final score ${dealerscore}`);
    console.log(`Player final score ${playerscore}`);
    break;
  }


}