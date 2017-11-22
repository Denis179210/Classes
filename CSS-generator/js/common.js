window.onload = function () {
	var buttonAdd = document.querySelector(".add_link"),
		input = document.querySelector(".input"),
		links = document.querySelector(".links");

	/*buttonAdd.addEventListener("click", function() {
		if(input.value == "" || input.value == /^\W/) return;
		var newLink = document.createElement("li");
		newLink.innerHTML = `<a href='${input.value}'>` + input.value + "</a>";
		links.appendChild(newLink);
		localStorage[input.value] = newLink.innerHTML;
		input.value = "";
	});*/
	function checkRadio() {
		var radiogroup = document.querySelector(".radiogroup");
		var radioBTNs = radiogroup.querySelectorAll("[type=radio]");
		console.log(radioBTNs);
		for( var i = 0; i < radioBTNs.length; i++ ) {
			if( radioBTNs[i].checked) alert(`checked ${radioBTNs[i].value} element`);
		}
	}
	var checking = document.querySelector(".checking");
		checking.addEventListener("click", checkRadio);

	var select = document.querySelector(".select");
		select.addEventListener("change", function() {
			alert(select.options[select.selectedIndex].text);
		})

	var range = document.querySelector(".range > input");
	var rangeAfter = document.querySelector(".value");
	var value = range.value;
	range.addEventListener("input", function() {
		rangeAfter.textContent = this.value;
		rangeAfter.style.width = this.value + "px";
	});
	/////////////////////////////






	(function() {
		var radiusChoiser = document.querySelector(".radius"),
			rangePanel = radiusChoiser.querySelectorAll(".range-panel"),
			degVal = radiusChoiser.querySelectorAll(".screens [type=text]"),
			app = radiusChoiser.querySelector(".applied"),
			prcnt = radiusChoiser.querySelector("[value=percent]"),
			px = radiusChoiser.querySelector("[value=px]"),
			angles = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],	
			unit,
			colorSetting = radiusChoiser.querySelectorAll(".controller"),
			colorOut = radiusChoiser.querySelectorAll(".colorOut"),
			RGBAresult = radiusChoiser.querySelector(".RGBAresult");
			
			app.style.backgroundColor = RGBAresult.value = `rgba(${colorSetting[0].value}, ${colorSetting[1].value}, ${colorSetting[2].value}, ${colorSetting[3].value})`;
			for (var i = 0; i < colorOut.length; i++) {
				colorOut[i].value = colorSetting[i].value;
			}


			prcnt.addEventListener("change", function() {
				if(this.checked) 
					unit = "%";
				for (var i = 0; i < rangePanel.length; i++) {
					(function(i) {
						app.style[angles[i]] = 0 + `${unit}`;
						rangePanel[i].disabled = false;
						rangePanel[i].min = 0;
						rangePanel[i].max = 100;
						rangePanel[i].value = 0;
						degVal[i].value = 0;
					}(i));
				}
			});
			px.addEventListener("change", function() {
				if(this.checked) 
					unit = this.value;
				for (var i = 0; i < rangePanel.length; i++) {
					(function(i) {
						app.style[angles[i]] = 0 + `${unit}`;
						rangePanel[i].min = 0;
						rangePanel[i].max = 300;
						rangePanel[i].disabled = false;
						rangePanel[i].value = 0;
						degVal[i].value = 0;	
					}(i));
				}
			})

			for (var i = 0; i < rangePanel.length; i++) {

				(function(i) {
					rangePanel[i].oninput = function() {
						degVal[i].value = app.style[angles[i]] = this.value + `${unit}`;
					}			
				}(i));
			}

			for (var i = 0; i < degVal.length; i++) {
				(function(i) {
					degVal[i].oninput = function() {
						app.style[angles[i]] = this.value + `${unit}`;
					}			
				}(i));
			}


			for (var i = 0; i < colorSetting.length; i++) {
				(function(i) {
					colorSetting[i].oninput = function() {
						colorOut[i].value = this.value;
							app.style.backgroundColor= RGBAresult.value = `rgba(${colorOut[0].value}, ${colorOut[1].value}, ${colorOut[2].value}, ${colorOut[3].value})`;
					}			
				}(i));
			}






		var widthSetter = document.querySelector(".widthSetter"),
			outWidth = document.querySelector(".outWidth");

			widthSetter.addEventListener("input", function() {
				outWidth.value = widthSetter.value + "px";
				app.style.width = widthSetter.value + "px"; 
			});
		var heightSetter = document.querySelector(".heightSetter"),
			outHeight = document.querySelector(".outHeight");

			heightSetter.addEventListener("input", function() {
				outHeight.value = heightSetter.value + "px";
				app.style.height = heightSetter.value + "px"; 
			});				
			
	}());





















}