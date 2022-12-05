$(document).ready(function() {
    var url = "https://www.bibs.co.in/front/";
    $('#brand-one-war').magnificPopup({
        items: [{
                src: url + 'img/gallery/gallery-34/img-1.jpg',
            },
            {
                src: url + 'img/gallery/gallery-34/img-2.jpeg',
            },
            {
                src: url + 'img/gallery/gallery-34/img-3.jpeg',
            },
            {
                src: url + 'img/gallery/gallery-34/img-4.jpeg',
            },
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });

    $('#brand-two-war').magnificPopup({
        items: [{
                src: url + 'img/gallery/gallery-34/img-2.jpeg',
            },
            {
                src: url + 'img/gallery/gallery-34/img-3.jpeg',
            },
            {
                src: url + 'img/gallery/gallery-34/img-4.jpeg',
            },
            {
                src: url + 'img/gallery/gallery-34/img-1.jpg',
            },
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });

    $('#brand-three-war').magnificPopup({
        items: [{
                src: url + 'img/gallery/gallery-34/img-3.jpeg',
            },
            {
                src: url + 'img/gallery/gallery-34/img-4.jpeg',
            },
            {
                src: url + 'img/gallery/gallery-34/img-1.jpg',
            },
            {
                src: url + 'img/gallery/gallery-34/img-2.jpeg',
            },
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });

    $('#brand-four-war').magnificPopup({
        items: [

            {
                src: url + 'img/gallery/gallery-34/img-4.jpeg',
            },
            {
                src: url + 'img/gallery/gallery-34/img-1.jpg',
            },
            {
                src: url + 'img/gallery/gallery-34/img-2.jpeg',
            },
            {
                src: url + 'img/gallery/gallery-34/img-3.jpeg',
            },
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });


});