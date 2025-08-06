// ==================================================
// * Project Name   :

// * File           :  JS Base
// * Version        :  1.0
// * Last change    :  24 june 2025, tuesday
// * Author         :  
// ==================================================

(function ($) {
  ("use strict");

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

  // Wait for the DOM to be fully loaded
  document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll(".customize-menu-item");
    const optionsPanel = document.querySelector(".app-customize-area");
    const backButton = document.querySelector(".sidebar-customize-back");

    // Add 'active' class when any menu item is clicked
    menuItems.forEach((item) => {
      item.addEventListener("click", function () {
        optionsPanel.classList.add("active");
      });
    });

    // Remove 'active' class when back button is clicked
    backButton.addEventListener("click", function () {
      optionsPanel.classList.remove("active");
    });
  });
})(jQuery);
