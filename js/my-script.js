$(document).ready(function() {
    //   	$('#home-reg-frm').validate({ // initialize the plugin
    //         rules: {
    //             email: {
    //                 required: true,
    //                 email: true
    //             },
    //             // year: {
    //             //     required: true,
    //             //     minlength: 4,
    //             //     digits: true
    //             // },
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             phone: {
    //                 required: true,
    //                 minlength: 10,
    //                 number: true
    //             },
    //             college: {
    //                 required: true
    //             }
    //         }
    //     });
    //   	$('#brochure-frm').validate({ // initialize the plugin
    //         rules: {
    //             email: {
    //                 required: true,
    //                 email: true
    //             },
    //             // year: {
    //             //     required: true,
    //             //     minlength: 4,
    //             //     digits: true
    //             // },
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             phone: {
    //                 required: true,
    //                 minlength: 10,
    //                 number: true
    //             }//,
    //             // message: {
    //             //     required: true,
    //             //     minlength: 2
    //             // }
    //         }
    //     });
    //   	$('#enq-frm').validate({ // initialize the plugin
    //         rules: {
    //             email: {
    //                 required: true,
    //                 email: true
    //             },
    //             // year: {
    //             //     required: true,
    //             //     minlength: 4,
    //             //     digits: true
    //             // },
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             phone: {
    //                 required: true,
    //                 minlength: 10,
    //                 number: true
    //             }
    //         }
    //     });
    $('#dwnld-application-frm').validate({ // initialize the plugin
        rules: {
            email: {
                required: true,
                email: true
            },
            year: {
                required: true,
                minlength: 4,
                digits: true
            },
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 10,
                number: true
            },
            course: {
                required: true
            }
        }
    });
    //   	$('#dwnld-application-frm-without-course').validate({ // initialize the plugin
    //         rules: {
    //             email: {
    //                 required: true,
    //                 email: true
    //             },
    //             year: {
    //                 required: true,
    //                 minlength: 4,
    //                 digits: true
    //             },
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             phone: {
    //                 required: true,
    //                 minlength: 10,
    //                 number: true
    //             }
    //         }
    //     });
    $('#apply-now-frm').validate({ // initialize the plugin
        rules: {
            email: {
                required: true,
                email: true
            },
            // year: {
            //     required: true,
            //     minlength: 4,
            //     digits: true
            // },
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 10,
                number: true
            }
            // ,
            // message: {
            //     required: true,
            //     minlength: 2
            // }
        }
    });

    //   	$('#h-apply-now-frm').validate({ // initialize the plugin
    //         rules: {
    //             email: {
    //                 required: true,
    //                 email: true
    //             },
    //             year: {
    //                 required: true,
    //                 minlength: 4,
    //                 digits: true
    //             },
    //             name: {
    //                 required: true,
    //                 minlength: 2
    //             },
    //             phone: {
    //                 required: true,
    //                 minlength: 10,
    //                 number: true
    //             }
    //         }
    //     });

});