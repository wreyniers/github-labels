/*
  Go on your labels page (https://github.com/user/repo/labels)

  Edit the following label array
  or
  Use this snippet to export github labels (https://gist.github.com/MoOx/93c2853fee760f42d97f)
  and replace it

  Paste this script in your console
  Press Enter!!
*/

[
  {
    name: "enhancement",
    color: "38761D"
  },
  {
    name: "bug",
    color: "F9CB9C"
  },
  {
    name: "hotfix",
    color: "F6B26B"
  },
  {
    name: "warranty",
    color: "B45F06"
  },
  {
    name: "planning",
    color: "CFE2F3"
  },
  {
    name: "needs estimate",
    color: "A4C2F4"
  },
  {
    name: "design",
    color: "6D9EEB"
  },
  {
    name: "development",
    color: "3C78D8"
  },
  {
    name: "qa",
    color: "bbd0f1"
  },
  {
    name: "pass",
    color: "5fc831"
  },
  {
    name: "fail",
    color: "FF0000"
  },
  {
    name: "front end",
    color: "83a9e6"
  },
  {
    name: "high priority",
    color: "F1C232"
  },
  {
    name: "requires client",
    color: "E06666"
  },
  {
    name: "blocked",
    color: "FF0000"
  },
  {
    name: "out of scope",
    color: "CC0000"
  },
  {
    name: "duplicate",
    color: "D9D9D9"
  },
  {
    name: "staging",
    color: "edfc1b"
  }
].forEach(function(label) {
  addLabel(label);
});

function updateLabel(label) {
  var flag = false;
  [].slice
    .call(document.querySelectorAll(".labels-list-item"))
    .forEach(function(element) {
      if (
        element.querySelector(".label-link").textContent.trim() === label.name
      ) {
        flag = true;
        element.querySelector(".js-edit-label").click();
        element.querySelector(".js-new-label-name-input").value = label.name;
        element.querySelector(".js-new-label-color-input").value =
          "#" + label.color;
        element.querySelector(".js-update-label .btn-primary").click();
      }
    });
  return flag;
}

function addNewLabel(label) {
  document.querySelector(".js-details-target-new-label").click();
  document.querySelector(".js-new-label-name-input").value = label.name;
  document.querySelector(".js-new-label-color-input").value = "#" + label.color;
  document
    .querySelector(".js-create-label .btn-primary")
    .removeAttribute("disabled");
  document.querySelector(".js-create-label .btn-primary").click();
}

function addLabel(label) {
  if (!updateLabel(label)) addNewLabel(label);
}
