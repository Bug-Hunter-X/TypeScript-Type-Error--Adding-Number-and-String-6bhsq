function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: string): number {
  const parsedB = parseInt(b, 10);
  if (isNaN(parsedB)) {
    return a; // or handle the error appropriately
  }
  return a + parsedB;
}

const result1 = add(1, 2); // Correct
const result2 = addSafe(1, '2'); // Correct, handles string conversion
const result3 = addSafe(1, 'abc'); //Correct, handles non-numeric string