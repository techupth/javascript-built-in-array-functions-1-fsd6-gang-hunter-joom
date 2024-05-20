const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed : true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

//function getCompletedTodo(todos) {
  // Start coding here
//}

//getCompletedTodo(todos);
let todo = []
let getCompletedTodo = todos.map((todolist)=>{
  if(todolist.completed === true){
    return todo.push(todolist)
  }
    
})
console.log(todo)
/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/
