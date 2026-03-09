function validerr_msg(a, b, c) {
    console.log('fucntion call');
    console.log(b);
    jQuery("." + a).find(".error-div").css("visibility", "visible"), jQuery("." + a).find("#" + b).css("border", "1px solid #ff0000"), jQuery("." + a).find(".error-div").text(c).addClass("error_msg")
}

function isValidEmailAddress(e) {
    var t;
    return (!!RegExp(
            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        ).test(e) &&
        ("com" == (e = (t = e.split("."))[t.length - 1]).toLowerCase() || "in" == e.toLowerCase() || "fr" == e.toLowerCase() || "eu" == e.toLowerCase() || "au" == e.toLowerCase() || "uk" == e.toLowerCase() || "gov" == e.toLowerCase() || "org" == e.toLowerCase() || "net" == e.toLowerCase())
    );
}

function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function resetLoginSteps() {
    // jQuery(".login-step").hide(); 
    jQuery(".login-step").first().show();
}

function isValidMobile(a) {
    var phoneno = /^\d{10}$/;
    if (a.match(phoneno)) {
        return true;
    } else {
        return false;
    }
}

function timer() {
    if (jQuery('#timer').length) {
        function countdown(elementName, minutes, seconds) {
            var element, endTime, hours, mins, msLeft, time;
            element = document.getElementById(elementName);
            if (!element) {
                //console.error(`Element with ID "${elementId}" not found.`);
                return;
            }
            endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;

            function twoDigits(n) {
                return (n <= 9 ? "0" + n : n);
            }

            function updateTimer() {
                msLeft = endTime - (+new Date);
                if (msLeft < 1000) {
                    element.innerHTML = "Time is up!";
                    jQuery('.resend-otp').removeClass('resend-link');
                    jQuery('.new-resend-otp').removeClass('new-resend-link');
                    jQuery('#resend-link').removeClass('dis-resend-otp');
                    jQuery('#resend-link').removeClass('disabled').css('pointer-events', 'auto');
                    jQuery('#new-resend-link').removeClass('disabled').css('pointer-events', 'auto');
                    // jQuery('.resend-link').removeClass('dis-resend-otp');
                    //            jQuery(".resend-otp").removeClass('signin_resend-otp');
                } else {
                    time = new Date(msLeft);
                    hours = time.getUTCHours();
                    mins = time.getUTCMinutes();
                    element.innerHTML = (hours ? hours + ':' + twoDigits(mins) : mins) + ':' + twoDigits(time.getUTCSeconds());
                    setTimeout(updateTimer, time.getUTCMilliseconds() + 500);
                }
            }
            element = document.getElementById(elementName);
            endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
            updateTimer();
        }
        countdown("timer", 0, 30);
        countdown("new-timer", 0, 30);
        countdown("checkout-timer", 0, 30);
    }

}
document.addEventListener("DOMContentLoaded", function() {
    let e = document.querySelectorAll(".otp-digit");
    e.forEach((o, n) => {
        o.addEventListener("input", (o) => {
                let t = o.target.value;
                1 === t.length && n < e.length - 1 && e[n + 1].focus();
            }),
            o.addEventListener("keydown", (t) => {
                "Backspace" === t.key && n > 0 && "" === o.value && e[n - 1].focus();
            }),
            o.addEventListener("paste", (o) => {
                o.preventDefault();
                let t = o.clipboardData.getData("text").split("");
                t.forEach((o, t) => {
                        e[n + t] && (e[n + t].value = o);
                    }),
                    e[Math.min(n + t.length, e.length - 1)].focus();
            });
    });
});

jQuery(document).ready(function() {
    jQuery('.logout').on('click', function() {
        // Push the logout event with ecommerce status
        dataLayer.push({
            ecommerce: null
        }); // Reset any previous ecommerce data
        dataLayer.push({
            event: "logout",
            ecommerce: {
                status: true
            }
        });
        console.log("Redirecting after 5 second...");
        setTimeout(function() {
            window.location.href = '/'; // Redirect after the event is processed
        }, 5000); // 5000 milliseconds = 5 second delay

    });
    //login popup
    jQuery("body").on("click", ".custom_userphone_loginbtn", function() {
        console.log('login');
        if (jQuery(".login-modal").find(".mob-input").is(":visible")) {
            //console.log('if');
            //return false;
            //    jQuery("#signinPhoneModal .form_msg").text("");
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            var mobileRegex = /^[0-9]{10}$/;
            console.log(user_mob);
            h = "login-modal";
            var user_mob = jQuery(".login-modal #user_mob").val();
            if (user_mob == '') {
                var err_msg = "Please enter User Mobile number or Email.";
                validerr_msg(h, "user_mob", err_msg);
                console.log('below mobile');
                return false;

            } else if (!emailRegex.test(user_mob) && !mobileRegex.test(user_mob)) {
                var err_msg = "Please enter a valid Email or Mobile number.";
                validerr_msg(h, "user_mob", err_msg);
                return false;
            } else {
                console.log('else');
                //return false;               

                var login_url = "/customcustomer/account/customlogin";
                jQuery(".custom_userphone_loginbtn").attr("disabled", !0), jQuery(".body-popup-overlay").show(),
                    console.log(login_url + '-----------------');
                // return false; 

                jQuery.ajax({
                    method: "post",
                    url: login_url,
                    data: jQuery("#phonelogin_form").serialize(),
                    dataType: "json",
                    success: function(response) {
                        console.log('success');
                        console.log(response);
                        jQuery(".body-popup-overlay").hide();
                        jQuery(".custom_userphone_loginbtn").attr("disabled", !1);
                        if (1 == response.error) {
                            console.log('if -> ' + response);
                            jQuery(".login-modal .error-div").text(response.message).addClass("error_msg").css("visibility", "visible")
                        } else {
                            console.log('else -> ' + response);
                            jQuery("#hidden-user-email").val(response.email);
                            jQuery("#hidden-user-contact-number").val(response.contactnumber);
                            jQuery(".otp-subtext").find("span").text(response.contactnumber);
                            jQuery(".otp-number").show();
                            jQuery(".phoneinput").show();
                            jQuery("#otp-input").show();
                            jQuery('.login-step.mobile-step .error-div.error_msg').css('visibility', 'hidden').html('');
                            jQuery(".resend-plot").show();
                            jQuery(".pwd-login").show();
                            // jQuery(".signup-otp").hide();
                            jQuery(".title-head-otp").show();
                            // jQuery(".title-head").hide();
                            jQuery(".login-first-step").hide();
                            jQuery(".mobile-step").show();
                            jQuery('#resend-link').addClass('disabled').css('pointer-events', 'none');
                            //jQuery(".login-modal").find(".login-step").eq(1).show(), 
                            // o(30);
                            timer();
                            jQuery(".signin_resend-otp").attr('data-flag', 'signin');
                        }
                        /*(jQuery("#isLoggedIn").val("1"), setTimeout(function() {
                                window.location.href = b.redirectUrl 
                            }, 10))*/
                    }
                })
            }
        } else {
            console.log('else');
            let error = 0
            inputFields = jQuery("#otp-input input");
            inputFields.each((index, element) => {
                if (jQuery(element).val() == '') {
                    error = 1
                }
            });
            console.log('innnnnnnnnnnnnnn------------');

            if (error == 1) {
                jQuery("#otp-input").addClass("error");
            }
            let enteredOtp = ''
            inputFields.each((index, element) => {
                enteredOtp += jQuery(element).val()
            })

            let userOtp = enteredOtp.trim();
            console.log('userOtp----------------->' + userOtp);
            let userEmail = jQuery("#hidden-user-email").val()
            let userContactNumber = jQuery("#hidden-user-contact-number").val()
            var login_otp_url = "/customcustomer/account/customlogin";
            jQuery(".custom_userphone_loginbtn").attr("disabled", !0), jQuery(".body-popup-overlay").show(),
                jQuery.ajax({
                    method: "post",
                    url: login_otp_url,
                    data: {
                        otpvalue: userOtp,
                        contact: userContactNumber,
                        forotp: 1
                    },
                    dataType: "json",
                    success: function(response) {
                        jQuery(".body-popup-overlay").hide();
                        console.log(response.redirectUrl);
                        // Gtag Evevnt
                        dataLayer.push({
                            ecommerce: null
                        }); // Clear the previous ecommerce object.
                        dataLayer.push({
                            event: "user_login",
                            ecommerce: {
                                user_details: [{
                                    'phone': userContactNumber,
                                    'first_name': response.firstname,
                                    'last_name': response.lastname,
                                    'email': response.email,
                                }]
                            }
                        });
                        jQuery(".custom_userphone_loginbtn").attr("disabled", !1), 1 == response.error ? jQuery(".login-modal .error-div").text(response.message).addClass("error_msg").css("visibility", "visible") : (jQuery("#isLoggedIn").val("1"), setTimeout(function() {
                            window.location.href = response.redirectUrl
                            //window.location.href = "https://m2upgstg.indiacircus.com/"
                        }, 2000))
                    }
                })

        }
    });

    // register account start
    jQuery(".signup-popup #user_password").keyup(function() {
        var user_password = jQuery(".signup-popup #user_password").val();
        jQuery(".signup-popup #user_confpassword").val(user_password);
    });
    jQuery("#create_accountbtn").click(function() {

        console.log("clicked");
        var user_name = jQuery(".signup-popup #user_name").val(),
            user_lastname = jQuery(".signup-popup #user_lastname").val(),
            user_email = jQuery(".signup-popup #user_email").val(),
            user_mobile = jQuery(".signup-popup #user_mobile").val();
        if (
            ((is_subscribed = jQuery(".signup-popup #is_subscribed").val()),
                (is_whatsappotin_flag = 0),
                (is_whatsappotin = jQuery(".signup-popup #is_whatsappotin").is(":checked")),
                (name_regex = /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/),
                (name_regex_number = /^[a-zA-Z0-9- ]*$/),
                (name_regex_length = /^[a-zA-Z ]{3,16}$/),
                (pass_length = /^\d{10}$/),
                (popup = "signup-popup"),
                jQuery(".signup-popup #is_whatsappotin").is(":checked") && (is_whatsappotin_flag = 1),
                "" == user_name)
        ) {
            var error_msg = "Please enter First Name.";
            validerr_msg(popup, "user_name", error_msg);
        } else if (name_regex.test(user_name)) validerr_msg(popup, "user_name", (error_msg = "Please enter valid First Name."));
        else if (0 == name_regex_number.test(user_name)) validerr_msg(popup, "user_name", (error_msg = "First Name not contain illegal characters."));
        else if (0 == name_regex_length.test(user_name)) validerr_msg(popup, "user_name", (error_msg = "Please enter valid First Name."));
        else if ("" == user_lastname) {
            var error_msg = "Please enter Last Name.";
            validerr_msg(popup, "last_name", error_msg);
        } else
            name_regex.test(user_lastname) ?
            validerr_msg(popup, "last_name", (error_msg = "Please enter valid Last Name.")) :
            0 == name_regex_number.test(user_lastname) ?
            validerr_msg(popup, "last_name", (error_msg = "Last Name not contain illegal characters.")) :
            0 == name_regex_length.test(user_lastname) ?
            validerr_msg(popup, "last_name", (error_msg = "Please enter valid Last Name.")) :
            "" == user_email ?
            validerr_msg(popup, "user_email", (error_msg = "Please enter User Email.")) :
            0 == isValidEmailAddress(user_email) ?
            validerr_msg(popup, "user_email", (error_msg = "Please enter valid Email address.")) :
            "" == user_mobile ?
            validerr_msg(popup, "user_mobile", (error_msg = "Please enter mobile no.")) :
            0 == pass_length.test(user_mobile) ?
            validerr_msg(popup, "user_mobile", (error_msg = "Please enter valid mobile no.")) :
            ((p = user_name),
                (u = user_lastname),
                jQuery(".signup-popup #firstname").val(p),
                jQuery(".signup-popup #lastname").val(u),
                jQuery("#create_accountbtn").attr("disabled", !0),
                jQuery("#ic_ajax_small_loader_onSignup").show(),
                jQuery.ajax({
                    method: "post",
                    url: "/customcustomer/account/customcreatePost",
                    data: {
                        firstname: user_name,
                        lastname: user_lastname,
                        email: user_email,
                        mobile: user_mobile,
                        is_subscribed: is_subscribed,
                        is_whatsappotin: is_whatsappotin_flag,
                        is_ajax: "1"
                    },
                    dataType: "json",
                    success: function(response) {
                        console.log(response);
                        dataLayer.push({
                            ecommerce: null
                        }); // Clear the previous ecommerce object.
                        dataLayer.push({
                            event: "user_signed_up",
                            ecommerce: {
                                'phone': user_mobile,
                                'we_last_name': user_lastname,
                                'we_first_name': user_name,
                                'we_email': user_email,
                            }
                        });
                        jQuery("#create_accountbtn").attr("disabled", !1);
                        jQuery("#ic_ajax_small_loader_onSignup").hide();
                        var errorDiv = jQuery(".signup-popup-plot .input-wrapper .error-div");
                        var message = response.message;
                        var isError = response.error;
                        errorDiv.text(isError ? message : message + " , redirecting to account page ...").addClass("error_msg").css({
                            visibility: "visible",
                            color: isError ? "" : "#386f39"
                        });
                        if (response.error == 0) {
                            jQuery("#isLoggedIn").val("1");
                            setTimeout(function() {
                                window.location.href = "/customer/account/";
                            }, 500);
                        } else {
                            jQuery('.new-login-modal-wrapper').hide();
                        }
                    },
                }));
    });
    //register mobile otp verification
    jQuery("body").on("click", "#otp_create_accountbtn", function() {
        console.log("clicked");
        var user_name = jQuery(".signup-popup #user_name").val(),
            last_name = jQuery(".signup-popup #user_lastname").val(),
            user_email = jQuery(".signup-popup #user_email").val(),
            user_mobile = jQuery('.signup-popup #user_mobile').val();
        is_subscribed = jQuery(".signup-popup #is_subscribed").val(),
            name_regex = /^((\d+(\.\d *)?)|((\d*\.)?\d+))$/,
            name_regex_number = /^[a-zA-Z0-9- ]*$/,
            name_regex_length = /^[a-zA-Z ]{3,16}$/,
            popup = "signup-popup";
        if (user_name == "") {
            var error_msg = "Please enter First Name.";
            validerr_msg(popup, "user_name", error_msg)
        } else if (name_regex.test(user_name)) {
            var error_msg = "Please enter valid First Name.";
            validerr_msg(popup, "user_name", error_msg)
        } else if (0 == name_regex_number.test(user_name)) {
            var error_msg = "First Name not contain illegal characters.";
            validerr_msg(popup, "user_name", error_msg)
        } else if (0 == name_regex_length.test(user_name)) {
            var error_msg = "Please enter valid First Name.";
            validerr_msg(popup, "user_name", error_msg)
        } else if (last_name == '') {
            var error_msg = 'Please enter Last Name.';
            validerr_msg(popup, 'last_name', error_msg);
        } else if (name_regex.test(last_name)) {
            var error_msg = 'Please enter valid Last Name.';
            validerr_msg(popup, 'last_name', error_msg);
        } else if (0 == name_regex_number.test(last_name)) {
            var error_msg = 'Last Name not contain illegal characters.';
            validerr_msg(popup, 'last_name', error_msg);
        } else if (0 == name_regex_length.test(last_name)) {
            var error_msg = 'Please enter valid Last Name.';
            validerr_msg(popup, 'last_name', error_msg);
        } else if (user_email == "") {
            var error_msg = "Please enter User Email.";
            validerr_msg(popup, "user_email", error_msg)
        } else if (0 == isValidEmailAddress(user_email)) {
            var error_msg = "Please enter valid Email address.";
            validerr_msg(popup, "user_email", error_msg)
        } else if (user_mobile == '') {
            var error_msg = 'Please enter mobile no.';
            validerr_msg(popup, 'user_mobile', error_msg);
        } else {
            // var p, q;
            // p = user_name, q = last_name;
            jQuery("#registermobile").val(user_mobile);
            jQuery(".otp-mobile").html(user_mobile);
            jQuery(".signup-popup #firstname").val(user_name), jQuery(".signup-popup #lastname").val(last_name);
            var register_url = "/customcustomer/account/otpRegister";
            jQuery.ajax({
                method: "post",
                url: register_url,
                data: {
                    firstname: user_name,
                    lastname: last_name,
                    email: user_email,
                    mobile: user_mobile,
                    is_subscribed: is_subscribed,
                    isAjax: "1"
                },
                dataType: "json",
                success: function(response) {
                    if (response.error == 1) {
                        console.log('if');
                        // a('#form_msg').css("color", "red");
                        // a('#form_msg').html(b.msg);
                        jQuery(".signup-popup .error-div").text(response.message).addClass("error_msg"), jQuery(".signup-popup .error-div").css({
                            visibility: "visible",
                            color: "#FF0000"
                        });
                    } else {
                        console.log('else');
                        jQuery(".new-login-modal .error-div").text(response.message).addClass("error_msg"), jQuery(".new-login-modal .error-div").css({
                            visibility: "visible",
                            color: "#386f39"
                        })
                        jQuery('.signup-popup').hide();
                        jQuery(".new-login-modal-wrapper").css("display", "flex").fadeIn();
                        jQuery(".login-step").css("display", "none");
                        jQuery(".mobile-step").css("display", "flex");
                        jQuery("#hidden-user-contact-number").val(user_mobile);
                        jQuery('.otp-title').fadeIn();
                        jQuery(".otp-subtext").find("span").text(user_mobile)
                        jQuery('.new-login-modal').addClass('in');
                        jQuery('.new-login-modal').css("display", "flex");
                        jQuery('.otp-input').show();
                        jQuery('.otp-note').show();
                        jQuery('.otp-login').fadeOut();
                        jQuery('.title-head').hide();
                        jQuery('.title-head-otp').show();
                        jQuery('#new-resend-link').addClass('disabled').css('pointer-events', 'none');
                        timer();
                        jQuery('.register-resend-otp').attr('data-flag', 'registermobile');
                    }
                }
            })
        }
    });
    //otp verify in register page
    jQuery('#myregisteruserphone_loginbtn').on('click', function() {
        var isUserLoggedIn = jQuery("#isLoggedIn").val();
        console.log(isUserLoggedIn);
        if (isUserLoggedIn == 0 || isUserLoggedIn == 'undefined' || isUserLoggedIn == undefined) {
            var test = '';
            mobile = jQuery('.signup-popup #user_mobile').val();
            email = jQuery('.signup-popup #user_email').val();
            console.log(mobile);
            console.log(email);
            jQuery('.otp-input').find('input').each(function() {
                var otp = jQuery(this).val();
                test += otp;
            });
            console.log(test);
            let userOtp = test.trim();
            //console.log(userOtp);return false;
            var url = '/customcustomer/account/otpRegister';
            jQuery.ajax({
                method: "post",
                url: url,
                data: {
                    otpvalue: userOtp,
                    isAjax: "2",
                    mobile: mobile,
                    email: email
                },
                dataType: "json",
                success: function(response) {
                    if (response.error == 1) {
                        console.log('if');
                        jQuery(".new-login-modal .error-div").text(response.message).addClass("error_msg"), jQuery(".new-login-modal .error-div").css({
                            visibility: "visible",
                            color: "#FF0000"
                        })
                    } else {
                        console.log('else');
                        jQuery('.new-login-modal').fadeOut();
                        jQuery(".new-login-modal .error-div").text(response.message).addClass("error_msg"), jQuery(".new-login-modal .error-div").css({
                            visibility: "visible",
                            color: "#386f39"
                        })
                        jQuery('.otp-input').find('input').each(function() {
                            var otp = jQuery(this).val('');
                        });
                        jQuery('.signup-popup').show();
                        jQuery("#create_accountbtn").trigger('click');
                    }
                }
            });
        }
    });
    jQuery("body").on("click", "#user_loginbtn", function() {
        console.log('login');
        // jQuery(".login-by-pwd .error-div").text("");
        var user_email = jQuery(".login-by-pwd-modal #user_email").val(),
            user_password = jQuery(".login-by-pwd-modal #user_password").val(),
            popup = "login-by-pwd-modal";
        console.log(typeof(user_email));
        console.log(typeof(user_password));
        var login_by_pwd = "/customcustomer/account/customlogin";
        if ("" == user_email) validerr_msg(popup, "user_email", (error_msg = "Please enter User Email."));
        else if (0 == isValidEmailAddress(user_email)) {
            var error_msg = "Please enter valid email address.";
            validerr_msg(popup, "user_email", (error_msg = 0 == isValidMobile(user_email) ? "Please enter valid email address." : error_msg));
        } else
            "" == user_password ?
            validerr_msg(popup, "user_password", (error_msg = "Please enter User Password.")) :
            1 == /\s/.test(user_password) ?
            validerr_msg(popup, "user_password", (error_msg = "Space not allowed in password.")) :
            1 == /<(.|^\n)*?>/.test(user_password) ?
            validerr_msg(popup, "user_password", (error_msg = "Special(<(.|^\n)*?>) characters are not allowed in password")) :
            (jQuery("#user_loginbtn").attr("disabled", !0),
                jQuery("#ic_ajax_small_loader").show(),
                jQuery.ajax({
                    method: "post",
                    url: login_by_pwd,
                    data: jQuery("#login_form").serialize(),
                    dataType: "json",
                    success: function(response) {
                        console.log('success');
                        console.log(response.redirectUrl);
                        // return false;
                        jQuery("#user_loginbtn").attr("disabled", !1),
                            jQuery("#ic_ajax_small_loader").hide(),
                            0 == response.error ?
                            jQuery(".login-by-pwd-modal .error-div").text(response.message).addClass("error_msg").css("visibility", "visible") :
                            (jQuery("#isLoggedIn").val("1"),
                                setTimeout(function() {
                                    window.location.href = response.redirectUrl;
                                }, 10));
                    },
                }));
    });
    // register account end
    // forgot password start
    jQuery("#forgot_passwordbtn").click(function() {
        var user_email = jQuery(".retrieve-pwd-popup #user_email").val();
        popup = "retrieve-pwd-popup";
        "" == user_email
            ?
            validerr_msg(popup, "user_email", "Please enter User Email.") :
            0 == isValidEmailAddress(user_email) ?
            validerr_msg(popup, "user_email", "Please enter valid Email address.") :
            (jQuery("#ic_ajax_loader").show(),
                jQuery(this).addClass("disabledbutton"),
                jQuery.ajax({
                    method: "post",
                    url: "/customcustomer/account/customforgotpassword/",
                    data: jQuery("#forgotpass_form").serialize(),
                    dataType: "json",
                    success: function(response) {
                        jQuery("#ic_ajax_loader").hide(),
                            jQuery(this).removeClass("disabledbutton"),
                            response.error ?
                            jQuery(".retrieve-pwd-popup .error-div").text(response.message).addClass("error_msg").css("visibility", "visible") :
                            (jQuery(".retrieve-pwd-popup .error-div")
                                .text(response.message + " , redirecting to account page ...")
                                .addClass("error_msg"),
                                jQuery(".retrieve-pwd-popup .error-div").css({
                                    visibility: "visible",
                                    color: "#386f39"
                                }),
                                jQuery("#isLoggedIn").val("1"),
                                setTimeout(function() {
                                    window.location.href = "/customer/account/login/";
                                }, 300));
                    },
                }));
    });
    // forgot password ends
    // forgot default password start
    jQuery("#forgot_defaultpasswordbtn").click(function() {
        var forgot_email = jQuery("#forgot_email").val();
        console.log(forgot_email);
        popup = "pwd-forgot-page";
        "" == forgot_email
            ?
            validerr_msg(popup, "forgot_email", "Please enter User Email.") :
            0 == isValidEmailAddress(forgot_email) ?
            validerr_msg(popup, "forgot_email", "Please enter valid Email address.") :
            (jQuery("#ic_ajax_loader").show(),
                jQuery(this).addClass("disabledbutton"),
                jQuery.ajax({
                    method: "post",
                    url: "/customcustomer/account/customforgotpassword/",
                    data: jQuery("#forgotdefaultpass_form").serialize(),
                    dataType: "json",
                    success: function(response) {
                        jQuery("#ic_ajax_loader").hide(),
                            jQuery(this).removeClass("disabledbutton"),
                            response.error ?
                            jQuery(".pwd-forgot-page .error-div").text(response.message).addClass("error_msg").css("visibility", "visible") :
                            (jQuery(".pwd-forgot-page .error-div")
                                .text(response.message + " , redirecting to account page ...")
                                .addClass("error_msg"),
                                jQuery(".pwd-forgot-page .error-div").css({
                                    visibility: "visible",
                                    color: "#386f39"
                                }),
                                jQuery("#isLoggedIn").val("1"),
                                setTimeout(function() {
                                    window.location.href = "/customer/account/login/";
                                }, 300));
                    },
                }));
    });
    // forgot default password ends
    //create new password start
    jQuery(".create-pwd-btn").click(function() {
        var resetPasswordToken = jQuery("#hidden-reset-password-token").val();
        var newPassword = jQuery("#new-password").val();
        var newConfirmedPassword = jQuery("#new-confirmed-password").val();
        var customerId = jQuery("#rp-customer-id").val();
        var create_url = `/customcustomer/account/resetpassword/?id=${customerId}&token=${resetPasswordToken}`;
        var error = 0;
        if (newPassword == '') {
            var err_msg = "This is a required field.";
            validerr_msg("pwd-reset-page", "new-password", err_msg);
            error = 1;
        } else {
            jQuery('#new-password').siblings(".error-msg").text('');
            jQuery('#new-password').siblings(".error-msg").hide();
        }
        if (newConfirmedPassword == '') {
            var err_msg = "This is a required field.";
            validerr_msg("pwd-reset-page", "new-confirmed-password", err_msg);
            error = 1;
        } else {
            jQuery('#new-confirmed-password').siblings(".error-msg").text('');
            jQuery('#new-confirmed-password').siblings(".error-msg").hide();
        }
        if (newPassword != '' && newConfirmedPassword != '') {
            if (newPassword != newConfirmedPassword) {
                var err_msg = "password doesn't match.";
                validerr_msg("pwd-reset-page", "new-confirmed-password", err_msg);
                error = 1;
            }
        }
        if (error == 0) {
            jQuery.ajax({
                url: create_url,
                type: "POST",
                data: {
                    password: newPassword,
                    password_confirmation: newPassword,
                    is_ajax: 1
                },
                dataType: 'json',
                beforeSend: () => jQuery(".body-popup-overlay").show(),
                success: response => {
                    if (response.error == 0) {
                        location.href = "/customer/account/";
                    } else {
                        jQuery('#new-confirmed-password').siblings(".error-msg").text(response.message);
                        jQuery('#new-confirmed-password').siblings(".error-msg").show();
                    }
                },
                complete: () => jQuery(".body-popup-overlay").hide()
            })
        }
    });
    //create password end
    // default login start
    jQuery("body").on("click", "#default_loginbtn", function() {
        console.log('login');
        // jQuery(".login-by-pwd .error-div").text("");
        var email = jQuery("#email").val();
        var pass = jQuery("#pass").val();
        popup = "acc-login-content";
        console.log(typeof(email));
        console.log(typeof(pass));
        var login_by_pwd = "/customcustomer/account/customlogin";
        if ("" == email) validerr_msg(popup, "email", (error_msg = "Please enter User Email."));
        else if (0 == isValidEmailAddress(email)) {
            var error_msg = "Please enter valid email address.";
            validerr_msg(popup, "email", (error_msg = 0 == isValidEmailAddress(user_email) ? "Please enter valid email address." : error_msg));
        } else
            "" == pass ?
            validerr_msg(popup, "pass", (error_msg = "Please enter User Password.")) :
            1 == /\s/.test(pass) ?
            validerr_msg(popup, "pass", (error_msg = "Space not allowed in password.")) :
            1 == /<(.|^\n)*?>/.test(pass) ?
            validerr_msg(popup, "pass", (error_msg = "Special(<(.|^\n)*?>) characters are not allowed in password")) :
            (jQuery("#user_loginbtn").attr("disabled", !0),
                jQuery("#ic_ajax_small_loader").show(),
                jQuery.ajax({
                    method: "post",
                    url: login_by_pwd,
                    data: jQuery("#login_form").serialize(),
                    dataType: "json",
                    success: function(response) {
                        console.log('success');
                        console.log(response.redirectUrl);
                        //return false;
                        jQuery("#user_loginbtn").attr("disabled", !1),
                            jQuery("#ic_ajax_small_loader").hide(),
                            0 == response.error ?
                            jQuery(".acc-login-content .error-div").text(response.message).addClass("error_msg").css("visibility", "visible") :
                            (jQuery("#isLoggedIn").val("1"),
                                setTimeout(function() {
                                    window.location.href = response.redirectUrl;
                                }, 10));
                    },
                }));
    });
    // default login ends
    jQuery(".resend-link").click(function(b) {
        var flag = jQuery(this).attr('data-flag');
        var checkoutflag = jQuery(this).attr('data-checkout-flag');
        if (jQuery(this).hasClass("dis-resend-otp")) {
            return;
        }
        var contactNumber = '';
        console.log(flag);
        if (checkoutflag == 'signin-checkout') {
            contactNumber = jQuery('#customer_user_mob').val();
        } else if (jQuery('#currentPage').val() == 'customer_account_create') {
            contactNumber = jQuery('#login_user_mob').val();
        } else if (flag == 'signin') {
            contactNumber = jQuery('#user_mob').val();
        } else if (flag == 'registermobile') {
            contactNumber = jQuery('#registermobile').val();
        } else if (flag == 'myaccount') {
            if (jQuery('#change-email').val() == 1) {
                contactNumber = jQuery('#email').val();
            } else {
                contactNumber = jQuery('#telephone').val();
            }
        }
        var resend_url = "/customcustomer/account/otpRegister/";
        jQuery(this).addClass('dis-resend-otp');
        console.log(contactNumber);
        jQuery.ajax({
            method: "post",
            url: resend_url,
            data: {
                contactnumber: contactNumber,
                otpReason: flag,
                checkContactNumber: 1,
                returnUser: 0
            },
            dataType: "json",
            success: function(response) {
                // Enable the login button
                jQuery("#userphone_loginbtn").attr("disabled", false);

                // Show error or success message
                var $messageDiv = (checkoutflag === 'signin-checkout') ? jQuery(".checkout-login-modal .error-div") : jQuery(".login-modal .error-div");
                if (response.error == 1) {
                    $messageDiv
                        .text(response.message)
                        .addClass("error_msg")
                        .css("visibility", "visible");
                } else {
                    $messageDiv
                        .text(response.message)
                        .css("visibility", "visible");
                }

            }
        })

    });
    $("#change-email").on("change", function() {
        if ($(this).is(":checked")) {
            $(this).val("1"); // when checked
        } else {
            $(this).val("0"); // when unchecked
        }
    });

    jQuery(".signup-popup #user_name").click(function() {
        jQuery(this).css("border", "1px solid #ccc"), jQuery(".signup-popup .error-div").text("");
    });
    jQuery(".signup-popup #user_email").click(function() {
        jQuery(this).css("border", "1px solid #ccc"), jQuery(".signup-popup .error-div").text("");
    });
    jQuery(".signup-popup #user_password").click(function() {
        jQuery(this).css("border", "1px solid #ccc"), jQuery(".signup-popup .error-div").text("");
    });
    jQuery(".login-by-pwd-modal #user_email").click(function() {
        jQuery(this).css("border", "1px solid #ccc"), jQuery(".login-by-pwd-modal .error-div").text("");
    });
    jQuery(".login-by-pwd-modal #user_password").click(function() {
        jQuery(this).css("border", "1px solid #ccc"), jQuery(".login-by-pwd-modal .error-div").text("");
    });
    jQuery(".retrieve-pwd-popup #user_email").click(function() {
        jQuery(this).css("border", "1px solid #ccc"), jQuery(".retrieve-pwd-popup .error-div").text("");
    });

    // jQuery(".ic-right-nav .right-nav-plot .login-btn, .mobile-top-bar .user-mob-btn, #login, #login-now,.top_signin.ses,.ship-login").on("click", function () {
    jQuery(document).on('click', '.ic-right-nav .right-nav-plot .login-btn, .mobile-top-bar .user-mob-btn, #login, #login-now,.top_signin.ses,.ship-login', function() {
        var isLoggedIn = jQuery("#isLoggedIn").val();
        if (isLoggedIn == 0) {
            jQuery(".signup-popup").fadeOut(), jQuery(".retrieve-pwd-popup").fadeOut(), jQuery(".login-modal-wrapper").css("display", "flex").fadeIn(), jQuery(".mobile-step").css("display", "none"), jQuery("body").css("overflow", "hidden");
        } else {
            //window.location.href = jQuery('#websitebaseUrl').val();
            window.location.href = '/customer/account';
        }
    });
    if (window.innerWidth > 768) {
        // Show menu on mouse enter
        jQuery(document).on('mouseenter', '.ic-right-nav .right-nav-plot', function() {
            $(this).find('.login-menu-items').show();
        });

        // Hide menu on mouse leave
        jQuery(document).on('mouseleave', '.ic-right-nav .right-nav-plot', function() {
            $(this).find('.login-menu-items').hide();
        });
    } else {
        jQuery(document).on('click', '.ic-right-nav .right-nav-plot .user-login-btn', function(e) {
            //e.stopPropagation();
            jQuery(".login-menu-items").toggle();
        });
    }
    jQuery(".modal-logo-section .modal-close, .login-modal-wrapper").on("click", function(event) {
        if (!$(event.target).closest('.login-modal').length || $(event.target).hasClass('modal-close')) {
            jQuery('.login-modal-wrapper').fadeOut();
            jQuery('.checkout-login-modal-wrapper').fadeOut();
            jQuery('.new-login-modal-wrapper').fadeOut();
            jQuery('body').css('overflow', 'auto');
            jQuery('.error_msg').text('');
            jQuery('#user_mob').removeAttr('style');
            jQuery('.mob-input').val('');
            resetLoginSteps(); // Reset steps and clear the timer
        } else {
            console.log('modal else');
            jQuery('.error_msg').text('');
            //jQuery('.mobile-step').css('display','none');
        }

    });
    jQuery(".pwd-login .pwd-btn").on("click", function() {
        resetLoginSteps();
    });
    jQuery(".modal-logo-section .modal-close").on("click", function() {
            jQuery(".login-modal-wrapper").fadeOut(), jQuery(".login-by-pwd").fadeOut(), jQuery(".retrieve-pwd-popup").fadeOut(), jQuery(".signup-popup").fadeOut(), resetLoginSteps(), jQuery("body").css("overflow", "auto");
        }),
        jQuery(".forgot-pwd-link").on("click", function() {
            jQuery(".login-by-pwd").fadeOut(), jQuery(".retrieve-pwd-popup").css("display", "flex").fadeIn();
        }),
        jQuery(".forgot-pwd-link1").on("click", function() {
            jQuery(".retrieve-pwd-popup").fadeOut();
        }),
        jQuery(".create-acc-btn").on("click", function() {
            jQuery(".login-modal-wrapper").hide(), jQuery(".signup-popup").css("display", "flex").fadeIn(), jQuery("body").css("overflow", "hidden");
        });
    // new customer checkout login
    jQuery("body").on("click", "#checkout-otp", function() {
        //jQuery('.login-modal-wrapper').css('display','flex');
        jQuery('.custom-error').text('');
        jQuery('#customer_user_mob').removeAttr('style');
        var firstName = jQuery('.customer-firstname').val();
        var lastName = jQuery('.customer-lastname').val();
        var email = jQuery('.customer-email').val();
        var mob = jQuery('.customer-mob').val();
        var regex = /^([a-zA-Z]+[\'-.]?[a-zA-Z]+[ ]?)+$/;
        var error = 0;
        if (firstName == '') {
            var err_msg = "Please enter first name.";
            jQuery('.custom_first_name_error').text(err_msg);
            error = 1;
        } else if (regex.test(firstName) == false) {
            var err_msg = "Please enter valid first name.";
            jQuery('.custom_first_name_error').text(err_msg);
            error = 1;
        }
        if (lastName == '') {
            var err_msg = "Please enter last name.";
            //validerr_msg(h, "user_mob", err_msg);
            jQuery('.custom_last_name_error').text(err_msg);
            error = 1;

        } else if (regex.test(lastName) == false) {
            var err_msg = "Please enter valid last name.";
            //validerr_msg(h, "user_mob", err_msg);
            jQuery('.custom_last_name_error').text(err_msg);
            error = 1;
        }
        if (email == '') {
            var err_msg = "Please enter email id.";
            //validerr_msg(h, "user_mob", err_msg);
            jQuery('.custom_email_error').text(err_msg);
            error = 1;
        } else if (isValidEmailAddress(email) == false) {
            var err_msg = "Please enter valid email id.";
            //validerr_msg(h, "user_mob", err_msg);
            jQuery('.custom_email_error').text(err_msg);
            error = 1;
        }
        if (mob == '') {
            var err_msg = "Please enter User Mobile number.";
            //validerr_msg(h, "user_mob", err_msg);
            jQuery('.mob-error').text(err_msg);
            error = 1;
        } else if (isValidMobile(mob) == false) {
            var err_msg = "Please enter valid mobile number.";
            //validerr_msg(h, "user_mob", err_msg);
            jQuery('.mob-error').text(err_msg);
            error = 1;
        }
        var flag = '';
        if (jQuery('#oldcustomerflag').val() == 1) {
            flag = 1;
        }
        console.log(error);
        if (error == 0) {
            jQuery('#ic_loader').show();
            jQuery.ajax({
                method: "post",
                url: '/customcustomer/account/otplogin',
                data: {
                    email: email,
                    mob: mob,
                    checkContactNumber: 1,
                    is_ajax: 1,
                    flag: flag
                },
                success: function(response) {
                    jQuery('#ic_loader').hide();
                    var response = JSON.parse(response);
                    if (response.error == 1) {
                        jQuery(".custom-error").text(response.message);
                        jQuery('.customer-mob').css('border', '1px solid red');
                    } else {
                        jQuery('.checkout-login-modal-wrapper').css('display', 'flex');
                        jQuery(".otp-number").text(mob);
                        jQuery(".mobile-step").show();
                        jQuery("#hidden-user-email").val(email);
                        jQuery("#hidden-user-contact-number").val(mob);
                        timer();
                    }

                }

            });
        }

    });
    jQuery("body").on("click", ".custom_newuserphone_loginbtn", function() {
        console.log('login');
        let error = 0
        inputFields = jQuery("#otp-input input");
        inputFields.each((index, element) => {
            if (jQuery(element).val() == '') {
                error = 1
            }
        });
        console.log('innnnnnnnnnnnnnn------------');

        if (error == 1) {
            jQuery("#otp-input").addClass("error");
        }
        let enteredOtp = ''
        inputFields.each((index, element) => {
            enteredOtp += jQuery(element).val()
        })

        let userOtp = enteredOtp.trim();
        console.log('userOtp----------------->' + userOtp);
        let userEmail = jQuery("#hidden-user-email").val();
        let userContactNumber = jQuery("#hidden-user-contact-number").val();
        var firstName = jQuery('.customer-firstname').val();
        var lastName = jQuery('.customer-lastname').val();
        var flag = '';
        if (jQuery('#oldcustomerflag').val() == 1) {
            flag = 1;
        }
        var login_otp_url = "/customcustomer/account/otplogin";
        jQuery(".custom_newuserphone_loginbtn").attr("disabled", !0), jQuery("#ic_loader").show(),
            jQuery.ajax({
                method: "post",
                url: login_otp_url,
                data: {
                    otpvalue: userOtp,
                    contact: userContactNumber,
                    forotp: 1,
                    email: userEmail,
                    mob: userContactNumber,
                    firstName: firstName,
                    lastName: lastName,
                    flag: flag
                },
                success: function(response) {
                    var response = JSON.parse(response);
                    //console.log(response.error);return false;
                    jQuery(".custom_newuserphone_loginbtn").prop("disabled", false);
                    jQuery('#ic_loader').hide();
                    if (response.error == 1) {
                        jQuery(".checkout-login-modal .error-div")
                            .text(response.message)
                            .addClass("error_msg")
                            .css("visibility", "visible");
                    } else {
                        // Gtag Evevnt
                        dataLayer.push({
                            ecommerce: null
                        }); // Clear the previous ecommerce object.
                        dataLayer.push({
                            event: "user_login",
                            ecommerce: {
                                user_details: [{
                                    'phone': userContactNumber,
                                    'first_name': response.firstname,
                                    'last_name': response.lastname,
                                    'email': userEmail,
                                }]
                            }
                        });
                        jQuery("#isLoggedIn").val("1");
                        setTimeout(function() {
                            // Reload the page
                            location.reload();

                            // Or redirect to another URL:
                            // window.location.href = response.redirectUrl;
                        }, 2000);
                    }
                }
            })
    });
    jQuery("body").on("click", "#custom-login-otp", function() {
        var user_mob = jQuery('#login_user_mob').val();
        var error = 0;
        if (user_mob == '') {
            var err_msg = "Please enter email or mobile.";
            jQuery('.form-error').text(err_msg);
            error = 1;
        }
        if (error == 0) {
            jQuery('#ic_loader').show();
            jQuery.ajax({
                method: "post",
                url: '/customcustomer/account/customlogin',
                data: jQuery("#login_form").serialize(),
                success: function(response) {
                    jQuery('#ic_loader').hide();
                    var response = JSON.parse(response);
                    if (response.error == 1) {
                        jQuery(".form-error").text(response.message);
                        jQuery('#login_user_mob').css('border', '1px solid red');
                    } else {
                        jQuery('.login-modal-wrapper').css('display', 'flex');
                        jQuery(".otp-number").text(user_mob);
                        jQuery(".login-first-step").hide();
                        jQuery(".mobile-step").show();
                        //jQuery("#hidden-user-email").val(email);
                        jQuery("#hidden-user-contact-number").val(user_mob);
                        timer();
                    }

                }

            });
        }
    });
    jQuery("body").on("click", ".custom_loginuserphone_loginbtn", function() {
        let error = 0
        inputFields = jQuery("#otp-input input");
        inputFields.each((index, element) => {
            if (jQuery(element).val() == '') {
                error = 1
            }
        });
        console.log('innnnnnnnnnnnnnn------------');

        if (error == 1) {
            jQuery("#otp-input").addClass("error");
        }
        let enteredOtp = ''
        inputFields.each((index, element) => {
            enteredOtp += jQuery(element).val()
        })

        let userOtp = enteredOtp.trim();
        console.log('userOtp----------------->' + userOtp);
        let userEmail = jQuery("#hidden-user-email").val();
        let userContactNumber = jQuery("#hidden-user-contact-number").val();
        var firstName = jQuery('.customer-firstname').val();
        var lastName = jQuery('.customer-lastname').val();
        var login_otp_url = "/customcustomer/account/customlogin";
        jQuery(".custom_loginuserphone_loginbtn").attr("disabled", !0), jQuery("#ic_loader").show(),
            jQuery.ajax({
                method: "post",
                url: login_otp_url,
                data: {
                    otpvalue: userOtp,
                    contact: userContactNumber,
                    forotp: 1
                },
                dataType: "json",
                success: function(response) {
                    // Gtag Evevnt
                    dataLayer.push({
                        ecommerce: null
                    }); // Clear the previous ecommerce object.
                    dataLayer.push({
                        event: "user_login",
                        ecommerce: {
                            user_details: [{
                                'phone': userContactNumber,
                                'first_name': response.firstname,
                                'last_name': response.lastname,
                                'email': response.email,
                            }]
                        }
                    });
                    jQuery(".custom_loginuserphone_loginbtn").attr("disabled", !1), 1 == response.error ? jQuery(".login-modal .error-div").text(response.message).addClass("error_msg").css("visibility", "visible") : (jQuery("#isLoggedIn").val("1"), setTimeout(function() {
                        window.location.href = response.redirectUrl
                        //window.location.href = "https://m2upgstg.indiacircus.com/"
                    }, 2000))
                }
            })
    });

});