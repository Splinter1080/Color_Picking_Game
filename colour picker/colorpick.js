var num_of_squares = 6 ;
var colors = generateRandomColors(num_of_squares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var rgb_show = document.getElementById("rgb_show");
var h1 = document.getElementById("header");
var mssgDisplay = document.getElementById("mssgDisplay");
var reset = document.querySelector(".reset");
var easyBtn = document.querySelector(".easyBtn");
var hardBtn = document.querySelector(".hardBtn");

rgb_show.textContent = pickedColor;

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	num_of_squares = 3 ;
	colors = generateRandomColors(num_of_squares);
	pickedColor = pickColor();
	rgb_show.textContent = pickedColor;
	for(var i= 0 ; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
	else
		squares[i].style.display = "none";
	}	
	h1.style.backgroundColor = "steelblue";
});

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	num_of_squares = 6 ;
	colors = generateRandomColors(num_of_squares);
	pickedColor = pickColor();
	rgb_show.textContent = pickedColor;
	for(var i= 0 ; i < squares.length; i++){
		
		squares[i].style.display = "block";
		squares[i].style.background = colors[i];
	}	
	h1.style.backgroundColor = "steelblue";
});

for(var i= 0 ; i < squares.length; i++)
{
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click" , function(){
		if(this.style.backgroundColor == pickedColor){
			
			var clickedColor = this.style.background ;
			mssgDisplay.textContent = "You Got it right";
			reset.textContent = "Play Again";
			changeColors( pickedColor);
			h1.style.backgroundColor = pickedColor;
		}
		else
		{
			//alert("wrong");
			this.style.backgroundColor = "rgb(0 , 0 , 0)" ;
			mssgDisplay.textContent = "Try Again!";
		
		}
	});
}

reset.addEventListener("click", function(){;
    colors = generateRandomColors(6);
	pickedColor = pickColor();
	rgb_show.textContent = pickedColor;
	for(var i= 0 ; i < squares.length; i++){
	squares[i].style.background = colors[i];
	}	
	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Color";
	mssgDisplay.textContent = " ";
});

function changeColors(color){
	for(var i = 0 ; i < squares.length ; i++)
	{
		squares[i].style.backgroundColor = color ;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}



function generateRandomColors(num){
	var arr = [];

	for(var i = 0 ; i < num ; i++)
	{
		arr.push(randomColor());
	}

	return arr ;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}

