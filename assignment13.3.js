var i,j,k=0; 
var result="";

var userdetObj={"student":[{"name":"sandhya","age":46,"weight":53,"height":173,"friends":['dinesh','lokesh','neelima'],"college":[{"name":"srichaithanya College","city":"Hyderabad","pincode":500073}]},
           {"name":"peter","age":21,"weight":62,"height":186,"friends":['swathi','rahul','sandeep','sukumar'],"college":[{"name":"st. peter College","city":"secunderabad","pincode":500014}]},
            {"name":"roshini","age":26,"weight":54,"height":165,"friends":['suchi','mary','benjamin'],"college":[{"name":"narayana College","city":"rajamundry","pincode":500048}]},
            {"name":"Siddhu","age":22,"weight":59,"height":186,"friends":['robert','manoj','krishna','nandini'],"college":[{"name":"st.judes","city":"bangalore","pincode":580074}]}]};
            for (i in userdetObj.student) { 
                result+="<h4>"+"Student:"+"</h4>";

                    result+="Student Name: "+userdetObj.student[i].name+" "+"Age: "+userdetObj.student[i].age+" "+"Weight: "+userdetObj.student[i].weight+" "+"Height: "+userdetObj.student[i].height;
                        result+="<h4>"+"Friends:"+"</h4>";
                            for(j in userdetObj.student[i].friends){ 
                                result+=userdetObj.student[i].friends[j]+" ; ";        
                            }
                                    result+="<h4>"+"College:"+"</h4>";
                                        for(k in userdetObj.student[i].college){
                                            result+="College Name: "+userdetObj.student[i].college[k].name+" "+"City: "+userdetObj.student[i].college[k].city+" "+"Pin code: "+userdetObj.student[i].college[k].pincode;
                }
            }