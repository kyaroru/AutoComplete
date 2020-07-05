# AutoComplete
This is a demo on how to use Google Place AutoComplete API with Google Map

## Demo
### iOS & Android
![Demo](http://g.recordit.co/aFHZEm8vzQ.gif)

## Pre-Requisite
- To use Google Place & Map API
  - Billing has to be turned on for the Project.
  - Places API & Maps SDK for Android & Maps SDK for iOS must be enabled, otherwise MapView will display blank
  - Generate API Key in Google Console (to be used later)

## Clone & Setup
```bash
git clone https://github.com/kyaroru/AutoComplete.git
cd AutoComplete && yarn install
cd ios && pod install
```

## Add .env file
- For safety reason, .env file will not be committed to GitHub
- Create .env file in root folder after clone
  - Insert the following
    - SERVER_URL=https://maps.googleapis.com/maps/
    - API_KEY=<YOUR_API_KEY>

## Start the project
For iOS
- Open .xcworkspace manually using xcode
or
```bash
cd AutoComplete (if you haven\'t)
react-native run-ios
```

For Android
```bash
cd AutoComplete (if you haven\'t)
react-native run-android
```