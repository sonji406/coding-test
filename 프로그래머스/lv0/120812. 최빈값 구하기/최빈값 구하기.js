function solution(array) {
    const counts = {};
    let maxCount = 0;
    let reault = 0;

    for (const num of array) {
        counts[num] = (counts[num] || 0) + 1;

        if (counts[num] > maxCount) {
            maxCount = counts[num];
            reault = num;
            
        } else if (counts[num] === maxCount) {
            reault = -1;
        }
    }

    return reault;
}