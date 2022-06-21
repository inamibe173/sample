    var imglist = new Array(
        "1.gif",
        "2.gif",
        "3.gif",
        "4.gif",
        "5.gif",
        "6.gif",
        "7.gif"
        );
    var selectnum = Math.floor(Math.random() * imglist.length);
    var output = "<img src=" +"/img/chara/"+ imglist[selectnum] +" " +"alt="+"girl>";
    document.write(output);
