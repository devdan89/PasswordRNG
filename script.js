const newpw = document.querySelector(".content__pw-rng");
console.log(newpw);




function rng(qty) {
  var letras = 'abcdefghijklmnopqrstuvwxyz';
  var especiais = '!@#$%&*';
  let pw = "";
  let sorteio = 0;
  for (var i = 0; i <= qty - 1; i++) {
    sorteio = Math.floor(Math.random() * 3) + 1;
    console.log(sorteio);
    switch (sorteio) {
      case 1:
        var index = letras.length;
        pw += new String(letras[Math.floor(Math.random() * index)]);
        break;
      case 2:
        pw += new String(Math.floor(Math.random() * 10));
        break;
      case 3:
        var index = especiais.length;
        pw += new String(especiais[Math.floor(Math.random() * index)]);
        break;
    }
  }
  document.querySelector(".content__pw-rng").innerHTML = pw;
}
