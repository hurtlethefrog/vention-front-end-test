function loadJSON(path, success, error) {
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
}

loadJSON(
  "../server/inventoryData.json",
  function(data) {
    console.log("logging inside loadJSON function", data);

    data.map(element => {
      console.log(element);
      let newDiv = document.createElement("div");
      let newContent = document.createTextNode(element.name);
      newDiv.appendChild(newContent);
      let currentDiv = document.getElementById("div1");
      document.body.insertBefore(newDiv, currentDiv);
    });
  },
  function(xhr) {
    console.error(xhr);
  }
);
