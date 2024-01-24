const text = document.getElementById("text");
const submit = document.getElementById("submit");

submit.addEventListener("click", function() {
    if (text.value === '') {
        alert("You must write something!");
      } else {
        document.getElementById("textshow").innerHTML += `<div>
        <li>${text.value}<button type="submit" id="delete">X</button></li>
        
        </div>`;

        
      

      let current_task = document.getElementById("delete");
        for (let index = 0; index < current_task.length; index++) {
            current_task[index].onclcik = function(){
                this.parentNode.remove();

            }
            
        }
    }
  }
)

   

   
  