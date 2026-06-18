/* Zok Internet Café – form-validation.js */
/* Client-side validation for the enquiry and contact forms */

$(document).ready(function () {

    /* Show an error message below a field */
    function showError(fieldId, message) {
        var $field = $('#' + fieldId);
        $field.addClass('input-error').removeClass('input-success');
        $field.next('.error-msg').text(message).show();
    }

    /* Clear the error message for a field */
    function clearError(fieldId) {
        var $field = $('#' + fieldId);
        $field.removeClass('input-error').addClass('input-success');
        $field.next('.error-msg').text('').hide();
    }

    /* Validate SA phone number (10 digits starting with 0) */
    function isValidPhone(phone) {
        var cleaned = phone.replace(/[\s\-]/g, '');
        return /^0\d{9}$/.test(cleaned);
    }

    /* Validate email format */
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    /* Service pricing used in the enquiry response */
    var servicePricing = {
        'printing':  'Printing is available from R2.00 per page for black and white, and from R5.00 per page for colour. Single pages and bulk orders are welcome.',
        'scanning':  'Scanning starts from R5.00 per page. Scans can be emailed directly to you or saved to your USB flash drive.',
        'sars':      'SARS e-Filing assistance starts from R50.00 per session. Our team will guide you step by step through the entire process.',
        'sassa':     'SASSA application assistance is available at our Impilo Shopping Centre branch. Please visit us in-store for pricing and availability details.',
        'psira':     'PSIRA registration and renewal assistance starts from R80.00 per application, including form completion and submission.',
        'cv-typing': 'Professional CV typing starts from R50.00 per CV. We also assist with cover letters and motivation letters. Same-day turnaround is available.',
        'internet':  'Internet browsing is available at R10.00 per 30 minutes. WiFi access is also available for your own device.',
        'other':     'We offer laminating, photocopying, email assistance, student research support and more. Please visit us or call 076 087 5444 for pricing.'
    };

    /* Enquiry form validation (enquiry.html) */
    var $enquiryForm = $('#enquiry-form');

    if ($enquiryForm.length) {

        /* Validate fields on blur */
        $('#first-name').on('blur', function () {
            var val = $(this).val().trim();
            if (!val) {
                showError('first-name', 'Please enter your first name.');
            } else if (val.length < 2) {
                showError('first-name', 'First name must be at least 2 characters.');
            } else if (val.length > 50) {
                showError('first-name', 'First name must not exceed 50 characters.');
            } else {
                clearError('first-name');
            }
        });

        $('#last-name').on('blur', function () {
            var val = $(this).val().trim();
            if (!val) {
                showError('last-name', 'Please enter your last name.');
            } else if (val.length < 2) {
                showError('last-name', 'Last name must be at least 2 characters.');
            } else if (val.length > 50) {
                showError('last-name', 'Last name must not exceed 50 characters.');
            } else {
                clearError('last-name');
            }
        });

        $('#email').on('blur', function () {
            var val = $(this).val().trim();
            if (!val) {
                showError('email', 'Please enter your email address.');
            } else if (!isValidEmail(val)) {
                showError('email', 'Please enter a valid email address (e.g. name@example.com).');
            } else {
                clearError('email');
            }
        });

        $('#contact-number').on('blur', function () {
            var val = $(this).val().trim();
            if (!val) {
                showError('contact-number', 'Please enter your contact number.');
            } else if (!isValidPhone(val)) {
                showError('contact-number', 'Please enter a valid SA phone number (10 digits starting with 0).');
            } else {
                clearError('contact-number');
            }
        });

        $('#service-type').on('change', function () {
            if ($(this).val()) {
                clearError('service-type');
            }
        });

        $('#preferred-contact').on('change', function () {
            if ($(this).val()) {
                clearError('preferred-contact');
            }
        });

        $('#enquiry-message').on('blur', function () {
            var val = $(this).val().trim();
            if (val.length > 0 && val.length < 10) {
                showError('enquiry-message', 'Message must be at least 10 characters if provided.');
            } else {
                clearError('enquiry-message');
            }
        });

        /* Validate all fields on submit */
        $enquiryForm.on('submit', function (e) {
            e.preventDefault();
            var isValid = true;

            /* First name */
            var firstName = $('#first-name').val().trim();
            if (!firstName) {
                showError('first-name', 'Please enter your first name.');
                isValid = false;
            } else if (firstName.length < 2) {
                showError('first-name', 'First name must be at least 2 characters.');
                isValid = false;
            } else {
                clearError('first-name');
            }

            /* Last name */
            var lastName = $('#last-name').val().trim();
            if (!lastName) {
                showError('last-name', 'Please enter your last name.');
                isValid = false;
            } else if (lastName.length < 2) {
                showError('last-name', 'Last name must be at least 2 characters.');
                isValid = false;
            } else {
                clearError('last-name');
            }

            /* Email */
            var email = $('#email').val().trim();
            if (!email) {
                showError('email', 'Please enter your email address.');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('email', 'Please enter a valid email address (e.g. name@example.com).');
                isValid = false;
            } else {
                clearError('email');
            }

            /* Contact number */
            var phone = $('#contact-number').val().trim();
            if (!phone) {
                showError('contact-number', 'Please enter your contact number.');
                isValid = false;
            } else if (!isValidPhone(phone)) {
                showError('contact-number', 'Please enter a valid SA phone number (10 digits starting with 0).');
                isValid = false;
            } else {
                clearError('contact-number');
            }

            /* Service type */
            var service = $('#service-type').val();
            if (!service) {
                showError('service-type', 'Please select a service type.');
                isValid = false;
            } else {
                clearError('service-type');
            }

            /* Preferred contact method */
            var contactMethod = $('#preferred-contact').val();
            if (!contactMethod) {
                showError('preferred-contact', 'Please select how you would like us to contact you.');
                isValid = false;
            } else {
                clearError('preferred-contact');
            }

            /* Message (optional but if provided, must be 10+ chars) */
            var message = $('#enquiry-message').val().trim();
            if (message.length > 0 && message.length < 10) {
                showError('enquiry-message', 'Message must be at least 10 characters if provided.');
                isValid = false;
            } else {
                clearError('enquiry-message');
            }

            /* Show response modal if all fields are valid */
            if (isValid) {
                var pricing = servicePricing[service] || 'Our team will get back to you shortly with more information.';
                var contactText = contactMethod === 'phone' ? phone : (contactMethod === 'whatsapp' ? phone + ' (WhatsApp)' : email);

                var responseHTML = '<h3>Thank You, ' + firstName + '!</h3>' +
                    '<p>Your enquiry has been successfully submitted.</p>' +
                    '<p><strong>Service:</strong> ' + $('#service-type option:selected').text() + '</p>' +
                    '<p>' + pricing + '</p>' +
                    '<p><strong>Preferred contact:</strong> ' + contactText + '</p>' +
                    '<p>We will get back to you within 24 hours.</p>';

                $('#modal-body').html(responseHTML);
                $('#modal-overlay').fadeIn(250);

                $enquiryForm[0].reset();
                $('.input-success').removeClass('input-success');
            }
        });
    }

    /* Contact form validation (contact.html) */
    var $contactForm = $('#contact-form');

    if ($contactForm.length) {

        /* Validate fields on blur */
        $('#full-name').on('blur', function () {
            var val = $(this).val().trim();
            if (!val) {
                showError('full-name', 'Please enter your full name.');
            } else if (val.length < 2) {
                showError('full-name', 'Name must be at least 2 characters.');
            } else if (val.length > 100) {
                showError('full-name', 'Name must not exceed 100 characters.');
            } else {
                clearError('full-name');
            }
        });

        $('#contact-email').on('blur', function () {
            var val = $(this).val().trim();
            if (!val) {
                showError('contact-email', 'Please enter your email address.');
            } else if (!isValidEmail(val)) {
                showError('contact-email', 'Please enter a valid email address (e.g. name@example.com).');
            } else {
                clearError('contact-email');
            }
        });

        $('#contact-phone').on('blur', function () {
            var val = $(this).val().trim();
            if (!val) {
                showError('contact-phone', 'Please enter your contact number.');
            } else if (!isValidPhone(val)) {
                showError('contact-phone', 'Please enter a valid SA phone number (10 digits starting with 0).');
            } else {
                clearError('contact-phone');
            }
        });

        $('#message-type').on('change', function () {
            if ($(this).val()) {
                clearError('message-type');
            }
        });

        $('#subject').on('blur', function () {
            var val = $(this).val().trim();
            if (!val) {
                showError('subject', 'Please enter a subject.');
            } else if (val.length < 2) {
                showError('subject', 'Subject must be at least 2 characters.');
            } else {
                clearError('subject');
            }
        });

        $('#contact-message').on('blur', function () {
            var val = $(this).val().trim();
            if (!val) {
                showError('contact-message', 'Please enter your message.');
            } else if (val.length < 10) {
                showError('contact-message', 'Message must be at least 10 characters.');
            } else {
                clearError('contact-message');
            }
        });

        /* Validate all fields on submit */
        $contactForm.on('submit', function (e) {
            e.preventDefault();
            var isValid = true;

            /* Full name */
            var fullName = $('#full-name').val().trim();
            if (!fullName) {
                showError('full-name', 'Please enter your full name.');
                isValid = false;
            } else if (fullName.length < 2) {
                showError('full-name', 'Name must be at least 2 characters.');
                isValid = false;
            } else {
                clearError('full-name');
            }

            /* Email */
            var email = $('#contact-email').val().trim();
            if (!email) {
                showError('contact-email', 'Please enter your email address.');
                isValid = false;
            } else if (!isValidEmail(email)) {
                showError('contact-email', 'Please enter a valid email address (e.g. name@example.com).');
                isValid = false;
            } else {
                clearError('contact-email');
            }

            /* Contact phone */
            var phone = $('#contact-phone').val().trim();
            if (!phone) {
                showError('contact-phone', 'Please enter your contact number.');
                isValid = false;
            } else if (!isValidPhone(phone)) {
                showError('contact-phone', 'Please enter a valid SA phone number (10 digits starting with 0).');
                isValid = false;
            } else {
                clearError('contact-phone');
            }

            /* Message type */
            var messageType = $('#message-type').val();
            if (!messageType) {
                showError('message-type', 'Please select a message type.');
                isValid = false;
            } else {
                clearError('message-type');
            }

            /* Subject */
            var subject = $('#subject').val().trim();
            if (!subject) {
                showError('subject', 'Please enter a subject.');
                isValid = false;
            } else if (subject.length < 2) {
                showError('subject', 'Subject must be at least 2 characters.');
                isValid = false;
            } else {
                clearError('subject');
            }

            /* Message */
            var message = $('#contact-message').val().trim();
            if (!message) {
                showError('contact-message', 'Please enter your message.');
                isValid = false;
            } else if (message.length < 10) {
                showError('contact-message', 'Message must be at least 10 characters.');
                isValid = false;
            } else {
                clearError('contact-message');
            }

            /* Open email client with the form data */
            if (isValid) {
                var mailSubject = encodeURIComponent('[' + messageType + '] ' + subject);
                var mailBody = encodeURIComponent(
                    'Name: ' + fullName + '\n' +
                    'Email: ' + email + '\n' +
                    'Phone: ' + phone + '\n' +
                    'Message Type: ' + messageType + '\n\n' +
                    message
                );
                var mailtoLink = 'mailto:zokinternatecafe@gmail.com?subject=' + mailSubject + '&body=' + mailBody;

                window.location.href = mailtoLink;

                /* Show success message */
                var successHTML = '<h3>Message Ready!</h3>' +
                    '<p>Your email client should open shortly with your message to Zok Internet Café.</p>' +
                    '<p>If it does not open automatically, please email us directly at <a href="mailto:zokinternatecafe@gmail.com">zokinternatecafe@gmail.com</a> or call us on 076 087 5444.</p>';

                $('#modal-body').html(successHTML);
                $('#modal-overlay').fadeIn(250);

                $contactForm[0].reset();
                $('.input-success').removeClass('input-success');
            }
        });
    }

    /* Close modal on button click or overlay click */
    $('#modal-close, #modal-overlay').on('click', function (e) {
        if (e.target === this) {
            $('#modal-overlay').fadeOut(250);
        }
    });

});
