const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

// Tabs menu event listener

tabs.forEach((tab)=>tab.addEventListener('click', onTabClick))

function onTabClick(e){
    //Remove red bellow all tabs
    tabs.forEach((tab)=>{
       //console.log( tab.children[0]);
       tab.children[0].classList.remove(
        'border-softRed',
        'border-b-4',
        'md:border-b-0')
    });
    //Hide all panels
    panels.forEach((panel)=>panel.classList.add('hidden'));

    //Activate new tab and panel based on target

    e.target.classList.add(
        'border-softRed',
        'border-b-4');
    const classString = e.target.getAttribute('data-target');
    //console.log(classString);
    const clickedPanel = document.getElementById('panels').getElementsByClassName(classString);
    //console.log(clickedPanel[0]);
   clickedPanel[0].classList.remove('hidden');
}