$(document).ready(function() {
    var url = "https://www.bibs.co.in/front/";
    $('#cwm-1').magnificPopup({
        items: [{
                src: url + 'img/cwm/1.jpg',
            },
            {
                src: url + 'img/cwm/2-large.jpg',
            },
            {
                src: url + 'img/cwm/3-large.jpg',
            },
            {
                src: url + 'img/cwm/4-large.jpg',
            },
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });
    $('#cwm-2').magnificPopup({
        items: [{
                src: url + 'img/cwm/2-large.jpg',
            },
            {
                src: url + 'img/cwm/3-large.jpg',
            },
            {
                src: url + 'img/cwm/4-large.jpg',
            },
            {
                src: url + 'img/cwm/1.jpg',
            },
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });
    $('#cwm-3').magnificPopup({
        items: [{
                src: url + 'img/cwm/3-large.jpg',
            },
            {
                src: url + 'img/cwm/4-large.jpg',
            },
            {
                src: url + 'img/cwm/1.jpg',
            },
            {
                src: url + 'img/cwm/2-large.jpg',
            },
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });
    $('#cwm-4').magnificPopup({
        items: [{
                src: url + 'img/cwm/4-large.jpg',
            },
            {
                src: url + 'img/cwm/1.jpg',
            },
            {
                src: url + 'img/cwm/2-large.jpg',
            },
            {
                src: url + 'img/cwm/3-large.jpg',
            },
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });

});