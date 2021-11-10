

window.addEventListener("scroll",function(){
    if(window.pageYOffset > 0){
        this.document.getElementById('navbar').classList.add('version2');
        this.document.getElementById('navbar').classList.remove('navbar');
    }
    else{
        this.document.getElementById('navbar').classList.remove('version2');;
        this.document.getElementById('navbar').classList.add('navbar');
    }
})
