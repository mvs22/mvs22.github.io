let c, c2;
let imgs = [];
let img_example;
let glyphs = [];
let index = 0;
let indexWord = 0;
let kaledoscope = false;
let words;
let textWord;
let name_image = "exemplo_usuario/exemplo1.png";

function saveInStorage(key, data) {
  //let dados = JSON.stringify(data, getCircularReplacer());
  sessionStorage.setItem(key, dados);
}

function retorna() {
  var queryString = document.getElementById("inputPhrase");
  var value = queryString.value;
  var words = value.split(" ");
  let string = '';
  let i
  for (i = 0; i < words.length-1; i++) {
    string = string.concat(words[i], "|");
    saveInStorage("words", words);
  }
  string = string.concat(words[i]);

  //console.log("string ", string);

  window.location = "segunda_tela.html?" + string;
}





//Função auxiliar
function getCircularReplacer() {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
}

//Função para salvar estrutura feita pelo usuario com as letras em DSCRIPT
function saveInStorage(key, data) {
  let dados = JSON.stringify(data, getCircularReplacer());
  sessionStorage.setItem(key, dados);
}
