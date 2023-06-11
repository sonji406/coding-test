function solution(my_string) {
    let currentNumber = ""; // 현재 추출 중인 자연수
    let sum = 0; // 자연수들의 합

    for (let i = 0; i < my_string.length; i++) {
        let char = my_string[i];

        // 숫자인 경우
        if (char >= "0" && char <= "9") {
            currentNumber += char;
        } 
        // 숫자가 아니면서 현재 추출 중인 자연수가 있는 경우
        else if (currentNumber !== "") {
            sum += parseInt(currentNumber);
            currentNumber = "";
        }
    }

    // 문자열이 끝났지만 현재 추출 중인 자연수가 있는 경우
    if (currentNumber !== "") {
        sum += parseInt(currentNumber);
    }

    return sum;
}


