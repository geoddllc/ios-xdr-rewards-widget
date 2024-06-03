# XDR Reward Converter Widget

This script for iOS devices uses the Scriptable app to fetch the current XDR to ICP conversion rates and ICP to USD conversion rates, and displays the computed USD value for a predefined amount of XDR in a widget on your home screen.

## Motivation

This widget is particularly useful for users who need to track the value of Internet Computer Protocol (ICP) rewards in USD, especially considering the potential volatility in conversion rates due to changes in the moving average, which can affect operational expenditure calculations.

## Features

- Fetch current XDR to ICP conversion rates.
- Fetch current ICP to USD conversion rates.
- Display the USD equivalent of a predefined XDR amount in a home screen widget.

## Prerequisites

- An iOS device.
- The Scriptable app installed from the App Store.

## Setup Instructions

1. **Download and Install Scriptable:**
   - If not already installed, download the Scriptable app from the [App Store](https://apps.apple.com/app/scriptable/id1405459188).

2. **Add the Script to Scriptable:**
   - Open Scriptable and tap on the '+' icon to create a new script.
   - Copy the entire JavaScript code provided above and paste it into the new script area in Scriptable.
   - Name the script `ICP Reward Converter`.

3. **Configure the XDR Amount:**
   - Edit the script to change the XDR amount from which to calculate the USD equivalent.
   - Navigate to line 21 of the script and change the `xdrAmount` value from `0` to your desired amount.

4. **Run the Script:**
   - Tap the 'Play' button to test the script inside Scriptable.
   - The script should execute and show the widget in a small preview with the current rates and calculated values.

5. **Add Widget to Home Screen:**
   - Exit Scriptable and enter 'jiggle mode' on your iOS device by pressing and holding an app icon.
   - Tap the '+' icon in the upper-left corner and scroll down to select Scriptable.
   - Choose the small widget size, select the `ICP Reward Converter` script, then tap 'Add Widget'.
   - Place the widget on your home screen as desired.

6. **Update Widget:**
   - The widget will automatically refresh at regular intervals. However, you can tap the widget to manually refresh the rates and calculations.

## Conclusion

This widget provides a simple and effective way to monitor the value of XDR / USD rewards in real time, directly from your iOS home screen, aiding in financial and operational planning.

