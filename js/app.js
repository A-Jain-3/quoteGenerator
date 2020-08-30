//immediate invoked function expression
(function() {

	const quotes = [
	{
		quote: "No pain, no gain.",
		author: "Ben Franklin"
	},
	{
		quote: "When life gives you lemons, make lemonade.",
		author: "Elbert Hubbard"
	},
	{
		quote: "Winners never quit and quitters never win.",
		author: "Vince Lombardi"
	},
	{
		quote: "An unexamined life is not worth living.",
		author: "Socrates"
	},
	{
		quote: "Like has no limitations, except the ones you make.",
		author: "Les Brown"
	},
	{
		quote: "Stop dreaming about you bucket list and start living it.",
		author: "Annette White"
	},
	{
		quote: "Be yourself, everyone else is already taken.",
		author: "Oscar Wilde"
	},
	{
		quote: "You only live once, but if you do it right, once is enough.",
		author: "Mae West"
	},
	{
		quote: "Be the change you wish to see in the world.",
		author: "Mahatma Gandhi"
	},
	{
		quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
		author: "Maya Angelou"
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