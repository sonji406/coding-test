function solution(angle) {
    if (angle <= 90) {
        return angle === 90 ? 2 : 1;
    }
    if (90 < angle) {
        return angle === 180 ? 4 : 3;
    } else { return; }
}