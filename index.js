// var listcontains =['Need to prepare the content for article','Work on the code changes'];
// let finalvalue ="";
// const connect = document.getElementById("listvalues");
// const toAdd = document.getElementById("add");
// const toRemove = document.getElementById("remove");
// function listall(){
//     for(let i =0; i<listcontains.length;i++)
//     {
//        finalvalue = finalvalue + listcontains[i] + "<br>";
//     }

// connect.innerHTML= finalvalue;

// }

// function toAddlistitem(tasktoadd){
//     listcontains.push(tasktoadd);
// }
// function toRemovelistitem(indextoRemove){
//     listcontains.splice(indextoRemove, indextoRemove+1);
// }
// function main(){
//     listall();
//     toAdd.addEventListener("click", () => 
//     {
//         var task = window.prompt("Enter new task... ");
//         toAddlistitem(task);
//         listall();

//     });
//     toRemove.onclick =  function()
//     {
//         var index = window.prompt("Enter the index of completed task ....");
//         toRemovelistitem(index);
//         listall();
//     }
// }

// main();

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
