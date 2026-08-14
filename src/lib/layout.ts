// One shell width for the entire site.
//
// The header, the footer, and every page container use this, so the logo,
// the nav, and the content below them all line up on the same left and right
// edges at every viewport width. Previously the header and footer were
// full-bleed while content sat in a narrow centred column: at 1280px that
// looked roughly aligned, but on a 2560px display the nav sat hard against
// the screen edges with the content stranded in the middle.
//
// Backgrounds stay full-bleed — it is only the contents that are constrained,
// so the blue header and footer bands still span the whole window.
export const SHELL =
  "mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 3xl:max-w-6xl";

// Vertical rhythm for a standard page, applied alongside SHELL.
export const PAGE = `${SHELL} py-10 sm:py-14`;

// Long-form text is capped well below the shell width regardless — a line of
// prose spanning 1152px is unreadable no matter how much room the screen has.
export const PROSE_WIDTH = "max-w-3xl";
