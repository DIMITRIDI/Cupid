window.addEventListener('DOMContentLoaded', () => {

	//tabs section typeslight
	const tabs = document.querySelectorAll('.typeslight__tabs-btn'),
		tabsContent = document.querySelectorAll('.typeslight__content'),
		tabsParent = document.querySelector('.typeslight__tabs');

	function hideTabContent() {
		tabsContent.forEach(item => {
			item.classList.add('typeslight__content');
			item.classList.remove('active');
		});

		tabs.forEach(item => {
			item.classList.remove('active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('active');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', (event) => {
		const target = event.target;

		if (target && target.classList.contains('typeslight__tabs-btn')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

});

//form
jQuery(document).ready(function () {

	jQuery('form button').click(function () {
		var form = jQuery(this).closest('form');

		if (form.valid()) {
			form.css('opacity', '.5');
			var actUrl = form.attr('action');

			jQuery.ajax({
				url: actUrl,
				type: 'post',
				dataType: 'html',
				data: form.serialize(),
				success: function (data) {
					form.html(data);
					form.css('opacity', '1');
					form.find('.status').html('форма отправлена успешно');
					//$('#myModal').modal('show') // для бутстрапа
				},
				error: function () {
					form.find('.status').html('серверная ошибка');
				}
			});
		}
	});

});

// rangeSlider header

function rangeSlider(value) {
	document.getElementById('rangeValue').innerHTML = value;
	document.getElementById('headerImg').style.opacity = +value+"%";
}
