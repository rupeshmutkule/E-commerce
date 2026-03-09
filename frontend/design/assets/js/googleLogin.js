jQuery(document).ready(() => {

    let googleUser = {}

    let auth2;

    let startApp = () => {

        gapi.load('auth2', function() {

            auth2 = gapi.auth2.init({

                client_id: '7229654335-gkdjq8b5vuaggkc8et0e97alm34n1uvl.apps.googleusercontent.com',

                scope: 'profile',
                plugin_name: 'sigin in',
                cookie_policy: 'none'

            })

            if (!auth2.isSignedIn.get()) {

                auth2.attachClickHandler(document.getElementById("googlelogin"), {},
                    googleUser => {

                        let googleData = googleUser.getBasicProfile()
                        // console.log("handler 1");
                        let userData = {

                            logintype: "google",

                            id_token: googleUser.getAuthResponse().id_token,
                            email: googleData.getEmail()

                        }
                        // console.log(userData);
                        callApi(userData)
                        console.log("--------inside click handeller--------");
                    }, error => {
                        // console.log("googlelogin======");
                        // console.log(error)

                    })

                auth2.attachClickHandler(document.getElementById("googlelogin2"), {},
                    googleUser => {

                        let googleData = googleUser.getBasicProfile()
                        // console.log("handler 1");
                        let userData = {

                            logintype: "google",

                            id_token: googleUser.getAuthResponse().id_token,
                            email: googleData.getEmail()

                        }
                        // console.log(userData);
                        callApi(userData)
                        console.log("--------inside click handeller--------");
                    }, error => {
                        // console.log("googlelogin======");
                        // console.log(error)

                    })


                auth2.attachClickHandler(document.getElementById("googlelogin3"), {},
                    googleUser => {

                        let googleData = googleUser.getBasicProfile()
                        // console.log("handler 1");
                        let userData = {

                            logintype: "google",

                            id_token: googleUser.getAuthResponse().id_token,
                            email: googleData.getEmail()
                        }
                        // console.log(userData);
                        callApi(userData)
                        console.log("--------inside click handeller--------");
                    }, error => {
                        // console.log("googlelogin======");
                        // console.log(error)

                    })
            }

        })

    }



    startApp()

    jQuery(document).on({

        click: e => {
            console.log("-----again click-------");
            if (auth2.isSignedIn.get()) {
                console.log("--------signed in--------");
                var googleData = auth2.currentUser.get().getBasicProfile();

                var id_token = auth2.currentUser.get().getAuthResponse().id_token;

                let userData = {



                    logintype: "google",

                    id_token: id_token,
                    email: googleData.getEmail()

                }

                callApi(userData)

            }

            //  else {
            //     console.log("--------attached click handeller--------");
            //     auth2.attachClickHandler(document.getElementById("googlelogin"), {},
            //         googleUser => {

            //             let googleData = googleUser.getBasicProfile() 
            //             // console.log("handler 1");
            //             let userData = {

            //                 logintype : "google",

            //                 id_token : googleUser.getAuthResponse().id_token

            //             }
            //             // console.log(userData);
            //             callApi(userData) 
            //              console.log("--------inside click handeller--------");
            //         }, error => {
            //            // console.log("googlelogin======");
            //            // console.log(error)

            //        })


            // }

        }

    }, "#googlelogin")


    //2 id click function

    jQuery(document).on({

        click: e => {

            if (auth2.isSignedIn.get()) {

                var googleData = auth2.currentUser.get().getBasicProfile();

                var id_token = auth2.currentUser.get().getAuthResponse().id_token;

                let userData = {


                    logintype: "google",

                    id_token: id_token,
                    email: googleData.getEmail()

                }

                callApi(userData)

            }

            // else {

            //     auth2.attachClickHandler(document.getElementById("googlelogin2"), {},
            //         googleUser => {

            //             // console.log('aniket');

            //             let googleData = googleUser.getBasicProfile() 
            //             // console.log("handler 1");
            //             let userData = {

            //                 logintype : "google",

            //                 id_token : googleUser.getAuthResponse().id_token

            //             }
            //             // console.log(userData);
            //             callApi(userData)

            //         }, error => {
            //            // console.log("googlelogin======");
            //            // console.log(error)

            //        })

            // }

        }

    }, "#googlelogin2")

    //2 id click function

    jQuery(document).on({

        click: e => {

            if (auth2.isSignedIn.get()) {

                var googleData = auth2.currentUser.get().getBasicProfile();

                var id_token = auth2.currentUser.get().getAuthResponse().id_token;

                let userData = {


                    logintype: "google",

                    id_token: id_token,
                    email: googleData.getEmail()

                }

                callApi(userData)

            }

            // else {

            //     auth2.attachClickHandler(document.getElementById("googlelogin3"), {},
            //         googleUser => {

            //             // console.log('aniket');

            //             let googleData = googleUser.getBasicProfile() 
            //             // console.log("handler 1");
            //             let userData = {

            //                 logintype : "google",

            //                 id_token : googleUser.getAuthResponse().id_token

            //             }
            //             // console.log(userData);
            //             callApi(userData)

            //         }, error => {
            //            // console.log("googlelogin======");
            //            // console.log(error)

            //        })

            // }

        }

    }, "#googlelogin3")

    let callApi = (userData) => {
        //console.log('social');return false;

        jQuery.ajax({

            type: "POST",

            // url : "/customerlogin/sociallogin/save",

            url: "/SocialLogin/login.php",

            data: userData,

            dataType: "json",

            beforeSend: () => jQuery(".body-popup-overlay").show(),
            success: e => {
                console.log('in sucess');
                //console.log(e);return false;
                if (0 == e.error) {
                    //location.reload()
                    console.log('in sucess');

                    window.location.href = e.success_url;

                } else {
                    jQuery(".pop-error").text(e.message);
                }
            },

            complete: () => jQuery(".body-popup-overlay").hide()

        });

    }

});