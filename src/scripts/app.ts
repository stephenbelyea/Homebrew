/// <reference path="../../typings/main.d.ts"/>

class Helpers {
  footerDate() {
    let date = new Date();
    document.getElementById("year").innerHTML = date.getFullYear().toString();
  }
  pageInit() {
    this.footerDate();
  }
}

const h = new Helpers();
h.pageInit();
