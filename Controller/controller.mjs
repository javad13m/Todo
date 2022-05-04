export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.init();
    this.view.form.addEventListener("submit", (event) => {
      event.preventDefault(); 
      const data = new FormData(event.target); 
      const task = data.get("task_input");
      if (task !== "") {
        this.view.ul.className = "ul_list";
        this.model.addInput(task);

        this.render();
        this.view.input.value = "";
      }
    });

    this.view.buttonSort.addEventListener("click", (event) => {
      event.target.classList.toggle("button_sort");
      if (event.target.className !== "button_sort") {
        this.model.sort_of_tasks_ascending();
        this.view.defaultAsc();
      } else {
        this.model.sort_of_tasks_descending();
        this.view.defaultDesc();
      }
      this.render();
    });

    this.view.buttonDelAll.addEventListener("click", () => {
        this.model.deleteAllTasks();
        this.render();
        if (this.view.ul.innerHTML === "") {
          this.view.ul.className = "";
        }
            
    })

  }

  render() {
    this.view.ul.innerHTML = "";
    this.model.array.forEach((el, index) => {
      this.li = this.view.createLi({
        class: "correcting_task",
      });

      this.newInput = this.view.createInput({
        text: el,
        name: "inputTask",
        id: "correcting_input",
      });

      this.view.ul.append(this.li);
      this.li.append(this.newInput);

      this.newInput.addEventListener("keyup", (event) => {
        this.model.changeTask(index, event.target.value);
      });

      this.deleteButton = this.view.createButton({
        text: '<i class="fa-solid fa-xmark"></i>',
        class: "deleteTask",
        type: "button",
      });

      this.li.append(this.deleteButton);

      this.deleteButton.addEventListener("click", () => {
        this.model.deleteTask(index);
        this.render();
        if (this.view.ul.innerHTML === "") {
          this.view.ul.className = "";
        }
      });     
     
    });

    
  }
}
