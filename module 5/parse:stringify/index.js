//Exercise 1: Turn a string into an object
var data = JSON.parse('{"menu":{"id":"file","value":"File","popup":[{"value":"New","onclick":"CreateNewDoc()"},{"value":"Open","onclick":"OpenDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}}');
//return the object
data
 
//turn the object back into a string
var data = JSON.stringify({"menu":{"id":"file","value":"File","popup":[{"value":"New","onclick":"CreateNewDoc()"},{"value":"Open","onclick":"OpenDoc()"},{"value":"Close","onclick":"CloseDoc()"}]}});
//return the string
data

//Exercise 2
var obj = {
    "counts": "[150, 12, 4, 37]",
    "start": "5:00",
    "end": "8:00",
  }

