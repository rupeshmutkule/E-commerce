var pageName = jQuery('#currentpage').val();

function session() {
    var baseUrl = jQuery('#websitebaseUrl').val();
    var action = '/session.php';
    var currentpage = jQuery("#currentPage").val();

    jQuery.ajax({
        url: action,
        type: 'POST',
        data: {
            currentpage: currentpage
        },
        success: function(response) {
            //console.log(response);
            var returnedData = JSON.parse(response);
            var commonInputs = returnedData['commonInputs'];
            var headerHtml = returnedData['headerHtml'];
            var form_key = returnedData['form_key'];
            var mobileHeader = returnedData['mobileHeader'];
            var cart_count = returnedData['cart_count'];
            jQuery('header').append(headerHtml);
            jQuery('footer').append(commonInputs);
            if (jQuery('#isLoggedIn').val() == 1) {
                jQuery('.right-nav-plot').first().after(mobileHeader);
                jQuery('.right-nav-plot:has(.login-btn)').hide();
            }
            if (cart_count !== null) {
                jQuery('.ic-right-nav .right-nav-plot .cart-btn .cart-count').text(cart_count);
            }

            var type = '';

            if ((pageName == 'pagelayout_catalog_index') || (pageName == 'enseminsider_insider_detail') || (pageName == 'edit_looks_lookview') || (pageName == 'pagelayout_catalog_search')) {
                type = 'productlist';
            }
            if (pageName == 'user_signup_index') {
                jQuery('.form_key').val(form_key);
            }

            jQuery('body').addClass(pageName);
            customerWishlist('productDetails');
        }
    })
}


jQuery(document).ready(function() {

    //home section banner
    session();
    // Disable scroll on number input
    jQuery('input[type=number]').on('wheel', function(e) {
        e.preventDefault();
    });
    if (jQuery('#currentPage').val() != 'checkout_index' || jQuery('#currentPage').val() != 'international_checkout_index') {
        // Show the go-top-wrap button when scrolling
        window.addEventListener('scroll', function() {
            let goTopWrap = document.querySelector('.go-top-wrap');
            if (window.scrollY > 200) { // Adjust this value as per your requirement
                goTopWrap.style.display = 'block';
            } else {
                goTopWrap.style.display = 'none';
            }
        });

        // Scroll smoothly to the top when the button is clicked
        document.querySelector('.go-top').addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default link behavior
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    jQuery('.search-btn').on('click', function(event) {
        event.stopPropagation(); // Prevent the document click event from firing
        jQuery('.cart-popup-plot').hide();
        jQuery('.search-popup-wrap').show();
    });

    jQuery(document).on('click', function(event) {
        if (jQuery('.search-popup-wrap').is(':visible') && !jQuery(event.target).closest('.search-popup-wrap').length) {
            jQuery('.search-popup-wrap').hide();
        }

    });
    // Prevent the popup from closing when clicking inside it
    jQuery('.search-popup-wrap').on('click', function(event) {
        event.stopPropagation();
    });

    if (window.innerWidth <= 1112) {
        jQuery('.search-mob-btn').on('click', function() {
            jQuery('.mob-menu-search').toggle();
        })
    }

    // Close the cart popup when clicking outside of it
    jQuery(document).on('click', function(event) {
        // Check if the cart popup is visible and if the click is outside of it
        if (jQuery('.cart-popup-plot').is(':visible') && !jQuery(event.target).closest('.cart-popup-plot').length) {
            jQuery('.cart-popup-plot').hide();
        }
    });

    // Prevent the cart popup from closing when clicking inside it
    jQuery('.cart-popup-plot').on('click', function(event) {
        event.stopPropagation(); // Stop the click from propagating
    });

    // Increase quantity
    jQuery('.increase').on('click', function() {
        var sizeId;
        var sizeAttributeId;
        var fillerId;
        var issaleable;
        if (jQuery('#currentdevice').val() == 'generic') {
            sizeId = jQuery('.select-size-option').find('.custom-option.selected').attr('data-value');
            sizeAttributeId = jQuery('.select-size-option').find('.custom-option.selected').attr('data-attributeid');
            fillerId = jQuery('.select-size-option').find('.custom-option-filler.selected').attr('data-value');
            issaleable = jQuery('.select-size-option').find('.custom-option.selected').attr('data-saleable');
        } else {
            sizeId = jQuery('.custom-select').find('.custom-option.selected').attr('data-value');
            fillerId = jQuery('.custom-select').find('.custom-option-filler.selected').attr('data-value');
        }
        var pType = jQuery('#p_type').val();
        var $input = jQuery(this).siblings('.quantity');
        var currentValue = parseInt($input.val());
        if (pType == 'configurable' && (sizeId == '' || sizeId == undefined || sizeId == null) && (fillerId === '' || fillerId === undefined || fillerId === null)) {
            console.log('if');
            jQuery('.size-error').show();
            return false;
        } else {
            console.log('else');
            jQuery('.size-error').hide();
        }
        // Increment the value
        $input[0].setAttribute('value', currentValue + 1);
    });

    // Decrease quantity
    jQuery('.decrease').on('click', function() {
        var $input = jQuery(this).siblings('.quantity');
        var currentValue = parseInt($input.val());

        // Decrement the value only if it's greater than the minimum value (e.g., 1)
        if (currentValue > parseInt($input.attr('min'))) {
            $input[0].setAttribute('value', currentValue - 1);
        }
    });


    if (window.innerWidth <= 1112) {
        //main menu open jquery
        jQuery('.hamburger-btn').on('click', function() {
            if (jQuery(this).parent().parent().siblings().hasClass('showMobileTopOtipn') === false) {
                // jQuery('.ic-nav-list').fadeIn();
                jQuery('.ic-responsive-topbar .popup-overlay').fadeIn();
                jQuery('.menu-wrapper').animate({
                    left: '0%'
                });
                jQuery('.menu-wrapper .mobile-top-bar').animate({
                    left: '0%'
                });
                jQuery('.ic-subheader').addClass('showMobileTopOtipn');
                jQuery('body').css('overflow', 'hidden');
            }
        });

        //main menu close jquery
        jQuery('.menu-wrapper .mobile-top-bar .close-menu,.ic-responsive-topbar .popup-overlay').on('click', function() {
            jQuery('.menu-wrapper').animate({
                left: '-100%'
            });
            jQuery('.menu-wrapper .mobile-top-bar').animate({
                left: '-100%'
            });
            jQuery('.ic-subheader').removeClass('showMobileTopOtipn');
            jQuery('.ic-responsive-topbar .popup-overlay').fadeOut();
            // jQuery('.menu-wrapper .mobile-top-bar').css('position','relative');
            jQuery('body').css('overflow', 'auto');
        });

        //sub menu open jquery
        // jQuery('.ic-nav-link.mob-link').on('click', function() {
        //     var $href = $(this).data('href');
        //     console.log("href",$href);
        //     jQuery('#' + $href).css("height","auto").slideDown();
        // })

        jQuery('.ic-nav-link.mob-link').on('click', function() {
            var $href = jQuery(this).data('href');
            console.log("href", $href);

            // Close any other open sections
            jQuery('.ic-subnav-ul').not('#' + $href).slideUp();
            jQuery('.ic-nav-li .ic-nav-link.mob-link.down').not(this).removeClass('down');

            // Toggle the clicked section
            jQuery('#' + $href).slideToggle();
            jQuery(this).toggleClass('down');
        });

        // jQuery('a.ic-nav-link.mob-link').on('click', function(e){
        //     console.log('Link clicked');
        //     e.preventDefault();
        //     e.stopPropagation();
        //     console.log("href",$(this));
        //     var $href = $(this).data('href');
        //     console.log("href",$href);
        //     jQuery('#' + $href).show();
        //     jQuery('#' + $href).addClass('show');
        // });

        //back menu from L2
        // jQuery('.mobile-submenu-topbar .back-btn, .mobile-submenu-topbar .close-btn').on('click', function() {
        //     const parentUl = jQuery(this).closest('ul');
        //     console.log("back", parentUl);
        //     if (parentUl.hasClass('show')) {
        //         parentUl.removeClass('show');
        //         parentUl.hide();
        //         console.log("if log", parentUl.hasClass('show'));
        //     }
        // });        

        jQuery('.ic-subnav-li .ic-nav-sublink').on('click', function() {
            if (!jQuery(this).hasClass('rotate')) {
                jQuery('.ic-subnav-li .ic-nav-sublink').removeClass('rotate');
                jQuery(this).addClass('rotate');

                // Get the target submenu element
                var $href = jQuery(this).data('href');
                var $targetSubmenu = jQuery('#' + $href);

                // Hide all other submenus
                jQuery('.show-sub-sub-menu').removeClass('show-sub-sub-menu').slideUp('slow');

                // Show the target submenu
                $targetSubmenu.addClass('show-sub-sub-menu').slideDown('slow');
            } else {
                console.log("else");

                jQuery('.ic-subnav-li .ic-nav-sublink').removeClass('rotate');

                // Get the target submenu element
                var $href = jQuery(this).data('href');
                var $targetSubmenu = jQuery('#' + $href);

                // Hide the target submenu
                $targetSubmenu.removeClass('show-sub-sub-menu').slideUp('slow');
            }
        });

        //footer accordian
        jQuery('.footer-col-title').on('click', function() {
            if (!jQuery(this).hasClass('open')) {
                // Close all other sections
                jQuery('.footer-col-title').removeClass('open');
                jQuery('.footer-col .footer-col-ul').removeClass('show').slideUp('slow');

                // Open the clicked section
                jQuery(this).addClass('open');
                jQuery(this).siblings('.footer-col-ul').addClass('show').slideDown('slow');
            } else {
                // Close the clicked section if it's already open
                jQuery(this).removeClass('open');
                jQuery(this).siblings('.footer-col-ul').removeClass('show').slideUp('slow');
            }
        });
    }

    //autosuggestion

    jQuery('body').on('keyup', '.mysearch-input', function() {
        var keyWrd = jQuery(this).val();
        var currSymbol = jQuery('#curr-symb-home').val();
        if (keyWrd.length > 2) {
            data = 'isAjax=1&currSymbol=' + currSymbol + '&aq=' + keyWrd;
            jQuery.ajax({
                url: '/pagelayout/search/autosuggestion',
                data: data,
                type: "POST",
                beforeSend: function() {

                },
                success: function(resp) {
                    var respdata = jQuery.parseJSON(resp);
                    if (respdata.error) {

                    } else {
                        if (respdata.html) {
                            //jQuery('.autoresult').remove();
                            jQuery('.search-text-suggestion').remove();
                            jQuery('.searched-img-block').remove();
                            jQuery('.no-result').remove();
                            //jQuery('.search-box').append(respdata.html);
                            jQuery('.search-suggestion-plot').append(respdata.html);
                            setCookie('custom_search', keyWrd, '1');
                            jQuery('.ic-right-nav .search-popup-wrap .custom-icon').on('click', function(e) {

                                var prod_type = jQuery(this).closest('.product-block').attr('prod-type');
                                var prod_url = jQuery(this).closest('.product-block').attr('prod-url');
                                var pId = jQuery(this).closest('.product-block').attr("prod_id");

                                if (prod_type == 'simple') {
                                    //var sizeId = jQuery("input[name='size']:checked").val();
                                    var sizeId = jQuery('.custom-select').find('.custom-option.selected').attr('data-value');
                                    var sizeAttributeId = jQuery('.custom-select').find('.custom-option.selected').attr('data-attributeid');
                                    var fillerId = jQuery('.custom-select').find('.custom-option-filler.selected').attr('data-value');

                                    // var currency = jQuery("#c_currencycode").val();

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
                                                        // cartCountUpdateforApp(resp.cart_count);
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
                                    console.log('else');
                                    //window.open(prod_url).focus();
                                    window.location.href = prod_url;
                                }
                            });
                        }
                    }
                },
                error: function() {},
                complete: function() {}
            });
        } else {
            jQuery('.search-text-suggestion').remove();
            jQuery('.searched-img-block').remove();
            jQuery('.no-result').remove();
        }
    });

    //search on press enter key
    jQuery(document).on('keyup', '.mysearch-input', function(event) {
        // Check if Enter key is pressed
        //if (event.key === 'Enter' && jQuery('.search-result .load-more-prod a').length > 0) {
        //window.location.href = jQuery('.search-result .load-more-prod a').attr('href');
        //}
        if (event.key === 'Enter') {
            var href = jQuery('.search-suggestion-plot .load-more-prod').attr('href');
            if (href != 'undefined' && jQuery('.search-suggestion-plot .load-more-prod').length > 0) {
                window.location.href = href;
            } else {
                var searchkey = this.value.trim();
                var websiteurl = jQuery('#websitebaseUrl').val();
                if (searchkey != '' && searchkey.length > 3) {
                    window.location.href = websiteurl + 'icsearch?q=' + searchkey;
                }
            }
            jQuery('.mysearch-input').val('');
        }
    });

    jQuery(document).on('click', '.increase.cart', function() {
        var $input = jQuery(this).siblings('.quantity');
        var $this = jQuery(this);
        var product_quantity = jQuery(this).parents('.ic-cart-product-list-wrap').find('.quantity').val();
        var item_id = jQuery(this).parents('.ic-cart-product-list-wrap').find('#item_id').val();
        var product_id = jQuery(this).parents('.ic-cart-product-list-wrap').find('#product_id').val();
        var isminicart = 'no';
        updatequantity($this, $input, product_quantity, item_id, product_id, isminicart);
    });

    // Decrease quantity
    jQuery(document).on('click', '.decrease.cart', function() {
        var $input = jQuery(this).siblings('.quantity');
        var $this = jQuery(this);
        var product_quantity = jQuery(this).parents('.ic-cart-product-list-wrap').find('.quantity').val();
        var item_id = jQuery(this).parents('.ic-cart-product-list-wrap').find('#item_id').val();
        var product_id = jQuery(this).parents('.ic-cart-product-list-wrap').find('#product_id').val();
        var isminicart = 'no';
        updatequantity($this, $input, product_quantity, item_id, product_id, isminicart);
    });

    // Increase quantity
    jQuery('.cart-popup-plot').on('click', '.increase.minicart', function() {
        var $input = jQuery(this).siblings('.quantity');
        var $this = jQuery(this);
        var currentValue = parseInt($input.val());
        // var product_quantity = jQuery(this).parents('.cart-popup-plot').find('#product_quantity').val();
        // var product_quantity = jQuery(this).parents('.cart-product-li').find('.quantity').val();
        var item_id = jQuery(this).parents('.cart-product-li').find('#item_id').val();
        var product_id = jQuery(this).parents('.cart-product-li').find('#product_id').val();

        // Increment the value
        $input.val(currentValue + 1);
        var isminicart = 'yes';
        var product_quantity = $input.val();
        updatequantity($this, $input, product_quantity, item_id, product_id, isminicart);

        // // Show the minicart overlay
        // jQuery('.minicart-overlay').css('display', 'block');

        // // Hide the minicart overlay after 2 seconds
        // setTimeout(function() {
        //     jQuery('.minicart-overlay').css('display', 'none');
        // }, 2000); // 2000 milliseconds = 2 seconds
    });



    // Decrease quantity
    jQuery('.cart-popup-plot').on('click', '.decrease', function() {
        // var product_quantity = jQuery(this).parents('.cart-popup-plot').find('#product_quantity').val();
        var product_quantity = jQuery(this).parents('.cart-product-li').find('.quantity').val();
        var item_id = jQuery(this).parents('.cart-product-li').find('#item_id').val();
        var product_id = jQuery(this).parents('.cart-product-li').find('#product_id').val();
        var isminicart = 'yes';
        var $input = jQuery(this).siblings('.quantity');
        var currentValue = parseInt($input.val());
        var $this = jQuery(this);

        // Decrement the value only if it's greater than the minimum value (e.g., 1)
        if (currentValue > parseInt($input.attr('min'))) {
            $input.val(currentValue - 1);
        }
        var product_quantity = $input.val();

        updatequantity($this, $input, product_quantity, item_id, product_id, isminicart);

        // Show the minicart overlay
        // jQuery('.minicart-overlay').css('display', 'block');

        // Hide the minicart overlay after 2 seconds
        // setTimeout(function() {
        //     jQuery('.minicart-overlay').css('display', 'none');
        // }, 2000); // 2000 milliseconds = 2 seconds
    });


    jQuery(document).on('click', '.cart-product-plot .remove-link', function(e) {
        e.preventDefault(); // Prevent default link behavior
        var $this = jQuery(this); // Store reference to the clicked link
        var quoteItemId = $this.parents('.ic-cart-product-list-wrap').find('#item_id').val();
        var isminicart = 'false';
        removeItemFromCart($this, quoteItemId, isminicart);
    });

    jQuery('.cart-popup-plot').on('click', '.remove-item', function(e) {
        e.preventDefault(); // Prevent default link behavior
        var $this = jQuery(this); // Store reference to the clicked link
        var quoteItemId = $this.parents('.cart-product-li').find('#item_id').val();
        var isminicart = 'true';
        removeItemFromCart($this, quoteItemId, isminicart);
    });
    jQuery(".shipping-pincode-plot .pincode-slot").on("click", function() {
        jQuery(".shipping-pincode-popup").css("display", "flex");
        jQuery("body").css("overflow", "hidden");
    });

    jQuery(".shipping-pincode-popup .popup-overlay").on("click", function() {
        jQuery(".shipping-pincode-popup").css("display", "none");
        jQuery("body").css("overflow", "auto");
    });
    //show new search popup
    jQuery('.right-nav-plot .search-btn').on('click', function() {
        //jQuery('.new-search-section').css('display','flex').fadeIn();
        jQuery('.search-popup-wrap').css('display', 'flex').fadeIn();
        $('.mysearch-input').focus();
        jQuery('body').css('overflow', 'hidden');
    });

    jQuery('.search-back,.new-search-section .new-overlay , .search-popup-wrap .popup-overlay').on('click', function() {
        jQuery('.search-popup-wrap').css('display', 'none').fadeOut();
        jQuery('body').css('overflow', 'auto');
        jQuery('.mysearch-input').val('');
        jQuery('.search-suggestion-plot').css('display', 'none');
        jQuery('.popular-suggestion').css('display', 'flex');
    });

    //show and hide sections in search popup
    jQuery('.my-search').on('input', function() {
        var inputVal = jQuery(this).val();

        if (inputVal.length > 0) {

            // Show search icon container if hidden
            jQuery('.search-icon').css('display', 'flex');

            // Show close icon, hide search icon
            jQuery('.search-icon-img').hide();
            jQuery('.close-icon').show();

            jQuery('.popular-suggestion').hide();
            jQuery('.search-suggestion-plot').css('display', 'flex');
        } else {

            // Show search icon container if hidden
            jQuery('.search-icon').css('display', 'flex');

            // Show search icon, hide close icon
            jQuery('.search-icon-img').show();
            jQuery('.close-icon').hide();

            jQuery('.search-suggestion-plot').hide();
            jQuery('.popular-suggestion').css('display', 'flex');
        }
    });
    jQuery('.close-icon').on('click', function() {
        jQuery('.my-search').val(''); // Clear input
        jQuery('.search-icon-img').css('display', 'block'); // Show search icon
        jQuery(this).css('display', 'none'); // Hide close icon
        jQuery('.search-suggestion-plot').hide();
        jQuery('.popular-suggestion').css('display', 'flex');
    });

});

function customerWishlist(type) {
    console.log(type);
    //wishlisted products
    var isLoggedIn = jQuery('#isLoggedIn').val();
    var checkWishlist = jQuery('#checkedWishlist').val();
    var pageName = jQuery('#currentPage').val();
    console.log(pageName);
    if ((pageName == 'catalog_category_view' || pageName == 'catalog_product_view' || pageName == 'catalog_search_view') && isLoggedIn == 1) {
        var currentProductIds = jQuery('#p_id').val();
        var currentWishlistProducts = jQuery('#checkedWishlist').val();
        currentWishlistProducts = JSON.parse(currentWishlistProducts);
        console.log(currentWishlistProducts);
        //currentProductIds = JSON.parse(currentProductIds);
        // var inCurrent = jQuery(currentWishlistProducts).filter(currentProductIds);
        console.log('productDetails');
        if (type == 'productDetails' && currentWishlistProducts.includes(currentProductIds)) {
            console.log('productDetails1');
            // jQuery('.divnum_'+jQuery(pg_product_id).val()+' .bookmark').addClass('active');
            // jQuery('.divnum_'+jQuery(pg_product_id).val()+' .bookmark').attr('data-action','remove');
            setTimeout(function() {
                jQuery('#custom-wishlist').addClass('added-wishlist');
            }, 4000);
        }

    }
}



function updatequantity($this, $input, product_quantity, item_id, product_id, isminicart) {
    var $productContainer = $this.closest('.cart-product-link');
    var currency_symbol;
    if ($productContainer.closest('.cart-popup-plot').length) {
        // Get the product title (text inside the <a> tag)
        var productName = $productContainer.find('.prod-title a').text().trim();


        var actual_price_text = $productContainer.find('.price').text().trim();
        var productPrice = actual_price_text.replace(jQuery('#curr-symb').val(), '').replace(/\s+/g, '').trim(); // Remove "?" symbol and extra spaces

    } else {
        var productName = jQuery($this).parents('.ic-cart-product-list-wrap').find('.prod-title a').text().trim();

        var actual_price_text = jQuery($this).parents('.ic-cart-product-list-wrap').find('.minicart-bottom-plot .price').text().trim();
        var productPrice = actual_price_text.replace(jQuery('#currency_symbol').val(), '').trim();
    }
    //var productName = jQuery('.product-name a').text().trim();

    // Get the product price
    //var productPrice = jQuery('.actual-price').text().trim();
    jQuery.ajax({
        url: '/customcheckout/update/update',
        data: jQuery.param({
            'isminicart': isminicart,
            'updatequantity': 'yes',
            'product_quantity': product_quantity,
            'item_id': item_id,
            'product_id': product_id
        }),
        method: 'POST',
        dataType: 'json',
        beforeSend: function(e) {
            if (isminicart == 'no') {
                jQuery('#ic_loader').show();
            } else if (isminicart == 'yes') {
                jQuery('.minicart-overlay').show();
            }
            e.setRequestHeader("X-Requested-With", "XMLHttpRequest")
        },
        success: function(e) {
            if (e.error == 0) {
                console.log('success');
                var subtotal = e.subtotal;
                var grandtotal = e.grandtotal;
                var totaldiscount = e.totaldiscount;
                var grandTotalForGa = parseFloat(grandtotal.replace(/[\u20B9\s]+/g, ''));
                var priceForGa = parseFloat(productPrice);
                // jQuery('.order-summery-wrap').find('.subtotal-wrap .amt-txt').text(subtotal);
                // jQuery('.order-summery-wrap').find('.order-subtotal-wrap .amt-txt').text(grandtotal);
                //if(e.totalcount > 1){
                // jQuery('.IC-cart-layout-section').find('.title-head span').text('(' + e.totalcount + ' Items)');
                //} else {
                //jQuery('.IC-cart-layout-section').find('.title-head span').text('(' + e.totalcount + ' Item)');
                //}    
                jQuery($this).parents('.ic-cart-product-list-wrap').find('.actual-price').html(jQuery('#currency_symbol').val() + e.itemPrice);
                jQuery($this).parents('.ic-cart-product-list-wrap').find('.dis-price').html(jQuery('#currency_symbol').val() + e.itemActualPrice);
                jQuery('.order-summary').find('.billing-block .amount.subtotal').text(subtotal);
                jQuery('.order-summary').find('.total-section .grand-total').text(grandtotal);
                if (e.couponcode == '50TEST') {
                    jQuery('.order-summary').find('.billing-block .amount.discounti').text('-' + totaldiscount);
                }
                if (isminicart == 'yes') {
                    jQuery('.cart-popup-plot').find('.total-value').text(subtotal);

                    currency_symbol = jQuery('#curr-symb-home').val();

                    $productContainer.find('.cart-product-desc .minicart-bottom-plot .price').html(currency_symbol + e.itemPrice);
                }
                //Gtag Update Cart
                var product_price = parseFloat(productPrice.replace(/\s+/g, ''));
                var productCart = [{
                    productId: String(product_id),
                    productName: e.product_name,
                    productDescription: e.description,
                    productShortDescription: e.shortDescription,
                    productSku: e.sku,
                    productUrl: e.productUrl,
                    productImage: e.imageUrl,
                    productOriginalPrice: parseFloat(e.product_price),
                    productQty: parseFloat(jQuery($this).siblings('.quantity').val())
                }]
                dataLayer.push({
                    ecommerce: null
                }); // Clear the previous ecommerce object.
                dataLayer.push({
                    event: "cart_updated",
                    ecommerce: {
                        currency: jQuery('#curr_code').val(),
                        value: grandTotalForGa,
                        store_code: jQuery('#store_code').val(),
                        store_name: jQuery('#store_name').val(),
                        ua: '',
                        productInCart: productCart,
                        items: [{
                            item_id: parseFloat(item_id),
                            item_name: e.product_name,
                            couponCodeUsed: e.couponcode,
                            discount: "",
                            index: 0,
                            price: parseFloat(e.product_price),
                            quantity: parseFloat(jQuery('.quantity').val())
                        }]
                    }
                });
            } else if (e.error == 1) {
                console.log('error');
                console.log(product_quantity);
                console.log($this);
                $input.val(product_quantity - 1);
                jQuery($this).find('.tooltip').css({
                    'visibility': 'visible',
                    'opacity': '1',
                    'transition': 'opacity 0.5s'
                });
                setTimeout(function() {
                    jQuery($this).closest('.tooltip').css({
                        'visibility': 'hidden',
                        'opacity': '0'
                    });
                }, 5000);
            }
        },
        error: function() {
            jQuery('#ic_loader').hide();
            if (isminicart == 'no') {
                jQuery('#ic_loader').hide();
            } else if (isminicart == 'yes') {
                jQuery('.minicart-overlay').hide();
            }
        },
        complete: function() {
            if (isminicart == 'no') {
                jQuery('#ic_loader').hide();
            } else if (isminicart == 'yes') {
                jQuery('.minicart-overlay').hide();
            }
        }
    });
}

function removeItemFromCart($this, quoteItemId, isminicart) {
    var $productContainer = $this.closest('.cart-product-link');
    if ($productContainer.closest('.cart-popup-plot').length) {
        // Get the product title (text inside the <a> tag)
        var productName = $productContainer.find('.prod-title a').text().trim();


        var actual_price_text = $productContainer.find('.price').text().trim();
        var productPrice = actual_price_text.replace(jQuery('#curr-symb').val(), '').replace(/\s+/g, '').trim(); // Remove "?" symbol and extra spaces
        var productQuantity = $productContainer.find('.quantity').val();

    } else {
        // Find the closest product list container
        var productList = $this.closest('.ic-cart-product-list');

        // Get the product details
        var productName = productList.find('.product-name a').text();
        var productPrice = productList.find('.actual-price').text();
        var productQuantity = productList.find('.quantity').val();
    }
    jQuery.ajax({
        method: "POST",
        url: "/customcheckout/update/remove",
        data: {
            item_id: quoteItemId,
            is_minicart_request: isminicart
        },
        beforeSend: function() {
            if (isminicart == 'false') {
                jQuery('#ic_loader').show();
            } else if (isminicart == 'true') {
                jQuery('.minicart-overlay').show();
            }
        },
        success: function(response) {
            console.log(response);
            if (response.error == 0) {
                // Update cart summary
                jQuery('#cart-checkout-continue').html('');
                var oos = jQuery('#oos_' + quoteItemId).val();
                var stockcount = parseInt(jQuery('#stockOutCount').val(), 10); // Ensure it's treated as an integer
                var totaloos = stockcount; // Default to the current stock count
                console.log(oos);
                console.log(totaloos);
                console.log(stockcount);
                if (oos == 1) {
                    console.log('inside oos');
                    totaloos = stockcount - 1; // Subtract 1 if out of stock
                    console.log(totaloos);
                    jQuery('#stockOutCount').val(totaloos); // Update the stock count value
                }
                jQuery('.right-nav-plot.cart').find('.cart-btn .cart-count').text(response.summary.item_count);
                if (isminicart == 'false') {
                    // jQuery('.order-summery-wrap').find('.subtotal-wrap .amt-txt').text(response.summary.subtotal);
                    // jQuery('.order-summery-wrap').find('.order-subtotal-wrap .amt-txt').text(response.summary.grandtotal);
                    if (response.summary.item_count > 1) {
                        jQuery('.IC-cart-layout-section').find('.title-head span').text('(' + response.summary.item_count + ' items)');
                    } else {
                        jQuery('.IC-cart-layout-section').find('.title-head span').text('(' + response.summary.item_count + ' item)');
                    }
                    jQuery('.order-summary').find('.billing-block .amount.subtotal').text(response.summary.subtotal);
                    jQuery('.order-summary').find('.total-section .grand-total').text(response.summary.grandtotal);

                    if (response.summary.couponcode == '50TEST') {
                        jQuery('.order-summary').find('.billing-block .amount.discounti').text('-' + response.summary.discountAmount);
                    }

                    if (response.summary.hasSimpleProduct && response.summary.hasGiftCardProduct) {
                        jQuery('.continue-err').show();
                    } else {
                        if ($('.order-summary').siblings('.proceed-to-pay-btn').length > 0) {} else {
                            jQuery('.order-summary').after(`
                                <div class="proceed-to-pay-btn">
                                        <button type="button">
                                            <span>Proceed to Payment</span>
                                        </button>     
                                </div>
                            `);
                            jQuery('.continue-err').hide();
                        }
                    }

                    // Remove the parent div
                    $this.closest('.ic-cart-product-list-wrap').remove();

                    // Check if all items are removed
                    if (jQuery('.ic-cart-product-list-wrap').length === 0) {
                        window.location.reload();
                        jQuery('.IC-cart-layout-section').hide(); // Hide the cart section

                        jQuery('.upgrade-wrapper').append(`
                    <div class="cart-empty"> 
                    <p>You have no items in your shopping cart.</p>
                    <p>Click <a href="/">here</a> to continue shopping.</p>
                   </div>
            `);
                    }
                } else if (isminicart == 'true') {
                    jQuery('.mini-cart-total').find('.total-value').text(response.summary.subtotal);
                    $this.closest('.cart-product-li').remove();
                    if (jQuery('.cart-product-li').length === 0) {
                        jQuery('.mini-cart-content').remove();
                        jQuery('.cart-popup-plot').append('<div class="nocart-content"><p class="nocart-content-para">You have no items in your shopping cart.</p></div>');
                    }
                }
            }
            // Remove Cart Gtag Event
            var grandTotal = response.summary.grandtotal;
            var grandTotalForGa = parseFloat(grandTotal.replace(/[\u20B9\s]+/g, ''));
            var priceForGa = parseFloat(productPrice.replace(/[\u20B9\s]+/g, ''));
            var product_price = parseFloat(productPrice.replace(/\s+/g, ''));
            var productCart = [{
                productId: String(quoteItemId),
                productName: productName,
                productDescription: response.productDetails[0].description,
                productShortDescription: response.productDetails[0].shortDescription,
                productSku: response.productDetails[0].sku,
                productUrl: response.productDetails[0].productUrl,
                productImage: response.productDetails[0].imageUrl,
                productOriginalPrice: Math.floor(Number(response.productDetails[0].originalPrice)),
                productQty: parseInt(productQuantity)
            }]
            dataLayer.push({
                ecommerce: null
            }); // Clear the previous ecommerce object.
            dataLayer.push({
                event: "remove_from_cart",
                ecommerce: {
                    currency: jQuery('#curr_code').val(),
                    value: grandTotalForGa,
                    store_code: jQuery('#store_code').val(),
                    store_name: jQuery('#store_name').val(),
                    ua: '',
                    productInCart: productCart,
                    items: [{
                        item_id: String(quoteItemId),
                        item_name: productName,
                        coupon: response.coupon_code,
                        discount: 0,
                        index: 0,
                        price: priceForGa,
                        quantity: parseInt(productQuantity)

                    }]
                }
            });
        },
        complete: function() {
            if (isminicart == 'false') {
                jQuery('#ic_loader').hide();
            } else if (isminicart == 'true') {
                jQuery('.minicart-overlay').hide();
            }
        }
    });

}