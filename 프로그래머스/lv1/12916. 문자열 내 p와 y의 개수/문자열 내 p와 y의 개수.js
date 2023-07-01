function solution(s){
    return Array.from(s).filter(a => a.toUpperCase() ==="P").length === Array.from(s).filter(a => a.toUpperCase() === "Y").length;
}