# Exercise 02 — Packing list

## Project orientation

Before changing code, describe the project-level startup path:

`package.json` → `index.js` → `App.js` → `PackingList.js`

Explain the responsibility of each file, then describe how `PackingList` and `PackingItem` currently divide their responsibilities.

## Context

The app displays a static packing list. Some items start as packed, and the summary shows the initial packed count. The screen is currently read-only.

## Requirement

Make the list interactive.

1. Tapping an item must toggle its packed state.
2. Every item must update independently.
3. The existing visual state and summary count must update immediately.
4. Keep the state in the smallest component that can correctly own it.
5. Do not mutate `initialItems`, the state array, or an item object.

Use the smallest clear solution. Do not add a library, create a custom hook, or extract a service.

## While coding

Explain:

- why the item collection now needs to be state;
- where that state should be owned;
- how the item identifier travels through the event callback;
- how you update one object without mutating the existing array;
- which components render after an item is toggled.

Stop after this requirement. The interviewer will provide follow-ups separately.
