// Get the canvas node and the drawing context
const canvas = document.getElementById('canvasMatrix');
const ctx = canvas.getContext('2d');

// set the width and height of the canvas
const w = canvas.width = document.body.offsetWidth;
const h = canvas.height = document.body.offsetHeight;

// draw a black rectangle of width and height same as that of the canvas
ctx.fillStyle = '#000';
ctx.fillRect(0, 0, w, h);

const cols = Math.floor(w / 20) + 1;
const ypos = Array(cols).fill(0);

function matrix () {
	// Draw a semitransparent black rectangle on top of previous drawing
	ctx.fillStyle = '#0001';
	ctx.fillRect(0, 0, w, h);

	// Set color to green and font to 15pt monospace in the drawing context
	ctx.fillStyle = '#0f0';
	ctx.font = '20pt monospace';

	// for each column put a random character at the end
	ypos.forEach((y, ind) => {
		// generate a random character
		const text = String.fromCharCode(Math.random() * 122);

		// x coordinate of the column, y coordinate is already given
		const x = ind * 20;
		// render the character at (x, y)
		ctx.fillText(text, x, y);

		// randomly reset the end of the column if it's at least 100px high
		if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
		// otherwise just move the y coordinate for the column 20px down,
		else ypos[ind] = y + 20;
	});
}

// render the animation at 20 FPS.
setInterval(matrix, 50);




/*Pulsaciones*/
const imagen = document.querySelector("#imagen");
                setInterval(function () {
                imagen.classList.toggle("show");
                }, 3000);




/*Texto para encriptar o descencriptar*/
document.getElementById("mensaje").addEventListener("click", function() {
	if (this.value == "Ingrese el texto aquí") {
		this.value = "";
	}
	});



	const images = document.querySelectorAll("#image-container img");
	const button = document.querySelector("button");
	let currentIndex = 0;
	
	setInterval(() => {
		images[currentIndex].style.display = "none";
		currentIndex = (currentIndex + 1) % images.length;
		images[currentIndex].style.display = "block";
	  }, 2000);


	  const mensaje = document.getElementById("mensaje");
	  const encriptador = document.getElementById("encriptador");
	  const desencriptador = document.getElementById("desencriptador");
	  const output = document.getElementById("output");
	  const imageContainer = document.getElementById("image-container");
	  
	  encriptador.addEventListener("click", function() {
		const encrypted = encrypt(mensaje.value);
		output.innerText = encrypted;
		imageContainer.style.opacity = 0;
	  });
	  
	  desencriptador.addEventListener("click", function() {
		const decrypted = decrypt(mensaje.value);
		output.innerText = decrypted;
		imageContainer.style.opacity = 0;
	  });
	  





	  function encrypt(word) {
		let encrypted = "";
		for (let i = 0; i < word.length; i++) {
		  switch (word[i]) {
			case "e":
			  encrypted += "enter";
			  break;
			case "i":
			  encrypted += "imes";
			  break;
			case "a":
			  encrypted += "ai";
			  break;
			case "o":
			  encrypted += "ober";
			  break;
			case "u":
			  encrypted += "ufat";
			  break;
			default:
			  encrypted += word[i];
			  break;
		  }
		}
		return encrypted;
	  }
	  
	  function decrypt(str) {
		return str.replace(/enter/g, 'e')
				  .replace(/imes/g, 'i')
				  .replace(/ai/g, 'a')
				  .replace(/ober/g, 'o')
				  .replace(/ufat/g, 'u');
	  }
	  












	  