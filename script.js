
var projects = ['E-commerce-vanillaJS.png', 'Kasper.png'];
var altImg = ['E-commerce-vanillaJS', 'Kasper'];
var links = ['E-commerce-vanillaJS/', 'Kasper/'];
var titles = ['E-commerce-vanillaJS', 'Kasper'];

var project__grid = document.getElementById("project__grid");
var image = document.createElement('img');
project__grid.innerHTML = '';
var i = 0;
projects.forEach(project => {
    project__grid.innerHTML += `
        <a href="https://amirahassan2003.github.io/${links[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles[i]}</p>
                </div>
                <img src="assets/${project}" alt="${altImg[i]}">
            </div>
        </a>`;
        i++;
});
