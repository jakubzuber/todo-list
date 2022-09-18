{
    let tasks = [];
    let hideTasksDone = false;

    const addNewTask = (newTaskContent) => {
        tasks = [...tasks, { content: newTaskContent }];
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks = [...tasks.slice(0, taskIndex),
        { ...tasks[taskIndex], done: !tasks[taskIndex].done },
        ...tasks.slice(taskIndex + 1)
        ]
        render();
    };

    const toggleAllTasksDone = () => {
        tasks = tasks.map((task) => ({ ...task, done: true }));
        render();
    }

    const toggleTasksDoneHide = () => {
        hideTasksDone = !hideTasksDone;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });

        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");
        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });

        const toggleAllTasksDoneButton = document.querySelector(".js-markDoneAllTasks");
        if (toggleAllTasksDone) {
        toggleAllTasksDoneButton.addEventListener("click", toggleAllTasksDone);
        }

        const hideAllTaskDoneButton = document.querySelector(".js-hideTasksDone");
        if (hideAllTaskDoneButton) {
            hideAllTaskDoneButton.addEventListener("click", toggleTasksDoneHide);
        };
    };

    const hideHeaderButton = () => {
        const tasksElements = document.querySelector(".js-task");
        const areTasksDone = tasks.every(({ done }) => done);
    
        let headerButtons = "";
        headerButtons += `
            <button class="section__headerHideButton js-hideTasksDone ${tasksElements ? "" : "taskList__task--hide"}">${hideTasksDone ? "Pokaż" : "Ukryj"} ukończone</button>
            
            <button ${areTasksDone === true ? "disabled" : ""} class="section__headerDoneButton js-markDoneAllTasks ${tasksElements ? "" : "taskList__task--hide"}"> Ukończ wszystkie</button>
            `;

            console.log(tasksElements)
        document.querySelector(".js-sectionHeader").innerHTML = headerButtons
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li class="js-task taskList__task ${hideTasksDone && task.done ? "taskList__task--hide" : ""}">
              <button class="js-done list__buttonDone">${task.done ? "&#10004" : ""}</button>
              <span ${task.done ? "class=\"list_taskText--lineThrough\"" : ""}>${task.content}</span>
              <button class="js-remove list_buttonRemove">&#128465</button>
            </li>`;
           
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;
        hideHeaderButton();
        bindEvents();
        
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask");
        const newTask = newTaskContent.value.trim();

        if (newTask === "") {
            newTaskContent.value = "";
            newTaskContent.focus();
            return;
        }

        addNewTask(newTask);
        newTaskContent.value = "";
        newTaskContent.focus();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

};