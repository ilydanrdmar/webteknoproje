function deneme(kullanici,soyadi){
    var kullanici = document.getElementById("klncadi").value;
    var soyadi = document.getElementById("soyadi").value;
    var email = document.getElementById("email").value;
	var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;

    if (kullanici=="") {
        if (soyadi=!""){
            if (regex.test(email)==true)
	{
        alert("Ad veya soyad boş bırakılamaz");
    }
	else
	{ alert("Hata!Geçersiz mail adresi girdiniz!")
    ;
     }
            return true;
        }
    }  if (kullanici=!"") {
        if (soyadi==""){
            if (regex.test(email)==true)
	{
        alert("Ad veya soyad boş bırakılamaz");
    }
	else
	{ alert("Hata!Geçersiz mail adresi girdiniz!")
    ;
     }
            return true;
        }
    }


    if (kullanici=!"") {
        if (soyadi=!""){
            if (regex.test(email)==true)
	{ 
        
    }
	else
	{ alert("Hata!Geçersiz mail adresi girdiniz!")
    ;
     }
            return true;
        }
        
    }
    else if (kullanici=""){
        if (soyadi=!""){
            if (regex.test(email)==true)
        {
            alert("Soyad boş bırakılmaz.")
        }
        }
    }
	}
    
    



