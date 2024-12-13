function agefun(){
    let d=new Date();
    let cd=d.getFullYear();
    let age=document.getElementById('age-input').value;
    if(age>0){
        let finalage=cd-age;
        document.getElementById('age-input').value=null;
        document.getElementById('your-age').value=finalage+" year";
    }
   
}