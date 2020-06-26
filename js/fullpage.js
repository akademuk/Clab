$(document).ready(function () {
  $("#fullpage").fullpage({
    anchors: ["block1", "block2", "block3", "block4", "block5"],
    menu: "#menu",
    css3: true,
    navigation: true,
    navigationPosition: "left",
  });
});

$(document).on("click", "#moveUp", function () {
  $.fn.fullpage.moveSectionUp();
});
$(document).on("click", "#moveDown", function () {
  $.fn.fullpage.moveSectionDown();
});
