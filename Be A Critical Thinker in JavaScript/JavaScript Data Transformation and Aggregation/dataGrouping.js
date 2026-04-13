//* GroupingAndAggregatingData

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

const count = surveyResponses.reduce((table, response) => {
  //   console.log(table, ":", response);
  //   if (table[response]) {
  //     table[response] = table[response] + 1;
  //   } else {
  //     table[response] = 1;
  //   }

  table[response] = (table[response] || 0) + 1;

  return table;
}, {});
console.log(count);

//? Output
// { A: 5, C: 3, B: 5, D: 1 }
