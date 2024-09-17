import React, { useState } from "react";

import rigoImage from "../../img/rigo-baby.jpg";

const Home = () => {

	const [inputValue, setInputValue] = useState("");
	const [todos, setTodos] = useState([]);

	return (
		<div>

			<h1>to-do's</h1>
			<div className="shadow">
				<ul>
					<li>
						<input	type="text" 
								onChange={(e) => setInputValue(e.target.value)} 
								value={inputValue}
								onKeyDown={(e) => {
									if (e.key === "Enter") {
										setTodos(todos.concat(inputValue));
										setInputValue("");
									}
								}}
								placeholder="What needs to be done?">
						</input>
					</li>

					{todos.map((item, index) => (
						<li className="inputSize">
							{item} <i className="fa-solid fa-x" onClick={() => setTodos(todos.filter((currentItem, currentIndex) => index != currentIndex))}></i>
						</li>
					))} 
					
				</ul>

				<div className="footer">{todos.length} item left</div>
			</div>

			<button className="button" onClick={() => setTodos([])}>Delete all to-do's</button>
		</div>
	);
};

export default Home;
