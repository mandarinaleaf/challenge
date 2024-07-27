function encriptar() {
    let texto = document.getElementById('traducir').value;
    texto = texto.toLowerCase();
    let traducido = texto.replace(/a/g, 'io')
                         .replace(/e/g, 'hg')
                         .replace(/i/g, 'sd')
                         .replace(/o/g, 'rf')
                         .replace(/u/g, 'pl')
                         .replace(/s/g, 'tr')
                         .replace(/d/g, 'ks')
                         .replace(/m/g, 'ys');
    document.getElementById('resultadonew').value = traducido;
}

function desencriptar() {
    let texto = document.getElementById('traducir').value;
    texto = texto.toLowerCase();
    let traducido = texto.replace(/io/g, 'a')
                         .replace(/hg/g, 'e')
                         .replace(/sd/g, 'i')
                         .replace(/rf/g, 'o')
                         .replace(/pl/g, 'u')
                         .replace(/tr/g, 's')
                         .replace(/ks/g, 'd')
                         .replace(/ys/g, 'm');
    document.getElementById('resultadonew').value = traducido;
}

function limpiar() {
    document.getElementById('traducir').value = '';
    document.getElementById('resultadonew').value = '';
}

function copiar() {
    let texto = document.getElementById('resultadonew');
    texto.select();
    document.execCommand('copy');
}
