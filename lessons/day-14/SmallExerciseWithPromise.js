//Data
const todo1Endpoint = "https://jsonplaceholder.typicode.com/todos/1"

//Usage
test (todo1Endpoint);

//Logic - From controllers
function test(url){
  fetch(url)
      .then(getResponse)
      .then(validateResponse)
}

//Support functions
function getResponse(response){
	return response.json();
}

function validateResponse(todo1Object){
	if(todo1Object.completed){	//truy cập property `completed`
		console.log('Task completed!');
	}else{
		console.log('Task is In-progress!');	
}
}