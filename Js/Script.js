objects = []
function Main(tipo) {    

  if (tipo == 1) {
    /* verify() */
    load();
  }
  if (tipo == 2) {
    auth();
  }
  if (tipo == 3) {
    buyCD();
  }
  if (tipo == 4) {
    deleteCD();
  }
  if (tipo == 5) {
    addCD(objects);
  }
  if (tipo == 6) {
    buy(objects)
  }
  if (tipo == 7) {
    list()
  }
}

function load() {
  localStorage.setItem("cedula", "1001");
  localStorage.setItem("clave", "1234");
}

function auth() {
  ced = localStorage.getItem("cedula");
  clav = localStorage.getItem("clave");

  if (
    ced == document.getElementById("ced").value &&
    clav == document.getElementById("clav").value
  ) {
    alert("Funciona");
  }
}

function buyCD() {
  var json = {
    title: document.getElementById("ced").value,
    precio: document.getElementById("clav").value,
  };
  json = JSON.stringify(json);
  localStorage.setItem("CD", json);
}

function deleteCD() {
    localStorage.removeItem("CD");

}

function addCD(objects) {
    var json = {
        title: document.getElementById("ced").value,
        price: document.getElementById("clav").value,
      };
    objects.push(json)
}

function buy(objects) {
    json =  JSON.stringify(objects)
    localStorage.setItem("CD", json)
}

function verify() {
  if (typeof localstorage !== undefined) {
    alert("localStorage Disponible");
  }
}

function list() {
    table = document.getElementById("Table")
    album = localStorage.getItem("CD")
    json = JSON.parse(album)
    for ( campos in json) {
        div = document.createElement("div")
        div.setAttribute("class", "Celda")
        text = document.createTextNode(json[campos].title)
        div.appendChild(text)
        table.appendChild(div)

        div = document.createElement("div")
        div.setAttribute("class", "Celda")
        text = document.createTextNode(json[campos].price)
        div.appendChild(text)
        table.appendChild(div)
    }
}

