
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
                <img src="assets/native_js/${project}" alt="${altImg_JavaScript[i]}">
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
                <img src="assets/native_js/${project}" alt="${altImg_JavaScript[i]}">
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
                <img src="assets/django/${project}" alt="${altImg_JavaScript[i]}">
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
                <img src="assets/CSharp/${project}" alt="${altImg_cSharp[i]}">
            </div>
        </a>`;
        i++;
});


var projects_net = ['newspaper.png', 'company.png', 'E-Commerce-APIs.png'];
var altImg_net = ['newspaper', 'company', 'E-Commerce'];
var links_net = ['Newspaper', 'Company', 'E-Commerce_APIs'];
var titles_net = ['Newspaper', 'Company', 'E-Commerce_APIs'];
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
                <img src="assets/.net/${project}" alt="${altImg_net[i]}">
            </div>
        </a>`
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
                <img src="assets/Spring_boot/${project}" alt="${altImg_springboot[i]}">
            </div>
        </a>`;
        i++;
});



var certificate_links = 
    [
        '.Net/Full_stack%20Using%20.Net.jpg', 
        'DJango/Full_stack%20Using%20Python.jpg', 
        'DJango/Python%20Programming%20Basics.pdf',
        'TypeScript%20Foundamentals.pdf',
        'FullStack/Modern%20JS.pdf',
        'FullStack/Javascript.pdf',
        'HTML%20%26%20CSS.pdf',
        'Mastering_MYSQL.pdf',
        'web_development.pdf'
    ];

var certificate_titles = 
    [
        'Full-Stack Web Development using .Net (ITI)', 
        'Full-Stack Web Development using Python (ITI)',
        'Python Programming Basic (mahara-tech)',
        'TypeScript Fundamentals (mharatech)',
        'Modern JavaScript (mahara-tech)',
        'JavaScript (mahara-tech)',
        'HTML & CSS (mahara-tech)',
        'Mastering MYSQL (Udemy)',
        'WEB DEVELOPMENT (udacity)'

    ];

var certificate_desc = 
[
    'finished a full-stack development course that covered database integration with.NET technologies, back-end development, and MVC architecture. acquired hands-on expertise in developing web applications that are scalable',
    'finished a full-stack development course with an emphasis on database integration using Django, MVC architecture, and back-end programming. developed practical knowledge in building reliable and dynamic web apps.',
    'User completed a foundational Python programming course, covering variables, data types, loops, functions, and algorithms, with hands-on experience in solving problems and building applications.',
    'User completed a TypeScript course, learning types, interfaces, classes, and modules, with hands-on experience in writing type-safe code and integrating it with JavaScript.',
    'User completed a course on advanced JavaScript features, including ES6+, asynchronous programming, and best practices for writing clean, efficient, and maintainable code.',
    'User completed a course in JavaScript, covering functions, loops, DOM manipulation, and event handling, with hands-on experience in building interactive web applications and improving client-side functionality.',
    'User completed a course in HTML and CSS, gaining hands-on experience in building responsive web pages, structuring content with HTML, and styling with CSS.',
    'Gained expertise in MySQL database creation, management, and query optimization. Learned to design efficient relational databases, write complex SQL queries, and manage data effectively using MySQL.',
    'Gained practical experience in building responsive websites using HTML and advanced CSS. Learned to customize and manage websites with WordPress, culminating in a final project that brought together design, structure, and functionality.',

];



var certification__grid = document.getElementById("certification__grid");
certification__grid.innerHTML = '';
var i = 0;
certificate_titles.forEach(certificate => {
    certification__grid.innerHTML += `
        <div class="certification__card">
            <h4><a style="color: #FF6B35" href="https://github.com/AmiraHassan2003/Certificates/blob/main/FullStack/${certificate_links[i]}">${certificate}</a></h4>
            <p>
            ${certificate_desc[i]}
            </p>
        </div>`
        i++;
});


