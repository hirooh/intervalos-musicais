function notaBtt(nota){
    var nota1 = [];
    switch (nota){
        case 'C':
            nota1[0] = "Db"; //2-
            nota1[1] = "D"; //2
            nota1[2] = "Eb"; //3-
            nota1[3] = "E"; //3
            nota1[4] = "Fb"; //4dim
            nota1[5] = "F"; //4J
            nota1[6] = "F#"; //4aum
            nota1[7] = "Gb"; //5dim
            nota1[8] = "G"; //5J
            nota1[9] = "G#"; //5aum
            nota1[10] = "Ab"; //6-
            nota1[11] = "A"; //6
            nota1[12] = "Bb"; //7
            nota1[13] = "B"; //7M
            nota1[14] = "C"; //8
            break;
        case 'D':
            nota1[0] = "Eb"; //2-
            nota1[1] = "E"; //2
            nota1[2] = "F"; //3-
            nota1[3] = "F#"; //3
            nota1[4] = "Gb"; //4dim
            nota1[5] = "G"; //4J
            nota1[6] = "G#"; //4aum
            nota1[7] = "Ab"; //5dim
            nota1[8] = "A"; //5J
            nota1[9] = "A#"; //5aum
            nota1[10] = "Bb"; //6-
            nota1[11] = "B"; //6
            nota1[12] = "C"; //7
            nota1[13] = "C#"; //7M
            nota1[14] = "D"; //8
            break;
        default:
            nota1[0] = ""; //2-
            nota1[1] = ""; //2
            nota1[2] = ""; //3-
            nota1[3] = ""; //3
            nota1[4] = ""; //4dim
            nota1[5] = ""; //4J
            nota1[6] = ""; //4aum
            nota1[7] = ""; //5dim
            nota1[8] = ""; //5J
            nota1[9] = ""; //5aum
            nota1[10] = ""; //6-
            nota1[11] = ""; //6
            nota1[12] = ""; //7
            nota1[13] = ""; //7M
            nota1[14] = ""; //8
            break;
    }
    for (var i = 0; i < 15; i++){
        document.getElementsByClassName("nota")[i].innerHTML = nota;
        document.getElementsByClassName("nota1")[i].innerHTML = nota1[i];
    }
    return nota;
}