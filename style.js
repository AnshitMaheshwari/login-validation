 $(document).ready(function(){

             $("#submit").click(function(){
                        var nam= $("#fname").val();
                        var db= $("#dob").val();
                        var mno= $("#mnum").val();
                        var pin= $("#pinum").val();
                        var cbox= $("#gender").val();
                        var cty= $("#city").val();
                        var adr= $("#adrs").val();
         
                        var Naam=/^[a-zA-Z\s'-]+$/;
                        var janm=/^(\d{2})\/(\d{2})\/(\d{4})$/;  
                        var nomber=/^\d{10}$/; 
                        var pincode= /^\d{6}$/;   
                        var ciTy=/^[a-zA-Z\s'-]+$/; 
                        var aDD=/^[a-zA-Z\s'-]+$/;
                                                 
                       

                        if(nam.match(Naam))
                        {
                           if(db.match(janm))
                           {
                             
                             if(mno.match(nomber))
                              {
                                 if(pin.match(pincode))
                                 {
                                    if(cty.match(ciTy))
                                    {
                                       if(adr.match(aDD))
                                       { 
                                          alert ("thanks");
                                          window.location.assign("demo1.html");
                                          return true;
                                          
                                       }
                                    }
                                 }
                              }
                           } 
                        }
                        alert("false");
                        return false;
                        
            });

  
});
