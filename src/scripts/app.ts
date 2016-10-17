/// <reference path="../../typings/main.d.ts"/>

class Test {
  constructor(){
    console.log("hello");
  };
}


document.getElementById("year").innerHTML = (new Date()).getFullYear().toString();

jQuery(document).ready(function($){
  let test = new Test();
});
