var themeChanger = document.getElementById("themeChange");
var currentStyle = "index_style_dark.css";
var oppStyle = "index_style_light.css"
themeChanger.onclick = function(){

    document.querySelector(`link[href='${currentStyle}']`).href = oppStyle;
    var temp = currentStyle;
    currentStyle = oppStyle;
    oppStyle = temp;

}
