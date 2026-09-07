# HELP Tracker

A single-file app for tracking one child's progress against the HELP Checklist
(Hawaii Early Learning Profile), birth to three years, and seeing which skills
have gone past their age band.

Separate from the SLP Session Tracker in the repo root. Nothing is shared
between them.

## Getting it onto a device

`index.html` is the whole app — no build step, no install, no dependencies.

- **Save the file to the device** and open it from Files / Downloads, or
- **Serve the folder** over https and add it to the home screen.

Either way it works offline. It makes no network requests at all: no external
scripts, fonts, images, or analytics.

## Where the data lives

In the browser's `localStorage`, on that one device. It is never uploaded and
never leaves the device.

Consequences worth knowing:

- Marks made on a laptop do **not** appear on a phone. Each device is separate.
- Clearing site data, or deleting the app, deletes the marks.
- Use **Setup → Backup** to save a backup file, and the paste box on the same
  screen to restore one.

## How it works

Set the child's age in **Setup** — a birthdate (which keeps itself current) or
just a number of months.

**Focus** then shows two lists:

- **Needs attention** — skills past the top of their printed age range and
  marked Not yet or Emerging, in developmental order. Footnoted skills are
  excluded, per the checklist's planning guideline: *"Skills which are assessed
  as − or E can be targeted for intervention unless they have a footnote."*
- **Worth checking** — past their age range but not marked at all, closest to
  the child's age first.

**Skills** browses all 685 items, filtered by area, status, or search.

Tapping any skill opens its status buttons, a notes box, a list of your own
activity ideas, and its `HELP…at Home` page number.

## Sources

All 685 skills, age ranges, footnotes, and `HELP…at Home` page references were
transcribed from the HELP Checklist (Hawaii Early Learning Profile), Ages Birth
to Three years, VORT Corporation. Item 2.22's sound list was read from the HELP
Charts, which the checklist numbers identically.

No activity suggestions are built in. The activity ideas on each skill are only
the ones you type.

A handful of cells were unreadable in the scanned copy used — a PDF reader
toolbar covered the left edge of some rows, and handwriting covered three page
numbers. They are listed under **Setup → Where the skills came from**. The top
of every age range came through, so the age-band flagging is unaffected.
