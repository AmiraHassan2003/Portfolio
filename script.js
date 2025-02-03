
var projects_JavaScript = ['E-commerce-vanillaJS.png', 'Kasper.png', 'todoList.png', 'registration.png'];
var altImg_JavaScript = ['E-commerce-vanillaJS', 'Kasper', 'TodoList', 'Registration'];
var links_JavaScript = ['E-commerce-vanillaJS/', 'Kasper/', 'TodoList/', 'Registration' ];
var titles_JavaScript = ['E-commerce-vanillaJS', 'Kasper', 'TodoList', 'Registration'];

var JavaScript__grid = document.getElementById("JavaScript__grid");
JavaScript__grid.innerHTML = '';
var i = 0;
projects_JavaScript.forEach(project => {
    if(i > 2){
        JavaScript__grid.innerHTML += `
        <a href="https://github.com/AmiraHassan2003/${links_JavaScript[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_JavaScript[i]}</p>
                </div>
                <img src="../assets/native_js/${project}" alt="${altImg_JavaScript[i]}">
            </div>
        </a>`;
    }
    else{
        JavaScript__grid.innerHTML += `
        <a href="https://amirahassan2003.github.io/${links_JavaScript[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_JavaScript[i]}</p>
                </div>
                <img src="../assets/native_js/${project}" alt="${altImg_JavaScript[i]}">
            </div>
        </a>`;
    }
    
        i++;
});



var projects_django = ['Doctors_hup.png', 'todoList_django.png'];
var altImg_django = ['Doctors_hup', 'todoList_django'];
var links_django = ['DoctorsHubApplication', 'todoList_django'];
var titles_django = ['Doctors_hup', 'TodoList_django'];

var django__grid = document.getElementById("django__grid");
django__grid.innerHTML = '';
var i = 0;
projects_django.forEach(project => {
    django__grid.innerHTML += `
        <a href="https://github.com/AmiraHassan2003/${links_django[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_django[i]}</p>
                </div>
                <img src="../assets/django/${project}" alt="${altImg_JavaScript[i]}">
            </div>
        </a>`;
        i++;
});


var projects_cSharp = ['TextDataAnalyzer.png', 'LibraryManagementSystem.png'];
var altImg_cSharp = ['TextDataAnalyzer', 'LibraryManagementSystem'];
var links_cSharp = ['TextDataAnalyzer', 'LibraryManagementSystem'];
var titles_cSharp = ['TextDataAnalyzer', 'LibraryManagementSystem'];

var cSharp__grid = document.getElementById("cSharp__grid");
cSharp__grid.innerHTML = '';
var i = 0;
projects_cSharp.forEach(project => {
    cSharp__grid.innerHTML += `
        <a href="https://github.com/AmiraHassan2003/${links_cSharp[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_cSharp[i]}</p>
                </div>
                <img src="../assets/CSharp/${project}" alt="${altImg_cSharp[i]}">
            </div>
        </a>`;
        i++;
});


var projects_net = ['newspaper.png', 'company.png'];
var altImg_net = ['newspaper', 'company'];
var links_net = ['Newspaper', 'Company'];
var titles_net = ['Newspaper', 'Company'];
var desc_net = ['Dot Net, MVC, Graduation Project at ITI']
var net__grid = document.getElementById("net__grid");
net__grid.innerHTML = '';
var i = 0;
projects_net.forEach(project => {
    net__grid.innerHTML += `
        <a href="https://github.com/AmiraHassan2003/${links_net[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_net[i]}</p>
                </div>
                <img src="../assets/.net/${project}" alt="${altImg_net[i]}">
            </div>
        </a>
        <span>
            ${desc_net[i]}
        </span>`
        ;
        i++;
});


var projects_springboot = ['E-commerce.png'];
var altImg_springboot = ['E-commerce'];
var links_springboot = ['Project_Software_two'];
var titles_springboot = ['E-commerce'];

var springboot__grid = document.getElementById("springboot__grid");
springboot__grid.innerHTML = '';
var i = 0;
projects_springboot.forEach(project => {
    springboot__grid.innerHTML += `
        <a href="https://github.com/AmiraHassan2003/${links_springboot[i]}">
            <div class="project__card">
                <div class = "overlay">
                    <p>${titles_springboot[i]}</p>
                </div>
                <img src="../assets/Spring_boot/${project}" alt="${altImg_springboot[i]}">
            </div>
        </a>`;
        i++;
});



