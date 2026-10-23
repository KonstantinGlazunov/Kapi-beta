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
