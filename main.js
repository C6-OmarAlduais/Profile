const body = $("body");
const about = $("#about");
const contact = $("#contact");
const service = $("#service");
const home = $("#home");
const main = $(".main");
const main1 = $(".main1");
main1.hide()

about.on
  ("click",
  () => {
    main.hide();
    main1.show()
  });
home.on("click", () => {
  main.show();
  main1.hide()
});
