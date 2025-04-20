var div1=document.getElementById('mentor_m');
var display=0;

let mentorlist1=document.getElementById("mentorlist1");
let mentorlist2=document.getElementById("mentorlist2");
let mentorlist3=document.getElementById("mentorlist3");
let mentorlist4=document.getElementById("mentorlist4");
let mentorlist5=document.getElementById("mentorlist5");
let mentorlist6=document.getElementById("mentorlist6");
let mentorlist7=document.getElementById("mentorlist7");
let mentorlist8=document.getElementById("mentorlist8");
let mentorlist9=document.getElementById("mentorlist9");

let application=document.getElementById("application");
let leave_form=document.getElementById("leave_form");
let minor_project=document.getElementById("minor_project");
let major_project=document.getElementById("major_project");

let nameField1=document.getElementById("nameField1");
let nameField2=document.getElementById("nameField2");
let nameField3=document.getElementById("nameField3");
let nameField4=document.getElementById("nameField4");
let nameField5=document.getElementById("nameField5");
let nameField6=document.getElementById("nameField6");
let nameField7=document.getElementById("nameField7");
let nameField8=document.getElementById("nameField8");
let nameField9=document.getElementById("nameField9");




application.onclick=function(){
    application.classList.remove("disable");
    leave_form.classList.add("disable");
    minor_project.classList.add("disable");
    major_project.classList.add("disable");
}

leave_form.onclick=function(){
    leave_form.classList.remove("disable");
    application.classList.add("disable");
    minor_project.classList.add("disable");
    major_project.classList.add("disable");
}

minor_project.onclick=function(){
    minor_project.classList.remove("disable");
    application.classList.add("disable");
    leave_form.classList.add("disable");
    major_project.classList.add("disable");
}

major_project.onclick=function(){
    major_project.classList.remove("disable");
    application.classList.add("disable");
    leave_form.classList.add("disable");
    minor_project.classList.add("disable");
}

mentorlist1.onclick=function(){
    mentorlist1.classList.remove("disable");
    mentorlist2.classList.add("disable");
    mentorlist3.classList.add("disable");
    mentorlist4.classList.add("disable");
    mentorlist5.classList.add("disable");
    mentorlist6.classList.add("disable");
    mentorlist7.classList.add("disable");
    mentorlist8.classList.add("disable");
    mentorlist9.classList.add("disable");

    
    nameField2.style.maxHeight="0";
    nameField3.style.maxHeight="0";
    nameField4.style.maxHeight="0";
    nameField5.style.maxHeight="0";
    nameField6.style.maxHeight="0";
    nameField7.style.maxHeight="0";
    nameField8.style.maxHeight="0";
    nameField9.style.maxHeight="0";

}

mentorlist2.onclick=function(){
    mentorlist2.classList.remove("disable");
    mentorlist1.classList.add("disable");
    mentorlist3.classList.add("disable");
    mentorlist4.classList.add("disable");
    mentorlist5.classList.add("disable");
    mentorlist6.classList.add("disable");
    mentorlist7.classList.add("disable");
    mentorlist8.classList.add("disable");
    mentorlist9.classList.add("disable");

    nameField1.style.maxHeight="0";
    nameField3.style.maxHeight="0";
    nameField4.style.maxHeight="0";
    nameField5.style.maxHeight="0";
    nameField6.style.maxHeight="0";
    nameField7.style.maxHeight="0";
    nameField8.style.maxHeight="0";
    nameField9.style.maxHeight="0";


}

mentorlist3.onclick=function(){
    mentorlist3.classList.remove("disable");
    mentorlist1.classList.add("disable");
    mentorlist2.classList.add("disable");
    mentorlist4.classList.add("disable");
    mentorlist5.classList.add("disable");
    mentorlist6.classList.add("disable");
    mentorlist7.classList.add("disable");
    mentorlist8.classList.add("disable");
    mentorlist9.classList.add("disable");

    nameField1.style.maxHeight="0";
    nameField2.style.maxHeight="0";
    nameField4.style.maxHeight="0";
    nameField5.style.maxHeight="0";
    nameField6.style.maxHeight="0";
    nameField7.style.maxHeight="0";
    nameField8.style.maxHeight="0";
    nameField9.style.maxHeight="0";

}

mentorlist4.onclick=function(){
    mentorlist4.classList.remove("disable");
    mentorlist1.classList.add("disable");
    mentorlist2.classList.add("disable");
    mentorlist3.classList.add("disable");
    mentorlist5.classList.add("disable");
    mentorlist6.classList.add("disable");
    mentorlist7.classList.add("disable");
    mentorlist8.classList.add("disable");
    mentorlist9.classList.add("disable");

    nameField1.style.maxHeight="0";
    nameField2.style.maxHeight="0";
    nameField3.style.maxHeight="0";
    nameField5.style.maxHeight="0";
    nameField6.style.maxHeight="0";
    nameField7.style.maxHeight="0";
    nameField8.style.maxHeight="0";
    nameField9.style.maxHeight="0";
}

mentorlist5.onclick=function(){
    mentorlist5.classList.remove("disable");
    mentorlist1.classList.add("disable");
    mentorlist2.classList.add("disable");
    mentorlist3.classList.add("disable");
    mentorlist4.classList.add("disable");
    mentorlist6.classList.add("disable");
    mentorlist7.classList.add("disable");
    mentorlist8.classList.add("disable");
    mentorlist9.classList.add("disable");

    nameField1.style.maxHeight="0";
    nameField2.style.maxHeight="0";
    nameField3.style.maxHeight="0";
    nameField4.style.maxHeight="0";
    nameField6.style.maxHeight="0";
    nameField7.style.maxHeight="0";
    nameField8.style.maxHeight="0";
    nameField9.style.maxHeight="0";
}

mentorlist6.onclick=function(){
    mentorlist6.classList.remove("disable");
    mentorlist1.classList.add("disable");
    mentorlist2.classList.add("disable");
    mentorlist3.classList.add("disable");
    mentorlist4.classList.add("disable");
    mentorlist5.classList.add("disable");
    mentorlist7.classList.add("disable");
    mentorlist8.classList.add("disable");
    mentorlist9.classList.add("disable");

    nameField1.style.maxHeight="0";
    nameField2.style.maxHeight="0";
    nameField3.style.maxHeight="0";
    nameField4.style.maxHeight="0";
    nameField5.style.maxHeight="0";
    nameField7.style.maxHeight="0";
    nameField8.style.maxHeight="0";
    nameField9.style.maxHeight="0";
}

mentorlist7.onclick=function(){
    mentorlist7.classList.remove("disable");
    mentorlist1.classList.add("disable");
    mentorlist2.classList.add("disable");
    mentorlist3.classList.add("disable");
    mentorlist4.classList.add("disable");
    mentorlist5.classList.add("disable");
    mentorlist6.classList.add("disable");
    mentorlist8.classList.add("disable");
    mentorlist9.classList.add("disable");

    nameField1.style.maxHeight="0";
    nameField2.style.maxHeight="0";
    nameField3.style.maxHeight="0";
    nameField4.style.maxHeight="0";
    nameField5.style.maxHeight="0";
    nameField6.style.maxHeight="0";
    nameField8.style.maxHeight="0";
    nameField9.style.maxHeight="0";
}

mentorlist8.onclick=function(){
    mentorlist8.classList.remove("disable");
    mentorlist1.classList.add("disable");
    mentorlist2.classList.add("disable");
    mentorlist3.classList.add("disable");
    mentorlist4.classList.add("disable");
    mentorlist5.classList.add("disable");
    mentorlist6.classList.add("disable");
    mentorlist7.classList.add("disable");
    mentorlist9.classList.add("disable");

    nameField1.style.maxHeight="0";
    nameField2.style.maxHeight="0";
    nameField3.style.maxHeight="0";
    nameField4.style.maxHeight="0";
    nameField5.style.maxHeight="0";
    nameField6.style.maxHeight="0";
    nameField7.style.maxHeight="0";
    nameField9.style.maxHeight="0";
}

mentorlist9.onclick=function(){
    mentorlist9.classList.remove("disable");
    mentorlist1.classList.add("disable");
    mentorlist2.classList.add("disable");
    mentorlist3.classList.add("disable");
    mentorlist4.classList.add("disable");
    mentorlist5.classList.add("disable");
    mentorlist6.classList.add("disable");
    mentorlist7.classList.add("disable");
    mentorlist8.classList.add("disable");

    nameField1.style.maxHeight="0";
    nameField2.style.maxHeight="0";
    nameField3.style.maxHeight="0";
    nameField4.style.maxHeight="0";
    nameField5.style.maxHeight="0";
    nameField6.style.maxHeight="0";
    nameField7.style.maxHeight="0";
    nameField8.style.maxHeight="0";
}

function mentor(){
    if(display==1){
        div1.style.display='block';
    document.getElementById("mentorlist1").innerText="Prof.T.Sudha";
    document.getElementById("mentorlist2").innerText="Prof.M.Usha Rani";
    document.getElementById("mentorlist3").innerText="Prof.K.Usha Rani";
    document.getElementById("mentorlist4").innerText="Prof.P.Venkata Krishna";
    document.getElementById("mentorlist5").innerText="Dr.P.Bhargavi";
    document.getElementById("mentorlist6").innerText="Dr.N.V Muthu Lakshmi";
    document.getElementById("mentorlist7").innerText="Ms.G.Prathyusha";
    document.getElementById("mentorlist8").innerText="Ms.D.Nikitha Rao";
    document.getElementById("mentorlist9").innerText="Ms.K.Chandana Sree";
    display=0;
    }
    else{
        div1.style.display='none';
        display=1;
    }
}


var div=document.getElementById('main');
var display=0;

function S_mentee(){
    if(display==1){
        div.style.display='block';
    document.getElementById("mentees").innerText="MENTEE LIST";
    document.getElementById("menteelist1").innerText="1. A.Bindu";
    document.getElementById("menteelist2").innerText="2. A.Akhila";
    document.getElementById("menteelist3").innerText="3. A.Sravani";
    document.getElementById("menteelist4").innerText="4. A.Niharika";
    document.getElementById("menteelist5").innerText="5. A.Umavathi";
    document.getElementById("menteelist6").innerText="6. B R Pooja";
    document.getElementById("menteelist7").innerText="7. B.Saranjya";
    document.getElementById("menteelist8").innerText="8. B.Sasanka";
    document.getElementById("menteelist9").innerText="9. B.Manisha";
    document.getElementById("menteelist10").innerText="10. B.Lavanya";
    document.getElementById("menteelist11").innerText="11. B.Deepika";
    document.getElementById("menteelist12").innerText="12. B.Poojitha";
    document.getElementById("menteelist13").innerText="13. B.Pallavi";
    display=0;
    }
    else{
        div.style.display='none';
        display=1;
    }
}

function M_mentee(){
    if(display==1){
        div.style.display='block';
    document.getElementById("menteelist1").innerText="14. B.Jyothi Satya Bhavani";
    document.getElementById("menteelist2").innerText="15. B.Sudha Rani";
    document.getElementById("menteelist3").innerText="16. B.Jahnavi";
    document.getElementById("menteelist4").innerText="17. B.Bhuvaneswari";
    document.getElementById("menteelist5").innerText="18. B.Dhanusha";
    document.getElementById("menteelist6").innerText="19. B.Sravya Shiny Grace";
    document.getElementById("menteelist7").innerText="20. B.Sharoon Pravanya";
    document.getElementById("menteelist8").innerText="21. Ch.Likhitha";
    document.getElementById("menteelist9").innerText="22. D.Likhitha";
    document.getElementById("menteelist10").innerText="23. D.Naga Venkata Pravallika";
    document.getElementById("menteelist11").innerText="24. D.Rishitha Raj";
    document.getElementById("menteelist12").innerText="25. D.Sai Bindu";
    document.getElementById("menteelist13").innerText="";
    display=0;
    }
    else{
        div.style.display='none';
        display=1;
    }
}

function K_mentee(){
    if(display==1){
        div.style.display='block';
    document.getElementById("menteelist1").innerText="26. E.Swathi";
    document.getElementById("menteelist2").innerText="27. G.Yamunasree";
    document.getElementById("menteelist3").innerText="28. G.Deepika";
    document.getElementById("menteelist4").innerText="29. G.Durga";
    document.getElementById("menteelist5").innerText="30. G.Srilakshmi";
    document.getElementById("menteelist6").innerText="31. G.Jahnavi";
    document.getElementById("menteelist7").innerText="32. G.Deepika";
    document.getElementById("menteelist8").innerText="33. G.Jyothsna Devi";
    document.getElementById("menteelist9").innerText="34. I.Ramya";
    document.getElementById("menteelist10").innerText="35. J.Sravathi";
    document.getElementById("menteelist11").innerText="36. J.Jayaseela";
    document.getElementById("menteelist12").innerText="37. J.Omsai Manasa";
    display=0;
    }
    else{
        div.style.display='none';
        display=1;
    }
}

function V_mentee(){
    if(display==1){
        div.style.display='block';
    document.getElementById("menteelist1").innerText="38. K.Rajya Lakshmi";
    document.getElementById("menteelist2").innerText="39. K.Muni pavithra";
    document.getElementById("menteelist3").innerText="40. K.Mounika";
    document.getElementById("menteelist4").innerText="41. K.Laya";
    document.getElementById("menteelist5").innerText="42. K.Triveni";
    document.getElementById("menteelist6").innerText="43. K.Poornima";
    document.getElementById("menteelist7").innerText="44. K.Leela";
    document.getElementById("menteelist8").innerText="45. K.Chandana";
    document.getElementById("menteelist9").innerText="46. K.Jyothi";
    document.getElementById("menteelist10").innerText="47. K.Saritha";
    document.getElementById("menteelist11").innerText="48. K.Jayasri";
    document.getElementById("menteelist12").innerText="49. K.Anusha";
    display=0;
    }
    else{
        div.style.display='none';
        display=1;
    }
}

function B_mentee(){
    if(display==1){
        div.style.display='block';
    document.getElementById("menteelist1").innerText="50. K.Ramanandini";
    document.getElementById("menteelist2").innerText="51. L.Sravani";
    document.getElementById("menteelist3").innerText="52. M.R Janani";
    document.getElementById("menteelist4").innerText="53. M.Bhargavi";
    document.getElementById("menteelist5").innerText="54. M.Rekha";
    document.getElementById("menteelist6").innerText="55. M.Lohitha";
    document.getElementById("menteelist7").innerText="56. M.Naga Durga Gayathri";
    document.getElementById("menteelist8").innerText="57. M.Vasavi";
    document.getElementById("menteelist9").innerText="58. M.Sandhya Rani";
    document.getElementById("menteelist10").innerText="59. M.Vathsalya Devi";
    document.getElementById("menteelist11").innerText="60. M.Divya Sindhu";
    document.getElementById("menteelist12").innerText="61. M.Lakshmi";
    display=0;
    }
    else{
        div.style.display='none';
        display=1;
    }
}

function Muthu_mentee(){
    if(display==1){
        div.style.display='block';
    document.getElementById("menteelist1").innerText="62. M.Renu Sree";
    document.getElementById("menteelist2").innerText="63. M.Chandrakala";
    document.getElementById("menteelist3").innerText="64. M.Sai Supriya";
    document.getElementById("menteelist4").innerText="65. N.Anusha";
    document.getElementById("menteelist5").innerText="66. N.Sunandana Rani";
    document.getElementById("menteelist6").innerText="67. N.Yasaswini";
    document.getElementById("menteelist7").innerText="68. N.Gayathri Anitha Sri";
    document.getElementById("menteelist8").innerText="69. P.Vasanthi";
    document.getElementById("menteelist9").innerText="70. P.Nomika";
    document.getElementById("menteelist10").innerText="71. P.Manamma";
    document.getElementById("menteelist11").innerText="72. P.Pujitha";
    document.getElementById("menteelist12").innerText="73. P.Nandini";
    display=0;
    }
    else{
        div.style.display='none';
        display=1;
    }
}

function P_mentee(){
    if(display==1){
        div.style.display='block';
    document.getElementById("menteelist1").innerText="74. P.Keerthi";
    document.getElementById("menteelist2").innerText="75. P.Venkata Naga Devaki";
    document.getElementById("menteelist3").innerText="76. P.Saraswathi";
    document.getElementById("menteelist4").innerText="77. P.Surekha";
    document.getElementById("menteelist5").innerText="78. P.Yaminisudha";
    document.getElementById("menteelist6").innerText="79. R.Jyoshna";
    document.getElementById("menteelist7").innerText="80. R.Sravanthi";
    document.getElementById("menteelist8").innerText="81. S.Dakshayani";
    document.getElementById("menteelist9").innerText="82. S.Usha Kalyani";
    document.getElementById("menteelist10").innerText="83. Sk.Habeeb";
    document.getElementById("menteelist11").innerText="84. SK.Rizvana";
    document.getElementById("menteelist12").innerText="85. SK.Hussain Beebi";
    document.getElementById("menteelist13").innerText="86. S.Mounika";
    display=0;
    }
    else{
        div.style.display='none';
        display=1;
    }
}

function N_mentee(){
    if(display==1){
        div.style.display='block';
    document.getElementById("menteelist1").innerText="87. S.Keerthi Priya";
    document.getElementById("menteelist2").innerText="88. S.Sadvi";
    document.getElementById("menteelist3").innerText="89. S.Roja";
    document.getElementById("menteelist4").innerText="90. S.Pallavi";
    document.getElementById("menteelist5").innerText="91. S.Dhanuswi";
    document.getElementById("menteelist6").innerText="92. S.Bindu Sree";
    document.getElementById("menteelist7").innerText="93. T.Pavitra";
    document.getElementById("menteelist8").innerText="94. T.Neha Sri";
    document.getElementById("menteelist9").innerText="95. T.Sandhya";
    document.getElementById("menteelist10").innerText="96. V.Mounika";
    document.getElementById("menteelist11").innerText="97. V.Chathurya";
    document.getElementById("menteelist12").innerText="98. A.Varshitha";
    document.getElementById("menteelist13").innerText="";
    display=0;
    }
    else{
        div.style.display='none';
        display=1;
    }
}

function C_mentee(){
    if(display==1){
        div.style.display='block';
    document.getElementById("menteelist1").innerText="99. V.Chandrika";
    document.getElementById("menteelist2").innerText="100. Y.Usha Rani";
    document.getElementById("menteelist3").innerText="101. Y.Vaishnavi";
    document.getElementById("menteelist4").innerText="102. B.Kiranmayee";
    document.getElementById("menteelist5").innerText="103. G.Greeshma";
    document.getElementById("menteelist6").innerText="104. K.Geetha Priya";
    document.getElementById("menteelist7").innerText="105. K.Meghana";
    document.getElementById("menteelist8").innerText="106. P.Neethu";
    document.getElementById("menteelist9").innerText="107. P.Udaya Sree";
    document.getElementById("menteelist10").innerText="108. S.Mounika";
    document.getElementById("menteelist11").innerText="109. U.Uma";
    document.getElementById("menteelist12").innerText="110. P.Venkata Malleswri";
    display=0;
    }
    else{
        div.style.display='none';
        display=1;
    }
}

var div2=document.getElementById('mentee_m');
var display=0;

function mentee(){
    if(display==1){
        div2.style.display='block';
    document.getElementById("leave_form").innerText="Leave Form";
    document.getElementById("minor_project").innerText="Minor Project";
    document.getElementById("major_project").innerText="Major Project";
    document.getElementById("application").innerText="Applicaion Form";
    display=0;
    }
    else{
        div2.style.display='none';
        display=1;
    }
}

