const tutorials = [
    "what does the this keyword mean?",
    "What is the Constructor OO pattern?",
    "implementing Blockchain Web API",
    "The Test Driven Development Workflow",
    "What is NaN and how Can we Check for it",
    "What is the difference between stopPropagation and preventDefault?",
    "Immutable State and Pure Functions",
    "what is the difference between == and ===?",
    "what is the difference between event capturing and bubbling?",
    "what is JSONP?",
  ];




  function titleCased() {
    return tutorials.map(function (titles) { 
        const wordArray = titles.split(" ")
        const capitalizedArray = wordArray.map(function (word) {
           return word[0].toUpperCase() + word.substring(1);
            
        }) 
        return capitalizedArray.join(" ");
      })
}

/*
const newTutorialNames = tutorials.map(titleCased);

newTutorialNames;


const titleCased = tutorials.map(function (titles) {
    return (titles.toUpperCase());
  })

  titleCased;



  const titleCased = map(tutorials, function (titles) {
    return tutorials.assign({}, titles.toUpperCase());
  })

  titleCased;
*/



  
