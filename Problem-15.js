function createStringLogger(strings) {
    let currentIndex = 0;

    return function() {
      if (currentIndex >= strings.length) {
        console.log("All strings have been logged.");
        return;
      }
      for (let i = currentIndex; i < strings.length; i++) {
        console.log(strings[i]);
      }
      currentIndex = strings.length;
    };
  }
  
  const logStrings = createStringLogger(["Hello", "World", "This", "Is", "JavaScript"]);
  
  logStrings(); 
  logStrings();