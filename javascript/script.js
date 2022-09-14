{
    const tasks = [
        {
            content: "nagrać lekcję",
            done: false,
        },
        {
            content: "zjeść pierogi",
            done: true,
        },
    ];

    const addTaskToList = () => {
        let htmlAndClssInner = "";

        for (const task of tasks) {
            htmlAndClssInner += `
             <li ${task.done ? "class=\"taskList__task taskList__task--crossed \"" : "class=\"taskList__task\""}>
             ${task.content}
             </li>`;
        };

        document.querySelector(".js-tasks").innerHTML = htmlAndClssInner;
    };

    const addNewTask = (newTaskContent) => {
        tasks.push(
            {
                content: newTaskContent,
            }
        )
        addTaskToList();
    }

    const onFormSubmit = (event) => {
            event.preventDefault();

            const newTaskContent = document.querySelector(".js-newTask").value.trim();

            if (newTaskContent === "") {
                returnl
            };
            
            addNewTask(newTaskContent);
        };
    

    const init = () => {
        addTaskToList();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

        
    };
    init();
    
};