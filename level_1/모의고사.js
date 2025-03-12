function solution(answers) {
    let eachPassed=[0,0,0];
    const studentAnswers=[
        [1,2,3,4,5],
        [2,1,2,3,2,4,2,5],
        [3,3,1,1,2,2,4,4,5,5]
    ]
    answers.forEach((sol,index)=>{
        studentAnswers.forEach((answer,i)=>{
            if(sol===answer[index%answer.length]){
                eachPassed[i]++;

            }
        })
    })
    const maxScore=Math.max(...eachPassed);
    return eachPassed.map((score,index)=>score===maxScore?index+1:null).filter((isNull)=>isNull!==null);
}
