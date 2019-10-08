const cartTag = ev => {
  let id = ev.target.attributes.value.value;
  let cart = document.getElementById(`cartDiv${id}`);
  if (cart.style.display === "none") {
    cart.style.display = "block";
  } else {
    cart.style.display = "none";
  }
  let add = document.getElementById(`addCart${id}`);
  let remove = document.getElementById(`removeCart${id}`);
  if (add.style.display === "block") {
    add.style.display = "none";
    remove.style.display = "block";
  } else {
    remove.style.display = "none";
    add.style.display = "block";
  }
};

const mouseOverAddRemoveButton = ev => {
  let id = ev.target.attributes.value.value;
  let add = document.getElementById(`addCart${id}`);
  let remove = document.getElementById(`removeCart${id}`);
  let image = document.getElementById(`flower${id}`);

  image.style.opacity = 0.5;
  add.style.opacity = 1;
  remove.style.opacity = 1;
};

const mouseOffAddRemoveButton = ev => {
  let id = ev.target.attributes.value.value;
  let add = document.getElementById(`addCart${id}`);
  let remove = document.getElementById(`removeCart${id}`);
  let image = document.getElementById(`flower${id}`);

  image.style.opacity = 1;
  add.style.opacity = 0;
  remove.style.opacity = 0;
};

export { cartTag, mouseOffAddRemoveButton, mouseOverAddRemoveButton };
