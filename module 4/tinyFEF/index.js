// Configure the globally accessible object variable "tinyfef"

var tinyfef = {

    createElement: function(type, options, children){
      // Create default value for options
      options = options || {};
      // Create an element of the type passed in
      var element = document.createElement(type);
      // Iterate over keys of options object and create attributes
      Object.keys(options).forEach(function(key, index){
        element.setAttribute(key, options[key]);
      });
      // Make sure that all arguments after options
      // get placed into an array to iterate over
      children = Array.isArray(children) ? children : [].slice.call(arguments, 2);
      children.forEach(function(child, index){
        // Check if element/object
        if (typeof child === 'object') {
          element.appendChild(child);
        } else {
          // otherwise create text node because it's a string
          var textnode = document.createTextNode(child);
          element.appendChild(textnode);
        }
      })
  
      return element;
    },
  
    about: 'tinyFEF 1.0.0'
  
  };