const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

//function getTodoTopics(todos) {
  // Start coding here
//}
//console.log(getTodoTopics(todos));

let topic = todos.map((todo)=>{
	return todo.topic
})
console.log(topic)
/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/
