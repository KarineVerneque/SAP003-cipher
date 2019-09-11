let buttonCode= document.getElementById("btn-encode");
let buttonDecode= document.getElementById("btn-decode");
let writtenMsg = document.getElementById("input-msg");
let offSet = document.getElementById("off-set-number");

buttonCode.addEventListener("click", () => {
  let encodeText = window.cipher.encode(+offSet.value, writtenMsg.value);
  document.getElementById("result").innerHTML = `<p>Essa é sua mensagem cifrada:</p> <p>${encodeText}</p>`
});

buttonDecode.addEventListener("click", () => {
  let decodeText = window.cipher.decode(+offSet.value, writtenMsg.value);
  document.getElementById("result").innerHTML = `<p>Essa é sua mensagem cifrada:</p> <p>${decodeText}</p>`
});
