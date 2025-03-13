/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week3#exercise-6-total-cost-is

You want to buy a couple of things from the supermarket to prepare for a party.
After scanning all the items the cashier wants to give you the total price, but
the machine is broken! Let's write her a function that does it for her
instead!

1. Create an object named `cartForParty` with five properties. Each property
   should be a grocery item (like `beers` or `chips`) and hold a number value
   (like `1.75` or `0.99`).

2. Complete the function called `calculateTotalPrice`.

   - It takes one parameter: an object that contains properties that only contain
     number values.
   - Loop through the object and add all the number values together.
   - Return a string: "Total: €`amount`".

3. Complete the unit test functions and verify that all is working as expected.
-----------------------------------------------------------------------------*/
const cartForParty = {
  avocado: 1.75,
  almonds: 1.5,
  blueberries: 2.25,
  salmon: 3.5,
  spinach: 1.9,
};

function calculateTotalPrice(cartForParty) {
  let total = 0;

  for (let item in cartForParty) {
    total += cartForParty[item];
  }
  return `Total: €${total.toFixed(2)}`;
}

// ! Test functions (plain vanilla JavaScript)
function test1() {
  console.assert('\nTest 1: calculateTotalPrice should take one parameter');
  console.assert(
    calculateTotalPrice.length === 1,
    'Test 1 failed: The function should take one parameter'
  );
}

function test2() {
  console.assert('\nTest 2: return correct output when passed cartForParty');

  const expected = 'Total: €10.90';
  const actual = calculateTotalPrice(cartForParty);

  console.assert(
    expected === actual,
    `Test 2 failed: Expected "${expected}", but got "${actual}"`
  );
}

function test() {
  test1();
  test2();
}

test();
