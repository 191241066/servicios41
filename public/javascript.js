function Function() {
    var x = document.createElement("FOOTER");
    x.setAttribute("id", "myFooter");
    document.body.appendChild(x);
  
    var y = document.createElement("P"); 
    var t = document.createTextNode("Ramirez Toala Mario  IC-41M");
    y.appendChild(t);
  
    document.getElementById("myFooter").appendChild(y);
  }