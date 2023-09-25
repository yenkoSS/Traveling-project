document.querySelector('#btn-more').addEventListener('click', function() {
    document.querySelector('#section-about').scrollIntoView({behavior: 'smooth'})
})


document.querySelectorAll('.nav-link').forEach(function(element) {

    element.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionID = element.getAttribute('href')

        document.querySelector(sectionID).scrollIntoView({behavior: 'smooth'});
    })
})