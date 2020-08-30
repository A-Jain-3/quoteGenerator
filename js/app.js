//immediate invoked function expression
(function() {

	const quotes = [
	{
		quote:
		"Eat bitter, taste sweet.",
		author: "Life"
	},
	{
		quote:
		"When life gives you lemons, make lemonade. But don't forget to add water and sugar.",
		author: "Grumpy Cat"
	},
	{
		quote:
		"Win is never quit and quit is never win.",
		author: "Arabella"
	}
	];

	const btn = document.getElementById("generate-btn");

	btn.addEventListener("click", function() {
		let random = Math.floor(Math.random() * quotes.length);
		console.log(random);
		document.getElementById("quote").textContent = quotes[random].quote;
		document.querySelector(".author").textContent = quotes[random].author;
	});

}) ();