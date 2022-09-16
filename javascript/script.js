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

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
        newTaskContent.value = ''
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });

        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toogleDoneButton, index) => {
            toogleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const render = () => {
        let htmlString = ""

        for (const task of tasks) {
            htmlString += `
            <li ${task.done ? "class=\"taskList__task\"" : "class=\"taskList__task\""}>
            <button class="js-done list__buttonDone">${task.done ? "&#10004" : ""}</button>
            <span ${task.done ? "class=\" list__taskText\"" : ""}>
            ${task.content}</span>
            <button class="js-remove list_buttonRemove">&#128465</button>
            </li>`;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask");
        const newTask = newTaskContent.value.trim();

        if (newTask === "") {
            return;
        }

        addNewTask(newTask);
        newTaskContent.value = "";
    };

    const init = () => {
        render()

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

};