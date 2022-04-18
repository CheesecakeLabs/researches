# POC - Watch Flutter

This project is a proof of concept about Watch Native and Flutter application.

- [Dart](https://dart.dev/guides)
- [SwiftUI](https://developer.apple.com/xcode/swiftui/)

## Communication Watch x Flutter App
- Plataform channel: [link](https://docs.flutter.dev/development/platform-integration/platform-channels)
- WCSessionDelegate: [link](https://developer.apple.com/documentation/watchconnectivity/wcsessiondelegate)


## Getting Started
The proof of concept contains the minimal implementation required to create a communication bettwen watch and flutter app. The repository code is preloaded with some basic components like basic app architecture, app theme, constants and using flutter method channel and WCSessionDelegate.

## How to Start
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


## Features

- Watch and App Communication 



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
extension AppDelegate: WCSessionDelegate {
    
    func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
        
    }
    
    func sessionDidBecomeInactive(_ session: WCSession) {
        
    }
    
    func sessionDidDeactivate(_ session: WCSession) {
        
    }
    
    func session(_ session: WCSession, didReceiveMessage message: [String : Any]) {
        DispatchQueue.main.async {
            if let method = message["method"] as? String, let controller = self.window?.rootViewController as? FlutterViewController {
                let channel = FlutterMethodChannel(
                    name: "com.watch",
                    binaryMessenger: controller.binaryMessenger)
                channel.invokeMethod(method, arguments: message)
            }
        }
    }
}
```

<b>Listening in Flutter when app code send a message to watch device</b>

```dart
//name of your channel
final channel = MethodChannel('com.watch');

Future<void> _initFlutterChannel() async {
    await channel.setMethodCallHandler((call) async {
      switch (call.method) {
        case "flutterToWatch":
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

<b>Listening message from flutter app</b> and <b>Sending message to flutter app</b>
```swift
extension WatchViewModel: WCSessionDelegate {
    
   //status from session
   func session(_ session: WCSession, activationDidCompleteWith activationState: WCSessionActivationState, error: Error?) {
        switch activationState {
        case .activated:
            print("WCSession activated successfully")
            onPaired()
        case .inactive:
            print("Unable to activate the WCSession. Error: \(error?.localizedDescription ?? "--")")
            onUnPaired()
        case .notActivated:
            print("Unexpected .notActivated state received after trying to activate the WCSession")
            onUnPaired()
        @unknown default:
            print("Unexpected state received after trying to activate the WCSession")
        }
    }
    
    // Receive message From AppDelegate.swift that send from iOS devices
    func session(_ session: WCSession, didReceiveMessage message: [String : Any]) {
        DispatchQueue.main.async {
            guard let method = message["method"] as? String, let enumMethod = WatchReceiveMethod(rawValue: method) else {
                return
            }

            switch enumMethod {
            case .sendToNative:
                print('doing something!')
            }
        }
    }
    
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
    
}
```

## How to build a Flutter + Apple Watch app

When you create a Flutter project with an Apple Watch extension, you'll have three targets on your xcode project: Runner, watch and watch WatchKit Extension. Both of them need a Bundle Identifier and a Provisioning Profile.

Basically, you'll need to create three different Provisioning Profile on the Apple Developer portal and set it up on your project.

After setting up your Profiles and the certificate (you can use the same certificate for both targets) for each target you'll Archive the **Runner** target. Then, you'll be able to distribute your app with the Apple Watch extension.

## Tips to integrate a Flutter + Apple Watch project with Fastlane

**Tip 1:** Update each target settings to do the manually signing
```ruby
def update_code_signing(team_id)
  update_code_signing_settings(
    use_automatic_signing: false,
    targets: "Runner",
    team_id: team_id,
    bundle_identifier: "io.ckl.pocwatch",
    profile_name: "POC Flutter Apple Watch",
  )

  update_code_signing_settings(
    use_automatic_signing: false,
    targets: "watch",
    team_id: team_id,
    bundle_identifier: "io.ckl.pocwatch.watchkitapp",
    profile_name: "POC Flutter Apple Watch - Watchkit",
  )

  update_code_signing_settings(
    use_automatic_signing: false,
    targets: "watch WatchKit Extension",
    team_id: team_id,
    bundle_identifier: "io.ckl.pocwatch.watchkitapp.watchkitextension",
    profile_name: "POC Flutter Apple Watch - Watchkit Extension",
  )
end
```
**Tip 2**: To create the Match certificate and Provisioning Profiles use the following command: 
```shell
fastlane match appstore -a io.ckl.pocwatch,io.ckl.pocwatch.watchkitapp,io.ckl.pocwatch.watchkitapp.watchkitextension
```
and update your **Fastfile** as the following:
```ruby
match(app_identifier: ["io.ckl.pocwatch", "io.ckl.pocwatch.watchkitapp", "io.ckl.pocwatch.watchkitapp.watchkitextension"])
```

**Tip 3:** You just need to build the **Runner** target
```ruby
  build_app(
      workspace: "Runner.xcworkspace",
      scheme: "Runner",
      export_method: "enterprise",
      export_team_id: team_id
  )
```
## References

- [WCSession](https://developer.apple.com/documentation/watchconnectivity/wcsession#//apple_ref/doc/uid/TP40015237-CH1-SW16)

- [SwiftUI](https://developer.apple.com/xcode/swiftui/)

- [Storyboard x SwiftUI](https://medium.com/technology-nineleaps/swift-ui-or-storyboard-675ff2b40829)

- [Flutter Method Channel](https://api.flutter.dev/javadoc/io/flutter/plugin/common/MethodChannel.html)

- [Flutter App via method channel](https://medium.com/kbtg-life/adding-apple-watch-to-flutter-app-via-flutter-method-channel-f1443532d94e)

- [Flutter and Native Communication](https://betterprogramming.pub/communicate-between-flutter-and-native-android-and-ios-code-using-platform-channel-7932f46b6aee)

- [Flutter Plataform Channel](https://stablekernel.com/article/flutter-platform-channels-quick-start/)

- [Flutter + watch](https://medium.com/@ferrazrx/flutter-apple-watch-swift-b43110dc4545)

- [Flutter background](https://medium.com/vrt-digital-studio/flutter-workmanager-81e0cfbd6f6e)

- [Flutter background proccess](https://docs.flutter.dev/development/packages-and-plugins/background-processes)






