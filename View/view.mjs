export default class View {
  constructor() {
    this.root = document.getElementById("root");
  }

  init() {
    this.form = this.createForm({
      id: "form",
    });

    this.top_div_yellow = this.createDiv({
      id: "top_div_yellow",
    });

    this.label = this.createLabel({
      text: "To Do List",
      id: "label",
    });

    this.input = this.createInput({
      id: "task_input",
      name: "task_input",
      placeholder: ' Введите задачу'
    });

    this.add_delete_div = this.createDiv({
      id: "add_delete_div",
    });

    this.button = this.createButton({
          id: "button",
    });

    this.plus = this.createDiv({
      text: '<i class="fa-solid fa-plus"></i>',
      id: "plus",
    });

    this.buttonText = this.createDiv({
      text: "Добавить",
      id: "button_text",
    });

    this.buttonDelAll = this.createButton({
      id: "buttonDelAll",
      type: "button",
    });

    this.cross = this.createDiv({
      text: '<i class="fa-solid fa-xmark"></i>',
      id: "cross",
    });

    this.buttonDelAllText = this.createDiv({
      text: "Очистить",
      id: "buttonDelAll_text",
    });

    this.ul = this.createUl({
      id: "ul_list",  
    });

    this.buttonSort = this.createButton({
      id: "button_sort",
      type: "button",
    });

    this.icon_sort = this.createDiv({
      id: "sort_default_img",
      text: '<i class="fa-solid fa-arrow-down-wide-short fa-2xs"></i>'
    });

    this.root.append(this.form);

    this.form.append(this.top_div_yellow);
    this.form.append(this.label);
    this.form.append(this.ul);
    this.form.append(this.add_delete_div);
    this.add_delete_div.append(this.button);
    this.add_delete_div.append(this.buttonDelAll);

    this.buttonSort.append(this.icon_sort);

    this.label.append(this.buttonSort);
    this.label.append(this.input);

    this.button.append(this.plus);
    this.button.append(this.buttonText);
    this.buttonDelAll.append(this.cross);
    this.buttonDelAll.append(this.buttonDelAllText)
  }

  createForm(props) {
    const form = document.createElement("form");

    props.id && (form.id = props.id);

    return form;
  }

  createDiv(props) {
    const div = document.createElement("div");

    props.text && (div.innerHTML = props.text);
    props.id && (div.id = props.id);
    props.class && (div.className = props.class);

    return div;
  }

  createLabel(props) {
    const label = document.createElement("label");

    props.text && (label.innerText = props.text);
    props.id && (label.id = props.id);
    

    return label;
  }

  createInput(props) {
    const input = document.createElement("input");

    props.text && (input.value = props.text);
    props.name && (input.name = props.name);
    props.id && (input.id = props.id);
    props.placeholder && (input.placeholder = props.placeholder);
    

    return input;
  }

  // createImg(props) {
  //   const div = document.createElement('div')

  //   props.text && (div.innerHTML = props.text);

  //   props.class && (div.className = props.class);

  //   return div;
  // }

  createButton(props) {
    const button = document.createElement("button");

    props.text && (button.innerHTML = props.text);
    props.id && (button.id = props.id);
    props.class && (button.className = props.class);
    props.type && (button.type = props.type);

    return button;
  }

  createUl(props) {
    const ul = document.createElement("ul");

    props.id && (ul.id = props.id);

    return ul;
  }

  createLi(props) {
    const li = document.createElement("li");

    props.text && (li.innerHTML = props.text);
    props.class && (li.className = props.class);

    return li;
  }

  defaultAsc() {
    this.icon_sort.innerHTML = '<i class="fa-solid fa-arrow-up-wide-short fa-2xs"></i>';
  }

  defaultDesc() {
    this.icon_sort.innerHTML = '<i class="fa-solid fa-arrow-down-wide-short fa-2xs"></i>';
    
  }
}
