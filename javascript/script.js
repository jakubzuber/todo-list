{
    const tasks = [
        {
            content: "nagrać lekcję",
            dane: false,
        },
        {
            content: "zjeść pierogi",
            done: "true"
        },
    ];

    const render = () => {
        let htmlString = "";

        for(const taks of tasks) {
            htmlString += `
              <li>
              ${taks.content}
              </li>
            `;
        }
        document.querySelector(".js-taskList").innerHTML = htmlString
    }

    const init = () => {
        render()
    }

    init()
}