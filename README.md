<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SCHOOL REORT CARD</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <section id="container">
        <h1>Ol'bharms Height School</h1>
        <p class="tob">Creche, Nursery, primary school<br> 27, Ifelodun street, off Otubu Bus/Stop, Agege<br> Telehone 090023998155, 091050345793</p>
        <div class="row">
            <div class="left">
                    <h2>Student Bio</h2>
                    <div id="row">
                        <div id="column">
                            <label for="name">NAME</label><br>
                            <input type="text" id="name" name="fname" placeholder="FULL NAME"><br>
                            
                            <label for="card">ID CARD NO</label><br>
                            <input type="text" id="card" name="card" placeholder="B5/23/02"><br>
                          
                            <label for="age">AGE</label><br>
                            <input type="text" id="age" name="age"><br>
                        </div>   
                        <div id="column">
                            <label for="sex">SEX</label><br>
                            <input type="text" id="sex" name="sex"><br>
                          
                            <label for="clnumber">NO IN CLASS</label><br>
                            <input type="text" id="clnumber" name="clnumber"><br>
                            
                            <label for="class">CLASS</label><br>
                            <input type="text" id="class" name="class"><br>
                        </div>
                    </div>
                    <label for="term">TERM</label><br>
                    <input type="text" id="term" name="term"><br>
                    <input type="button" id="button" onclick="AddRow()" value="ADD">
                </div>
            <div class="left">
                <h2>Vacation/Resumption</h2>
                <label for="t-begins">TERM BEGINS</label>
                <input type="text" id="t-begins" name="t-begins">
            
                <br>
            
                <label for="vacation">DATE OF VACATION</label>
                <input type="text" id="vacation" name="vacation">

                <br>

                <label for="absent">TIMES ABSENT</label>
                <input type="text" id="absent" name="absent">
            
                <br>
            
                <label for="present">TIMES PRESENT</label>
                <input type="text" id="present" name="present">

                <br>

                <label for="opened">TIMES OPENED</label>
                <input type="text" id="opened" name="opened">
            </div>
        </div>

       


    
        <div class="show">     
                <table border="2">
                    <thead>
                        <th colspan="2">SUBJECT</th>
                        <td colspan="2">MARKS OBTAINED</td>
                        <td>TOTAL SCORE<td>
                        <td rowspan="2">CLASS AVG SCORE<td>
                        <th rowspan="2">GRADE</th>
                        <th rowspan="2">REMARKS</th>
                    

                        <tr>
                            <th>S/N</th>
                            <th>MAXIMUM MARKS</th>
                            <th>40</th>
                            <th>60</th>
                            <th>100</th>
                            <th></th>
                            <th></th>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mathematics</td>
                            <td>35</td>
                            <td>40</td>
                            
                        </tr>
                        <tr>
                            <td>2 </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                        </tr>
                    </tfoot>
                    

                </table>
        </div>

    </section>
   
    <script>
        var list1=[];
        var list2=[];
        var list3=[];
        var list4=[];
        var list5=[];
        var list6=[];
        var list7=[];
        var list8=[];
        var list9=[];
        var list10=[];
        var list11=[];
        var list12=[];
        var x=1;
        var x=0;

        function AddRow(){
            var AddROwn=document.getElementById('show');
            var NewRow= AddRwn.inserRow(n);

            list1[x] = document.getElenebtById("name").value;

            list2[x] = document.getElenebtById("card").value;

            list3[x] = document.getElenebtById("age").value;

            list4[x] = document.getElenebtById("sex").value;

            list5[x] = document.getElenebtById("clnumber").value;

            list6[x] = document.getElenebtById("class").value;

            list7[x] = document.getElenebtById("term").value;

            list8[x] = document.getElenebtById("t-begins").value;

            list9[x] = document.getElenebtById("vacation").value;

            list10[x] = document.getElenebtById("absent").value;

            list11[x] = document.getElenebtById("present").value;

            list12[x] = document.getElenebtById("opened").value;

            var cel1 = NewRow.insertcell(0);
            var cel2 = NewRow.insertcell(1);
            var cel3 = NewRow.insertcell(2);
            var cel5 = NewRow.insertcell(3);
            var cel5 = NewRow.insertcell(4);
            var cel6 = NewRow.insertcell(5);
            var cel7 = NewRow.insertcell(6);
            var cel8 = NewRow.insertcell(7);
            var cel9 = NewRow.insertcell(8);
            var cel10 = NewRow.insertcell(9);
            var cel11 = NewRow.insertcell(10);
            var cel12 = NewRow.insertcell(11);
            cel1.innerHTML = list1[x];
            cel2.innerHTML = list2[x];
            cel3.innerHTML = list3[x];
            cel4.innerHTML = list4[x];
            cel5.innerHTML = list5[x];
            cel6.innerHTML = list6[x];
            cel7.innerHTML = list7[x];
            cel8.innerHTML = list8[x];
            cel9.innerHTML = list9[x];
            cel10.innerHTML = list10[x];
            cel11.innerHTML = list11[x];
            cel12.innerHTML = list12[x];

            n++;
            x++;
        }
    </script>
</body>
</html>
