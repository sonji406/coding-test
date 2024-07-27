function solution(arr, queries) {
    let answer = [];

    for (let query of queries) {
        let [s, e, k] = query;
        let minValue = Infinity;
        let found = false;

        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minValue) {
                minValue = arr[i];
                found = true;
            }
        }

        if (found) {
            answer.push(minValue);
        } else {
            answer.push(-1);
        }
    }

    return answer;
}