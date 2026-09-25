import readline from "readline"; 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const names = ["rustom", "diyor", "alisher", "bektsh"];

rl.question("Enter index,character: ", (input) => {
  const [i, position] = input.split(",").map(Number);
const name = names[i];

const reversed = name.split("").reverse().join("");
  const name = names[i];

  const result =
    name.slice(0, position) +
    name[position].toUpperCase() +
    name.slice(position + 1);

  console.log(result);

  rl.close();
});
/* const names = ["ani", "balu", "charu"];

for (let i = 0; i < names.length; i++) {
names[i] = names[i][0].toUpperCase()+names[i].slice(1);
}

console.log(names); */
//

/* let sum=0;
for(let i=0;i<=8;i++){
    sum+=1/2;
}
console.log(sum); */
// npx tsx src/components/ForloopPractice.ts
