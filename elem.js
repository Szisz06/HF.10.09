$(document).ready(function () {
  class Elem {
    constructor() {
      this.div = $("<div></div>");
      this.p = $("<p></p>");
      this.div.append(this.p);

      this.div.click(() => {
        this.p.text("X");
      });

      $("article").append(this.div);
    }
  }

  const elem = new Elem();
});
