/// <reference path="../../typings/main.d.ts"/>

class Test {
  constructor(){
    console.log("hello");
  };
}

jQuery(document).ready(function($){
  let test = new Test();
});
