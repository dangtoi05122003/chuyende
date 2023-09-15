//bài 1
  /*
  
  function countChangesToPalindrome(S) {
    let count = 0;
    const length = S.length;
  
    for (let i = 0; i < Math.floor(length / 2); i++) {
      if (S[i] !== S[length - 1 - i]) {
        count++;
      }
    }
  
    return count;
  }
  
  // Đọc xâu S từ người dùng
  const S = prompt("Nhập xâu S:");
  
  const changes = countChangesToPalindrome(S);
  console.log(`Số lượng ký tự cần thay đổi: ${changes}`);
  */

//bài 2
/*
function countBounces(N, X, L) {
  let position = 0;
  let bounces = 0;

  for (let i = 0; i <= N; i++) {
    position += (L[i] - 1);
    if (position >= X) {
      break;
    }
    bounces++;
  }

  return bounces;
}

// Đọc dữ liệu đầu vào từ stdin
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Nhập N và X: ', (input) => {
  const [N, X] = input.split(' ').map(Number);

  rl.question('Nhập dãy số L: ', (input) => {
    const L = input.split(' ').map(Number);

    const bounces = countBounces(N, X, L);
    console.log(`Số lần nẩy của bóng trước khi vượt qua tọa độ X: ${bounces}`);

    rl.close();
  });
});
*/

// câu hỏi1

function checkDuplicateValues(array) {
  const seen = new Set();

  for (let i = 0; i < array.length; i++) {
    if (seen.has(array[i])) {
      return true;
    }
    seen.add(array[i]);
  }

  return false;
}

// Example usage:
const array1 = [1, 2, 3, 1, 4];
console.log(checkDuplicateValues(array1)); // false

const array2 = [1, 2, 3, 4];
console.log(checkDuplicateValues(array2)); // true