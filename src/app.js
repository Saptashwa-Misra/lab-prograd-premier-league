//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon){
    var cM=[managerName, managerAge, currentTeam, trophiesWon]
    return cM
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
function createFormation(arr){
    if (arr.length==0)
      return null
    else if (arr.length==1)
    {
      d=arr[0]
      m=undefined
      f=undefined
    }
    else if (arr.length==2)
    {
      d=arr[0]
      m=arr[1]
      f=undefined
    }
    else
    {
      d=arr[0]
      m=arr[1]
      f=arr[2]
    }  
    var cF = {defender:d, midfield:m, forward:f}
    return cF
}


// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year){
    let p = players.filter(array=>array.debut===year)
    return p
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(pos){
  let p = players.filter(array=>array.position===pos)
  return p
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(award_name){
  let p=[]
    if (award_name==null)
      return p;
   for(var i=0; i<players.length;i++)
   {
      for (var j=0; j<players[i].awards.length;j++)
        if(players[i].awards[j].name===award_name)
          {
            p.push(players[i])
            break;
          }
   }
   return p
}

//Progression 6 - Filter players that won ______ award ____ times
filterByAwardxTimes = (award_Name,no_of_Times) =>{
    p=[]
    for (var i=0; i<players.length; i++)
    {
      var ctr=0;
      for (var j=0; j<players[i].awards.length; j++)
        if(players[i].awards[j].name===award_Name)
          ctr++;
      if(ctr===no_of_Times)
        p.push(players[i])
    }
    return p
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
filterByAwardxCountry = (award_Name, Country) => {
    p=[]
    for(var i=0; i<players.length; i++)
    {
      for(var j=0; j<players[i].awards.length; j++)
        if (players[i].awards[j].name===award_Name && players[i].country===Country)
          {
            p.push(players[i])
            break;
          }
    }
    return p
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
filterByNoOfAwardsxTeamxAge = (noOfAwards, team, age) => {
  p=[]
  for(var i=0; i<players.length; i++)
    if(players[i].team===team && players[i].age<age && players[i].awards.length>=noOfAwards)
          p.push(players[i])
  return p
}

//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
