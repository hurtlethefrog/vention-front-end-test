export default (ele, rating) => {
    for (let i = 0; i < 5; i++) {
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