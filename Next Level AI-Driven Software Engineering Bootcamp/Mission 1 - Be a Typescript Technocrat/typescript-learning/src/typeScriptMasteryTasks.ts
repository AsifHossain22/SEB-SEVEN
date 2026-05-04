//* Task 1: The "Optional" Shopping Cart

type CartItem = {
  name: string;
  price: number;
  quantity?: number;
};

function calculateTotal({ price, quantity = 1 }: CartItem) {
  return price * quantity;
}
// Test1
const result1 = calculateTotal({
  name: "মারহাবা, জাভাস্ক্রিপ্টে মারো থাবা",
  price: 500,
  quantity: 2,
});

// Test2
const result2 = calculateTotal({
  name: "Programming TypeScript",
  price: 1000,
  quantity: 2,
});

console.log(`Test 1: ${result1}, Test 2: ${result2}`);
