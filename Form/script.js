// function getdetails(){
//     let Firstname = document.getElementById('Firstname').value;
//     console.log("FirstName:",Firstname)
//     let Middlename = document.getElementById('Middlename').value;
//     console.log("MiddleName:",Middlename)
//     let Lastname = document.getElementById('Lastname').value;
//     console.log("Lastname:",Lastname)
//     let email = document.getElementById('email').value;
//     console.log("Email:",email)
// }


function elementcreation(tagname,attrname,attrvalue,textvalue){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=textvalue;
    return ele;
}





function br(tagname){
    var brk = document.createElement(tagname);
    return brk;
}


function labelcreation(forAttrValue,textValue){
    var label = document.createElement("label");
    label.setAttribute("for",forAttrValue);
    label.innerText=textValue;
    return label;
}

// function radioinput(idName,typename){
    // var input = document.createElement("input");
    // input.setAttribute("id",idName);
    // input.setAttribute("class","form-check form-check-inline");
    // input.setAttribute("type",typename);
    // input.setAttribute("value","male");
    // input.setAttribute("name","inlineRadioOptions");
    // return input;
// }

function check(idName,typename){
    var input = document.createElement("input");
    input.setAttribute("id",idName);
    input.setAttribute("class","form-check form-check-inline");
    input.setAttribute("type",typename);
    input.setAttribute("value",idName)
    input.setAttribute("name","inlineRadioOptions");
    return input;
}

function checkinput(labelName,typename,idname1,idname2,idname3,idname4,idname5){
    var label = labelcreation("Foodtype",labelName);
    var div = document.createElement("div")
    var check1= check(idname1,typename);
    var bk = br("br");
    let label1 = labelcreation("idname1","idname1")
    label1.innerHTML=idname1
    label1.style.padding="0 10px 0 0";

    var check2= check(idname2,typename);
   
    let label2 = labelcreation("idname2","idname2")
    label2.innerHTML=idname2
    label2.style.padding="0 10px 0 0";

    var check3= check(idname3,typename);
  
    let label3 = labelcreation("idname3","idname3")
    label3.innerHTML=idname3
    label3.style.padding="0 10px 0 0";

    var check4= check(idname4,typename);
    
    let label4 = labelcreation("idname4","idname4")
    label4.innerHTML=idname4
    label4.style.padding="0 10px 0 0";

    var check5= check(idname5,typename);
    
    let label5 = labelcreation("idname5","idname5")
    label5.innerHTML=idname5
    label5.style.padding="0 10px 0 0";
    div.append(label,bk,check1,label1,check2,label2,check3,label3,check4,label4,check5,label5)
    form.append(div)
}

function submit(){
    var submit = document.createElement("BUTTON")
    submit.setAttribute("class","btn btn-primary");
    submit.setAttribute("type","button")
    submit.setAttribute("onclick","foo()")
    submit.innerHTML="Submit"
    form.append(submit)
}



function radiolabelinput(labelName,typename){
    // var label = labelcreation("",labelName);
    // var radio1= radioinput(idname1,typename);
    // var bk = br("br");
    // let label1 = labelcreation("idname1","idname1")

    // var radio2= radioinput(idname2,typename)
    // let label2 = labelcreation("idname2","idname2")

    // form.append(label,bk,radio1,label1,radio2,label2)
    var label = labelcreation("",labelName);
    var div = document.createElement("div")
    div.setAttribute("id","inlineRadioOptions")
    var input1 = document.createElement("input");
    input1.setAttribute("id","male");
    input1.setAttribute("class","form-check form-check-inline");
    input1.setAttribute("type",typename);
    input1.setAttribute("value","male");
    input1.setAttribute("name","inlineRadioOptions");
    var bk = br("br");
    let label1 = labelcreation("Male","Male")
    var input2 = document.createElement("input");
    label1.innerHTML="Male"
    label1.style.padding="0 10px 0 0";

    input2.setAttribute("id","female");
    input2.setAttribute("class","form-check form-check-inline");
    input2.setAttribute("type",typename);
    input2.setAttribute("value","female");
    input2.setAttribute("name","inlineRadioOptions");
    let label2 = labelcreation("Female","Female")
    label2.innerHTML="Female"
    label2.style.padding="0 10px 0 0";
    div.append(label,bk,input1,label1,input2,label2)
    form.append(div)
    
}

function labelinputcreation(forAttrValue,typeAttrValue,classAttrValue,textValue){
var label = labelcreation(forAttrValue,textValue);
var input = document.createElement("input");
var bk=br("br");
input.setAttribute("class",classAttrValue)
// input.setAttribute("placeholder","firstname")
input.setAttribute("name","inlineRadioOptions")
input.setAttribute("type",typeAttrValue);
input.setAttribute("id",forAttrValue);
input.style.marginBottom="10px";
input.setAttribute("placeholder",`Enter the ${forAttrValue}`)
form.append(label,bk,input);
}


var div1 = elementcreation("div","class","container-fluid","");
var div2 = elementcreation("div","class","row","");
var div3 = elementcreation("div","class","col-sm-3","");
var divodd = elementcreation("div","class","col-sm-1","");

var div4 = elementcreation("div","class","col-sm-8","");


var heading1 = document.createElement("h2")
heading1.innerHTML="Form Submission"
var heading2 = document.createElement("h2")
heading2.innerHTML="Temporary Database Table"
heading2.setAttribute("class","text-center")
var form = document.createElement("form");
form.setAttribute("id","formvalue")
labelinputcreation("First Name","text","form-control","First Name:");
labelinputcreation("Last Name","text","form-control","Last Name:");
labelinputcreation("Address Line1","text","form-control","Address Line1:");
labelinputcreation("Address Line2","text","form-control","Address Line2:");
labelinputcreation("Pincode","text","form-control","PIN:");
radiolabelinput("Gender:","radio")
checkinput("Food Type:","checkbox","VEG","Non-VEG","Chinese","Arabian","Italian")
labelinputcreation("State","text","form-control","State:");
labelinputcreation("Country","text","form-control","Country:");
submit();

////////////////////////////////////////////////


// var obj=[
//     {
//         id : "001",
//         name : "apple",
//         category : "fruit",
//         color : "red"
//     },
//     {
//         id : "002",
//         name : "melon",
//         category : "fruit",
//         color : "green"
//     },
//     {
//         id : "003",
//         name : "banana",
//         category : "fruit",
//         color : "yellow"
//     }
// ]

var table=document.createElement("table");
table.setAttribute("class","table");

var thead=document.createElement("thead");
thead.setAttribute("class","thead-dark")
var trhead=document.createElement("tr");


function tablehead(tablename){
    var th=document.createElement("th");
    th.setAttribute("scope","col");
    th.innerHTML=tablename;
    trhead.append(th);
}
tablehead("First Name");
tablehead("Last Name")

tablehead("Address")


tablehead("Pincode")

tablehead("Gender")

tablehead("Food type")
tablehead("State")

tablehead("Country")




thead.append(trhead);








table.append(thead)
div4.append(heading2,table);




// function createtrtd(tagname,content){
// let ele=document.createElement(tagname);
// ele.innerHTML=content;
// return ele;
// }





div3.append(heading1,form);
div2.append(div3,divodd,div4);


div3.style.height="135vh";

div1.append(div2)
div1.style.background="#e6e9ed"
document.body.append(div1);




let obj = {}

function foo(){

    obj.firstname=(document.getElementById("First Name").value)
    obj.lastname=(document.getElementById("Last Name").value)
    var addr=[]
    addr.push(document.getElementById("Address Line1").value)
    addr.push(document.getElementById("Address Line2").value)
    obj.address=addr;
    obj.pincode=(document.getElementById("Pincode").value)
    obj.state=(document.getElementById("State").value)
    obj.country=(document.getElementById("Country").value)
    if (document.getElementById('male').checked) {
        obj.gender=(document.getElementById('male').value);
      }else if(document.getElementById('female').checked){
        obj.gender=(document.getElementById('female').value);
      }
      var checked =[];
      if(document.getElementById("VEG").checked){
        checked.push(document.getElementById("VEG").value)
      };
      if(document.getElementById("Non-VEG").checked){
        checked.push(document.getElementById("Non-VEG").value)
      };
      if(document.getElementById("Chinese").checked){
        checked.push(document.getElementById("Chinese").value)
      };
      if(document.getElementById("Arabian").checked){
        checked.push(document.getElementById("Arabian").value)
      };
      if(document.getElementById("Italian").checked){
        checked.push(document.getElementById("Italian").value)
      };
     obj.foods=checked;

     console.log(obj)
     var tbody=document.createElement("tbody");
var trbody=document.createElement("tr");
var td1=document.createElement("td");
 td1.innerHTML=obj.firstname
var td2=document.createElement("td");
 td2.innerHTML=obj.lastname
 var td3=document.createElement("td");
 td3.innerHTML=obj.address
 var td4=document.createElement("td");
 td4.innerHTML=obj.pincode
 var td5=document.createElement("td");
 td5.innerHTML=obj.gender
 var td6=document.createElement("td");
 td6.innerHTML=obj.foods
 var td7=document.createElement("td");
 td7.innerHTML=obj.state
 var td8=document.createElement("td");
 td8.innerHTML=obj.country
 
trbody.append(td1,td2,td3,td4,td5,td6,td7,td8);
tbody.append(trbody);



table.append(thead,tbody)

var frm = document.getElementById("formvalue");
frm.reset();
    
}





