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

## DEMO 6 — radial salute, no box, 2026-10-25

The user requested an outward salute rather than falling confetti and removal
of the gift box, and authorized immediate beta publication for review.
- Removed the box markup and its lid/bow animations from both app entry pages.
  Earned reward announcements remain.
- Replaced CSS falling confetti with four staggered radial bursts driven by
  Web Animations. Each origin emits particles in both horizontal directions,
  with an upward arc, gravity and individual spin. Explicit static mode emits
  no particles; full-motion preview works with either OS motion preference.
- Raised feet farther inside the shins and excluded the painted raised collar
  from the foot render. Feet draw first, shins overlap them, then the torso.
- Preview marker: DEMO 6 · САЛЮТ · БЕЗ КОРОБКИ.
  Worker and beta-version: 20261025-result-preview-6.

Chromium checks cover the marker, absence of box elements, four distinct burst
origins and trajectories spreading both ways, summary navigation, both motion
preferences, static mode and absence of page errors. Captured celebration,
reward and summary at 390x844 and 320x568, plus close-up feet and intermediate
burst frames under `/workspace/artifacts/beta-result/`. Syntax and whitespace
checks pass. Public browser TLS trust is unavailable in this environment;
published bytes are checked using verified HTTPS instead. Real iOS remains
unverified. An already installed beta worker can retain an older preview;
a private browser tab provides a separate session without deleting progress.

## DEMO 8 — continuous legs and gift before dance, 2026-10-25

Supersedes the DEMO 6 no-box presentation, following the user's revised direction.
The intermediate DEMO 7 continuous-leg work was validated locally and is included
in this release, rather than published separately.

- New transparent `site/assets/kapi-rig-v5/leg-and-paw.png`: one continuous
  hip-to-toes sprite, with a gradual golden-fur-to-brown-toe transition. Both legs
  use it, mirrored on the right. Removed independent ankle rotation, separate
  foot rendering and foot-collar clipping; each entire limb rotates at the hip.
- For a newly earned reward, Kapi is hidden while the closed box is shown.
  Anticipation starts at 400ms; the lid lifts and drifts aside, fading clear of
  the reward. At 1050ms the actual earned cosmetic starts rising from inside,
  clipped by the box rim. It grows as it emerges, slows at its apex, slightly
  overshoots, then settles. The gift stage fades at 3180–3400ms.
- At 3400ms the newly earned item is equipped and Kapi appears dancing with
  radial salute particles. Summary arrives at 7800ms. A round without a new
  reward goes directly to a 4400ms dance. Static mode goes directly to summary.
- Skip and replay cancel pending gift animations and timers. Reward, learning
  progress, RU/DE localization and offline storage behavior are retained.
- Preview: DEMO 8 · ПОДАРОК → ТАНЕЦ; cache/beta-version:
  `20261025-result-preview-8`. New sprite is included in the worker precache.

Validation: Node syntax and whitespace checks; inspected browser screenshots
at 390x844 and 320x568 of closed box, lid opening, emergence, flight, hover,
early/late dance, and summary. Browser assertions confirm Kapi stays hidden
through the gift, the reward fully emerges above the rim, then the box disappears
and Kapi enters looping trainingFinished dance. Skip prevents the pending dance;
replay restarts the gift; no-reward German scenario and explicit static mode
work. Offline install precaches the new limb and the entire gift-to-dance flow
runs without network or page errors. Evidence/scripts retained outside checkout:
`/workspace/artifacts/beta-result/` (`gift-flow.cjs`, `demo8-*`, `demo7-*-feet.png`).

Use the checked public preview URL with a double slash immediately after the
hostname: https://konstantinglazunov.github.io//Kapi-beta/result-preview.html?demo=8
GitHub Pages serves this URL and its relative assets without redirects. An old
worker scoped to `/Kapi-beta/` cannot control `//Kapi-beta/`; this was reproduced
with an installed DEMO 3 worker and verified by screenshots, without deleting
learning data. Public bytes are checked over verified HTTPS; live Chromium TLS
trust remains unavailable, so rendering checks use matching local files.
The user authorized immediate beta publication for review.
