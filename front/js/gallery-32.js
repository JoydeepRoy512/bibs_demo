$(document).ready(function() {
    var url = "https://www.bibs.co.in/front/";
    $('#event-war').magnificPopup({
        items: [{
                src: url + 'img/gallery/gallery-33/war-on-web/img-1.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/war-on-web/img-2.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/war-on-web/img-3.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/war-on-web/img-4.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/war-on-web/img-5.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/war-on-web/img-6.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/war-on-web/img-7.jpg',
            },

            {
                src: url + 'img/gallery/gallery-33/photos/img-1.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/photos/img-2.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/photos/img-3.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/photos/img-4.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/photos/img-5.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/photos/img-6.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/photos/img-7.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/photos/img-8.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/photos/img-9.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/photos/img-10.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/photos/img-11.jpg',
            },
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });

    $('#event-winner').magnificPopup({
        items: [{
                src: url + 'img/gallery/gallery-33/winner/img-1.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/winner/img-2.jpg',
            },
            {
                src: url + 'img/gallery/gallery-33/winner/img-3.jpg',
            },
        ],
        gallery: {
            enabled: true
        },
        type: 'image' // this is default type
    });

});