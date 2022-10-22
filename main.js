const body = $("body");
const about = $("#about");
const contact = $("#contact");

const project = $("#project");
const home = $("#home");
const dark = $("#dark");
const light = $("#light");

const main = $(".main");
const main1 = $(".main1");

const main3 = $(".main3");
const main4 = $(".main4");
main1.hide();
dark.toggle()

main3.hide();
main4.hide();


about.on("click", () => {
  main.hide();
  main1.show();
//   main2.hide();
  main3.hide();
  main4.hide();
});
home.on("click", () => {
  main.show();
  main1.hide();
//   main2.hide();
  main3.hide();
  main4.hide();
});


project.on("click", () => {
  main.hide();
  main1.hide();
//   main2.hide();
  main3.show();
  main4.hide();
});

dark.on("click", () => {
  dark.toggle();
  light.toggle();
  
    if( $( "body" ).hasClass( "light" )) {
        $( "body" ).removeClass( "light" );
        $( ".change" ).text( "OFF" );
    } else {
        $( "body" ).addClass( "light" );
        $( ".change" ).text( "ON" );
    }

});

light.on("click", () => {
    dark.toggle();
    light.toggle();
    if( $( "body" ).hasClass( "light" )) {
        $( "body" ).removeClass( "light" );
        $( ".change" ).text( "OFF" );
    } else {
        $( "body" ).addClass( "light" );
        $( ".change" ).text( "ON" );
    }
  });