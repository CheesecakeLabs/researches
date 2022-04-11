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
Step 1: 

Download or clone this repo by using the link below:
```bash
git clone https://github.com/CheesecakeLabs/researches.git
```

Step 2: 

Go to project root and execute the following command in console to get the required dependencies:
```bash
#install dependecies
flutter pub get 
```

Step 3:

This project in this moment run only by Xcode, open your XCode and choose the path -> POCs/watch-flutter-app/watch-flutter/ios:
Go to your XCode and run watch option



## How start a new project Watch and Flutter

Step1:

- Create flutter starter project: [link](https://docs.flutter.dev/development/tools/vs-code)
- WCSessionDelegate works only above 9.3 iOS target version, must to configure the project Runner target in the XCode to use 9.3 version or above. 

Step2:

Get your flutter Project and Add Watch Extension
- Go to your Xcode Project and select File > New > Target > choose watchOS template > Application > Watch App for iOS App. Choose your watch project name, Team and choose SwiftUI as interface.


Step3:

Set all targets with the same version in your Xcode.

