const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Tabs menu event listener

tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// Adding event listeners
btn.addEventListener("click", navToggle);

function onTabClick(e) {
  //Remove red bellow all tabs
  tabs.forEach((tab) => {
    //console.log( tab.children[0]);
    tab.children[0].classList.remove(
      "border-softRed",
      "border-b-4",
      "md:border-b-0"
    );
  });
  //Hide all panels
  panels.forEach((panel) => panel.classList.add("hidden"));

  //Activate new tab and panel based on target

  e.target.classList.add("border-softRed", "border-b-4");
  const classString = e.target.getAttribute("data-target");
  //console.log(classString);
  const clickedPanel = document
    .getElementById("panels")
    .getElementsByClassName(classString);
  //console.log(clickedPanel[0]);
  clickedPanel[0].classList.remove("hidden");
}

function navToggle(){
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');

    if(menu.classList.contains('flex')){
       logo.setAttribute('src', './images/logo-bookmark_inverted.png');
    } else {
        logo.setAttribute('src', './images/logo-bookmark.png');
    }
}