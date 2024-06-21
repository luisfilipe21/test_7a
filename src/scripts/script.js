const getNumber = () => {
    const input = document.getElementById("inputNumber");

    const number = parseInt(input.value, 10);

    const listNumber = document.querySelector(".list");

    listNumber.innerHTML = "";
    
    if(!isNaN(number) && number > 0) {
        for(let i = 0; i < number; i++) {
            const li = document.createElement("li");
            const span = document.createElement("span");
    
            li.className = "listItem";
            span.className = "listNum";
            span.textContent = i+1;
    
            li.appendChild(span);
            listNumber.appendChild(li);
        }
    }

}
document.getElementById("inputNumber").addEventListener("input", getNumber)
