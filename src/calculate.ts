function sum(nums: number[]): number {
  let total = 0;
  nums.forEach(num => {
    total += num;
  })
  return total;
}

const numbers: number[] = [1,2,3,4];
console.log(`The sum of ${numbers} is: `, sum(numbers));