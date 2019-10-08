import loadJSON from "./helpers/loadJSON.js";
import rating from "./helpers/rating.js";
import {
  cartTag,
  mouseOffAddRemoveButton,
  mouseOverAddRemoveButton
} from "./helpers/eventHandlers.js";

loadJSON(
  "../server/inventoryData.json",
  function(data) {
    //used to track itteration of map function
    let i = 1;
    data.map(element => {
      // creating all the html elements
      let parentDiv = document.createElement("article");
      let newImg = document.createElement("img");
      let imgDiv = document.createElement("div");
      let priceDiv = document.createElement("div");
      let ratingDiv = document.createElement("div");
      let titleDiv = document.createElement("div");
      let borderDiv = document.createElement("div");
      let flowerInfo = document.createElement("section");
      let cartDiv = document.createElement("div");
      let addCart = document.createElement("div");
      let removeCart = document.createElement("div");

      //adding img src
      newImg.setAttribute("src", `${element.image}`);

      //event handlers that are not handled by css
      newImg.onclick = cartTag;
      addCart.onclick = cartTag;
      removeCart.onclick = cartTag;
      addCart.onmouseover = mouseOverAddRemoveButton;
      removeCart.onmouseover = mouseOverAddRemoveButton;
      newImg.onmouseover = mouseOverAddRemoveButton;
      newImg.onmouseout = mouseOffAddRemoveButton;

      //adding inline style for visibility
      cartDiv.setAttribute("style", "display:none;");
      addCart.setAttribute("style", "display:block;opacity:0;");
      removeCart.setAttribute("style", "display:none;opacity:0;");
      newImg.setAttribute("value", i);
      addCart.setAttribute("value", i);
      removeCart.setAttribute("value", i);

      //class names and ids
      titleDiv.className = "title";
      priceDiv.className = "price";
      parentDiv.className = "flowerCard";
      newImg.className = "flowerImage";
      newImg.id = `flower${i}`;
      ratingDiv.className = "rating";
      flowerInfo.className = "flowerInfo";
      borderDiv.className = "border";
      cartDiv.id = `cartDiv${i}`;
      cartDiv.className = "cartDiv";
      imgDiv.className = "imgDiv";
      addCart.id = `addCart${i}`;
      addCart.className = "addCart toggle";
      removeCart.id = `removeCart${i}`;
      removeCart.className = "removeCart toggle";

      //text nodes
      let title = document.createTextNode(element.name);
      let price = document.createTextNode(
        (element.price / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })
      );
      let inCart = document.createTextNode("In Cart");
      let addCartText = document.createTextNode("Add to cart");
      let removeCartText = document.createTextNode("Remove from cart");

      //placing text in correct divs
      titleDiv.appendChild(title);
      priceDiv.appendChild(price);
      cartDiv.appendChild(inCart);
      addCart.appendChild(addCartText);
      removeCart.appendChild(removeCartText);

      //assembling html elements
      flowerInfo.appendChild(borderDiv);
      flowerInfo.appendChild(titleDiv);
      flowerInfo.appendChild(priceDiv);
      flowerInfo.appendChild(ratingDiv);
      imgDiv.appendChild(newImg);
      imgDiv.appendChild(cartDiv);
      imgDiv.appendChild(addCart);
      imgDiv.appendChild(removeCart);
      parentDiv.appendChild(imgDiv);
      parentDiv.appendChild(flowerInfo);

      //creating the star rating div
      rating(ratingDiv, element.rating);

      //appending everything above to root div
      let currentDiv = document.getElementById("div1");
      currentDiv.appendChild(parentDiv);
      //increment itteration
      i++;
    });
  },
  function(xhr) {
    console.error(xhr);
  }
);
