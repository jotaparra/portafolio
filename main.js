window.onload = () =>{
document.getElementById('btnSkills').addEventListener('click',()=>{
    document.getElementById('skills').style.display='block';
    document.getElementById('home').style.display='none';
});

document.getElementById('btnHome').addEventListener('click', ()=>{
    document.getElementById('skills').style.display='none';
    document.getElementById('home').style.display='block';
})

document.getElementById('btnWorks').addEventListener('click',()=>{
    document.getElementById('works').style.display='block';
    document.getElementById('home').style.display='none';
    document.getElementById('skills').style.display='none';
});
}

