	var slide = document.querySelector('#from');

	var contacts = document.querySelector('address').children;
	console.log(contacts);

	var contArray = [];
	for( var i = 0; i < contacts.length; i++) {
		contArray.push(contacts[i])
	}
	console.log(contArray);
	var modContArr = contArray.map(getCoords);

	function deformator(item) {
		return Math.round(item.top)
	}

	modContArr = modContArr.map(deformator);
	console.log(modContArr);








	var copy = Math.round(getCoords(slide).top);

	function getCoords(elem) { // кроме IE8-
			var box = elem.getBoundingClientRect();

		return {
		    top: box.top + pageYOffset,
		    left: box.left + pageXOffset
		}
 	 };
	////////////////////////////////////////////////

	window.addEventListener("scroll", handler);

	function handler() {
		var windowHeight = document.documentElement.scrollTop + window.innerHeight; //
		var coords= document.querySelector(".windowHeight ");						//	
		coords.innerHTML = windowHeight;											// Скролл Window
		console.log(coords.textContent);											//
		
		var ElemTop = document.querySelector(".coordsElem");
		ElemTop.innerHTML = copy;
		if(windowHeight > copy) {
			slide.setAttribute("class", "from_leftside" );
		}
		/*
		function getHTML(item) {
			return item.innerHTML = contacts[item]
		}
		var loop = contArray.map(getHTML);
		console.log(loop);
		*/
	}

/*

	

	
	
	/////////////////////////////////////////////////////
	var winHgt= document.querySelector(".windowHeight ");
	console.log(winHgt);
	winHgt.textContent = windowHeight;

	*/