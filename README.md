# React Native Practices

A small Expo project for practical React Native interview preparation.

The goal is not to build a production application. Each exercise starts from existing code and focuses on reading, debugging, modifying, and explaining React Native code under live-coding conditions.

## Stack

- Expo SDK 57
- React Native 0.86
- React 19.2
- JavaScript first
- TypeScript variants when useful
- Yarn

## Requirements

- Node.js >= 22.13
- Yarn 1.x
- Xcode for the iOS Simulator
- Android Studio for the Android Emulator (optional)

## Setup

```bash
git clone https://github.com/diegotubito/react-native-practices.git
cd react-native-practices
yarn
yarn doctor
```

## Run

```bash
yarn mobile   # Start Expo and choose a target
yarn ios      # Start directly on iOS Simulator
yarn android  # Start directly on Android Emulator
yarn web      # Start web target
```

## Practice roadmap

1. Components, props, state, and events
2. FlatList, selection, search, and filtering
3. useEffect and common dependency bugs
4. Async networking: loading, error, success, cancellation
5. JavaScript collection exercises: map, filter, reduce, sorting
6. Custom hooks and separation of responsibilities
7. Rendering and performance fundamentals
8. Navigation and screen data
9. Debugging existing React Native code
10. Testing fundamentals
11. Native iOS / React Native integration
12. Full mock live-coding sessions

## Interview workflow

For each exercise:

1. Read existing code first.
2. Explain what it currently does.
3. Clarify the requested change.
4. Implement the smallest correct solution.
5. Explain decisions while coding.
6. Handle a follow-up requirement.
7. Discuss trade-offs and possible improvements.

The exercises intentionally avoid unnecessary libraries until a requirement gives us a reason to introduce one.
