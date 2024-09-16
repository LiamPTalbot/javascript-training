function print_square(num) {
    console.log(num * num);
  }
  
  function multiplier(a, b) {
    return a * b;
  }
  
  function add_strings(str1, str2) {
    return str1 + str2;
  }
  
  const grocery_list = ['apples', 'bananas', 'carrots'];
  
  // Export the functions and objects, but don't call them
  module.exports = {
    print_square,
    multiplier,
    add_strings,
    grocery_list
  };
  
  //when you call them in another file intelisense will auto import them with the .require method