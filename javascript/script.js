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


    addTaskToList()
};