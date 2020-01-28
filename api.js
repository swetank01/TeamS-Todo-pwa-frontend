

function getapidata() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    var url = 'http://localhost:5000/home';
    xhttp.open("GET", url , true);
    xhttp.send();
  }
