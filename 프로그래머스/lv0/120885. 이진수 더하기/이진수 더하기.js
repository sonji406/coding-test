function solution(bin1, bin2) {
  let maxLength = Math.max(bin1.length, bin2.length);
  let paddedBin1 = bin1.padStart(maxLength, '0');
  let paddedBin2 = bin2.padStart(maxLength, '0');
  let answer = '';
  let carry = '0';

  for (let i = maxLength - 1; i >= 0; i--) {
    let bit1 = paddedBin1[i];
    let bit2 = paddedBin2[i];
    let sum = '';

    if (bit1 === '1' && bit2 === '1') {
      sum = carry === '1' ? '1' : '0';
      carry = '1';
    } else if (bit1 === '0' && bit2 === '0') {
      sum = carry === '1' ? '1' : '0';
      carry = '0';
    } else {
      sum = carry === '1' ? '0' : '1';
    }

    answer = sum + answer;
  }

  if (carry === '1') {
    answer = carry + answer;
  }

  return answer;
}