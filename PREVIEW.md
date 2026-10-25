# Standalone result-show preview

URL: https://konstantinglazunov.github.io/Kapi-beta/result-preview.html

Created 2026-10-23 from beta 560a204e19622e02f9ba2c256eb75221be5ec9fd.
The page uses the current beta HTML, styles, animation and actual finishTraining()
routine. Choose Russian/German, a new gift, a perfect round or normal completion,
and sound. Tap Play to unlock browser audio. Replay uses the result button;
the menu/home/share/history controls return to preview configuration.

Preview storage is a Map scoped to the current page; the preview never opens
window.localStorage, installs a worker, or registers learning-history model tools.
Normal beta training retains its existing persistent storage and worker behavior.
The shared worker precaches the preview HTML and serves its own navigation shell.
Its cache version is beta-20261023-result-preview-1.

Verification: JavaScript syntax checked with the V8 execution tool; storage and
preview hooks inspected. Real browser rendering, screenshots, audio playback,
mobile layout and existing-PWA update tests could not be run because no execution
workspace/browser was available. No visual-quality score is claimed.
Next step: inspect the deployed preview on a phone, especially celebration, gift,
summary, replay and audio. This page has not been promoted to production Kapi.

## Full motion selection — 2026-10-23

The 7-second timeline previously ended immediately when the device reported
prefers-reduced-motion. The preview now offers an explicit full-animation
checkbox (7 seconds). Play applies that choice to both the result timeline and
the Canvas animator; CSS effects are enabled only in the opted-in preview.
Unchecking it selects a static result. Normal training retains OS preferences.
Cache version: beta-20261023-result-preview-2.
Verification: JS syntax and deterministic finale-timer regression check in V8.
No real browser/screenshots/audio or installed-worker update check was available.

## Visible result canvas restart — 2026-10-23

User reports that the menu closes but Kapi stays still. Reproduced a separate
canvas-size defect: endResultShow creates the result animator while its screen
is hidden. Without a ResizeObserver callback, showing that already-running record
leaves the canvas at 1x1. Pausing and resuming it after the result layout is visible
changes its backing size to the measured dimensions (390x300 in the diagnostic).
The preview now explicitly restarts after finishTraining and on the next frame.
The normal training flow is unchanged. Startup errors reopen the menu and log
the cause instead of leaving an error message inside a closed dialog.
DEMO 3 identifies the page revision; cache beta-20261023-result-preview-3.
Actual phone rendering is still unverified in this session.

## DEMO 5 — result composition, 2026-10-25

Preserves the DEMO 4 ankle attachment and foot-behind-shin layering from
`b5c608d`. The present now reserves space beneath Kapi, and its lid opens to
the right and down. Confetti starts at different heights with individual
negative delays, durations, drift and rotation; the full-motion override keeps
those values under OS reduced motion. Explicit static preview stays static.
Cache version: `beta-20261025-result-preview-5`.

Local Chromium validation: celebration, gift and summary captured at 390x844
and 320x568; inspected the gift composition. Browser regression checks cover
both motion preferences, distinct delays and vertical particle spread, lid
clearance, skip to summary, static preview, and page errors. Evidence and
executable checks: `/workspace/artifacts/beta-result/` outside this checkout.
JavaScript syntax and whitespace checks pass. Short screens still use the
existing smaller gift-phase mascot. Real iOS installation is unverified.
The user authorized publishing this correction to beta.
