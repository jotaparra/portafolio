window.onload = () =>{
document.getElementById('btnSkills').addEventListener('click',()=>{
    document.getElementById('skills').style.display='block';
    document.getElementById('home').style.display='none';
    document.getElementById('contact').style.display='none';
    document.getElementById('works').style.display='none';
});

document.getElementById('btnHome').addEventListener('click', ()=>{
    document.getElementById('skills').style.display='none';
    document.getElementById('home').style.display='block';
    document.getElementById('works').style.display='none';
    document.getElementById('contact').style.display='none';
});

document.getElementById('btnWorks').addEventListener('click',()=>{
    document.getElementById('portfolio').style.display='block';
    document.getElementById('home').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('contact').style.display='none';
});

document.getElementById('btnContact').addEventListener('click',()=>{
    document.getElementById('portfolio').style.display='none';
    document.getElementById('home').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('contact').style.display='block';
});
}

$(function(){
	$('.galeria .contenedor-imagen').on('click', function(){
		$('#modal').modal;
		var ruta_imagen = ($(this).find('img').attr('src'));
		$('#imagen-modal').attr('src', ruta_imagen);
	});

	$('#modal').on('click', function(){
		$('#modal').modal('hide');
	});
})


