const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let total = students.reduce((accumlator,currentValue) =>{
    let totalsum = (accumlator + currentValue.score)  
    return totalsum
  
  },0) 
  let result =  total/ students.length
  return result
}

console.log(getAverageStudentScore(students))
 


//console.log(Average)
//getAverageStudentScore(students); // Output: 87.5
