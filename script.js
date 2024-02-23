var row = null;
        function myfunction(){
            var dataEntered = retrieveData();
            var readData = readingData(dataEntered);
            if(dataEntered == false){
                msg.innerHTML="please enter Data"
            }else{
                if(row == null){
            insert(readData);
            }else{
            update();
            }
            
            }
            document.getElementById("form").reset(); 

        }
        function retrieveData(){
            
        var email=document.getElementById("h1id").value;
        var pw = document.getElementById("h2id").value;
            
            var arr=[email,pw];
            if(arr.includes("")){
                return false;
            }else{return arr}
            
        }
        function readingData(dataEntered){
            var e=localStorage.setItem("email1",dataEntered[0]);
            var p=localStorage.setItem("password1",dataEntered[1]);

            var e1=localStorage.getItem("email1");
            var p1=localStorage.getItem("password1");
            var arr =[e1,p1];
            return arr;
        }
        function insert(readData){
            var table = document.getElementById("table1");
            var row = table.insertRow();
           var cell1 = row.insertCell(0);
           var cell2 = row.insertCell(1);
           var cell3 =row.insertCell(2);
           cell1.innerHTML= readData[0];
           cell2.innerHTML= readData[1];
           cell3.innerHTML=`<button onclick="Edit(this)">Edit</button>
                            <button onclick="Delete(this)">Delete</button>`
        }
        function Edit(x){
              row = x.parentElement.parentElement;
            document.getElementById("h1id").value = row.cells[0].innerHTML;
            document.getElementById("h2id").value = row.cells[1].innerHTML;
        }
        function update(){
            row.cells[0].innerHTML=document.getElementById("h1id").value;
            row.cells[1].innerHTML=document.getElementById("h2id").value;
            row = null;
        }
        function Delete(y){
            row = y.parentElement.parentElement;
            document.getElementById("mytable").deleteRow(row.rowIndex);
        }       