function myfunction(){
    var user = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var image = document.getElementById("image");

    var Email = RegExp('/^[^\s@]+@[^\s@]+\.[^\s@]+$/');
    var fileextensions = /(\.jpg|\.pdf|\.png|\.jpeg)$/i;
    var emailexp = Email.test(email.value);
    if(user.value.length ===0 || user.value.length<10){
        alert("Enter username of 10 characters");
    }
    if (!emailexp){
        alert("Enter the correct email address");
    }
    if (password.value.length ==0 || password.value.length < 10){
        alert("Enter password of 10 characters");
    }
    var Image = image.files[0];
    if (Image){
        var maxsize = 2;
        var filesize = Image.size /(1024 * 1024);
        if(filesize > maxsize){
            alert("Filesize must be less than 2 MB");
        }
        if(!fileextensions.exec(image.value)){
            alert("file type can be of pdf/png/jpg/jpeg");
        }

    }
    
    /*cookie c = new cookie("avinash","1234567891234");*/

}