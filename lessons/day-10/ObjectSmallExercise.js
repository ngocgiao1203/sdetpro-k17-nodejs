//data
const teo = {name:"Teo", grades:[9, 8, 6]}; //7,67

const ti = JSON.parse(JSON.stringify(teo));
ti.name = "Ti";
ti.grades = [7, 9, 9]; //8.33

const tun = JSON.parse(JSON.stringify(teo));
tun.name = "Tun";
tun.grades = [6, 7, 8]; //7

//Usage
const{bestStudentName, avgScore} = findBestStudent([teo, ti, tun]);
console.log(`Best student is: ${bestStudentName} with average score: ${avgScore}`);

//Controller
function findBestStudent(studentList){
    let bestStudent = studentList[0];
    let currentHighestScore = calculateAvgScore(bestStudent);

    for(const student of studentList){
        const avgScore = calculateAvgScore(student);
        if(avgScore > currentHighestScore){
            bestStudent = student;
            currentHighestScore = avgScore;
        }
    }
    return {
        bestStudentName: bestStudent.name,
        avgScore: currentHighestScore
    }
}

//support function - DRY
function calculateAvgScore({grades}){ //Ý nghĩa của cặp {} -> anh đưa tôi 1 object, nhưng tôi sẽ destructure ra, tôi lấy "grades" thôi
    let totalScore = 0;
    for(const grade of grades){
        // totalScore += grade; 
        totalScore = totalScore + grade;
    }
    return  Math.ceil(totalScore / grades.length);
}
// MVC - Controller 