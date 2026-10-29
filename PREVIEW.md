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

## DEMO 9 — selected stock dance music

The user chose option 1, “Monkeys Spinning Monkeys” by Kevin MacLeod, and
explicitly authorized immediate merging and publication in beta and production.
A 6.667-second CC BY 4.0 excerpt is bundled as `assets/sounds/dance-music.wav`.
Attribution, license and edits are recorded in SOURCES.md and linked in Settings.
A separate music channel starts on the result dance, loops, and fades on scene
exit, mute or tab hiding. A decoding race cannot start music after cancellation.
The gift-to-dance timeline and continuous limbs remain in beta. DEMO 9 / worker
`beta-20261025-result-preview-9`; the new WAV is precached for offline use.
The same audio manager passed production's 169 tests including 3 music lifecycle
regressions. Actual Chromium in beta and production decoded and played the WAV
(6.667 s, RMS 0.076), verified looping, mute, restart and exit, without page errors.
Evidence: `/workspace/artifacts/beta-result/music-browser.cjs`, `music-*-dance.png`.

## DEMO 10 — complete musical phrase from the beginning

Starts the selected music with the gift/result presentation, rather than waiting
for the dance. The source plays once, without restarting on intermediate scenes,
for four full bars at 144 BPM (6.666667 seconds). Natural audio completion ends
the show; a timer covers muted/unavailable audio. Explicit skip/mute/hidden tab
still cancel playback. Production now uses the same continuous-leg rig; static
poses, welcome sheet and icons are re-rendered from that model in both repos.
Icon manifest URLs are versioned. Browser tests measured 6.68/6.69s to natural
completion, confirmed the same source across gift/dance and no old foot sprites.
Visual evidence: /workspace/artifacts/beta-result/legs-static-audit.png and
phrase-{production,beta}-dance.png. DEMO 10 / cache result-preview-10.

## DEMO 11 — dance → discoveries → results (beta only)

Dance and radial confetti begin immediately, with “Training finished”. After
4 seconds, each genuinely unlocked item gets its own 2.6-second animated reveal,
without a box or a prize ceremony. No new item means direct transition to results.
Summary has no repeated unlock announcement. Result actions use a vertical flex
layout with reserved gaps, including space for the primary button shadow.
The full licensed stock track plays continuously across every phase and the
summary, loops, and fades out on user interaction, navigation, mute or hidden tab.
Reduced motion goes straight to summary. Preview keeps all progress isolated.
Cache result-preview-11. Chromium verified at 360 and 390 px, screenshots inspected
at /workspace/artifacts/beta11; dance/item/results visual quality 9/10, action
separation 10/10. Production is unchanged.

## DEMO 12 — keep dancing on the final result

The active summary uses looping trainingFinished instead of idle. Reduced-motion
mode keeps the static pose. Music and action spacing retain DEMO 11 behavior.
Production unchanged. Cache result-preview-12.

## DEMO 13 — first journey to the forest lake (2026-10-28)

Beta-only route: clearing → bridge → pine rest → lake. One completed session
advances one stop; incomplete sessions and duplicate session IDs do not advance.
The route caps at three, independent of mathematical mastery and XP. Old profiles
start at zero; existing XP, unlock IDs and equipment remain. Journey and selected
variants are included in backup validation and local persistence.

Home uses the new illustrated panorama, location, next stop and four route dots.
Finale: 4 s dance → 2.5 s arrival when advancing → unlocked items / choice →
summary with dancing Kapi. Music continues until interaction, exit/mute/hidden.
Reduced motion goes directly to the static summary. Summary returns home.
Two scarf designs at 140 XP and two backpack designs at 200 XP retain the old
reward IDs. Garment coloring is applied to the existing textured torso, including
straps, so no second garment is drawn over the embedded one. Variants can be
previewed as a future target and changed in the wardrobe once owned.

Demo: result-preview.html?demo=13. Select scarf/backpack/regular to inspect
choices. Successive previews retain the isolated route, XP and selected gear;
reset clears only the in-memory demo. Normal index.html saves actual beta progress.
Use the double-slash GitHub Pages link to avoid the old preview worker scope.

Validation: node tests/journey.cjs covers migration, idempotence, cap, variants,
backup round-trip and rejection of invalid progress. Actual Chromium at 320×640
and 390×844 covers home, three arrival scenes, both choices, result actions,
return home and reload with XP/outfit retained. Real service-worker update test
retains XP 205, step 2 and the forest backpack, then cold-loads the journey offline
with new scripts, styles, scenery and cosmetic assets cached. Screenshots inspected
in /workspace/artifacts/journey13/. Artwork and layout are functional and readable;
the movement between stops is a short scene transition, not a full walking cycle.
Production is unchanged. Worker journey-13.

Published commit 238b08b. Workflow 40643661610 passed journey/backup checks and
Pages deploy. Public HTTPS double-slash beta URLs matched all 14 checked files
byte-for-byte, including worker, both HTML pages, JS/CSS, scenery and four new
item illustrations. Final screenshots also confirm saved equipment and accessible
home controls at 320 px. No production files were changed.

## DEMO 14 — standalone dance background

Hide the result screen's travel background during celebrate, restoring it for
arrival. Chromium at 390×844 confirmed background-image:none during dance and
the forest scene on arrival. Inspected screenshot: journey13/dance-clean.png.
Worker journey-14; beta only.

## DEMO 15 — scenery only during arrival

All non-arrival result phases have no travel background and opaque cream cards.
Chromium checked dance, arrival, gift, choice and summary; only arrival displays
the scenery. Inspected journey13/summary-clean.png at 390×844. Worker journey-15.

## DEMO 16 — quiet shrinking pace guide (2026-10-29)

A second matching progress track sits 5 px below session progress. Each problem
starts full and shrinks right to left over personalFastTime (existing 4-second
floor before calibration). It freezes on the first answer, resets for the next
problem and cancels on navigation. No expiry handler, penalty, forced advance,
numbers or warning colors; learning and scoring rules are unchanged.
Worker pace-16. Chromium at 320×568 and 390×844 verified track geometry, 5-second
personal duration, no state change at expiry, accepting a late answer, restart
and navigation cleanup. Journey/backup checks pass. Screenshots inspected in
/workspace/artifacts/pace16; fit 9/10, consistency 9/10. Beta only.

## DEMO 24 — 24-stop journey (2026-10-29)

Beta-only expansion: original clearing/bridge/pine/lake + twenty stops in five
chapters (river, mountains, valley, coast, island). One completed training advances
one stop; final index23 caps the route. Existing step0–3 profiles continue in place;
XP, curriculum and clothing remain intact. Session-ID dedup spans all 23 advances.
Backup validation accepts old and expanded routes. Five postcard unlocks derive
from completed chapter endpoints7/11/15/19/23, persist through saved journey,
and appear in an album alongside all 24 destinations. No extra reward currency.

Twenty generated scenes packaged as individual WebP files (about2.5MB total),
pre-cached for offline use. Home shows four chapter dots and next destination.
Quiet ambient effects respect reduced motion; milestone arrivals include rainbow,
flag, lantern sparkle, lighthouse beam or festive sparkle and a postcard marker.
Arrival lasts2.5s, chapter endpoints4.2s, then normal newly earned clothing/results.
Reduced motion goes straight to results with postcard notice; album remains usable.
All non-arrival result backgrounds remain opaque and scenery-free.

Demo result-preview.html?demo=24 has a localized destination selector for testing
any arrival without altering actual learner storage. Normal beta index persists
real progress. Beta also includes production v88 glasses, pompom hat (440XP,
crown stays500XP) and reading-time allowance so the expansion does not regress them.
Worker beta-20261029-journey-24. Production not changed.

Checks: tests/journey.cjs covers old lake migration,20 completions, dedup,
incomplete sessions,cap,five postcards, RU/DE and backup validation. Chromium
320×568/390×844 home and album screenshots; all five milestone arrivals and clean
summaries; actual saveSession from lake and a chapter endpoint, final cap,
reduced motion and reload retaining XP. Real service-worker safe update retains
step19, XP205 and clothing; cold offline launch and all20 scene cache entries pass.
Screenshots inspected in /workspace/artifacts/journey24. Fit9/10, visual9/10,
consistency9/10: distinct rich scenes, compact readable arrival title, character
and actions remain visible at320px, coherent postcard album. Scene movement is a
short arrival animation plus ambient effects; no full walking/boat simulation.
