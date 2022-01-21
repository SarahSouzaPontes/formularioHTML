const generoMusica = document.querySelector(".genero")
const generoMusicaAXE = document.querySelector(".generoMusicaAXE")
const generoMusicaCOUNTRY = document.querySelector(".generoMusicaCOUNTRY")
const generoMusicaBLUES = document.querySelector(".generoMusicaBLUES")
const generoMusicaELETRONICA = document.querySelector(".generoMusicaELETRONICA")
const generoMusicaFORRO = document.querySelector(".generoMusicaFORRO")
const generoMusicaFUNK = document.querySelector(".generoMusicaFUNK")
const generoMusicaGOSPEL = document.querySelector(".generoMusicaGOSPEL")
const generoMusicaHIPHOP = document.querySelector(".generoMusicaHIPHOP")

generoMusica.addEventListener("click", () => {
    if (generoMusica.value === "Axé") {
        generoMusicaAXE.classList.remove('escondidoAXE')
        generoMusicaCOUNTRY.classList.add('escondidoCOUNTRY')
        generoMusicaBLUES.classList.add('escondidoBLUES')
        generoMusicaELETRONICA.classList.add('escondidoELETRONICA')
        generoMusicaFORRO.classList.add('escondidoFORRO')
        generoMusicaFUNK.classList.add('escondidoFUNK')
        generoMusicaGOSPEL.classList.add('escondidoGOSPEL')
        generoMusicaHIPHOP.classList.add('escondidoHIPHOP')
    }
    if (generoMusica.value === "Blues") {
        generoMusicaAXE.classList.add('escondidoAXE')
        generoMusicaCOUNTRY.classList.add('escondidoCOUNTRY')
        generoMusicaBLUES.classList.remove('escondidoBLUES')
        generoMusicaELETRONICA.classList.add('escondidoELETRONICA')
        generoMusicaFORRO.classList.add('escondidoFORRO')
        generoMusicaFUNK.classList.add('escondidoFUNK')
        generoMusicaGOSPEL.classList.add('escondidoGOSPEL')
        generoMusicaHIPHOP.classList.add('escondidoHIPHOP')
    }
    if (generoMusica.value === "Country") {
        generoMusicaAXE.classList.add('escondidoAXE')
        generoMusicaCOUNTRY.classList.remove('escondidoCOUNTRY')
        generoMusicaBLUES.classList.add('escondidoBLUES')
        generoMusicaELETRONICA.classList.add('escondidoELETRONICA')
        generoMusicaFORRO.classList.add('escondidoFORRO')
        generoMusicaFUNK.classList.add('escondidoFUNK')
        generoMusicaGOSPEL.classList.add('escondidoGOSPEL')
        generoMusicaHIPHOP.classList.add('escondidoHIPHOP')
    }
    if (generoMusica.value === "Eletrônica") {
        generoMusicaAXE.classList.add('escondidoAXE')
        generoMusicaCOUNTRY.classList.add('escondidoCOUNTRY')
        generoMusicaBLUES.classList.add('escondidoBLUES')
        generoMusicaELETRONICA.classList.remove('escondidoELETRONICA')
        generoMusicaFORRO.classList.add('escondidoFORRO')
        generoMusicaFUNK.classList.add('escondidoFUNK')
        generoMusicaGOSPEL.classList.add('escondidoGOSPEL')
        generoMusicaHIPHOP.classList.add('escondidoHIPHOP')
    }
    if (generoMusica.value === "Forró") {
        generoMusicaAXE.classList.add('escondidoAXE')
        generoMusicaCOUNTRY.classList.add('escondidoCOUNTRY')
        generoMusicaBLUES.classList.add('escondidoBLUES')
        generoMusicaELETRONICA.classList.add('escondidoELETRONICA')
        generoMusicaFORRO.classList.remove('escondidoFORRO')
        generoMusicaFUNK.classList.add('escondidoFUNK')
        generoMusicaGOSPEL.classList.add('escondidoGOSPEL')
        generoMusicaHIPHOP.classList.add('escondidoHIPHOP')
    }
    if (generoMusica.value === "Funk") {
        generoMusicaAXE.classList.add('escondidoAXE')
        generoMusicaCOUNTRY.classList.add('escondidoCOUNTRY')
        generoMusicaBLUES.classList.add('escondidoBLUES')
        generoMusicaELETRONICA.classList.add('escondidoELETRONICA')
        generoMusicaFORRO.classList.add('escondidoFORRO')
        generoMusicaFUNK.classList.remove('escondidoFUNK')
        generoMusicaGOSPEL.classList.add('escondidoGOSPEL')
        generoMusicaHIPHOP.classList.add('escondidoHIPHOP')
    }
    if (generoMusica.value === "Gospel") {
        generoMusicaAXE.classList.add('escondidoAXE')
        generoMusicaCOUNTRY.classList.add('escondidoCOUNTRY')
        generoMusicaBLUES.classList.add('escondidoBLUES')
        generoMusicaELETRONICA.classList.add('escondidoELETRONICA')
        generoMusicaFORRO.classList.add('escondidoFORRO')
        generoMusicaFUNK.classList.add('escondidoFUNK')
        generoMusicaGOSPEL.classList.remove('escondidoGOSPEL')
        generoMusicaHIPHOP.classList.add('escondidoHIPHOP')
    }
    if (generoMusica.value === "Hip Hop") {
        generoMusicaAXE.classList.add('escondidoAXE')
        generoMusicaCOUNTRY.classList.add('escondidoCOUNTRY')
        generoMusicaBLUES.classList.add('escondidoBLUES')
        generoMusicaELETRONICA.classList.add('escondidoELETRONICA')
        generoMusicaFORRO.classList.add('escondidoFORRO')
        generoMusicaFUNK.classList.add('escondidoFUNK')
        generoMusicaGOSPEL.classList.add('escondidoGOSPEL')
        generoMusicaHIPHOP.classList.remove('escondidoHIPHOP')
    }
});
