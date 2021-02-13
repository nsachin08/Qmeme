function validateForm() {
    var x = document.forms["Form"]["name"].value;
    var y = document.forms["Form"]["url"].value;

    if(x=="" && y=="")
    {
      alert("Name & url must be filled out");
      return false;
    }

    if (x == "") {
      alert("Name must be filled out");
      return false;
    }

    if( y == "")
    {
      alert("Url must be filled out");
      return false; 
    }

  }