// Put your code here

const names = [
   "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

console.log("All Place Names");

for (const name of names) {
  console.log(name);
}

console.log("")
theNames = names.filter(n => n.startsWith("The"));

console.log("'The' Place Names")
for (const name of theNames) {
  console.log(name);
}