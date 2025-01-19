This repository demonstrates a common type error in TypeScript that arises when performing arithmetic operations with incompatible types (number and string). The `bug.ts` file shows the code causing the error, while `bugSolution.ts` illustrates a corrected version.

**Error:** TypeScript's type system prevents you from directly adding a number and a string.  This is to maintain type safety and prevent runtime errors.

**Solution:** Before performing addition, convert the string to a number using `parseInt()` or `Number()`.