function init() {

	$('.item').draggable({
		helper: "clone",
		containment: 'body',
		cursor: "move",
		zIndex: 100,
	});

	$('#addNewCard').click(function () {
		$('#dragCards').append(`
			<div class="drag-card">
				<button class="close fs-5 fw-bold">x</button>
			</div>
		`);

		$('.close').click(function (event) {
			event.target.parentElement.remove();
		})

		$(".drag-card").resizable().draggable({
			containment: '#dragCards',
			cursor: "move",
			zIndex: 100,

			start: function() {
				$(this).addClass("hovered");
			},
			stop: function() {
				$(this).removeClass("hovered");
			}
		});

		$(".drag-card").droppable({
			drop: function(event, ui) {
				console.log()
				if (ui.draggable[0].parentElement.getAttribute('class') == "drag-item p-1"){
					if(event.target.lastElementChild.tagName == "DIV"){
						card = event.target;
						img = ui.draggable[0].cloneNode(true);
						card.appendChild(img);
					} else {
						alert("Iltimos, Elementni bo'sh bo'lgan CARD ga tashlang yoki Yangi CARD yaratib keyin tashlang")
					}

				}
			}
		});

	});
}

$(document).ready(init);
