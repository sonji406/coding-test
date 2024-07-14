function solution(name) {    
    const nameLength = name.length;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let answer = 0;
    let minMove = nameLength - 1;
    
    for (i = 0; i < nameLength; i++) {
        const charIdx = alphabet.indexOf(name[i]);
        const upMove = charIdx;
        const downMove = alphabet.length - charIdx;
        answer += Math.min(upMove, downMove);
        
        let nextIdx = i+1;
        while (nextIdx < nameLength && name[nextIdx] === 'A') {
            nextIdx++;
        }
        
        minMove = Math.min(minMove, i + nameLength - nextIdx + Math.min(i, nameLength - nextIdx));
    }    
    
    return answer + minMove;
}