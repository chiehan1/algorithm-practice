// https://openhome.cc/Gossip/AlgorithmGossip/MathPI.htm

const trialN = process.argv[2] || 50000;

let sumOfOccurrences = 0;

for (let i = 0; i < trialN; i++) {
  sumOfOccurrences += getOccurrence();
}

/*
let trials = getTrials(trialN);

const sumOfOccurrences = trials.reduce((acc, cur) => acc + cur);
*/

const pi = 4 * sumOfOccurrences / trialN;

console.log(pi);

/*
function getTrials(trialN) {
  let trials = [];
  for (let i = 0; i < trialN; i++) {
    trials[i] = getOccurrence();
  }
  return trials;
}
*/

function getOccurrence() {
  const x = Math.random();
  const y = Math.random();
  return x * x + y * y < 1 ? 1 : 0;
}
