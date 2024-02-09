function solution(myString, pat) { 
    //return myString.toLowerCase().indexOf(pat.toLowerCase()) === -1 ? 0 : 1;
    return myString.toLowerCase().includes(pat.toLowerCase()) ? 1 : 0;
}