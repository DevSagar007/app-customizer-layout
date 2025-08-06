// ==================================================
// * Project Name   : App Customizer layout
// * File           :  JS Base
// * Version        :  1.0
// * Last change    :  24 june 2025, tuesday
// * Author         :
// ==================================================

(function ($) {
  ("use strict");

  // Initialize notice show toggle
  $(".notice-show-toggle").click(function () {
    let noticeText = $(".notice-text");

    if (noticeText.css("display") === "none") {
      noticeText.css("display", "flex").hide();
      noticeText.stop().slideDown("slow", function () {
        $(this).css("height", "auto");
      });
    } else {
      noticeText.stop().slideUp("slow", function () {
        $(this).css("display", "none");
      });
    }
  });

  // Initialize app layout js
  document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".app-sidebar-menu-item");
    const optionsPanel = document.querySelector(".app-customize-area");
    const backButton = document.querySelector(".sidebar-customize-back");

    // Add 'active' class
    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        optionsPanel.classList.add("active");
      });
    });

    // Remove 'active' class
    backButton.addEventListener("click", function () {
      optionsPanel.classList.remove("active");
    });
  });
})(jQuery);
