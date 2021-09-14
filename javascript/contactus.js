function vali(){
    var name=document.getElementById("t1").value;
    var mail=document.getElementById("t2").value;
    var area=document.getElementById("t3").value;

    var errnode1=document.getElementById("error1");
    var errnode2=document.getElementById("error2");
    var errnode3=document.getElementById("error3");
    var success=document.getElementById("success");

    var expName=/^[a-zA-Z ]{2,100}$/;
    var expMail=/^[a-zA-Z0-9-_]+@+[a-z]+.+[a-z]$/;
    var exparea=/^[a-zA-Z ]{20,200}$/;

    if(!(expName.test(name)))
    {
        document.getElementById("t1").focus();
        errnode1.innerHTML="Only alphabets Allowed";
        errnode1.className="alert alert-danger";
    }
    else if(!(expMail.test(mail))){
        errnode1.className="col-md-3 mt-3 text-left";
        errnode1.innerHTML=("");
        document.getElementById("t2").focus();
        errnode2.innerHTML="Enter Valid email";
        errnode2.className="alert alert-danger";
       
    }
    else if(!(exparea.test(area)) )
    {   
        errnode2.className="col-md-3 mt-3 text-left";
        errnode2.innerHTML=("");
        document.getElementById("t3").focus();
        errnode3.innerHTML="Min 20 max 200 character";
        errnode3.className="alert alert-danger";
        
    }
    else 
    {
        errnode3.className="col-md-4 mt-3 text-left";
        errnode3.innerHTML=("");
        success.innerHTML="Feedback Submitted Successfully";
        success.className="alert alert-success";
    }
}