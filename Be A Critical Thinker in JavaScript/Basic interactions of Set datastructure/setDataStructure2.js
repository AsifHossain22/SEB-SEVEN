// ListOfUniqueUsers
const mezba = { userName: "Mezba" };
const mizan = { userName: "Mizan" };
const tanmoy = { userName: "Tanmoy" };

const set = new Set();

set.add(mizan);
set.add(mezba);
set.add(tanmoy);
set.add(mizan); // DuplicateWillNotBeAddedBySet

console.log(set);
console.log(set.size); // SizeOfTheSet
