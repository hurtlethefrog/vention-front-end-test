const cartTag = () => {
  let id = i;
  console.log(`clicked  cartDiv${id}`);
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

const mouseOverAddRemoveButton = () => {
  let id = i;
  let add = document.getElementById(`addCart${id}`);
  let remove = document.getElementById(`removeCart${id}`);

  add.style.opacity = 1;
  remove.style.opacity = 1;
};

const mouseOffAddRemoveButton = () => {
  let id = i;
  let add = document.getElementById(`addCart${id}`);
  let remove = document.getElementById(`removeCart${id}`);

  add.style.opacity = 0;
  remove.style.opacity = 0;
};

export {cartTag, mouseOffAddRemoveButton, mouseOverAddRemoveButton}