window.addEventListener('scroll', function () {
    var fadeInFull = document.querySelectorAll('#fade-in-full');
    var fadeInPartial = document.querySelectorAll('#fade-in-partial');

    fadeInPartial.forEach(element => {
        var position = element.getBoundingClientRect();

        // checking for partial visibility
        if (position.top < window.innerHeight && position.bottom >= 0) {
            //console.log('Element is partially visible in screen');
            togleElement(element)
        }
    });
});

function togleElement(element) {
    $(element).addClass("fade-in-3")

    // switch for each element
    switch (element.getAttribute("sector")) {
        case "aboutme":
            if (!($(element).hasClass("typed"))) {
                var options = {
                    strings: ['> About Me_'],
                    typeSpeed: 90
                };

                new Typed('.consoleTypeMessageAboutMe', options);
            }

            $(element).addClass("typed")
            break;

        case "projects":
            if (!($(element).hasClass("typed"))) {
                var options = {
                    strings: ['> Projects_'],
                    typeSpeed: 90
                };

                new Typed('.consoleTypeMessageProjects', options);
            }

            $(element).addClass("typed")
            break;
        case "workEducation":
            if (!($(element).hasClass("typed"))) {
                var options = {
                    strings: ['> Work and Education_'],
                    typeSpeed: 90
                };

                new Typed('.consoleTypeMessageworkEducation', options);
            }

            $(element).addClass("typed")
            break;
        case "contact":
            if (!($(element).hasClass("typed"))) {
                var options = {
                    strings: ['> Contact Me_'],
                    typeSpeed: 90
                };

                new Typed('.consoleTypeMessageContact', options);
            }

            $(element).addClass("typed")
            break;
        default:
            break;
    }
}