const body = $("body");
const about = $("#about");
const contact = $("#contact");
const service = $("#service");
const project = $("#project");
const home = $("#home");
const main = $(".main");
const main1 = $(".main1");
const main2 = $(".main2");
const main3 = $(".main3");
const main4 = $(".main4");
main1.hide();
main2.hide();
main3.hide();
main4.hide();

about.on("click", () => {
  main.hide();
  main1.show();
  main2.hide();
  main3.hide();
  main4.hide();
});
home.on("click", () => {
  main.show();
  main1.hide();
  main2.hide();
  main3.hide();
  main4.hide();
});
service.on("click", () => {
  main.hide();
  main1.hide();
  main2.show();
  main3.hide();
  main4.hide();
});

project.on("click", () => {
  main.hide();
  main1.hide();
  main2.hide();
  main3.show();
  main4.hide();
});

contact.on("click", () => {
  main.hide();
  main1.hide();
  main2.hide();
  main3.hide();
  main4.show();
});
