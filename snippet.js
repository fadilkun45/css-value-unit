const ToggleEm = document.querySelectorAll("#em");
const Renderem = document.querySelector("#em-render");
const DataEM = [`<img src="img/em css.png">`,`<img src="img/em html.png">`,`<img src="img/em result.png">`] 

ToggleEm.forEach(btn => {
    btn.addEventListener('click', function(){
        Renderem.innerHTML = DataEM[this.getAttribute('data-toggle')] 
    })
})

// REM section

const ToggleREM = document.querySelectorAll("#rem");
const RenderREM = document.querySelector("#rem-render");
const DataREM = [`<img src="img/rem css.png">`,`<img src="img/rem html.png">`,`<img src="img/rem result.png">`] 

ToggleREM.forEach(btn => {
    btn.addEventListener('click', function(){
        RenderREM.innerHTML = DataREM[this.getAttribute('data-toggle')] 
    })
})