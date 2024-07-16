function solution(n, lost, reserve) {    
    let answer = 0;
    const students = Array(n).fill(1);
    
    for (let element of lost) students[element - 1]--;
    for (let element of reserve) students[element - 1]++;
    
    for (let i = 0; i < n; i++) {
        if (students[i] === 0) {
            if (i > 0 && students[i - 1] === 2) {
                students[i]++;
                students[i - 1]--;
            } else if (i < n - 1 && students[i + 1] === 2) {
                students[i]++;
                students[i + 1]--;
            }
        }
    }

    return students.filter(s => s > 0).length;
}