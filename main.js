const body = $("body");
const about = $("#about");
const contact = $("#contact");
const service = $("#service");
const home = $("#home");
const main = $(".main");

about.on
  ("click",
  () => {
    main.hide();
  });
home.on("click", () => {
  main.show();
});
