var L1=label("label","for","firstName","FirstName");
var br1=linebreaker("br");
var I1=inputelement("input","type","firstName","id","firstName");
var br2=linebreaker("br");
document.body.append(L1,br1,I1,br2);

var L1=label("label","for","lastName","LastName");
var br1=linebreaker("br");
var I1=inputelement("input","type","lastName","id","lastName");
var br2=linebreaker("br");
document.body.append(L1,br1,I1,br2);

var L1=label("label","for","midleName","MidleName");
var br1=linebreaker("br");
var I1=inputelement("input","type","midleName","id","midleName");
var br2=linebreaker("br");
document.body.append(L1,br1,I1,br2);

var L1=label("label","for","email","Email");
var br1=linebreaker("br");
var I1=inputelement("input","type","email","id","email");
var br2=linebreaker("br");
document.body.append(L1,br1,I1,br2);

var L1=label("label","for","contact","Contact");
var br1=linebreaker("br");
var I1=inputelement("input","type","contact","id","contact");
var br2=linebreaker("br");
document.body.append(L1,br1,I1,br2);

var L1=label("label","for","place","Place");
var br1=linebreaker("br");
var I1=inputelement("input","type","place","id","place");
var br2=linebreaker("br");
document.body.append(L1,br1,I1,br2);


function label(tagname,attrname,attrvalue,content){
var ele=document.createElement(tagname);
 ele.setAttribute(attrname,attrvalue);
 ele.innerHTML=content;
 return ele;
 
}
function linebreaker(element){
var ele=document.createElement(element);
return ele;
}
function inputelement(tagname,attrname,attrvalue,attrname1,attrvalue1){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.setAttribute(attrname1,attrvalue1);
    return ele;
}
