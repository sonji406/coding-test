function solution(k, tangerine) {
    // 1. 각 귤 크기의 빈도를 계산합니다.
    const sizeCount = {};

    tangerine.forEach((size) => {
        sizeCount[size] = (sizeCount[size] || 0) + 1;
    });
    
    // 2. 귤 크기별로 빈도를 내림차순으로 정렬합니다.
    const sizeFrequency = Object.values(sizeCount).sort((a, b) => b - a);
    
    // 3. 빈도가 높은 크기부터 k개의 귤을 선택합니다.
    let total = 0;
    let count = 0;
    
    for (let frequency of sizeFrequency) {
        total += frequency;
        count++;
        
        if (total >= k) {
            break;
        }
    }
    
    // 4. 선택한 귤 크기의 종류 수를 반환합니다.
    return count;
}