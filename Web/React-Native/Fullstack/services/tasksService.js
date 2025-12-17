const URL_BASE = "https://todoapp-c75c6-default-rtdb.firebaseio.com/tasks/";

async function getTasks() {
  const response = await fetch(URL_BASE + ".json");
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const data = await response.json();
  if (!data) return [];
  // Firebase returns an object keyed by id. Convert to array.
  return Object.keys(data).map((id) => ({ id, ...data[id] }));
}

async function addTask(task) {
  // task: { text: string, done: boolean }
  const response = await fetch(URL_BASE + ".json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const result = await response.json();
  // Firebase returns { name: "-Mk..." }
  return { id: result.name, ...task };
}

async function deleteTask(id) {
  const response = await fetch(URL_BASE + id + ".json", { method: "DELETE" });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return true;
}

export default { getTasks, addTask, deleteTask };
        
        
        const urlBase="https://todoapp-c75c6-default-rtdb.firebaseio.com/tasks/";

        const btn = document.querySelector("#add");
        if (btn) {
            btn.addEventListener("click", () => {
                const task = document.getElementById("taskInput").value;
                alert(task);

                const newtask = {
                    text: task,
                    done: false
                };

                fetch(urlBase + ".json", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newtask)
                })
                .then(resp => resp.json())
                .then(ris => console.log(ris))
                .catch(err => console.error(err));
            });
        }

        async function leggitasks() {
            const response = await fetch(urlBase + ".json");
            const dati = await response.json();
            console.log(dati);
            const tasksDiv = Object.keys(dati).map(id => ({
                id, ...dati[id]
            }));
            console.log(tasksDiv);
            let tasksHtml = "";
            tasksDiv.forEach(t => {
                tasksHtml += "<p>" + t.text + "</p>";
            });
            document.querySelector("#tasks").innerHTML = tasksHtml;
        }

        leggitasks();
        
        
