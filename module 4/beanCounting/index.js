function countBs(s) {
    let count = 0; 
    for ( i = 0; i < s.length; i += 1) {
      if (s.charAt(i) === "B")
        count += 1;
    }
    return count;
  }
  
  function countChar(s, c) {
    let count = 0; 
    for (var i = 0; i < s.length; i += 1) {
      if (s.charAt(i) === c)
        count += 1;
    }
    return count;
  }
  
  console.log(countBs("BBBBBBBBBC"));
  
  console.log(countChar("kakkerlak", "k"));
  