const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let totalScore = students.reduce((acc,students) => acc + students.score, 0);
  const averageScore = totalScore / students.length;
  return averageScore;
}
const averageScore = getAverageStudentScore(students);
console.log(averageScore); // Output: 87.5
