# POC - Watch Flutter

This project is a proof of concept about Watch Native and Flutter application.

- [Dart](https://dart.dev/guides)
- [SwiftUI](https://developer.apple.com/xcode/swiftui/)

## Communication Watch x Flutter App
- Plataform channel: [link](https://docs.flutter.dev/development/platform-integration/platform-channels)
- WCSessionDelegate: [link](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate)


## Getting Started
The proof of concept contains the minimal implementation required to create a communication bettwen watch and flutter app. The repository code is preloaded with some basic components like basic app architecture, app theme, constants and using flutter method channel and WCSessionDelegate.

## How to Use
<b>Step 1:</b> 

Download or clone this repo by using the link below:
```bash
git clone https://github.com/CheesecakeLabs/researches.git
```

<b>Step 2:</b> 

Go to project root and execute the following command in console to get the required dependencies:
```bash
#install dependecies
flutter pub get 
```

<b>Step 3:</b>

This project in this moment run only by Xcode, open your Xcode and choose the path -> _POCs/watch-flutter-app/watch-flutter/ios_, 
and in your XCode run watch option


Ex:


https://user-images.githubusercontent.com/19153832/162842111-71ae9608-0bdd-4a31-9ccc-30eb633812cc.mov



## How start a new project Watch and Flutter

<b>Step 1:</b>

- Create flutter starter project: [link](https://docs.flutter.dev/development/tools/vs-code)
- WCSessionDelegate works only above 9.3 iOS target version, must to configure the project Runner target in the XCode to use 9.3 version or above. 

<b>Step 2:</b>

Get your flutter Project and Add Watch Extension
- Go to your Xcode Project and select File > New > Target > choose watchOS template > Application > Watch App for iOS App. Choose your watch project name, Team and choose SwiftUI as interface.


<b>Step 3:</b>

- Set all targets with the same version in your Xcode.


## How Implement [Flutter Plataform Channel](https://docs.flutter.dev/development/platform-integration/platform-channels)

_It’s a channel that Flutter opens for writing Native code and connects back to Flutter. If there is a feature that doesn’t exist in Flutter, you can start writing with Native and send data back and forth between iOS/Android and Flutter._

![0_IxdffcTTrnxSkath](https://user-images.githubusercontent.com/19153832/162837557-0152ea45-5f69-4edd-9104-78bdcb2fc8ac.png)

<b>Step 1:</b>

<b>Adding Flutter Method Channel in iOS</b>
_Must be add in the AppDelegate to start listening to the data coming from Flutter code._

```dart
@objc class AppDelegate: FlutterAppDelegate {
  var session: WCSession?

  override func application(
    _ application: UIApplication,
    didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
  ) -> Bool {
    initFlutterChannel()
    
    //create flutter session
    if WCSession.isSupported() {
        session = WCSession.default;
        session?.delegate = self;
        session?.activate();
    }

    GeneratedPluginRegistrant.register(with: self)
    return super.application(application, didFinishLaunchingWithOptions: launchOptions)
  }

 private func initFlutterChannel() {
  if let controller = window?.rootViewController as? FlutterViewController {
    //name of your channel must be equal in everywhere!
    let channel = FlutterMethodChannel(
      name: "com.watch", 
      binaryMessenger: controller.binaryMessenger)
    
    channel.setMethodCallHandler({ [weak self] (
      call: FlutterMethodCall,
      result: @escaping FlutterResult) -> Void in
      //case -> name used to send a message to native device from flutter app
      switch call.method {
        case "flutterToWatch":
           guard let watchSession = self?.session, watchSession.isPaired, 
              watchSession.isReachable, let methodData = call.arguments as? [String: Any], 
              let method = methodData["method"], let data = methodData["data"] as? Any else {
              result(false)
           return
           }
        
           let watchData: [String: Any] = ["method": method, "data": data]
           watchSession.sendMessage(watchData, replyHandler: nil, errorHandler: nil)
           result(true)
        default:
           result(FlutterMethodNotImplemented)
        }
     })
   }
}
}
```

<b>Step 2:</b>

<b>Listening in Flutter code when Watch send a message</b>
```dart
//name of your channel
final channel = MethodChannel('com.watch');

Future<void> _initFlutterChannel() async {
    await channel.setMethodCallHandler((call) async {
      // Receive data from Native must be equal 'sendCounterToFlutter' value
      switch (call.method) {
        case "sendToFlutter":
          print('doing something');
          break;
        default:
          break;
      }
    });
}
```

<b>Sending message to watch device</b>
```dart
channel.invokeMethod("flutterToWatch", {"method": "sendToNative", "data": "Hello from flutter"});
```


<b>Step 3:</b>

<b>Adding Watch session</b>
_Must be add in the ViewModel to start watch session._
```swift 
class WatchViewModel: NSObject, ObservableObject {
    var session: WCSession
    
    // Add more cases if you have more receive method
    enum WatchReceiveMethod: String {
        case sendToNative
    }
    
    // Add more cases if you have more sending method
    enum WatchSendMethod: String {
        case sendToFlutter
    }
    
    init(session: WCSession = .default) {
        self.session = session
        super.init()
        self.session.delegate = self
        session.activate()
    }
    
    func sendDataMessage(for method: WatchSendMethod, data: [String: Any] = [:]) {
        sendMessage(for: method.rawValue, data: data)
    }
}
view raw
```

<b>Sending message to flutter app</b>
```swift
func sendDataMessage(for method: WatchSendMethod, data: [String: Any] = [:]) {
  sendMessage(for: method.rawValue, data: data)
}

func sendMessage(for method: String, data: [String: Any] = [:]) {
  //check if app is reachable to send message
  guard session.isReachable else {
    return
  }
  let messageData: [String: Any] = ["method": method, "data": data]
  session.sendMessage(messageData, replyHandler: nil, errorHandler: nil)
}

// How to use
//sendToFlutter -> key that flutter is listening to doing something!
viewModel.sendDataMessage(for: .sendToFlutter, data: ["msg": "Hello from watch"])
```






