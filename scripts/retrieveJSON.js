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
      dullStar.className = "dullStar";
      ele.appendChild(dullStar);
    } else {
      fullStar = document.createElement("img");
      fullStar.setAttribute("src", "../assets/star.svg");
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
      let priceDiv = document.createElement("div");
      let ratingDiv = document.createElement("div");
      let titleDiv = document.createElement("div");
      let flowerInfo = document.createElement("div");
    
      titleDiv.className = "title"
      priceDiv.className = "price"
      parentDiv.className = "flowerCard";
      newImg.className = "flowerImage";
      ratingDiv.className = "rating";
      flowerInfo.className = "flowerInfo";

      newImg.setAttribute("src", `${element.image}`);

      let title = document.createTextNode(element.name);
      titleDiv.appendChild(title);
      // export this
      let price = document.createTextNode(
        (element.price / 100).toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })
      );
      priceDiv.appendChild(price);

      flowerInfo.appendChild(titleDiv);
      flowerInfo.appendChild(priceDiv);
      flowerInfo.appendChild(ratingDiv);
      parentDiv.appendChild(newImg);
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
