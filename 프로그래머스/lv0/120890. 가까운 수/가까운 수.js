function solution(array, n) {
  array.sort((a, b) => {
    const diffA = Math.abs(a - n);
    const diffB = Math.abs(b - n);

    if (diffA === diffB) {
      return a - b; // 차이값이 같은 경우 더 작은 숫자를 반환하기 위해 오름차순 정렬
    } else {
      return diffA - diffB; // 차이값이 다른 경우 차이값을 기준으로 오름차순 정렬
    }
  });

  return array[0];
}
