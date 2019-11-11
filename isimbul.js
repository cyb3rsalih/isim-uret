let sesli = "aeiıoöuü";
let sessiz = "bcçdfghjklmnpqrsştvyz";

let isim = prompt("İSİM GİR");

sesliarr = sesli.split("");
sessizarr = sessiz.split("");

genesis = [];

let i = 0;
for (i; i < isim.length; i++) {
  if (sesli.indexOf(isim[i]) !== -1) {
    genesis.push("sesli");
  } else {
    genesis.push("sessiz");
  }
}

newName = [];
m = 0;
while (m < 100) {
  let j = 0;
  for (j; j < genesis.length; j++) {
    if (genesis[j] == "sesli") {
      newName[j] = sesli.charAt(Math.floor(Math.random() * sesli.length));
    } else {
      newName[j] = sessiz.charAt(Math.floor(Math.random() * sessiz.length));
    }
  }

  document.write(newName.join("") + "<br>");
  m++;
}
