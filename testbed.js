var flagga = 0 ;
function changeHeading() {
	var rubrik = document.getElementById('rubrik');
	if (flagga == 0){
		rubrik.innerHTML = 'du kliickade'
        flagga = 1;
	}
	else{
		rubrik.innerHTML = 'javaScript';
		flagga = 0;
	}


}

function changeBg() {
	

var tjo =document.getElementById('tjo');
tjo.classList.add('nybg')
}


function changeBg2() {
	

var tjo =document.getElementById('tjo');
tjo.classList.add('nybg2')
}


