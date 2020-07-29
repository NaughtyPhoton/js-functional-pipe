function pipe(...steps) {
  return function runSteps() {
    let result;
    for (const step of steps) {
      result = step(result);
    }
    return result;
  }
}
function getDate() {
  return '05/10/20';
}

function formatDate(date) {
  return 'August';
}

function createLabel(formatted) {
  return 'today!';
}

let label = pipe(
  getDate,
  formatDate,
  createLabel
)();

console.log(label);