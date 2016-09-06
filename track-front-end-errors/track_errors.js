if (typeof window.onerror != undefined) {
        
        // Don't overwrite the onerror function
        var original = window.onerror || function () {};

        window.onerror = function (msg, url, line, col, error) {

                original.apply(this, arguments);

                // Send Event to Google Analytics
                ga('send', {
                        hitType: 'event',
                        eventCategory: 'FEO',
                        eventAction: 'error',
                        eventLabel: 'error'
                });
        };

}

