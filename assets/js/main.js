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
    const backButton = document.querySelector(".app-customize-back");

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

  // Initialize file upload
  $(document).on("change", 'input[type="file"]', function (event) {
    handleFileUpload(event.target.files[0], $(this));
  });

  $(document).on("click", ".file-upload-close", function () {
    var $button = $(this),
      $uploadWrapper = $button.closest(".upload-custom-file"),
      $fileInput = $uploadWrapper.find('input[type="file"]'),
      $label = $fileInput.next("label"),
      $labelText = $label.find("span:first"),
      $typeFileText = $label.find(".type-file-text"),
      labelDefault = "Drag and drop a file here or click to select a file";

    resetUpload($fileInput, $label, $labelText, $typeFileText, labelDefault);
  });

  // Drag & Drop Events
  $(document).on("dragover", ".drop-zone", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).addClass("dragover");
  });

  $(document).on("dragleave", ".drop-zone", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass("dragover");
  });

  $(document).on("drop", ".drop-zone", function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).removeClass("dragover");

    var files = e.originalEvent.dataTransfer.files;
    if (files.length > 0) {
      var $input = $(this).siblings('input[type="file"]');
      handleFileUpload(files[0], $input);
    }
  });

  // Handle file upload logic
  function handleFileUpload(file, $fileInput) {
    var $label = $fileInput.next("label"),
      $labelText = $label.find("span:first"),
      $typeFileText = $label.find(".type-file-text"),
      labelDefault = "Drag and drop a file here or click to select a file",
      fileType = file ? file.type.split("/")[0] : null,
      tmppath = file ? URL.createObjectURL(file) : null;

    if (file) {
      if (fileType === "image") {
        $label
          .addClass("file-ok")
          .css("background-image", "url(" + tmppath + ")");
      } else {
        $label.addClass("file-ok").css("background-image", "none");
      }
      $labelText.text(file.name);
      $typeFileText.hide();
      $label.siblings(".file-upload-close").show();
    } else {
      resetUpload($fileInput, $label, $labelText, $typeFileText, labelDefault);
    }
  }

  // Reset upload
  function resetUpload(
    $fileInput,
    $label,
    $labelText,
    $typeFileText,
    labelDefault
  ) {
    $fileInput.val("");
    $label.removeClass("file-ok").css("background-image", "none");
    $labelText.text(labelDefault);
    $typeFileText.show();
    $label.siblings(".file-upload-close").hide();
  }
})(jQuery);
