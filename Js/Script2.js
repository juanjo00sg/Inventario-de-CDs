function Cds(codigo, cantante, genero) {
  this.codigo = codigo;
  this.cantante = cantante;
  this.genero = genero;
}

Cds.prototype.setPaises = function (paises) {
  this.paises = paises;
};

Cds.prototype.biografia = function () {
  if (this.genero == "rock") {
    console.log("bla hola ");
  } else if (this.genero == "cumbia") {
    console.log("no soy cumbia");
  } else if (this.genero == "bachata") {
    console.log("no soy bachata");
  }
};

function Country(codigo, nombre) {
  this.codigo = codigo;
  this.nombre = nombre;
}

Country.prototype.description = function () {
  if (this.nombre == "colombia") {
    console.log("hola mi nombre es frailejon");
  } else if (this.nombre == "alemania") {
    console.log("hallo");
  }
};

Lista = [];
ListaPaises = [];
var NuevoCd ; 
function Main(tipo) {
  if (tipo == 1) {
    agregarCd();
  }
  if (tipo == 2) {
    guardarCd();
  }
  if (tipo == 3) {
    buscarCd(document.getElementById("nombre").value);
  }
  if (tipo == 4) {
    borrarCd();
  }
  if (tipo == 5) {
    loadCountries()
  }
  if (tipo == 6) {
    Finalizar()
  }
}

function agregarCd(Lista) {
  NuevoCd = new Cds(
    document.getElementById("codigo").value,
    document.getElementById("nombre").value,
    document.getElementById("genero").value
  );
  NuevoCd.biografia();
  this.Lista.push(NuevoCd);
}

function guardarCd(Lista) {
  Listat = JSON.stringify(this.Lista);
  localStorage.setItem("CdsMusica", Listat);
  ListaPaises = []
}

function buscarCd(artistab) {
  listaN = JSON.parse(localStorage.getItem("CdsMusica"));
  for (i in listaN) {
    if (artistab == listaN[i].cantante) {
      alert("si soy");
    }
  }
}

function borrarCd() {
  localStorage.removeItem("CdsMusica");
  alert("me mori");
}

function loadCountries() {
  nombre = document.getElementById("paises").value;
  codigo = nombre + "001";
  var objpais = new Country(codigo, nombre);
  this.ListaPaises.push(objpais);
}

function Finalizar() {
  NuevoCd.setPaises(this.ListaPaises)
}

function addCountryCd() {
  Cds.setPaises(this.ListaPaises);
}
