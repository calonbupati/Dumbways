const array = ([19, 22, 3, 28, 26, 17, 18, 4, 28, 0]).reduceRight(
    function(previous, current) {
    previous.push(current);
    return previous;
  }, []);
  
  console.log(array);