/* Zok Internet Café – main.js */
/* Shared JavaScript for interactive elements on every page */

$(document).ready(function () {

    /* FAQ accordion toggle (services page) */
    $('.faq-question').on('click', function () {
        var $thisAnswer = $(this).next('.faq-answer');
        var isOpen = $thisAnswer.is(':visible');

        /* Close every open answer first */
        $('.faq-answer').slideUp(300);
        $('.faq-question').removeClass('open');

        /* If the clicked one was closed, open it */
        if (!isOpen) {
            $thisAnswer.slideDown(300);
            $(this).addClass('open');
        }
    });

    /* Product category tabs (products page) */
    $('.product-tabs .tab').on('click', function (e) {
        e.preventDefault();

        $('.product-tabs .tab').removeClass('active');
        $(this).addClass('active');

        var target = $(this).data('target');

        if (target === 'all') {
            $('.product-category').fadeIn(300);
        } else {
            $('.product-category').hide();
            $('#' + target).fadeIn(300);
        }
    });

    /* Lightbox gallery with prev/next navigation (about page) */
    var galleryImages = [];
    var currentIndex = 0;

    /* Collect all gallery images into an array */
    $('.gallery-trigger').each(function (i) {
        galleryImages.push({
            src: $(this).attr('src'),
            alt: $(this).attr('alt')
        });
    });

    /* Open lightbox when an image is clicked */
    $('.gallery-trigger').on('click', function () {
        currentIndex = $('.gallery-trigger').index(this);
        showLightboxImage(currentIndex);
        $('#lightbox-overlay').fadeIn(250);
    });

    /* Display the image at the given index */
    function showLightboxImage(index) {
        var img = galleryImages[index];
        $('#lightbox-img').attr('src', img.src).attr('alt', img.alt);
        $('#lightbox-caption').text(img.alt);
        $('#lightbox-counter').text((index + 1) + ' / ' + galleryImages.length);

        /* Hide or show nav arrows at the boundaries */
        $('#lightbox-prev').toggle(index > 0);
        $('#lightbox-next').toggle(index < galleryImages.length - 1);
    }

    /* Navigate to previous image */
    $('#lightbox-prev').on('click', function (e) {
        e.stopPropagation();
        if (currentIndex > 0) {
            currentIndex--;
            showLightboxImage(currentIndex);
        }
    });

    /* Navigate to next image */
    $('#lightbox-next').on('click', function (e) {
        e.stopPropagation();
        if (currentIndex < galleryImages.length - 1) {
            currentIndex++;
            showLightboxImage(currentIndex);
        }
    });

    /* Close lightbox on button click or overlay click */
    $('#lightbox-close, #lightbox-overlay').on('click', function (e) {
        if (e.target === this) {
            $('#lightbox-overlay').fadeOut(250);
        }
    });

    /* Keyboard navigation for lightbox */
    $(document).on('keydown', function (e) {
        if (!$('#lightbox-overlay').is(':visible')) return;

        if (e.key === 'Escape') {
            $('#lightbox-overlay').fadeOut(250);
        } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
            currentIndex--;
            showLightboxImage(currentIndex);
        } else if (e.key === 'ArrowRight' && currentIndex < galleryImages.length - 1) {
            currentIndex++;
            showLightboxImage(currentIndex);
        }
    });

    /* Live search filter with no-results message (services page) */
    $('#service-search').on('input', function () {
        var query = $(this).val().toLowerCase().trim();
        var matchCount = 0;

        $('.service-card').each(function () {
            var cardText = $(this).text().toLowerCase();
            if (cardText.indexOf(query) > -1) {
                $(this).show();
                matchCount++;
            } else {
                $(this).hide();
            }
        });

        /* Show or hide the no-results message */
        if (matchCount === 0 && query.length > 0) {
            if (!$('#no-results').length) {
                $('.service-grid').after('<p id="no-results" class="no-results">No services found matching your search. Please try a different term.</p>');
            }
            $('#no-results').show();
        } else {
            $('#no-results').hide();
        }
    });

    /* Interactive Leaflet map (contact page) */
    if ($('#map').length) {
        var cafeLatLng = [-26.4200, 28.2300];

        var map = L.map('map', {
            center: cafeLatLng,
            zoom: 16,
            scrollWheelZoom: false
        });

        /* OpenStreetMap tiles */
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);

        /* Custom marker with detailed popup */
        var popupContent =
            '<strong>Zok Internet Café</strong><br>' +
            'Impilo Shopping Centre<br>' +
            'Thokoza, Gauteng<br><br>' +
            '<strong>Hours:</strong><br>' +
            'Mon–Fri: 08:00–17:00<br>' +
            'Sat: 08:00–14:00<br>' +
            'Sun & Holidays: Closed<br><br>' +
            '<a href="https://wa.me/27760875444" target="_blank">Chat on WhatsApp</a>';

        L.marker(cafeLatLng).addTo(map)
            .bindPopup(popupContent, { maxWidth: 250 })
            .openPopup();

        /* Enable scroll zoom only after clicking the map */
        map.on('click', function () {
            map.scrollWheelZoom.enable();
        });

        /* Fix map tile rendering when container is hidden initially */
        setTimeout(function () {
            map.invalidateSize();
        }, 300);
    }

    /* Scroll-in animations using IntersectionObserver */
    var animateElements = document.querySelectorAll('.animate-on-scroll');

    if ('IntersectionObserver' in window && animateElements.length) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animateElements.forEach(function (el) {
            observer.observe(el);
        });
    }

    /* Back-to-top button */
    var $backToTop = $('#back-to-top');

    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 400) {
            $backToTop.addClass('show');
        } else {
            $backToTop.removeClass('show');
        }
    });

    $backToTop.on('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

});
