// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  //score.length를 m만큼 나눈 몫만큼 score를 나눈다
  //나눈만큼의 배열에서 최저점 찾기, 최저점*m으로 상자당 가격책정
  //k는 왜있지
  const eachBox = [];
  const numOfBox = Math.floor(score.length / m);
  //내림차순 정렬하고 m개를 담은 배열 생성,
  //위의 코드를 numOfBox만큼 생성
  const sortedScore = score.sort((a, b) => b - a);
  for (let i = 0; i < numOfBox * m; i += m) {
    eachBox.push(sortedScore.slice(i, i + m));
  }
  //eachBox에 배열안의 배열로 자료들이 담겨있다.
  let sum = 0;
  sum = eachBox.reduce((acc, curr) => acc + Math.min(...curr) * m, 0);
  // return eachBox;
  return sum;
}
