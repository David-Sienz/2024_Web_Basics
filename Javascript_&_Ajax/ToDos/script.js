loadData();

document.getElementById("btnLoad").addEventListener("click", function () {
  loadData();
});

function loadData() {
  fetch("https://67b8466c699a8a7baef3610b.mockapi.io/api/todo/htldornbirn")
    .then((response) => response.json())
    .then((json) => {
      let html = [];

      json.forEach((todo) => {
        html.push(
          "<div><div>" +
            todo.title +
            "</div><img width='50px' src='" +
            todo.responsible +
            "?id=" +
            Math.random() +
            " '/></div>"
        );
      });
      document.getElementById("content").innerHTML = html.join("");
    });
}
