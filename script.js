var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")

var number_img = 1;

function img_changer_add(){

    var img = document.getElementById("img");

    if (number_img < 3){

        number_img += 1;
    }else {

        number_img = 3;
    }

    img.src = "assets/img" + number_img + ".png";

    color_changer();

}

function img_changer_sub(){

    var img = document.getElementById("img");

    if (number_img > 1){

        number_img -= 1;
    }else {

        number_img = 1;
    }

    img.src = "assets/img" + number_img + ".png";

    color_changer();

}

function color_changer(){

    if (number_img == 1){

        button1.style.background = "rgb(255, 159, 95)";
        button2.style.background = "rgb(255, 159, 95)";
    }
    else if (number_img == 2){

        button1.style.background = "rgb(28, 132, 180)";
        button2.style.background = "rgb(28, 132, 180)";
    }
    else if (number_img == 3){

        button1.style.background = "rgb(241, 218, 6)";
        button2.style.background = "rgb(241, 218, 6)";
    }
}
