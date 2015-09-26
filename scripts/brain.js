function toggle(ele) {
    if(ele == "first") {
        document.getElementById("first").style.display = 'block';
        document.getElementById("second").style.display = 'none';
        document.getElementById("third").style.display = 'none';
        document.getElementById("fourth").style.display = 'none';
        document.getElementById("main").style.display = 'none';
    } else if(ele == "second") {
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'block';
        document.getElementById("third").style.display = 'none';
        document.getElementById("fourth").style.display = 'none';
        document.getElementById("main").style.display = 'none';
    } else if(ele == "third") {
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'none';
        document.getElementById("third").style.display = 'block';
        document.getElementById("fourth").style.display = 'none';
        document.getElementById("main").style.display = 'none';
    } else if(ele == "fourth") {
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'none';
        document.getElementById("third").style.display = 'none';
        document.getElementById("fourth").style.display = 'block';
        document.getElementById("main").style.display = 'none';
    } else {
        document.getElementById("first").style.display = 'none';
        document.getElementById("second").style.display = 'none';
        document.getElementById("third").style.display = 'none';
        document.getElementById("fourth").style.display = 'none';
        document.getElementById("main").style.display = 'block';
    }
}