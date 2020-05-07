# pushy-demo-cordova

A demo of the [Pushy SDK for Cordova](https://github.com/pushy-me/pushy-cordova) integrated into a sample Cordova app.

> [Pushy](https://pushy.me/) is the most reliable push notification gateway, perfect for real-time, mission-critical applications.

This app registers your device to receive push notifications and assigns it a unique token, which you can copy and paste into the [demo page](https://pushy.me/docs/resources/demo) to send yourself a test push notification on both Android and iOS.

Visit our documentation to [integrate Pushy into your existing Cordova app](https://pushy.me/docs/additional-platforms/cordova).

## Screenshots

#### iOS

<img src="assets/screenshots/1.png" width="250"> <img src="assets/screenshots/2.png" width="250"> 

#### Android

<img src="assets/screenshots/3.png" width="250"> <img src="assets/screenshots/4.png" width="250">

## Get Started

* Clone the repository locally: `git clone https://github.com/pushy-me/pushy-demo-cordova.git`
* Run `cd pushy-demo-cordova`
* Run `cordova platform add ios && cordova platform add android` to add both Android & iOS platforms

### Android

* Run `cordova run android` to run the project on an Android device
* Observe the Android logcat (`adb logcat *:S chromium`) for the Pushy device token and paste it into the [demo page](https://pushy.me/docs/resources/demo) to send yourself a test notification

### iOS

* Run `open platforms/ios/*.xcworkspace` to open the iOS project in Xcode and set the **Signing Team** in the "Pushy" target to your own development team
* Connect your iOS device via USB
* Run `cordova run ios`
* Copy the device token from the **Console** utility (select your device and search for "Pushy device token") and paste it into the [demo page](https://pushy.me/docs/resources/demo) to send yourself a test notification

## More Information

* [Pushy](https://pushy.me/)
* [Pricing](https://pushy.me/pricing)
* [Documentation](https://pushy.me/docs)

## License

[Apache 2.0](LICENSE)
