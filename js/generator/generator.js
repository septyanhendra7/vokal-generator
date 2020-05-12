function vokal() {
    var kalimat = document.getElementById("input").value;
    var a_vocal = document.getElementById("a");
    var i_vocal = document.getElementById("i");
    var u_vocal = document.getElementById("u");
    var e_vocal = document.getElementById("e");
    var o_vocal = document.getElementById("o");
    var rev_ngalam = document.getElementById("ngalam");
    if (a_vocal.checked) {
        var ganti = kalimat.replace(/a|i|u|e|o/gi, 'a')
        document.getElementById("output").innerHTML = ganti;
    } else if (i_vocal.checked) {
        var ganti = kalimat.replace(/a|i|u|e|o/gi, 'i')
        document.getElementById("output").innerHTML = ganti;
    } else if (u_vocal.checked) {
        var ganti = kalimat.replace(/a|i|u|e|o/gi, 'u')
        document.getElementById("output").innerHTML = ganti;
    } else if (e_vocal.checked) {
        var ganti = kalimat.replace(/a|i|u|e|o/gi, 'e')
        document.getElementById("output").innerHTML = ganti;
    } else if (o_vocal.checked) {
        var ganti = kalimat.replace(/a|i|u|e|o/gi, 'o')
        document.getElementById("output").innerHTML = ganti;
    } else if (rev_ngalam.checked) {
        var ganti = kalimat.split(' ').reverse().join(' ').split('').reverse().join('')
        document.getElementById("output").innerHTML = ganti;
    } else {
        document.getElementById("output").innerHTML = "no selected one";
    }
}