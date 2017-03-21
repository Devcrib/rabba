
    $(function(e){

        function looper1(){

                $('.raba').css("backgroundColor","lightblue");
                $('.raba').css("transition", "2000ms");

        };

        function looper2(){


                $('.raba').css("backgroundColor","green");
                $('raba').css("transition", "2000ms");
        };

        function looper3(){


                $('.raba').css("backgroundColor","lightred");
                $('.raba').css("transition", "2000ms");
        };

        function looper4(){


                $('.raba').css("backgroundColor","yellow");
                $('.raba').css("transition", "2000ms");

        };
        function looper5(){

                $('.raba').css("backgroundColor","orange");
                $('.raba').css("transition", "2000ms");
        }


var the_time = 2000;
var funArr = [looper1,looper2,looper3,looper4,looper5];
for (var i=0; i<funArr.length;i++){
  setInterval(funArr[i], the_time*(i+1));
}



    });
