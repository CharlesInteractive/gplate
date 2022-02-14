console.log('Running custom scripts.');

function handlesRun() {
    var template = custom.templates.template;
    fetch('./data/testdata.json')
        .then((resp) => resp.json())
        .then((json) => {
            document.getElementById('render-first').innerHTML = template({ persons: json.persons });
        });
}handlesRun();

function handlesRunAgain() {
    var template = custom.templates.template_secondary;
    fetch('./data/testdata.json')
        .then((resp) => resp.json())
        .then((json) => {
            document.getElementById('render-second').innerHTML = template({ persons: json.persons });
        });
}handlesRunAgain();

function handlesFaicons() {
    var template = custom.templates.faicons;
    fetch('./data/faicons.json')
        .then((resp) => resp.json())
        .then((json) => {
            faiconspace = $('#render-icons');
            faiconspace.html(template(json));
        });
}handlesFaicons();

$(document).ready(function() {

    // get lozad to lazy load our images
    const observer = lozad(); // lazy loads elements with default selector as '.lozad'
    observer.observe();
    

    // initialize popout
    var pops = $('#pops');
    pops.popup({
        escape: true,
        blur: true,
        scrolllock: true,
        transition: 'all 0.3s',
        pagecontainer: 'body'
    });

    // popout open button
    var pops_open = $("#pops-open");
    pops_open.on('click', function() {
        pops.popup('show');
    });

    // popout close button
    var pops_close = $("#pops-close");
    pops_close.on('click', function() {
        pops.popup('hide');
    });
    
    //slider
    var slider = $('#slider');
    slider.slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        arrow: true,
        dots: true,
        speed: 300,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    centerPadding: '15px'
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '15px'
                }
            }
        ]
    });

    // mobile navigation mobi-nav
    //initialize popout
    var mobinav = $('#mobinav');
    mobinav.popup({
        escape: true,
        blur: true,
        scrolllock: true,
        transition: 'all 0.3s',
        pagecontainer: 'body',
        color: "rgb(0,0,0)",
        opacity: ".8"
    });
    // popout open button
    var mobinav_open = $("#mobinav-open");
    mobinav_open.on('click', function() {
        mobinav.popup('show');
    });
    // mobinav close button
    var mobinav_close = $("#mobinav-close");
    mobinav_close.on('click', function() {
        mobinav.popup('hide');
    });
});

