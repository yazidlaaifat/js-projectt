var course = document.querySelector('.course');

function creationCours(path, titre, prix) {
    course.innerHTML += "<div class=\"col-3 card me-2 mb-2\"><img src=\"" + path + "\" alt=\"\" class=\"card-img\"> <p class=\"card-title\">" + titre + "</p><span class=\"card-text\">" + prix + "</span></div>";
}


function creationCours2(path, titre, prix) {
    // <div><div>
    let div = document.createElement('div'),
        img = document.createElement('img'),
        p = document.createElement('p'),
        span = document.createElement('span');

    div.setAttribute('class', 'col-3 card me-2 mb-2');
    img.src = path;
    img.setAttribute('class', 'card-img');
    p.setAttribute('class', 'card-title');
    span.setAttribute('class', 'card-text');

    p.appendChild(document.createTextNode(titre));
    span.appendChild(document.createTextNode(prix));

    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(span);

    course.append(div)
}



courses.forEach((element) => {
    creationCours2(element.image, element.title, element.price)
})


  function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}