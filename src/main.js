function Main() {
	/*fetch("https://jsonplaceholder.typicode.com/todos")
		.then((res) => {
			console.log("resolved", res);
			return res.json();
		})
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log("rejected", err);
		});*/

	/*const getTodos = async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/todos/");
		const data = await response.json();
		return data;
	};

	getTodos().then((data) => console.log("resolved", data));*/

	return (
		<div className="to-do-app">
			<div className="header">
				<h1>To-Do-List</h1>
				<form id="search-bar">
					<input type="text" placeholder="Search task" />
				</form>
			</div>
			<div className="to-do-list">
				<ul>
					<li>
						<p>title der Aufgabe</p>
						<button>Delete</button>
						<button>Done</button>
					</li>
				</ul>
			</div>
			<form id="add-task">
				<input type="text" placeholder="Add a task.." />
				<button>Add</button>
			</form>
		</div>
	);
}

export default Main;
