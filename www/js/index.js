var app = {
    // Application constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // 'deviceready' event
    onDeviceReady: function () {
        // <p> textual elements
        var status = document.querySelector('.status');
        var instructions = document.querySelector('.instructions');

        // Start the Pushy service
        Pushy.listen();

        // Set custom notification icon (Android)
        Pushy.setNotificationIcon('ic_notify');

        // Enable in-app notification banners (iOS 10+)
        Pushy.toggleInAppBanner(true);

        // Register the device for push notifications
        Pushy.register(function (err, deviceToken) {
            // Handle registration errors
            if (err) {
                // Update UI with error text
                status.innerHTML = 'Registration Error';
                instructions.innerHTML = '(restart app to try again)';

                // Show alert with error details
                return alert(err);
            }

            // Update UI with device token
            status.innerHTML = deviceToken;
            instructions.innerHTML = '(copy from logcat)';

            // Write token to logcat
            console.log('Pushy device token: ' + deviceToken);

            // Write code to send the token to your backend server
        });

        // Listen for push notifications
        Pushy.setNotificationListener(function (data) {
            // Print notification payload data
            console.log('Received notification: ' + JSON.stringify(data));

            // Display an alert with the "message" payload value
            alert('Received notification: ' + data.message);

            // Clear iOS app badge number
            Pushy.clearBadge();
        });

        // Listen for notification click
        Pushy.setNotificationClickListener(function (data) {
            // Print notification payload data
            console.log('Notification click: ' + JSON.stringify(data));

            // Display an alert with the "message" payload value
            alert('Notification click: ' + data.message);

            // Navigate the user to another page or 
            // execute other logic on notification click
        });
    }
};

app.initialize();