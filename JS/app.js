let todolist = [{ todo: "clone repo for starter code", status:"complete" }, { todo: "push repo to github", status:"started" }]

let completedtodo = []

for (let item of todolist){
    if (item.status === "complete")
    completedtodo.push(item)

}