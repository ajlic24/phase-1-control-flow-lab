function scuberGreetingForFeet(numberInFeet){
  if (numberInFeet <= 400){
    return `This one is on me!`;
  } else if (numberInFeet > 2500){
    return `No can do.`;
  } else if (numberInFeet > 2000){
    return `I will gladly take your thirty bucks.`;
  } 
}

function ternaryCheckCity(city){
  return city === `NYC` ?  `Ok, sounds good.` : `No go.`;
}

function switchOnCharmFromTip(tipAmount){
  switch (tipAmount) {
    case `generous`:
      return `Thank you so much.`;
      // break;
    case `not as generous`:
      return `Thank you.`;
      // break;
    default:
      return `Bye.`;
  }
    
}