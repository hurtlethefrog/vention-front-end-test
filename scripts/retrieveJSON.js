// export this
const loadJSON = (path, success, error) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        if (success) success(JSON.parse(xhr.responseText));
      } else {
        if (error) error(xhr);
      }
    }
  };
  xhr.open("GET", path, true);
  xhr.send();
};
// export this
const rating = (ele, rating) => {
  for (i = 0; i < 5; i++) {
    let dullStar = null;
    let fullStar = null;
    if (i >= rating) {
      dullStar = document.createElement("img");
      dullStar.setAttribute("src", "../assets/star.svg");
      dullStar.className = "dullStar star";
      ele.appendChild(dullStar);
    } else {
      fullStar = document.createElement("img");
      fullStar.setAttribute("src", "../assets/star.svg");
      fullStar.className = "star";
      ele.appendChild(fullStar);
    }
  }
};

loadJSON(
  "../server/inventoryData.json",
  function(data) {
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

      titleDiv.className = "title";
      priceDiv.className = "price";
      parentDiv.className = "flowerCard";
      newImg.className = "flowerImage";
      ratingDiv.className = "rating";
      flowerInfo.className = "flowerInfo";
      cartDiv.className = "cartDiv";
      imgDiv.className = "imgDiv";
      addCart.className = "addCart toggle";
      removeCart.className = "removeCart toggle";

      let title = document.createTextNode(element.name);
      titleDiv.appendChild(title);
      let price = document.createTextNode(
        // export this
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
      addCart.appendChild(addCartText)
      removeCart.appendChild(removeCartText)

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
    });
  },
  function(xhr) {
    console.error(xhr);
  }
);
