const cartTag = ev => {
  let id = ev.target.attributes.value.value;
  let x = document.getElementById(`cartDiv${id}`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  let y = document.getElementById(`addCart${id}`);
  let z = document.getElementById(`removeCart${id}`);
  if (y.style.display === "block") {
    y.style.display = "none";
    z.style.display = "block";
  } else {
    z.style.display = "none";
    y.style.display = "block";
  }
};

const mouseOverAddRemoveButton = ev => {
  let id = ev.target.attributes.value.value;
  let add = document.getElementById(`addCart${id}`);
  let remove = document.getElementById(`removeCart${id}`);
  let image = document.getElementById(`flower${id}`)
  
  image.style.opacity = .5
  add.style.opacity = 1;
  remove.style.opacity = 1;
};

const mouseOffAddRemoveButton = ev => {
  let id = ev.target.attributes.value.value;
  let add = document.getElementById(`addCart${id}`);
  let remove = document.getElementById(`removeCart${id}`);
  let image = document.getElementById(`flower${id}`)
  
  image.style.opacity = 1
  add.style.opacity = 0;
  remove.style.opacity = 0;
};

export { cartTag, mouseOffAddRemoveButton, mouseOverAddRemoveButton };
