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

## One-week Pareto plan

The broader topic list is a reference, not a one-week syllabus. The week focuses on translating existing mobile-engineering experience into React and React Native fluency.

1. Practical JavaScript and the React mental model: collection operations, destructuring, spread, closures, promises, components, props, state, and renders.
2. Hooks in real code: `useState`, `useEffect`, cleanup, dependencies, and `useRef`; then selective use of `useMemo` and `useCallback`.
3. Everyday React Native: `FlatList`, `TextInput`, `Pressable`, simple forms, fetch, and loading/error/empty states.
4. Bugs and refactoring: infinite effects, stale data, wrong keys, state mutation, duplicate requests, custom hooks, and service extraction when justified.
5. Complete live coding: understand an existing project, implement a requirement, adapt to a follow-up, debug, and explain decisions while working.

Navigation, testing, TypeScript, and native integration are secondary topics. New Architecture internals, advanced TypeScript, exhaustive testing, and sophisticated optimization are only covered if time remains.

Aim for two or three substantial exercises per day. Repeat selected exercises from scratch and finish with unassisted mock interviews.

## Current exercise

Exercise 01 is in `exercises/01-user-directory`. Its first requirement is intentionally small; follow-up requirements are revealed during practice rather than stored in advance.

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
