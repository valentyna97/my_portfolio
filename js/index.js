(function () {

document.querySelector('.form button[type=submit]').addEventListener('click',submitForm);
  function submitForm (e){
   e.preventDefault();
    const xhr = new XMLHttpRequest();
     xhr.onreadystatechange = function() {
         if (xhr.readyState === 4 && xhr.status ===200 ){
             document.querySelector('.message-box').innerHTML = ' Hi! Nice to meet you! <br>We will contactyou soon!';
         }else if (xhr.readyState === 4 && xhr.status !== 200){
             document.querySelector('.message-box').innerHTML += 'error!';
         }
     }
     xhr.open('POST', 'login.php', true);
         const form = document.querySelector('.form');
         const data = new FormData(form);
         xhr.send(data);
  }
 $(document).ready(function() {
	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers	: {
			thumbs	: {
				width	: 50,
				height	: 50
			}
		}
	});
});
})();