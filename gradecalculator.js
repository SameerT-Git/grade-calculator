function calculateTotal(marks){
    return marks.reduce((total, mark) => total + mark, 0)
}

function calculatePercentage(total, totalsubject){
    return total/totalsubject;
}

function calculateGrade(percentage){
    if (percentage >= 80){
        return "A";
    } else if (percentage >= 70){
        return "B"
    } else if (percentage >= 60){
        return "C"
    } else if(percentage >= 50){
        return "D";
    } else if (percentage >= 40){
        return "E";
    } else {
        return "Fail"
    }
}

function checkResult(percentage){
    if (percentage >= 40){
        return "Pass";
    } else {
        return "Fail";
    }
}

function studentReport(name, marks){
    const total = calculateTotal(marks);
    const percentage = calculatePercentage(total, marks.length);
    const grade = calculateGrade(percentage);
    const result = checkResult(percentage);
    
    return {
        name : name,
        total : total,
        percentage: percentage,
        grade : grade,
        result : result
    };
}

const form = document.getElementById('gradeForm');

form.addEventListener("submit", function(event){
    event.preventDefault();

    const studentName = document.querySelector("#studentName").value

    const marks = [
        Number(document.querySelector("#english").value),
        Number(document.querySelector("#math").value),
        Number(document.querySelector("#science").value),
        Number(document.querySelector("#computer").value),
        Number(document.querySelector("#management").value)
    ]

    const report = studentReport(
        studentName,
        marks
    );

    document.querySelector("#result").innerHTML = `
    <div>
    <h2>Student Result</h2>
    <p><strong>Name:</strong> ${report.name}</p>
    <p><strong>Total:</strong> ${report.total} / 500</p>
    <p><strong>Percentage:</strong> ${report.percentage}%</p>
    <p><strong>Grade:</strong> ${report.grade}</p>
    <p><strong>Result:</strong> ${report.result}</p>
    </div>
    `;
});

