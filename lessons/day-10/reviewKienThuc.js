//data
const teo = {name:"Teo", grades:[9, 8, 6]}; //7,67

const ti = JSON.parse(JSON.stringify(teo));
ti.name = "Ti";
ti.grades =[9,9,9];

const tun = JSON.parse (JSON.stringify(teo));
tun.name = "Tun";
tun.grades = [8,8,8];

//Usage
const {bestStudentName, avgScore} = findBestStudent([teo, ti, tun]);
console.log(`Best student name: ${bestStudentName} - with average score ${avgScore}`);



function findBestStudent(studentList){
    let bestStudent = studentList[0];
    let currentHighestScore = calculateAvgScore(bestStudent);
    for(const student of studentList){
        const avgScore = calculateAvgScore(student);
        if (avgScore > currentHighestScore){
            bestStudent = student;
            currentHighestScore = avgScore;
        }
    }
    return{
        bestStudentName: bestStudent.name,
        avgScore: currentHighestScore
    }
}



function calculateAvgScore({grades}){
    let totalScore = 0;
    for(const grade of grades){
        totalScore += grade;
    }
    return Math.ceil(totalScore/grades.length);
}
