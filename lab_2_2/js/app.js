var myNodelist = document.getElementsByTagName("LI");
var i;


var close = document.getElementsByClassName("close");
var i;
for (i=0; i <close.length; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";
    }
}

//создание новых блоков.
function newElement() {
    var li = document.createElement("li");
    li.classList.add("link-task");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check-input");
    checkbox.addEventListener('change', checkTask);
    var inputValue = document.getElementById("myInput");
    var content = document.createElement("p");
    content.classList.add("context");
    content.textContent = inputValue.value;

    
    if (inputValue === ""){
        return alert("Empty input field! Please enter a title for the task.");
    }
    

    
    var buttonClose = document.createElement("button");
    var closeButtonText = document.createTextNode("\u00D7");
    buttonClose.className = "close";
    buttonClose.appendChild(closeButtonText);

    document.getElementById("myUL").appendChild(li);
    myNodelist[i].appendChild(checkbox);
    myNodelist[i].appendChild(content);
    myNodelist[i].appendChild(buttonClose);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    function checkTask({target}){
        let text = target.closest('.link-task').querySelector('.context');
        text.classList.add('checked');
        target.remove();
    }
}
