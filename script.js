function changeMarks(courseId) {
            let courseIndex = courseId.replace('course', '');
            let marks = document.getElementById(`score${courseIndex}`);
            let gradePointElem = document.getElementById(`gradePoint${courseIndex}`);
            let gradeElem = document.getElementById(`grade${courseIndex}`);

            if (marks.value !== "" && Number(marks.value) >= 0 && Number(marks.value) <= 100) {
                let m = Number(marks.value);
                let grade = findGrade(m);
                let gradePoint = findGradePoint(m);
                gradePointElem.innerHTML = gradePoint;
                gradeElem.innerHTML = grade;
            } else {
                alert("Please Enter Marks between 0 to 100");
                marks.value = "";
                gradePointElem.innerHTML = "-";
                gradeElem.innerHTML = "-";
            }
        }

        function calculateGrade() {
            let gpa = "";
            let sum = 0;
            let totalCreditHours = 0;
            let count = 0;

            for (let i = 1; i <= 6; i++) {
                let courseId = `course${i}`;
                let course = document.getElementById(courseId);
                let marks = Number(course.querySelector(`#score${i}`).value);

                if (!isNaN(marks) && marks !== "") {
                    let creditHour = Number(course.querySelector(`#creditHour${i}`).value);
                    sum += findGradePoint(marks) * creditHour;
                    totalCreditHours += creditHour;
                    count++;
                }
            }

            if (count > 0) {
                gpa = sum / totalCreditHours;
                document.getElementById('gpa').innerHTML = `GPA: ${gpa.toFixed(2)}`;
            } else {
                document.getElementById('gpa').innerHTML = "GPA: -";
            }
        }

        function findGrade(m) {
            if (m >= 90) {
                return 'A+';
            } else if (m >= 85) {
                return 'A';
            } else if (m >= 80) {
                return 'A-';
            } else if (m >= 75) {
                return 'B+';
            } else if (m >= 70) {
                return 'B';
            } else if (m >= 65) {
                return 'B-';
            } else if (m >= 61) {
                return 'C+';
            } else if (m >= 58) {
                return 'C';
            } else if (m >= 55) {
                return 'D+';
            } else if (m >= 50) {
                return 'D';
            } else {
                return 'F';
            }
        }

        function findGradePoint(m) {
            let gradePointList = {
                "A+": 4.00,
                "A": 4.00,
                "A-": 3.70,
                "B+": 3.5,
                "B": 3.00,
                "B-": 2.70,
                "C+": 2.30,
                "C": 2.00,
                "C-": 1.70,
                "D": 1.00,
                "D+": 1.20,
                "F": 0.00
            };
            let grade = findGrade(m);
            return gradePointList[grade];
        }

