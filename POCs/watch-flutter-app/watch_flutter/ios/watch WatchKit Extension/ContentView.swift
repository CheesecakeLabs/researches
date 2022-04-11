//
//  ContentView.swift
//  Thaw WatchOS WatchKit Extension
//
//  Created by Cristian Santos on 05/04/22.
//

import SwiftUI

struct ContentView: View {
    @ObservedObject var viewModel: WatchViewModel = WatchViewModel()
    
    var body: some View {
        VStack {
            Text("Counter: \(viewModel.counter)")
                .padding()
            Text("Error:  \(viewModel.text)" ).padding()
            Button(action: {
                viewModel.counter = viewModel.counter + 1;
                viewModel.sendDataMessage(for: .sendCounterToFlutter, data: ["counter": viewModel.counter])
            }) {
                Text("+ Increment")
            }
        }
        
        
    }
}

import Foundation
import WatchConnectivity

class WatchViewModel: NSObject, ObservableObject {
    var session: WCSession
    @Published var counter = 0
    @Published var text = "";
    
    // Add more cases if you have more receive method
    enum WatchReceiveMethod: String {
        case sendCounterToNative
    }
    
    // Add more cases if you have more sending method
    enum WatchSendMethod: String {
        case sendCounterToFlutter
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

extension WatchViewModel: WCSessionDelegate {
    
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
            case .sendCounterToNative:
                self.counter = (message["data"] as? Int) ?? 0
            }
        }
    }
    
    func sendMessage(for method: String, data: [String: Any] = [:]) {
        guard session.isReachable else {
            onUnPaired()
            return
        }

        onPaired()
        let messageData: [String: Any] = ["method": method, "data": data]
        session.sendMessage(messageData, replyHandler: nil, errorHandler: nil)
    }

    func onPaired() {
        self.text = "paired"
    }

    func onUnPaired() {
        self.text = "no paired"
    }
    
}
