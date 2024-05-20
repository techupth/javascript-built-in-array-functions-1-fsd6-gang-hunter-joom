const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(total, student) {
  // Start coding here
  return total + student.score;
}
let totalScore = students.reduce(getAverageStudentScore, 0);
let avgScore = totalScore / students.length;
console.log(avgScore);
