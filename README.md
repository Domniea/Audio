# 🎧 React Native Audio Player

A cross-platform React Native audio player built with NativeBase and react-native-track-player. The app supports all core audio playback features — play, pause, seek, skip, and remote streaming — and includes a responsive UI with light/dark theme support. Navigation is handled with a drawer layout to keep the interface clean and provide access to a Preferences screen for theme toggling. Playback speed control is built directly into the player screen for quick access during listening. Built with React Native 0.80.1 and adapted to resolve native compatibility issues.

---

## Features

- Play / Pause / Stop audio
- Seek with slider
- Skip forward/backward 15 seconds
- Track progress and duration
- Remote audio file playback
- Auto-pause on app background
- Light & dark theme toggle (via drawer)
- Playback speed control (0.75x, 1x, 1.5x, 2x)

---

## Installation

1. Clone the repo

```bash
git clone https://github.com/your-username/react-native-audio-player.git
cd react-native-audio-player

# INSTALL DEPS-
npm install
# or
yarn install

# iOS Setup
cd ios
pod install
cd ..
npx react-native run-ios

# Android Setup
npx react-native run-android

**If needed: run npx react-native start --reset-cache before launching.**

## Technical Notes
* This project is built with React Native 0.80.1.
* Due to breaking changes in this version, I had to:
  * Patch and fork a few dependencies, including:
    * react-native-track-player
    * Android build setup (Kotlin + AGP 8.2.2)
    * native-base (for compatibility with updated React Native version)
  * Update native Gradle and config files to resolve compatibility issues.

---

## Trade-offs and Implementation Notes
* Single-track playback only: To stay focused on core functionality and UX, I chose to avoid implementing a full queue system.
* Drawer navigation: I used a drawer navigator to keep the main UI clean and provide an accessible way to navigate to a Preferences screen.
* Theme support: The Preferences screen includes a theme toggle for light and dark mode, implemented using NativeBase’s `useColorMode` hook.
* Playback speed control: Speed options (0.75x, 1x, 1.5x, 2x) are built into the player screen to enhance listening flexibility without clutter.

---

## AI Assistance
ChatGPT was used to assist with debugging, framework-specific issues, and problem-solving during development. All final implementation decisions and code structure were my own.

---

