// add solution here
function theBeatlesPlay(){
  var array = ["John Lennon plays Guitar", "Paul McCartney plays Bass Guitar", "George Harrison plays Lead Guitar", "Ringo Starr plays Drums"];
  
  return array 
}

function johnLennonFacts(jLFacts){
  const lennonFacts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var facts = [];
  var i = 0; 
  while (i < lennonFacts.length)
    {
      facts[i] += facts[i] + "!!!";
      i++;
    }
  return facts
}

function iLoveTheBeatles(number){
  var love = []
  var count = 0 
  
  do {
    love.push("I love the Beatles!")
    count++
  }
  
  while (number < 7)