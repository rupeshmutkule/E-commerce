jQuery(document).ready(function() {
    jQuery('.myacc_wishlist').on('click', function() {
        // Get the value of the hidden input with the id 'WishlitProdUrl'
        var prodUrl = jQuery(this).find('#WishlitProdUrl').val();

        // Redirect the user to the product URL
        window.location.href = prodUrl;
    });
    jQuery('.sh-default .sh-heading h4 a').click(function(e) {
        e.preventDefault(); // Prevent the default action of the anchor link

        var targetId = $(this).attr('href'); // Get the target ID from the href
        var targetContent = $(targetId); // Find the corresponding content
        jQuery(this).toggleClass('collapsed');

        // Slide toggle the clicked content
        targetContent.slideToggle();
    });

    jQuery(document).on('click', '.custom-add-to-cart', function() {
        console.log('click');
        //var sizeId = jQuery("input[name='size']:checked").val();
        var catId = jQuery('#category-id').val();
        var sizeId;
        var sizeAttributeId;
        var fillerId;
        var issaleable;
        var price;
        var sprice;
        var wallpaper_mtr;
        sizeId = jQuery('.custom-select').find('.custom-option.selected').attr('data-value');
        sizeAttributeId = jQuery('.custom-select').find('.custom-option.selected').attr('data-attributeid');
        fillerId = jQuery('.custom-select').find('.custom-option-filler.selected').attr('data-value');
        issaleableproduct = jQuery('.custom-select').find('.custom-option.selected').attr('data-saleable');
        price = jQuery('.custom-select').find('.custom-option.selected').attr('data-price');
        sprice = jQuery('.custom-select').find('.custom-option.selected').attr('data-sprice');
        if (jQuery('#currentdevice').val() == 'generic') {
            sizeId = jQuery('.select-size-option').find('.custom-option.selected').attr('data-value');
            sizeAttributeId = jQuery('.select-size-option').find('.custom-option.selected').attr('data-attributeid');
            issaleableproduct = jQuery('.select-size-option').find('.custom-option.selected').attr('data-saleable');
            price = jQuery('.select-size-option').find('.custom-option.selected').attr('data-price');
            sprice = jQuery('.select-size-option').find('.custom-option.selected').attr('data-sprice');
        }
        if (jQuery('#category-id').val() == '610') {
            var pType = 'simple';
        } else {
            var pType = jQuery('#p_type').val();
        }
        var pId = jQuery('#p_id').val();
        console.log(pType);
        console.log(pId);
        // return false;

        // var currency = jQuery("#c_currencycode").val();

        //var price = jQuery('.custom-select').find('.custom-option.selected').attr('data-price');
        //var sprice = jQuery('.custom-select').find('.custom-option.selected').attr('data-sprice');
        var finalPrice = sprice && sprice !== '' ? sprice : price;
        finalPrice = finalPrice ? finalPrice.replace(/\s+/g, '') : price;

        if (pType == 'configurable' && (sizeId == '' || sizeId == undefined || sizeId == null) &&
            (fillerId === '' || fillerId === undefined || fillerId === null)) {
            jQuery('.size-error').show();
            jQuery('html, body').animate({
                scrollTop: jQuery('.size-filler-slot').first().offset().top - 100
            }, 500);
            return false;
        } else {
            jQuery('.size-error').hide();
        }

        var width = jQuery('.wallpaper-width').val();
        var height = jQuery('.wallpaper-height').val();
        if (catId == 609) {
            wallpaper_mtr = jQuery('.wallpaper-feature').html();
            jQuery('.quantity').val(wallpaper_mtr);
            qty = jQuery('.wallpaper-feature').html();
        } else if (catId == 610) {
            wallpaper_mtr = jQuery('.wallpaper-rolls').html();
            jQuery('.quantity').val(wallpaper_mtr);
            qty = jQuery('.wallpaper-rolls').html();
        } else if (jQuery('#currentPage').val() == 'catalog_product_view') {
            var qty = jQuery('.pdpquantity').val();
        } else {
            var qty = jQuery('.quantity').val();
        }
        console.log(qty);
        if (qty == undefined || qty == '' || qty == null) {
            qty = 1;
        }
        if (issaleableproduct == 0) {
            // If the product is not saleable, we can skip sizeId and sizeAttributeId or handle differently
            sizeId = null;
            sizeAttributeId = null;
        }
        jQuery.ajax({
            url: '/customcheckout/ajax/CheckGiftVoucherProduct',
            method: 'post',
            data: {
                product_id: pId,
                flag: 1,
                catId: catId
            },
            dataType: 'json',
            beforeSend: function() {
                jQuery('.body-popup-overlay').show();
            },
            success: function(response) {
                if (response.status == 2) {
                    jQuery('.giftcard-buynow-popup').css('display', 'flex');
                } else {
                    //add to cart
                    jQuery.ajax({
                        method: "post",
                        url: '/pagelayout/checkout/customcart',
                        data: {
                            product_id: pId,
                            p_type: pType,
                            size_id: sizeId,
                            size_attribute_id: sizeAttributeId,
                            filler_id: fillerId,
                            is_ajax: 1,
                            qty: qty,
                            width: width,
                            height: height
                        },
                        dataType: "json",
                        beforeSend: function(e) {
                            jQuery('.body-popup-overlay').show();
                            e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                        },
                        success: function(resp) {
                            console.log(resp);
                            if (resp.error == 1) {
                                jQuery('.tooltip').css({
                                    'visibility': 'visible',
                                    'opacity': '1',
                                    'transition': 'opacity 0.5s'
                                });
                                setTimeout(function() {
                                    jQuery('.tooltip').css({
                                        'visibility': 'hidden',
                                        'opacity': '0'
                                    });
                                }, 5000);
                            }
                            //return false;
                            //cart_add event start
                            var site = '';
                            // console.log('case1--');
                            var storeId = jQuery('#store-id').val();
                            // console.log('case2--');
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
                            var cartsubtotal = jQuery('.cart_subtotal').val();
                            var categoryName = jQuery('#category-name').val();
                            var subCategoryName = jQuery('#subcategory-name').val();
                            var estimateDeliveryTime = jQuery('#estimate-delivery-time').val();
                            var category = jQuery('#category-name').val();
                            var designer = jQuery('#designer-name').val();
                            var prod_url = jQuery("#p_url").val();
                            var special_price_from_date = jQuery("#special-price-from").val();
                            var special_price_to_date = jQuery("#special-price-to").val();
                            // console.log('case3--');

                            // console.log('case7---');
                            //Facebook Pixel Code
                            fbq('track', 'AddToCart', {
                                content_ids: resp.product_id,
                                currency: jQuery('#curr_code').val(),
                                value: parseFloat(finalPrice)

                            });

                            //GTag Add To Cart
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
                                        productOriginalPrice: parseFloat(jQuery('#actual-price').val()),
                                        price: parseFloat(specialPrice),
                                        quantity: resp.qty,
                                        product_url: prod_url,
                                        product_sku: p_sku,
                                        product_image: resp.prod_image,
                                        product_short_description: resp.short_description,
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
                            minicarthtml();
                            jQuery('.search-popup-wrap').hide();
                            jQuery('.cart-popup-plot').show();
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
    });


    jQuery('.is-add-to-cart-pdp').on('change', function() {
        //var sizeId = jQuery("input[name='size']:checked").val();
        console.log('click the tsets', jQuery(this).val());
        var sizeId = jQuery('.custom-select').find('.custom-option.selected').attr('data-value');
        var sizeAttributeId = jQuery('.custom-select').find('.custom-option.selected').attr('data-attributeid');
        var issaleableproduct = jQuery('.custom-select').find('.custom-option.selected').attr('data-saleable');
        var fillerId = jQuery('.custom-select').find('.custom-option-filler.selected').attr('data-value');
        var pType = jQuery('#p_type').val();
        var pId = jQuery('#p_id').val();
        if (jQuery('#currentdevice').val() == 'generic') {
            sizeId = jQuery('.select-size-option').find('.custom-option.selected').attr('data-value');
            sizeAttributeId = jQuery('.select-size-option').find('.custom-option.selected').attr('data-attributeid');
            issaleableproduct = jQuery('.select-size-option').find('.custom-option.selected').attr('data-saleable');
            price = jQuery('.select-size-option').find('.custom-option.selected').attr('data-price');
            sprice = jQuery('.select-size-option').find('.custom-option.selected').attr('data-sprice');
        }
        console.log(pType);
        console.log(pId);
        // return false;

        // var currency = jQuery("#c_currencycode").val();

        var price = jQuery('#final-price').val();

        if (pType == 'configurable' && (sizeId == '' || sizeId == undefined || sizeId == null) &&
            (fillerId === '' || fillerId === undefined || fillerId === null)) {
            console.log('if');
            jQuery('.size-error').show();
            return false;
        } else {
            console.log('else');
            jQuery('.size-error').hide();
        }
        var wallpaper_mtr;
        var width = jQuery('.wallpaper-width').val();
        var height = jQuery('.wallpaper-height').val();
        if (jQuery('#currentPage').val() == 'catalog_product_view') {
            var qty = jQuery('.pdpquantity').val();
        } else {
            var qty = jQuery('.quantity').val();
        }
        console.log(qty);
        if (qty == undefined || qty == '' || qty == null) {
            qty = 1;
        }
        if (issaleableproduct == 0) {
            // If the product is not saleable, we can skip sizeId and sizeAttributeId or handle differently
            sizeId = null;
            sizeAttributeId = null;
        }
        var catId = jQuery('#category-id').val();
        if (jQuery(this).val() == 'yes') {
            jQuery.ajax({
                url: '/customcheckout/ajax/CheckGiftVoucherProduct',
                method: 'post',
                data: {
                    product_id: pId,
                    flag: 2,
                    catId: catId
                },
                dataType: 'json',
                beforeSend: function() {
                    jQuery('.body-popup-overlay').show();
                },
                success: function(responseNew) {
                    console.log(responseNew);
                    if (responseNew.flag == 1) {
                        console.log(' product is remove');
                        //add to cart
                        jQuery.ajax({
                            method: "post",
                            url: '/pagelayout/checkout/customcart',
                            data: {
                                product_id: pId,
                                p_type: pType,
                                size_id: sizeId,
                                size_attribute_id: sizeAttributeId,
                                filler_id: fillerId,
                                is_ajax: 1,
                                qty: qty,
                                width: width,
                                height: height
                            },
                            dataType: "json",
                            beforeSend: function(e) {
                                jQuery('.body-popup-overlay').show();
                                e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
                            },
                            success: function(resp) {
                                console.log(resp);
                                //return false;
                                //cart_add event start
                                var site = '';
                                // console.log('case1--');
                                var storeId = jQuery('#store-id').val();
                                // console.log('case2--');
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
                                var cartsubtotal = jQuery('.cart_subtotal').val();
                                var categoryName = jQuery('#category-name').val();
                                var subCategoryName = jQuery('#subcategory-name').val();
                                var estimateDeliveryTime = jQuery('#estimate-delivery-time').val();
                                var category = jQuery('#category-name').val();
                                var designer = jQuery('#designer-name').val();
                                var prod_url = jQuery("#p_url").val();
                                var special_price_from_date = jQuery("#special-price-from").val();
                                var special_price_to_date = jQuery("#special-price-to").val();
                                // console.log('case3--');

                                // console.log('case7---');
                                //GTag Add To Cart
                                dataLayer.push({
                                    ecommerce: null
                                }); // Clear the previous ecommerce object.
                                dataLayer.push({
                                    event: "add_to_cart",
                                    ecommerce: {
                                        currency: jQuery('#curr_code').val(),
                                        value: resp.cart_subtotal,
                                        items: [{
                                            item_id: String(resp.product_id),
                                            item_name: resp.product_name,
                                            index: 0,
                                            item_category: category,
                                            productOriginalPrice: parseFloat(jQuery('#actual-price').val()),
                                            price: parseFloat(specialPrice),
                                            quantity: resp.qty
                                        }]
                                    }
                                });
                                jQuery('.giftcard-buynow-popup').css('display', 'none');
                                jQuery('.body-popup-overlay').hide();
                                jQuery('.cart-count').text(resp.cart_count);
                                //jQuery(".custom-add-to-cart").hide();
                                jQuery(".cart-redirect").show();
                                jQuery("input[name='size']:checked").attr('data-select', 1);
                            },
                            complete: function(response) {
                                jQuery('.giftcard-buynow-popup').css('display', 'none');
                                minicarthtml();
                                jQuery('.search-popup-wrap').hide();
                                jQuery('.cart-popup-plot').show();
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
            // leave on same page and do nathing
            jQuery('.giftcard-buynow-popup').css('display', 'none');
            jQuery(this).prop('checked', false);
        }
    });

    jQuery('.modal-close').on('click', function() {
        jQuery('.giftcard-buynow-popup').css('display', 'none');
        jQuery(this).prop('checked', false);
    });

    jQuery('body').on('click', '#filler-to-cart-b-btn', function(event) {

        var fillerId = jQuery('.custom-select').find('.custom-option-filler.selected').attr('data-value');
        jQuery.ajax({
            url: '/pagelayout/checkout/filleradd',
            data: jQuery.param({
                'isAjax': '1',
                'fillerid': fillerId
            }),
            Async: 'false',
            dataType: 'json',
            beforeSend: function(e) {
                $('#ic_ajax_loader').show();
                e.setRequestHeader("X-Requested-With", "XMLHttpRequest")
            },
            success: function(e) {
                $('#ic_ajax_loader').hide();
                var sections = ['cart'];
                //customerData.invalidate(sections);
                //customerData.reload(sections, true);
            },
            error: function() {
                $('#ic_ajax_loader').hide();
            },
            complete: function() {
                $('#ic_ajax_loader').hide();
                setTimeout(function() {
                    $('.action.showcart').trigger('click');
                }, 1000);
            }
        });
    });

    jQuery(document).on("click", ".wishlist-img", function() {
        console.log('wishlist');
        var checkbox = jQuery(this).siblings('.wish-btn');
        if (jQuery("#isLoggedIn").val() == 0) {
            jQuery(".login-modal-wrapper").css('display', 'flex');
            jQuery(".mobile-step").css('display', 'none');
            return false;
        }
        checkbox.prop('checked', !checkbox.prop('checked'));
        if (checkbox.prop('checked')) {
            console.log('if');
            //jQuery('.detail-layout .detail-section .detail-plot .img-description .cart-Icstamp .cart-btn-slot .wishlist .wishlist-img').css('background-position', '-196px -84px');
            var action = "add";
            var gtagevent = "add_to_wishlist";
            jQuery('.wishlist-img').addClass('added-wishlist');
        } else {
            console.log('else');
            //jQuery('.detail-layout .detail-section .detail-plot .img-description .cart-Icstamp .cart-btn-slot .wishlist .wishlist-img').css('background-position', '-196px 0');
            var action = "remove";
            jQuery('.wishlist-img').removeClass('added-wishlist');
            var gtagevent = "remove_to_wishlist";
        }
        var pId = jQuery('#p_id').val();
        jQuery.ajax({
            method: "post",
            url: '/customcustomer/wishlist/index',
            data: {
                product_id: pId,
                action: action,
                is_ajax: 1
            },
            dataType: "json",
            beforeSend: function(e) {
                jQuery('.body-popup-overlay').show();
                e.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            },
            success: function(resp) {
                if (resp.error == 0) {
                    if (action === 'remove') {
                        jQuery('.wishlist-img').attr('title', 'Add to Wishlist');
                    } else if (action === 'add') {
                        jQuery('.wishlist-img').attr('title', 'Remove from Wishlist');
                    }
                }
                jQuery('.body-popup-overlay').hide();
                var prod_name = jQuery('#p_name').val();
                var price = jQuery('#actual-price').val();
                var p_type = jQuery('#p_type').val();
                var p_sku = jQuery('#p_sku').val();
                var specialPrice = jQuery('#special-price').val();
                var specialpricefrom = jQuery('#special-price-from').val();
                var specialpriceto = jQuery('#special-price-to').val();
                var category = jQuery('#category-name').val();
                var subcategory = jQuery('#subcategory-name').val();
                var platform = jQuery('#user_device').val();
                var storeId = jQuery('#store-id').val();
                var size = jQuery('#size').val();
                var urlkey = jQuery('#url-key').val();
                var prod_url = jQuery("#p_url").val();
                var stockqty = jQuery('#stock-qty').val();
                var description = jQuery('#description').val();
                var visibility = jQuery('#visibility').val();
                var createdat = jQuery('#created-at').val();
                var stockqty = jQuery('#stock-qty').val();
                var subtotal = jQuery('.subotal-without-discount').val();
                var cartSubtotal = jQuery('.cart-subtotal').val();
                var cartTotal = jQuery('#cart-total').val();
                dataLayer.push({
                    ecommerce: null
                }); // Clear the previous ecommerce object.
                dataLayer.push({
                    event: gtagevent,
                    ecommerce: {
                        currency: jQuery('#curr_code').val(),
                        value: parseInt(specialPrice ? specialPrice : price),
                        items: [{
                            item_id: parseFloat(resp.product_id),
                            item_name: resp.prod_name,
                            discount: parseInt(specialPrice ? specialPrice : price),
                            index: 0,
                            item_category: category,
                            price: price,
                            Url: resp.produrl,
                            product_img: resp.prod_image,
                            quantity: 1
                        }],
                    }
                });
            },
            complete: function(response) {},
            error: function(response) {}
        });

    });

    function fnNotAlphabet(e) {
        var code = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
        //Code Explanation{ 0-9, 45=Insert, 13=Enter, 08=Backspace, 09=Tab}
        if ((code >= 48 && code <= 57) || (code == 13 || code == 127 || code == 08 || code == 09 || code == 46)) {
            checknos = true;
            return (checknos);
        } else {
            checknos = false;
            return (checknos);
        }
    }

    function fnNotNumeric(e) {
        var code = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
        //Code Explanation{ A-Z,a-z, 45=Insert, 13=Enter, 08=Backspace, 09=Tab, 13=spacebar,127=del }
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122) || (code == 13 || code == 32 || code == 127 || code == 08 || code == 09)) {
            checkalpha = true;
            return (checkalpha);
        } else {
            checkalpha = false;
            return (checkalpha);
        }
    }
    /* notify email icon logic start here */
    jQuery('.img-description .blue-inbox').on('click', function() {
        jQuery('.notify-modal').fadeIn();
    });
    jQuery('.close.notify_close').on('click', function() {
        jQuery('.notify-modal').fadeOut();
        jQuery('.notify_message').html('');
    });

    /* notify email icon logic for plp start here */
    jQuery(".ic-listing-plot").on("click", ".product-block .mail-icon", function(e) {
        e.stopPropagation();
        e.preventDefault();
        console.log('--in plp pop--');
        let prodId = jQuery(this).parent(".product-block").attr("prod_id");
        console.log('--in plp pop-id -', prodId);
        jQuery("#notify_id").val(prodId);
        jQuery('.notify-modal').fadeIn();
    });
    /* notify email icon logic for pdp start here */
    jQuery(document).on("click", ".notify_button", function(e) {
        //let prodId = jQuery(this).parent(".product-block").attr("prod_id");
        //console.log('--in plp pop-id -',prodId);
        //jQuery("#notify_id").val(prodId);
        jQuery('.notify-modal').fadeIn();
    });

    jQuery(document).mouseup(function(e) {
        var modal = jQuery("#notifyModel .modal-content"); // Target your modal content
        if (!modal.is(e.target) && modal.has(e.target).length === 0) {
            // If the target of the click isn't the modal or a descendant of the modal
            jQuery('#notifyModel').fadeOut(); // Hide or close the modal
        }
    });
    jQuery(document).on('click', '#notify_button', function(e) {
        console.log('---in notify click--');
        //e.stopPropagation();
        //e.preventDefault();

        var email = $('#notify_email').val();
        if (email === '' || email === null) {
            $('.notify_message').html('Please enter Email address.');
            $('.notify_message').css({
                'color': '#ff0000'
            });
            return false;
        }
        var id = $('#notify_id').val();
        console.log(id);
        if (id === '' || id === null) {
            $('.notify_message').html('Some thing went wrong, please try again after sometime.');
            $('.notify_message').css({
                'color': '#ff0000'
            });
            return false;
        }
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (pattern.test(email) === false) {
            $('.notify_message').html('Please enter valid Email address.');
            $('.notify_message').css({
                'color': '#ff0000'
            });
            return false;
        }
        jQuery.ajax({
            method: "post",
            url: '/customcustomer/outofstock/notify',
            data: {
                email: email,
                id: id,
                isAjax: '1'
            },
            dataType: 'json',
            beforeSend: function(e) {
                $('#ic_ajax_loader').show();
            },
            success: function(e) {
                $('#ic_ajax_loader').hide();
                if (e.error) {
                    $('.notify_message').html(e.message);
                    $('.notify_message').css({
                        'color': '#ff0000'
                    });
                } else {
                    $('.notify_message').html(e.message);
                    $('.notify_message').css({
                        'color': '#3c763d'
                    });
                }
                setTimeout(function() {
                    $('.notify_message').html('');
                    $('#notify_email').val('');
                }, 1000);
            },
            error: function() {
                $('#ic_ajax_loader').hide();
            },
            complete: function() {
                $('#ic_ajax_loader').hide();
            }
        });
    });

    // Open the cart popup when clicking on the cart button
    jQuery(document).on('click', '.cart-btn', function(event) {
        event.stopPropagation(); // Prevent the click from propagating to the document
        minicarthtml();
        jQuery('.search-popup-wrap').hide();
        jQuery('.cart-popup-plot').toggle();
    });
    jQuery(document).on('click', '.pincode-btn', function(e) {

        //var pincode = jQuery('.pincode-input').val(); 
        var pincode = jQuery(this).parents('.pincode-form-wrapper').find('.pincode-input').val();
        //var pincode = jQuery('.pincode-input').val();
        if (pincode == '') {
            jQuery('.error.pincode-error').text('Enter Pincode');
            jQuery('.success-check').addClass('error-check');
            return false;
        }
        jQuery('.body-popup-overlay').css('display', 'block');
        jQuery.ajax({
            url: "/pagelayout/pincode/checkpincode",
            data: {
                pincode: pincode,
                isAjax: 1
            },
            method: 'post',
            dataType: "json",
            success: function(e) {
                console.log(e);
                jQuery('.body-popup-overlay').css('display', 'none');
                if (e.error == 0) {
                    setCookie('pc', pincode, '1');
                    var currentPage = jQuery('#currentPage').val();
                    if (currentPage == 'catalog_category_view' || currentPage == 'catalog_categoryMagento/luma' || currentPage == 'cms_index_index') {
                        jQuery('.pincode-span').html(e.message_plp);
                    } else {
                        jQuery('.pincode-span').html(e.message_pdp);
                    }
                    jQuery('.pincode-input').val(pincode);
                    jQuery('.pincode-error').html('');
                    jQuery('.success-check').removeClass('error-check');
                    jQuery('.pincode-text').css({
                        'display': 'flex'
                    });
                    jQuery('.pincode_custom').text(pincode);
                    jQuery('.shipping-pincode-popup').css({
                        'display': 'none'
                    });
                    jQuery("body").css("overflow", "auto");
                } else {
                    jQuery('.pincode-error').html(e.message);
                    jQuery('.success-check').addClass('error-check');
                    jQuery('.pincode-text').css({
                        'display': 'none'
                    });
                }
            },
        });
    });

    jQuery(window).on('load', function() {
        var s = new Date(),
            s = s.getHours() + "" + s.getMinutes() + s.getSeconds();
        jQuery.ajax({
            url: "/pincode.php?v=" + s,
            data: {
                isAjax: 1
            },
            method: 'get',
            dataType: "json",
            success: function(e) {
                console.log(e);
                if (e.error == 0) {
                    setCookie('pc', e.pincode, '1');
                    jQuery('.pincode-input').val(e.pincode);
                    jQuery('.pincode_custom').html(e.pincode);
                    if (jQuery('#currentPage').val() == 'catalog_category_view' || jQuery('#currentPage').val() == 'catalog_categoryMagento/luma') {
                        jQuery('.pincode-text').empty();
                        jQuery('.pincode-text').append(e.pincode_html_plp);
                    } else {
                        jQuery('.pincode-text').append(e.pincode_html_pdp);
                    }
                }
            },
        });
    });
    jQuery(".pincode-input").keyup(function() {
        var pincode = jQuery(this).val();
        jQuery(".success-check").css('display', 'block');
        if (pincode.length == 0) {
            jQuery(".success-check").css('display', 'none');
        }
        if (pincode.length == 6) {
            jQuery(".success-check").css('display', 'block');
        }
        // Ensure the value is no longer than 6 characters
        if (pincode.length > 6) {
            pincode = pincode.substring(0, 6); // Trim the value to 6 characters
            jQuery(this).val(pincode); // Update the input value
        }

        // Optionally, check if it's a valid 6-digit number
        if (pincode.length === 6 && !/^\d{6}$/.test(pincode)) {
            //alert('Please enter a valid 6-digit pincode.');
            jQuery('.success-check').addClass('error-check');

        }
    });
});


function minicarthtml() {
    jQuery.ajax({
        type: 'POST',
        url: '/customcheckout/minicart',
        Async: 'false',
        data: {
            isAjax: 1
        },
        success: function(response) {
            jQuery('.mini-cart-content').remove();
            jQuery('.minicart-overlay').remove();
            jQuery('.nocart-content').remove();
            jQuery('.cart-popup-plot').append(response);
        },

    });

}

function setCookie(a, b, c) {
    var d = new Date;
    d.setTime(d.getTime() + 24 * c * 60 * 60 * 1e3);
    var e = "; expires=" + d.toGMTString();
    var f = "; path=/";
    //document.cookie = a + "=" + b + e
    document.cookie = a + "=" + b + e + f;
}