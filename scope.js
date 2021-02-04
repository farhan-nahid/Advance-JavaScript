let bonus = 20;

function sum(first, second) {
  let result = first + second + bonus;
  console.log(bonus);
  if (result > 9) {
    let mood = "happy";
    mood = "fishy";
    mood = "funky";
    mood = "cranky";
    console.log(mood);
  }

  const day = "friday";
  console.log(day);
  return result;
}

const output = sum(3, 7);
console.log(bonus);
console.log(output);
