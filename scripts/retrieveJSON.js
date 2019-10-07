import loadJSON from "./helpers/loadJSON.js"
import rating from "./helpers/rating.js"
import {cartTag, mouseOffAddRemoveButton, mouseOverAddRemoveButton} from "./helpers/eventHandlers.js"

loadJSON(
  "../server/inventoryData.json",
  function(data) {
    let i = 1;
    data.map(element => {
      let parentDiv = document.createElement("div");
      let newImg = document.createElement("img");
      let imgDiv = document.createElement("div");
      let priceDiv = document.createElement("div");
      let ratingDiv = document.createElement("div");
      let titleDiv = document.createElement("div");
      let flowerInfo = document.createElement("div");
      let cartDiv = document.createElement("div");
      let addCart = document.createElement("div");
      let removeCart = document.createElement("div");

      newImg.setAttribute("src", `${element.image}`);
      imgDiv.onclick = cartTag
      //() => {
      //   let id = i;
      //   console.log(`clicked  cartDiv${id}`);
      //   let x = document.getElementById(`cartDiv${id}`);
      //   if (x.style.display === "none") {
      //     x.style.display = "block";
      //   } else {
      //     x.style.display = "none";
      //   }
      //   let y = document.getElementById(`addCart${id}`);
      //   let z = document.getElementById(`removeCart${id}`);
      //   if (y.style.display === "block") {
      //     y.style.display = "none";
      //     z.style.display = "block";
      //   } else {
      //     z.style.display = "none";
      //     y.style.display = "block";
      //   }
      // };
      imgDiv.onmouseover = mouseOverAddRemoveButton
      // () => {
      //   let id = i;
      //   let add = document.getElementById(`addCart${id}`);
      //   let remove = document.getElementById(`removeCart${id}`);

      //   add.style.opacity = 1;
      //   remove.style.opacity = 1;
      // };
      imgDiv.onmouseout = mouseOffAddRemoveButton
      // () => {
      //   let id = i;
      //   let add = document.getElementById(`addCart${id}`);
      //   let remove = document.getElementById(`removeCart${id}`);

      //   add.style.opacity = 0;
      //   remove.style.opacity = 0;
      // };

      cartDiv.setAttribute("style", "display:none;");
      addCart.setAttribute("style", "display:block;opacity:0;");
      removeCart.setAttribute("style", "display:none;opacity:0;");

      titleDiv.className = "title";
      priceDiv.className = "price";
      parentDiv.className = "flowerCard";
      newImg.className = "flowerImage";
      ratingDiv.className = "rating";
      flowerInfo.className = "flowerInfo";
      cartDiv.id = `cartDiv${i}`;
      cartDiv.className = "cartDiv";
      imgDiv.className = "imgDiv";
      addCart.id = `addCart${i}`;
      addCart.className = "addCart toggle";
      removeCart.id = `removeCart${i}`;
      removeCart.className = "removeCart toggle";

      let title = document.createTextNode(element.name);
      titleDiv.appendChild(title);
      let price = document.createTextNode(
        (element.price / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })
      );
      let inCart = document.createTextNode("In Cart");
      let addCartText = document.createTextNode("Add to cart");
      let removeCartText = document.createTextNode("Remove from cart");

      priceDiv.appendChild(price);
      cartDiv.appendChild(inCart);
      addCart.appendChild(addCartText);
      removeCart.appendChild(removeCartText);

      flowerInfo.appendChild(titleDiv);
      flowerInfo.appendChild(priceDiv);
      flowerInfo.appendChild(ratingDiv);
      imgDiv.appendChild(newImg);
      imgDiv.appendChild(cartDiv);
      imgDiv.appendChild(addCart);
      imgDiv.appendChild(removeCart);
      parentDiv.appendChild(imgDiv);
      parentDiv.appendChild(flowerInfo);

      rating(ratingDiv, element.rating);

      let currentDiv = document.getElementById("div1");
      currentDiv.appendChild(parentDiv);
      i++;
    });
    i = 1;
  },
  function(xhr) {
    console.error(xhr);
  }
);
