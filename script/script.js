let gridnumber;
let inputnumber;
let fill;
let i;
let nodeview;

function mainGrid() {
    inputnumber = 256;
    for(i = 0; i < 256; i++) {
        let wrapper = document.createElement('div');
        wrapper.className = "box";
        document.getElementById("wrapper").appendChild(wrapper);
        document.getElementById("wrapper").style.gridTemplateColumns = "repeat(16,auto)";
    }
}

window.addEventListener("load", mainGrid);

function gridSize() {
    gridnumber = Number(prompt("Fill in number between 1 and 100"));
    while (isNaN(gridnumber) === true || gridnumber < 1 || gridnumber  > 100) {
        gridnumber = prompt("Only number between 1 and 100 is allowed!!!");
    }
}

document.getElementById("btn").addEventListener("click", gridSize);

function gridBasis() {
    if (document.getElementById("wrapper").contains(document.querySelector('.box'))) {
        // Method to remove every child element in a parent div in next line
        document.querySelectorAll(".box").forEach(element => element.remove());
        inputnumber = gridnumber * gridnumber;
        fill= gridnumber;
        for(i = 0; i < inputnumber; i++) {
            let wrapper = document.createElement('div');
            wrapper.className = "space";
            document.getElementById("wrapper").appendChild(wrapper);
            document.getElementById("wrapper").style.gridTemplateColumns = "repeat(" + fill + ", auto)";
        }
    } else if (document.getElementById("wrapper").contains(document.querySelector('.space'))) {
         // Method to remove every child element in a parent div in next line
         document.querySelectorAll(".space").forEach(element => element.remove());
         inputnumber = gridnumber * gridnumber;
         fill= gridnumber;
         for(i = 0; i < inputnumber; i++) {
             let wrapper = document.createElement('div');
             wrapper.className = "box";
             document.getElementById("wrapper").appendChild(wrapper);
             document.getElementById("wrapper").style.gridTemplateColumns = "repeat(" + fill + ", auto)";
            }
        }
    }
    
    document.getElementById("btn").addEventListener("click", gridBasis);
    
    nodeview = document.getElementById("wrapper");


    
    function random(e) {
        e.target.style.backgroundColor = colorCreator();
    }
    
    nodeview.addEventListener("mouseover", random, false);
    
    function colorCreator() {
        let red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let green =  Math.floor(Math.random() * (255 - 0 + 1) + 0);
        let black = Math.floor(Math.random() * (255 - 0 + 1) + 0);
        return `rgb( ${red} , ${green}, ${black})`;
    }
    
    function black(e) {
        e.target.style.backgroundColor = "black"
    }

    document.getElementById("btnone").addEventListener('click', function() {
        nodeview.removeEventListener("mouseover", random);
        nodeview.removeEventListener("mouseover", white);
        nodeview.addEventListener("mouseover", black, false);
  });

  function random(e) {
    e.target.style.backgroundColor = colorCreator();
}

  document.getElementById("btntwo").addEventListener('click', function() {
    nodeview.removeEventListener("mouseover",black);
    nodeview.removeEventListener("mouseover", white);
    nodeview.addEventListener("mouseover", random, false);
});

function white(e) {
    e.target.style.backgroundColor = "white"
}

document.getElementById("btnthree").addEventListener('click', function() {
    nodeview.removeEventListener("mouseover",black);
    nodeview.removeEventListener("mouseover", random);
    nodeview.addEventListener("mouseover", white, false);
});
