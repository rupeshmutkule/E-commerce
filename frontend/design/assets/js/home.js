//home section banner
jQuery(document).ready(function() {

    jQuery("#subscribe_submit").on("click", function(t) {
        var subemail = document.getElementById("subemail").value;
        if ((jQuery(".loading").show(), "" == subemail)) jQuery("#newsletter_msg").html("Please enter Email id."), jQuery(".subscribe-right").css("display", "block"), jQuery(".loading").css("display", "none");
        else {
            var newsubemail = document.getElementById("subemail").value,
                newsubemailreg = newsubemail.indexOf("@"),
                newsubemailindex = newsubemail.lastIndexOf(".");
            1 == (!(newsubemailreg < 1 || newsubemailindex < newsubemailreg + 2 || newsubemailindex + 2 >= newsubemail.length) || (jQuery("#newsletter_msg").html("Please enter valid Email id."), jQuery(".subscribe-right").css("display", "block"), jQuery(".loading").css("display", "none"), !1)) &&
                (jQuery("#newsletter_msg").html(""),
                    (sub_url = document.getElementById("sub_url").value),
                    jQuery.ajax({
                        method: "post",
                        url: sub_url,
                        data: {
                            email: subemail
                        },
                        dataType: "json",
                        success: function(response) {
                            jQuery("#newsletter_msg").html(response.message), jQuery(".subscribe-right").css("display", "block"), jQuery(".loading").css("display", "none");
                        },
                    }));
        }
    });

    // jQuery('.home-hero-slider').not('.slick-initialized').slick({
    //     slidesToShow: 1,
    //     infinite: false,
    //     autoplay:true,
    //     dots: true,
    //     arrows:false,
    //     responsive: [
    //         {
    //         breakpoint: 1024,
    //         settings: {
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             infinite: true,
    //             arrows:false,
    //             dots: true
    //         }
    //         }
    //     ]
    // });
    const $slider = $(".home-hero-slider");

    const IMAGE_SLIDE_DURATION = 5000; // 5 seconds for image slides
    const IFRAME_SLIDE_DURATION = 30000; // 30 seconds for iframe slides
    let videoTimer = null;
    let videoPlayer = null;

    const isMobile = window.innerWidth <= 767;

    // Remove slides with missing image for current device
    $slider.find(".home-hero-slide").each(function() {
        const $slide = $(this);
        const mobImg = $slide.find(".mob-img").attr("src");
        const webImg = $slide.find(".web-img").attr("src");

        // Remove if required image is missing
        if (isMobile && (!mobImg || mobImg.trim() === "")) {
            $slide.remove();
        } else if (!isMobile && (!webImg || webImg.trim() === "")) {
            $slide.remove();
        }
    });

    // Re-check if any valid slides remain
    if ($slider.find(".home-hero-slide").length === 0) {
        console.warn("No valid slides to show.");
        return; // Skip Slick if nothing to show
    }

    // Now initialize Slick
    // $slider.slick({
    //   slidesToShow: 1,
    //   infinite: true,
    //   autoplay: false,
    //   dots: true,
    //   arrows: false,
    //   adaptiveHeight: true,
    // });
    jQuery('.home-hero-slider').not('.slick-initialized').slick({
        slidesToShow: 1,
        autoplay: false,
        infinite: true,
        dots: true,
        lazyLoad: 'ondemand',
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
            }
        }]
    });
    $(window).on('load resize', function() {
        $('.home-hero-slider').slick('setPosition');
    });
    //whatsnew section slider          

    jQuery('.whatsnew-slider').not('.slick-initialized').slick({
        slidesToShow: 1,
        autoplay: true,
        infinite: true,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
            }
        }]
    });

    jQuery('.right-trending').not('.slick-initialized').slick({
        slidesToShow: 1,
        autoplay: true,
        infinite: true,
        dots: true,
        arrows: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true
            }
        }]
    });

    jQuery('.testimonial-slider').not('.slick-initialized').slick({
        slidesToShow: 1,
        autoplay: false,
        infinite: true,
        dots: false,
        arrows: true,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: true,
                dots: false,
                autoplay: true,
            }
        }]
    });
    jQuery('.home-hero-slider').slick('setPosition');
    var storeId = jQuery('#store-id').val();
    var currencyCode = jQuery('#currencyCode').val();
    var currencysymbol = jQuery('#curr-symb-home').val();
    jQuery.ajax({
        type: "POST",
        url: "/homepageslider.php",
        data: {
            isAjax: 1,
            store_id: storeId,
            currency_symbol: currencysymbol,
            currency_code: currencyCode
        },
        dataType: "json",
        success: function(response) {
            //console.log(response);return false;
            if (typeof response.homepage_slider !== 'undefined' && response.homepage_slider !== '') {
                //jQuery('.bydesign-locator').append(response.homepage_slider);
                jQuery('.whatsnew-section').before(response.homepage_slider);
            }
            if (response.error == 0) {
                jQuery('.popular-products-grid').not('.slick-initialized').slick({
                    //jQuery(".popular-products-grid").slick({
                    slidesToShow: 4,
                    autoplay: false,
                    infinite: false,
                    centerMode: false,
                    dots: false,
                    arrows: true,
                    responsive: [{
                            breakpoint: 1112,
                            settings: {
                                slidesToShow: 2.5,
                                slidesToScroll: 2,
                                infinite: false,
                                arrows: false,
                                dots: true,
                            },
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1.4,
                                slidesToScroll: 1,
                                infinite: false,
                                arrows: false,
                                dots: true,
                            },
                        },
                    ],
                });
                jQuery('.popular-products-wrapper .popular-products-grid .custom-icon').on('click', function(e) {
                    var prod_type = jQuery(this).closest('.product-block').attr('prod-type');
                    var prod_url = jQuery(this).closest('.product-block').attr('prod-url');
                    var pId = jQuery(this).closest('.product-block').attr("prod_id");

                    if (prod_type == 'simple') {
                        //var sizeId = jQuery("input[name='size']:checked").val();
                        var sizeId = jQuery('.custom-select').find('.custom-option.selected').attr('data-value');
                        var sizeAttributeId = jQuery('.custom-select').find('.custom-option.selected').attr('data-attributeid');
                        var fillerId = jQuery('.custom-select').find('.custom-option-filler.selected').attr('data-value');

                        var price = jQuery('#final-price').val();

                        if (prod_type == 'configurable' && (sizeId == '' || sizeId == undefined || sizeId == null)) {
                            jQuery('.size-error').show();
                            return false;
                        } else {
                            jQuery('.size-error').hide();
                        }
                        // var qty = jQuery('.quantity').val();
                        var qty = 1;
                        if (qty == undefined || qty == '' || qty == null) {
                            qty = 1;
                        }

                        var popup_prod_name = jQuery(this).closest('.product-block').attr('prod_name');
                        jQuery.ajax({
                            url: '/customcheckout/ajax/CheckGiftVoucherProduct',
                            method: 'post',
                            data: {
                                product_id: pId,
                                flag: 1
                            },
                            dataType: 'json',
                            beforeSend: function() {
                                jQuery('.body-popup-overlay').show();
                            },
                            success: function(response) {
                                if (response.status == 2) {
                                    jQuery('.gc-pro-name').html(popup_prod_name);
                                    jQuery('.gc-q-pro-name').html(popup_prod_name);
                                    jQuery('.giftcard-buynow-popup').css('display', 'flex');
                                    jQuery('#add_to_cart_pid').val(pId);
                                    jQuery('#add_to_cart_prod_type').val(prod_type);
                                    jQuery('#add_to_cart_prod_url').val(prod_url);
                                } else {
                                    //add to cart
                                    jQuery.ajax({
                                        method: "post",
                                        url: '/pagelayout/checkout/customcart',
                                        data: {
                                            product_id: pId,
                                            p_type: prod_type,
                                            size_id: sizeId,
                                            size_attribute_id: sizeAttributeId,
                                            filler_id: fillerId,
                                            is_ajax: 1,
                                            qty: qty
                                        },
                                        dataType: "json",
                                        beforeSend: function(e) {
                                            jQuery('.body-popup-overlay').show();
                                            e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                                        },
                                        success: function(resp) {
                                            var site = '';
                                            var storeId = jQuery('#store-id').val();
                                            if (storeId == 1) {
                                                site = 'indiacircus';
                                                storeViewCode = 'default';
                                            }
                                            var prod_name = jQuery('#p_name').val();
                                            var p_type = jQuery('#p_type').val();
                                            var p_sku = jQuery('#p_sku').val();
                                            var specialPrice = jQuery('#special-price').val();
                                            var offerPrice = jQuery('#special-price').val();
                                            var subtotal = jQuery('.product-subtotal').val();
                                            var categoryName = jQuery('#category-name').val();
                                            var subCategoryName = jQuery('#subcategory-name').val();
                                            var estimateDeliveryTime = jQuery('#estimate-delivery-time').val();
                                            var category = jQuery('#category-name').val();
                                            var designer = jQuery('#designer-name').val();
                                            var prod_url = jQuery("#p_url").val();
                                            var special_price_from_date = jQuery("#special-price-from").val();
                                            var special_price_to_date = jQuery("#special-price-to").val();
                                            var short_description = resp.short_description ? resp.short_description.replace(/<br\s*\/?>/gi, '') : '';

                                            //Facebook Pixel Code  

                                            fbq('track', 'AddToCart', {
                                                content_ids: [
                                                    resp.product_id
                                                ],
                                                currency: jQuery('#curr_code').val(),
                                                value: parseFloat(resp.special_price)
                                            });
                                            //Facebook Pixel Code

                                            dataLayer.push({
                                                ecommerce: null
                                            }); // Clear the previous ecommerce object.
                                            dataLayer.push({
                                                event: "add_to_cart",
                                                ecommerce: {
                                                    currency: jQuery('#curr_code').val(),
                                                    value: resp.cart_subtotal,
                                                    store_code: jQuery('#store_code').val(),
                                                    store_name: jQuery('#store_name').val(),
                                                    ua: '',
                                                    items: [{
                                                        item_id: String(resp.product_id),
                                                        item_name: resp.product_name,
                                                        index: 0,
                                                        item_category: category,
                                                        price: resp.price,
                                                        quantity: resp.qty,
                                                        product_url: resp.prod_url,
                                                        product_sku: resp.prod_sku,
                                                        product_image: resp.prod_image,
                                                        product_short_description: short_description,
                                                        product_description: resp.description
                                                    }]
                                                }
                                            });
                                            jQuery('.body-popup-overlay').hide();
                                            jQuery('.cart-count').text(resp.cart_count);
                                            //jQuery(".custom-add-to-cart").hide();
                                            jQuery(".cart-redirect").show();
                                            jQuery("input[name='size']:checked").attr('data-select', 1);
                                        },
                                        complete: function(response) {
                                            var isAppCheck = jQuery('#isAppCheck').val();
                                            if (isAppCheck == 1) {
                                                //in app view
                                            } else {
                                                minicarthtml();
                                                jQuery('.search-popup-wrap').hide();
                                                jQuery('.cart-popup-plot').show();
                                                //$('html, body').animate({ scrollTop: 0 }, 'slow');
                                            }
                                        },
                                        error: function(response) {}

                                    });
                                }
                            },
                            complete: function() {
                                jQuery('.body-popup-overlay').hide();
                            },
                            error: function(err) {
                                jQuery('.body-popup-overlay').hide();
                            }

                        });
                    } else {
                        window.location.href = prod_url;
                    }
                });

            }
            //initSlider();             
        }
    });
});