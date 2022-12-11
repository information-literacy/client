function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



function backHistory() {//alert(0);
  document.getElementById("aaa").contentWindow.history.back();
}

function forwardHistory() {//alert(0);
  document.getElementById("aaa").contentWindow.history.forward();
}

function checkHistory() {
  window.document.getElementById("leng").value = document.getElementById("aaa").contentWindow.history.length;
}

var element = document.getElementById("AAA");

  element.addEventListener("load", function(event) {
    let url = document.getElementById("AAA").contentWindow.location.href
    if(url === "https://information-literacy.github.io/videos1") {

    }else{
      hback()
    }
  });

function hback() {
  frames['AAA'].history.back();return false
  
}

function hforward() {
  frames['AAA'].history.forward();return false
  
}

function ifr(jpURL){
  frames['AAA'].location = jpURL;
}

function windowexit() {
  location.href = 'exit.html'
  window.close();
}