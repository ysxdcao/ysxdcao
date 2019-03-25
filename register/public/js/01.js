  var a;
  var i=0;
        function yzm1(){
           while(true){
             a=Math.floor(Math.random()*10000);
             if(a>1000){
                yzmk.innerHTML=a;
                 break;
             }         
           }
        }
        function tishi(){
            return new Promise(function(open){   
            var reg=/^(\+86|0086)?1[3-8]\d{9}$/;
            var bool=reg.test(phone.value);
            if(!bool){
                tishi1.style.display="block";
                tishi1.innerHTML="手机号格式错误"
            } else if(!pwd1.value){
                tishi1.style.display="block";
            tishi1.innerHTML="密码不能为空";
            } else if(pwd1.value!=pwd2.value){
            tishi1.style.display="block";
            tishi1.innerHTML="密码不一致";   
            }else if(yzm.value!=yzmk.innerHTML){
                tishi1.style.display="block";
                tishi1.innerHTML="验证码错误";              
            }
            else{
                i++;
            }
            open();
        })
        }
        function tnext(){
            return new Promise(function(open){
            setTimeout(function(){
                tishi1.style.display="none";
                yzm1(); 
            },2000)
            open();
        })
        } 
        function ajax(){
            if(i!=0){
            var xhr=new XMLHttpRequest();
            xhr.onreadystatechange=function(){
                if(xhr.readyState==4&&xhr.status==200){
                    var result=xhr.responseText;
                tishi1.style.display="block";
                tishi1.innerHTML=result;
                tnext();
                }
            }
            xhr.open("get","/yonghu/zhuce?phone="+phone.value+"&pwd1="+pwd1.value,true);
            xhr.send("null");
            i=0;
        }else{
           return -1;
        }
        }
        function zxing(){
            tishi().then(tnext).then(ajax);
        }