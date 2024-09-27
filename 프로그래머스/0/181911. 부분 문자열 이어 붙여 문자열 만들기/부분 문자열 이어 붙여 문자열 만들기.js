/*
현재 코드는 my_strings 배열의 각 문자열에서 지정된 범위의 문자를 하나씩 더하는 방식입니다.
이렇게 하면 인덱스 접근을 여러 번 수행하므로 비효율적입니다.
대신, 부분 문자열을 한 번에 추출하여 answer에 추가하면 성능과 가독성을 모두 개선할 수 있습니다.

function solution(my_strings, parts) {
    let answer = '';
    
    for (i=0; i < my_strings.length; i++) {
        for (j=parts[i][0]; j <= parts[i][1]; j ++) {
            answer += my_strings[i][j];
        }  
    }
    
    return answer;
}

문자열의 특정 범위를 가져올 때 substring 또는 slice 메서드를 사용하는 것이 더 직관적이고 간결합니다.
substring 메서드는 시작 인덱스와 종료 인덱스를 받아 해당 범위의 부분 문자열을 반환합니다.
slice도 동일하게 사용할 수 있습니다.
*/

function solution(my_strings, parts) {
    let answer = '';

    for (let i = 0; i < my_strings.length; i++) {
        answer += my_strings[i].substring(parts[i][0], parts[i][1] + 1);
    }

    return answer;
}
