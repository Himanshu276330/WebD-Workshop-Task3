//Sample notes
var note1 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note2 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note3 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note4 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note5 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note6 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note7 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note8 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note9 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note10 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note10 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note11 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note12 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note13 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note14 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}
var note15 = { title:"sample title",content:"Jai WebD👌👌👌👌👌"}

var arr = [];
arr.push(note1);arr.push(note2);arr.push(note3);arr.push(note4);arr.push(note5);
arr.push(note6);arr.push(note7);arr.push(note8);arr.push(note9);arr.push(note10);
arr.push(note11);arr.push(note12);arr.push(note13);arr.push(note14);arr.push(note15);

// ----------------------------------------------Jai WebD---------------------------------------------------------------------------

var ins = document.getElementById("insert");
var id_arr = [0,1];

for(var i=0;i<arr.length;i++){
    var show="<div Id="+i+" class='note'><h1>"+arr[i].title+"</h1><p>"+arr[i].content+"</p><button name="+i+" onclick='removeFun(name)' class='delete' >X</button></div>";
    //console.log(show);
    ins.insertAdjacentHTML("afterend",show);
}

var btn = document.getElementById("create-note");
btn.onclick = function(){
    var title=document.getElementById("title-input").value;
    var note=document.getElementById("note-input").value;
    document.getElementById("title-input").value="";
    document.getElementById("note-input").value="";
    
    var idd=-1;
    if(id_arr.length==0){
        idd=0;
        id_arr.push(0);
    }else{
        for(var i=0;i<id_arr.length;i++){
            if(id_arr[i]===-1) { id_arr[i]=i; idd=i; break;}
        }
        if(idd===-1) {idd=id_arr.length; id_arr.push(idd);}
    }

    if(title.length!=0 && note.length!=0){
        var show="<div id="+idd+" class='note'><h1>"+title+"</h1><p>"+note+"</p><button name="+idd+" onclick='removeFun(name)' class='delete' >X</button></div>";
        ins.insertAdjacentHTML("afterend",show); 
    } 
    else{
        alert(" Please Enter title and notes");
    }
    //console.log(show);

}

function removeFun(param){
    //console.log(param);

    var myobf=document.getElementById(param);
    console.log(myobf);
    if(myobf!=null){
        myobf.remove();
        for(var i=0;i<id_arr.length;i++){
            if(id_arr[i]==param){ id_arr[i]=-1; break;}
        }
        // for(var i=0;i<id_arr.length;i++){
        //     console.log(id_arr[i]);
        // }
    }
}




// const numArr = [23, 45, 67, 89];

// // remove element 45
// // at index 1 and
// // pass 1 as second argument
// // to tell method to
// // delete 1 element
// from the starting index
// numArr.splice(1, 1);

