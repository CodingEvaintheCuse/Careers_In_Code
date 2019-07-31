var responsePromise4 = fetch('http://module5.tk/fruit')
undefined
responsePromise4.then(function (response){
    console.log('STATUS', response.status);
    response.text().then(function (text) {
        console.log('TEXT:', text);
    
var myDomNode = document.createElement('p');
    myDomNode.innerHTML = response.status;
    document.body.appendChild(myDomNode);

});
});