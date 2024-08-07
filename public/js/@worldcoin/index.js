import {
  QRCode_default,
  __,
  idkit_default
} from "./chunk-OPIVJQZ6.js";

// src/hooks/useIDKit.ts
import { useEffect } from "react";
var getStore = ({ open, onOpenChange, addSuccessCallback, addVerificationCallback }) => ({
  open,
  onOpenChange,
  addSuccessCallback,
  addVerificationCallback
});
var useIDKit = ({ handleVerify, onSuccess } = {}) => {
  const { open, onOpenChange, addSuccessCallback, addVerificationCallback } = idkit_default(getStore);
  useEffect(() => {
    if (onSuccess) addSuccessCallback(onSuccess, "hook" /* HOOK */);
    if (handleVerify) addVerificationCallback(handleVerify, "hook" /* HOOK */);
  }, [handleVerify, onSuccess]);
  return { open, setOpen: onOpenChange };
};
var useIDKit_default = useIDKit;

// src/components/IDKitWidget/index.tsx
import { memo as memo2 } from "react";

// src/components/IDKitWidget/BaseWidget.tsx
import root from "react-shadow";

// src/hooks/useMedia.ts
import { useEffect as useEffect2, useState } from "react";
var useMedia = () => {
  const [media, setMedia] = useState("desktop");
  useEffect2(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const handleChange = (mql2) => setMedia(mql2.matches ? "mobile" : "desktop");
    handleChange(mql);
    mql.addEventListener("change", handleChange);
    return () => {
      mql.removeEventListener("change", handleChange);
    };
  }, []);
  return media;
};
var useMedia_default = useMedia;

// src/styles/styles.css
var styles_default = `/* TODO: Use an alternative to avoid the extra request to Google (e.g. hosting ourselves, or local file)  */
@import url('https://fonts.googleapis.com/css2?family=Rubik:wght@400;600;700&family=Sora:wght@600&display=swap');
/* ! tailwindcss v3.4.4 | MIT License | https://tailwindcss.com  */
/*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/
*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}
::before,
::after {
  --tw-content: '';
}
/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/
html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: Rubik, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}
/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/
body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}
/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/
hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}
/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/
abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}
/*
Remove the default font size and weight for headings.
*/
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}
/*
Reset links to optimize for opt-in styling instead of opt-out.
*/
a {
  color: inherit;
  text-decoration: inherit;
}
/*
Add the correct font weight in Edge and Safari.
*/
b,
strong {
  font-weight: bolder;
}
/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/
code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}
/*
Add the correct font size in all browsers.
*/
small {
  font-size: 80%;
}
/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/
table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}
/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}
/*
Remove the inheritance of text transform in Edge and Firefox.
*/
button,
select {
  text-transform: none;
}
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/
button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}
/*
Use the modern Firefox focus style for all focusable elements.
*/
:-moz-focusring {
  outline: auto;
}
/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/
:-moz-ui-invalid {
  box-shadow: none;
}
/*
Add the correct vertical alignment in Chrome and Firefox.
*/
progress {
  vertical-align: baseline;
}
/*
Correct the cursor style of increment and decrement buttons in Safari.
*/
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}
/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/
[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}
/*
Remove the inner padding in Chrome and Safari on macOS.
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}
/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/
::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}
/*
Add the correct display in Chrome and Safari.
*/
summary {
  display: list-item;
}
/*
Removes the default spacing and border for appropriate elements.
*/
blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}
fieldset {
  margin: 0;
  padding: 0;
}
legend {
  padding: 0;
}
ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}
/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}
/*
Prevent resizing textareas horizontally by default.
*/
textarea {
  resize: vertical;
}
/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/
input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}
input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}
/*
Set the default cursor for buttons.
*/
button,
[role="button"] {
  cursor: pointer;
}
/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}
/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/
img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}
/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/
img,
video {
  max-width: 100%;
  height: auto;
}
/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden] {
  display: none;
}
[type='text'],input:where(:not([type])),[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select{
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  border-radius: 0px;
  padding-top: 0.5rem;
  padding-right: 0.75rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  --tw-shadow: 0 0 #0000;
}
[type='text']:focus, input:where(:not([type])):focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  border-color: #2563eb;
}
input::-moz-placeholder, textarea::-moz-placeholder{
  color: #6b7280;
  opacity: 1;
}
input::placeholder,textarea::placeholder{
  color: #6b7280;
  opacity: 1;
}
::-webkit-datetime-edit-fields-wrapper{
  padding: 0;
}
::-webkit-date-and-time-value{
  min-height: 1.5em;
  text-align: inherit;
}
::-webkit-datetime-edit{
  display: inline-flex;
}
::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{
  padding-top: 0;
  padding-bottom: 0;
}
select{
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
  padding-right: 2.5rem;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
}
[multiple],[size]:where(select:not([size="1"])){
  background-image: initial;
  background-position: initial;
  background-repeat: unset;
  background-size: initial;
  padding-right: 0.75rem;
  -webkit-print-color-adjust: unset;
          print-color-adjust: unset;
}
[type='checkbox'],[type='radio']{
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  padding: 0;
  -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
  display: inline-block;
  vertical-align: middle;
  background-origin: border-box;
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  flex-shrink: 0;
  height: 1rem;
  width: 1rem;
  color: #2563eb;
  background-color: #fff;
  border-color: #6b7280;
  border-width: 1px;
  --tw-shadow: 0 0 #0000;
}
[type='checkbox']{
  border-radius: 0px;
}
[type='radio']{
  border-radius: 100%;
}
[type='checkbox']:focus,[type='radio']:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
  --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
  --tw-ring-offset-width: 2px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: #2563eb;
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
}
[type='checkbox']:checked,[type='radio']:checked{
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
[type='checkbox']:checked{
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
}
@media (forced-colors: active) {
  [type='checkbox']:checked{
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}
[type='radio']:checked{
  background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
}
@media (forced-colors: active) {
  [type='radio']:checked{
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}
[type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus{
  border-color: transparent;
  background-color: currentColor;
}
[type='checkbox']:indeterminate{
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");
  border-color: transparent;
  background-color: currentColor;
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
@media (forced-colors: active) {
  [type='checkbox']:indeterminate{
    -webkit-appearance: auto;
       -moz-appearance: auto;
            appearance: auto;
  }
}
[type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus{
  border-color: transparent;
  background-color: currentColor;
}
[type='file']{
  background: unset;
  border-color: inherit;
  border-width: 0;
  border-radius: 0;
  padding: 0;
  font-size: unset;
  line-height: inherit;
}
[type='file']:focus{
  outline: 1px solid ButtonText;
  outline: 1px auto -webkit-focus-ring-color;
}
*, ::before, ::after{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
::backdrop{
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}
.visible{
  visibility: visible;
}
.fixed{
  position: fixed;
}
.absolute{
  position: absolute;
}
.relative{
  position: relative;
}
.inset-0{
  inset: 0;
}
.z-10{
  z-index: 10;
}
.z-50{
  z-index: 50;
}
.mx-6{
  margin-left: 24px;
  margin-right: 24px;
}
.mx-auto{
  margin-left: auto;
  margin-right: auto;
}
.-mt-5{
  margin-top: -20px;
}
.-mt-6{
  margin-top: -24px;
}
.mb-10{
  margin-bottom: 40px;
}
.mb-12{
  margin-bottom: 48px;
}
.mb-4{
  margin-bottom: 16px;
}
.mb-6{
  margin-bottom: 24px;
}
.mr-1{
  margin-right: 4px;
}
.mr-1\\.5{
  margin-right: 6px;
}
.mt-2{
  margin-top: 8px;
}
.mt-3{
  margin-top: 12px;
}
.mt-4{
  margin-top: 16px;
}
.flex{
  display: flex;
}
.inline-flex{
  display: inline-flex;
}
.hidden{
  display: none;
}
.h-10{
  height: 40px;
}
.h-24{
  height: 96px;
}
.h-5{
  height: 20px;
}
.h-6{
  height: 24px;
}
.h-\\[244px\\]{
  height: 244px;
}
.min-h-full{
  min-height: 100%;
}
.min-h-screen{
  min-height: 100vh;
}
.w-24{
  width: 96px;
}
.w-4{
  width: 16px;
}
.w-5{
  width: 20px;
}
.w-6{
  width: 24px;
}
.w-\\[244px\\]{
  width: 244px;
}
.w-full{
  width: 100%;
}
.max-w-\\[224px\\]{
  max-width: 224px;
}
.flex-1{
  flex: 1 1 0%;
}
@keyframes pulse{
  50%{
    opacity: .5;
  }
}
.animate-pulse{
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes spin{
  to{
    transform: rotate(360deg);
  }
}
.animate-spin{
  animation: spin 1s linear infinite;
}
.cursor-pointer{
  cursor: pointer;
}
.flex-col{
  flex-direction: column;
}
.items-end{
  align-items: flex-end;
}
.items-center{
  align-items: center;
}
.justify-center{
  justify-content: center;
}
.justify-between{
  justify-content: space-between;
}
.gap-1{
  gap: 4px;
}
.space-x-2 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(8px * var(--tw-space-x-reverse));
  margin-left: calc(8px * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-4 > :not([hidden]) ~ :not([hidden]){
  --tw-space-x-reverse: 0;
  margin-right: calc(16px * var(--tw-space-x-reverse));
  margin-left: calc(16px * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-10 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(40px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(40px * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(16px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(16px * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(24px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(24px * var(--tw-space-y-reverse));
}
.space-y-8 > :not([hidden]) ~ :not([hidden]){
  --tw-space-y-reverse: 0;
  margin-top: calc(32px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(32px * var(--tw-space-y-reverse));
}
.overflow-y-hidden{
  overflow-y: hidden;
}
.rounded-2xl{
  border-radius: 1rem;
}
.rounded-full{
  border-radius: 9999px;
}
.rounded-lg{
  border-radius: 0.5rem;
}
.border{
  border-width: 1px;
}
.border-t{
  border-top-width: 1px;
}
.border-ebecef{
  --tw-border-opacity: 1;
  border-color: rgb(235 236 239 / var(--tw-border-opacity));
}
.border-f1f5f8{
  --tw-border-opacity: 1;
  border-color: rgb(241 245 248 / var(--tw-border-opacity));
}
.border-f5f5f7{
  --tw-border-opacity: 1;
  border-color: rgb(245 245 247 / var(--tw-border-opacity));
}
.border-transparent{
  border-color: transparent;
}
.bg-0d151d{
  --tw-bg-opacity: 1;
  background-color: rgb(13 21 29 / var(--tw-bg-opacity));
}
.bg-black\\/50{
  background-color: rgb(0 0 0 / 0.5);
}
.bg-transparent{
  background-color: transparent;
}
.bg-white{
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.p-2{
  padding: 8px;
}
.p-4{
  padding: 16px;
}
.p-7{
  padding: 28px;
}
.px-2{
  padding-left: 8px;
  padding-right: 8px;
}
.px-4{
  padding-left: 16px;
  padding-right: 16px;
}
.px-8{
  padding-left: 32px;
  padding-right: 32px;
}
.py-1{
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-3{
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4{
  padding-top: 16px;
  padding-bottom: 16px;
}
.pt-6{
  padding-top: 24px;
}
.text-center{
  text-align: center;
}
.font-sans{
  font-family: Rubik, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.font-sora{
  font-family: Sora, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.text-2xl{
  font-size: 24px;
  line-height: 32px;
}
.text-lg{
  font-size: 18px;
  line-height: 28px;
}
.text-sm{
  font-size: 14px;
  line-height: 20px;
}
.text-xs{
  font-size: 12px;
  line-height: 16px;
}
.font-bold{
  font-weight: 700;
}
.font-medium{
  font-weight: 500;
}
.font-semibold{
  font-weight: 600;
}
.text-0d151d{
  --tw-text-opacity: 1;
  color: rgb(13 21 29 / var(--tw-text-opacity));
}
.text-29343f{
  --tw-text-opacity: 1;
  color: rgb(41 52 63 / var(--tw-text-opacity));
}
.text-3c424b{
  --tw-text-opacity: 1;
  color: rgb(60 66 75 / var(--tw-text-opacity));
}
.text-657080{
  --tw-text-opacity: 1;
  color: rgb(101 112 128 / var(--tw-text-opacity));
}
.text-70868f{
  --tw-text-opacity: 1;
  color: rgb(112 134 143 / var(--tw-text-opacity));
}
.text-9ba3ae{
  --tw-text-opacity: 1;
  color: rgb(155 163 174 / var(--tw-text-opacity));
}
.text-9eafc0{
  --tw-text-opacity: 1;
  color: rgb(158 175 192 / var(--tw-text-opacity));
}
.text-black{
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
}
.text-gray-900{
  --tw-text-opacity: 1;
  color: rgb(17 24 39 / var(--tw-text-opacity));
}
.text-white{
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
.opacity-40{
  opacity: 0.4;
}
.shadow{
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm{
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.blur-lg{
  --tw-blur: blur(16px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter{
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-lg{
  --tw-backdrop-blur: blur(16px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition{
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-300{
  transition-duration: 300ms;
}
.duration-500{
  transition-duration: 500ms;
}
.ease-in-out{
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button{
  -webkit-appearance: none;
          appearance: none;
}
.hover\\:underline:hover{
  text-decoration-line: underline;
}
.hover\\:shadow:hover{
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.focus\\:outline-none:focus{
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.focus\\:ring-2:focus{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus\\:ring-indigo-500:focus{
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(99 102 241 / var(--tw-ring-opacity));
}
.focus\\:ring-offset-2:focus{
  --tw-ring-offset-width: 2px;
}
.focus-visible\\:ring:focus-visible{
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.focus-visible\\:ring-purple-500\\/75:focus-visible{
  --tw-ring-color: rgb(168 85 247 / 0.75);
}
.disabled\\:cursor-not-allowed:disabled{
  cursor: not-allowed;
}
.disabled\\:opacity-40:disabled{
  opacity: 0.4;
}
@media (prefers-reduced-motion: reduce){
  @keyframes spin{
    to{
      transform: rotate(360deg);
    }
  }
  .motion-reduce\\:animate-\\[spin_1\\.5s_linear_infinite\\]{
    animation: spin 1.5s linear infinite;
  }
}
.dark\\:border-f1f5f8\\/10:is(.dark *){
  border-color: rgb(241 245 248 / 0.1);
}
.dark\\:bg-0d151d:is(.dark *){
  --tw-bg-opacity: 1;
  background-color: rgb(13 21 29 / var(--tw-bg-opacity));
}
.dark\\:bg-white:is(.dark *){
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
}
.dark\\:text-0d151d:is(.dark *){
  --tw-text-opacity: 1;
  color: rgb(13 21 29 / var(--tw-text-opacity));
}
.dark\\:text-9eafc0:is(.dark *){
  --tw-text-opacity: 1;
  color: rgb(158 175 192 / var(--tw-text-opacity));
}
.dark\\:text-white:is(.dark *){
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}
@media (min-width: 768px){
  .md\\:mt-2{
    margin-top: 8px;
  }
  .md\\:hidden{
    display: none;
  }
  .md\\:min-h-\\[35rem\\]{
    min-height: 35rem;
  }
  .md\\:max-w-md{
    max-width: 448px;
  }
  .md\\:items-center{
    align-items: center;
  }
  .md\\:overflow-y-auto{
    overflow-y: auto;
  }
  .md\\:rounded-2xl{
    border-radius: 1rem;
  }
  .md\\:rounded-b-2xl{
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
  }
  .md\\:p-4{
    padding: 16px;
  }
}
`;

// src/components/Styles.tsx
import { jsx } from "react/jsx-runtime";
var Styles = () => /* @__PURE__ */ jsx("style", { children: styles_default });
var Styles_default = Styles;

// src/components/IDKitWidget/BaseWidget.tsx
import { shallow as shallow2 } from "zustand/shallow";

// src/components/Icons/XMarkIcon.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var XMarkIcon = (props) => /* @__PURE__ */ jsx2("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx2(
  "path",
  {
    strokeWidth: "1.5",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "m16.243 7.758-8.485 8.485m8.485 0L7.758 7.758"
  }
) });
var XMarkIcon_default = XMarkIcon;

// src/components/Icons/ErrorIcon.tsx
import { jsx as jsx3, jsxs } from "react/jsx-runtime";
var ErrorIcon = (props) => /* @__PURE__ */ jsxs("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 100 100", children: [
  /* @__PURE__ */ jsx3("circle", { cx: "50", cy: "50", r: "49.375", fill: "url(#a)", fillOpacity: ".65", stroke: "url(#b)", strokeWidth: "1.25" }),
  /* @__PURE__ */ jsxs("g", { filter: "url(#c)", children: [
    /* @__PURE__ */ jsx3("circle", { cx: "50", cy: "50", r: "35", fill: "#fff" }),
    /* @__PURE__ */ jsx3("circle", { cx: "50", cy: "50", r: "34.432", stroke: "#FFC9AD", strokeWidth: "1.136" })
  ] }),
  /* @__PURE__ */ jsx3(
    "path",
    {
      stroke: "#FF4732",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3.75",
      d: "m57.5 42.5-15 14.999m15 .001-15-14.999"
    }
  ),
  /* @__PURE__ */ jsxs("defs", { children: [
    /* @__PURE__ */ jsxs("linearGradient", { id: "a", x1: "50", x2: "50", y1: "0", y2: "100", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx3("stop", { stopColor: "#FFA483" }),
      /* @__PURE__ */ jsx3("stop", { offset: "1", stopColor: "#FFA483", stopOpacity: "0" })
    ] }),
    /* @__PURE__ */ jsxs("linearGradient", { id: "b", x1: "50", x2: "50", y1: "0", y2: "100", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx3("stop", { stopColor: "#FFA483" }),
      /* @__PURE__ */ jsx3("stop", { offset: ".713", stopColor: "#FFA483", stopOpacity: "0" })
    ] }),
    /* @__PURE__ */ jsxs(
      "filter",
      {
        id: "c",
        width: "77.5",
        height: "77.5",
        x: "11.25",
        y: "13.125",
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse",
        children: [
          /* @__PURE__ */ jsx3("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ jsx3("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
          /* @__PURE__ */ jsx3("feOffset", { dy: "1.875" }),
          /* @__PURE__ */ jsx3("feGaussianBlur", { stdDeviation: "1.875" }),
          /* @__PURE__ */ jsx3("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 0.788235 0 0 0 0 0.678431 0 0 0 0.45 0" }),
          /* @__PURE__ */ jsx3("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_39_740" }),
          /* @__PURE__ */ jsx3("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_39_740", result: "shape" })
        ]
      }
    )
  ] })
] });
var ErrorIcon_default = ErrorIcon;

// src/components/IDKitWidget/States/ErrorState.tsx
import { AppErrorCodes } from "@worldcoin/idkit-core";

// src/components/Icons/ReloadIcon.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var ReloadIcon = (props) => /* @__PURE__ */ jsx4("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props, children: /* @__PURE__ */ jsx4(
  "path",
  {
    d: "M12.3809 1.6665L13.3626 4.24214C12.3754 3.66434 11.2263 3.33317 9.99992 3.33317C6.31802 3.33317 3.33325 6.31794 3.33325 9.99984C3.33325 11.2141 3.6579 12.3526 4.22513 13.3332M7.61897 18.3332L6.63719 15.7575C7.62438 16.3353 8.77348 16.6665 9.99992 16.6665C13.6818 16.6665 16.6666 13.6817 16.6666 9.99984C16.6666 8.78555 16.3419 7.64708 15.7747 6.6665",
    stroke: "#3C424B",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }
) });
var ReloadIcon_default = ReloadIcon;

// src/components/Icons/WarningIcon.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var WarningIcon = (props) => /* @__PURE__ */ jsxs2("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 100 100", ...props, children: [
  /* @__PURE__ */ jsx5(
    "circle",
    {
      cx: "50",
      cy: "50",
      r: "49.375",
      fill: "url(#warning-a)",
      fillOpacity: ".65",
      stroke: "url(#warning-b)",
      strokeWidth: "1.25"
    }
  ),
  /* @__PURE__ */ jsxs2("g", { filter: "url(#warning-c)", children: [
    /* @__PURE__ */ jsx5("circle", { cx: "50", cy: "50", r: "35", fill: "#fff" }),
    /* @__PURE__ */ jsx5("circle", { cx: "50", cy: "50", r: "34.432", stroke: "#FFE999", strokeWidth: "1.136" })
  ] }),
  /* @__PURE__ */ jsx5(
    "path",
    {
      fill: "#FFB200",
      fillRule: "evenodd",
      d: "M47.46 40.207c1.107-1.943 3.973-1.943 5.08 0l9.59 16.834c1.076 1.888-.324 4.209-2.54 4.209H40.41c-2.216 0-3.616-2.32-2.54-4.21l9.59-16.833Zm3.79 16.043a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.313-10a.937.937 0 1 0-1.875 0v6.25a.938.938 0 0 0 1.875 0v-6.25Z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ jsxs2("defs", { children: [
    /* @__PURE__ */ jsxs2("linearGradient", { id: "warning-a", x1: "50", x2: "50", y1: "0", y2: "100", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx5("stop", { stopColor: "#FFDA66" }),
      /* @__PURE__ */ jsx5("stop", { offset: "1", stopColor: "#FFDA66", stopOpacity: "0" })
    ] }),
    /* @__PURE__ */ jsxs2("linearGradient", { id: "warning-b", x1: "50", x2: "50", y1: "0", y2: "100", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx5("stop", { stopColor: "#FFDA66" }),
      /* @__PURE__ */ jsx5("stop", { offset: ".713", stopColor: "#FFDA66", stopOpacity: "0" })
    ] }),
    /* @__PURE__ */ jsxs2(
      "filter",
      {
        id: "warning-c",
        width: "77.5",
        height: "77.5",
        x: "11.25",
        y: "13.125",
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse",
        children: [
          /* @__PURE__ */ jsx5("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ jsx5("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
          /* @__PURE__ */ jsx5("feOffset", { dy: "1.875" }),
          /* @__PURE__ */ jsx5("feGaussianBlur", { stdDeviation: "1.875" }),
          /* @__PURE__ */ jsx5("feColorMatrix", { values: "0 0 0 0 1 0 0 0 0 0.913725 0 0 0 0 0.6 0 0 0 0.45 0" }),
          /* @__PURE__ */ jsx5("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_39_758" }),
          /* @__PURE__ */ jsx5("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_39_758", result: "shape" })
        ]
      }
    )
  ] })
] });
var WarningIcon_default = WarningIcon;

// src/components/IDKitWidget/States/ErrorState.tsx
import { jsx as jsx6, jsxs as jsxs3 } from "react/jsx-runtime";
var getParams = ({ retryFlow, errorState }) => ({ retryFlow, errorState });
var ERROR_TITLES = {
  [AppErrorCodes.GenericError]: __("Something went wrong"),
  [AppErrorCodes.FailedByHostApp]: __("Verification Declined"),
  [AppErrorCodes.VerificationRejected]: __("Request cancelled")
};
var ERROR_MESSAGES = {
  [AppErrorCodes.ConnectionFailed]: __("Connection to your wallet failed. Please try again."),
  [AppErrorCodes.VerificationRejected]: __("You\u2019ve cancelled the request in World App."),
  [AppErrorCodes.MaxVerificationsReached]: __(
    "You have already verified the maximum number of times for this action."
  ),
  [AppErrorCodes.CredentialUnavailable]: __("It seems you do not have the verification level required by this app."),
  [AppErrorCodes.MalformedRequest]: __(
    "There was a problem with this request. Please try again or contact the app owner."
  ),
  [AppErrorCodes.InvalidNetwork]: __(
    "Invalid network. If you are the app owner, visit docs.worldcoin.org/test for details."
  ),
  [AppErrorCodes.InclusionProofFailed]: __("There was an issue fetching your credential. Please try again."),
  [AppErrorCodes.InclusionProofPending]: __(
    "Your identity is still being registered. Please wait a few minutes and try again."
  ),
  [AppErrorCodes.GenericError]: __("Something unexpected went wrong. Please try again."),
  [AppErrorCodes.UnexpectedResponse]: __("Unexpected response from your wallet. Please try again."),
  [AppErrorCodes.FailedByHostApp]: __("Verification failed by the app. Please contact the app owner for details.")
};
var ErrorState = () => {
  const { retryFlow, errorState } = idkit_default(getParams);
  return /* @__PURE__ */ jsxs3("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsx6("div", { className: "-mt-5 flex items-center justify-center", children: errorState?.code == AppErrorCodes.VerificationRejected ? /* @__PURE__ */ jsx6(WarningIcon_default, { className: "w-24" }) : /* @__PURE__ */ jsx6(ErrorIcon_default, { className: "w-24" }) }),
    /* @__PURE__ */ jsxs3("div", { children: [
      /* @__PURE__ */ jsx6("p", { className: "text-center text-2xl font-semibold text-gray-900 dark:text-white", children: (errorState?.code && ERROR_TITLES[errorState.code]) ?? ERROR_TITLES[AppErrorCodes.GenericError] }),
      /* @__PURE__ */ jsx6("p", { className: "mx-auto mt-2 max-w-[224px] text-center text-657080", children: errorState?.message ?? ERROR_MESSAGES[errorState?.code ?? AppErrorCodes.GenericError] })
    ] }),
    /* @__PURE__ */ jsx6("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxs3(
      "button",
      {
        type: "button",
        onClick: retryFlow,
        className: "inline-flex items-center rounded-lg border border-ebecef bg-transparent px-8 py-3 font-medium text-3c424b shadow-sm transition duration-300 hover:shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40",
        children: [
          /* @__PURE__ */ jsx6(ReloadIcon_default, { className: "mr-1.5 h-5 w-5" }),
          __("Try Again")
        ]
      }
    ) })
  ] });
};
var ErrorState_default = ErrorState;

// src/components/IDKitWidget/BaseWidget.tsx
import * as Toast from "@radix-ui/react-toast";

// src/components/Icons/CheckIcon.tsx
import { jsx as jsx7, jsxs as jsxs4 } from "react/jsx-runtime";
var CheckIcon = (props) => /* @__PURE__ */ jsxs4("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 100 100", ...props, children: [
  /* @__PURE__ */ jsx7(
    "circle",
    {
      cx: "50",
      cy: "50",
      r: "49.375",
      fill: "url(#success-a)",
      fillOpacity: ".65",
      stroke: "url(#success-b)",
      strokeWidth: "1.25"
    }
  ),
  /* @__PURE__ */ jsxs4("g", { filter: "url(#success-c)", children: [
    /* @__PURE__ */ jsx7("circle", { cx: "50", cy: "50", r: "35", fill: "#fff" }),
    /* @__PURE__ */ jsx7("circle", { cx: "50", cy: "50", r: "34.432", stroke: "#CCEBCC", strokeWidth: "1.136" })
  ] }),
  /* @__PURE__ */ jsx7(
    "path",
    {
      stroke: "#090",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "3.75",
      d: "m41.25 52.5 4.375 4.375 13.125-13.75"
    }
  ),
  /* @__PURE__ */ jsxs4("defs", { children: [
    /* @__PURE__ */ jsxs4("linearGradient", { id: "success-a", x1: "50", x2: "50", y1: "0", y2: "100", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx7("stop", { stopColor: "#99D699" }),
      /* @__PURE__ */ jsx7("stop", { offset: "1", stopColor: "#99D699", stopOpacity: "0" })
    ] }),
    /* @__PURE__ */ jsxs4("linearGradient", { id: "success-b", x1: "50", x2: "50", y1: "0", y2: "100", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx7("stop", { stopColor: "#99D699" }),
      /* @__PURE__ */ jsx7("stop", { offset: ".713", stopColor: "#99D699", stopOpacity: "0" })
    ] }),
    /* @__PURE__ */ jsxs4(
      "filter",
      {
        id: "success-c",
        width: "77.5",
        height: "77.5",
        x: "11.25",
        y: "13.125",
        colorInterpolationFilters: "sRGB",
        filterUnits: "userSpaceOnUse",
        children: [
          /* @__PURE__ */ jsx7("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ jsx7("feColorMatrix", { in: "SourceAlpha", result: "hardAlpha", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" }),
          /* @__PURE__ */ jsx7("feOffset", { dy: "1.875" }),
          /* @__PURE__ */ jsx7("feGaussianBlur", { stdDeviation: "1.875" }),
          /* @__PURE__ */ jsx7("feColorMatrix", { values: "0 0 0 0 0.8 0 0 0 0 0.921569 0 0 0 0 0.8 0 0 0 0.45 0" }),
          /* @__PURE__ */ jsx7("feBlend", { in2: "BackgroundImageFix", result: "effect1_dropShadow_39_712" }),
          /* @__PURE__ */ jsx7("feBlend", { in: "SourceGraphic", in2: "effect1_dropShadow_39_712", result: "shape" })
        ]
      }
    )
  ] })
] });
var CheckIcon_default = CheckIcon;

// src/components/IDKitWidget/States/SuccessState.tsx
import { jsx as jsx8, jsxs as jsxs5 } from "react/jsx-runtime";
var SuccessState = () => {
  return /* @__PURE__ */ jsxs5("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx8("div", { className: "-mt-5 flex items-center justify-center", children: /* @__PURE__ */ jsx8(CheckIcon_default, { className: "w-24 text-white" }) }),
    /* @__PURE__ */ jsxs5("div", { children: [
      /* @__PURE__ */ jsx8("p", { className: "text-center text-2xl font-semibold text-gray-900 dark:text-white", children: __("Successfully verified") }),
      /* @__PURE__ */ jsx8("p", { className: "mx-auto mt-2 max-w-[224px] text-center text-lg text-657080", children: __("Your World ID verification was successful") })
    ] })
  ] });
};
var SuccessState_default = SuccessState;

// src/components/IDKitWidget/States/WorldID/QRState.tsx
import copy from "copy-to-clipboard";

// src/lib/utils.ts
var classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

// src/components/IDKitWidget/States/WorldID/QRState.tsx
import { useCallback, useState as useState2 } from "react";
import { AnimatePresence, motion } from "framer-motion";

// src/components/Icons/WorldcoinIcon.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var WorldcoinIcon = (props) => /* @__PURE__ */ jsx9("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 33 32", children: /* @__PURE__ */ jsx9(
  "path",
  {
    fill: "currentColor",
    d: "M30.7195 9.77312C29.9097 7.87434 28.7647 6.17103 27.2845 4.6911C25.8044 3.21117 24.1288 2.06632 22.2298 1.25654C20.247 0.418848 18.1525 0 16.0021 0C13.8238 0 11.7293 0.418848 9.7744 1.25654C7.87537 2.06632 6.17184 3.21117 4.69171 4.6911C3.21159 6.17103 2.06659 7.87434 1.25671 9.77312C0.418903 11.7277 0 13.822 0 16C0 18.1501 0.418903 20.2443 1.25671 22.2269C2.06659 24.1257 3.21159 25.829 4.69171 27.3089C6.17184 28.7888 7.87537 29.9337 9.7744 30.7155C11.7572 31.5532 13.8517 31.9721 16.0021 31.9721C18.1525 31.9721 20.247 31.5532 22.2298 30.7155C24.1288 29.9058 25.8323 28.7609 27.3125 27.281C28.7926 25.801 29.9376 24.0977 30.7475 22.1989C31.5853 20.2164 32.0042 18.1222 32.0042 15.9721C32.0042 13.822 31.5574 11.7277 30.7195 9.77312ZM10.696 14.4921C11.3383 11.9232 13.6842 10.0524 16.4489 10.0524H27.5638C28.2899 11.4206 28.7367 12.9284 28.9043 14.4921H10.696ZM28.9043 17.5079C28.7367 19.0716 28.262 20.5794 27.5638 21.9476H16.4489C13.6842 21.9476 11.3662 20.0489 10.696 17.5079H28.9043ZM6.81415 6.81326C9.27172 4.35602 12.5392 3.01571 16.0021 3.01571C19.465 3.01571 22.7325 4.35602 25.19 6.81326C25.2738 6.89703 25.3297 6.95288 25.4134 7.03665H16.4489C14.0472 7.03665 11.8131 7.95811 10.1095 9.66143C8.76903 11.0017 7.9033 12.6771 7.62403 14.4921H3.09988C3.435 11.5881 4.71964 8.9075 6.81415 6.81326ZM16.0021 28.9843C12.5392 28.9843 9.27172 27.644 6.81415 25.1867C4.71964 23.0925 3.435 20.3839 3.09988 17.5079H7.62403C7.93123 19.3229 8.79696 20.9983 10.1095 22.3386C11.8131 24.0419 14.0472 24.9633 16.4489 24.9633H25.4134C25.3297 25.0471 25.2738 25.103 25.19 25.1867C22.7325 27.644 19.465 28.9843 16.0021 28.9843Z"
  }
) });
var WorldcoinIcon_default = WorldcoinIcon;

// src/components/Icons/QRPlaceholderIcon.tsx
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
var QRPlaceholderIcon = (props) => /* @__PURE__ */ jsxs6("svg", { ...props, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 200 200", children: [
  /* @__PURE__ */ jsx10(
    "path",
    {
      fill: "#EBECEF",
      fillRule: "evenodd",
      d: "M12.1 0C5.417 0 0 5.417 0 12.1v18.505c0 6.682 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.418 12.1-12.1V12.1c0-6.683-5.418-12.1-12.1-12.1H12.1Zm18.505 11.388H12.1a.712.712 0 0 0-.712.712v18.505c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712V12.1a.712.712 0 0 0-.712-.712Z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ jsx10(
    "path",
    {
      fill: "#EBECEF",
      d: "M197.026 200c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-17.616c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.545.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808h-11.897v-11.744h-11.896v-23.487h11.896v8.808c0 .778.314 1.525.872 2.076.557.55 1.314.86 2.102.86h5.949c.788 0 1.545-.31 2.103-.86a2.922 2.922 0 0 0 .871-2.076v-8.808h8.922c.789 0 1.545-.309 2.103-.86a2.916 2.916 0 0 0 .871-2.076v-5.872c0-.779-.313-1.525-.871-2.076a2.992 2.992 0 0 0-2.103-.86h-29.741c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v8.808h-23.792v-11.744h8.922c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-5.872c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.546.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808H119.7c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.525.871 2.076.558.551 1.314.86 2.103.86h20.819v8.808c0 .778.313 1.525.871 2.076.557.55 1.314.86 2.103.86h8.922v8.808c0 .778.313 1.525.871 2.076.558.55 1.314.859 2.103.859h8.922v11.744h-20.818c-.789 0-1.546.31-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.526.871 2.076a2.99 2.99 0 0 0 2.103.86h17.844c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-8.808h11.896v8.808c0 .779.314 1.526.872 2.076a2.99 2.99 0 0 0 2.102.86h17.845Z"
    }
  ),
  /* @__PURE__ */ jsx10(
    "path",
    {
      fill: "#EBECEF",
      fillRule: "evenodd",
      d: "M157.295 12.1c0-6.683 5.418-12.1 12.1-12.1H187.9c6.683 0 12.1 5.417 12.1 12.1v18.505c0 6.682-5.417 12.1-12.1 12.1h-18.505c-6.682 0-12.1-5.418-12.1-12.1V12.1Zm12.1-.712H187.9c.393 0 .712.319.712.712v18.505a.712.712 0 0 1-.712.712h-18.505a.712.712 0 0 1-.712-.712V12.1c0-.393.319-.712.712-.712ZM12.1 157.295c-6.683 0-12.1 5.418-12.1 12.1V187.9c0 6.683 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.417 12.1-12.1v-18.505c0-6.682-5.418-12.1-12.1-12.1H12.1Zm19.217 12.1a.712.712 0 0 0-.712-.712H12.1a.712.712 0 0 0-.712.712V187.9c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712v-18.505Z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ jsx10(
    "path",
    {
      fill: "#EBECEF",
      d: "M6.05 89.68A6.05 6.05 0 0 0 0 95.73v9.252a6.05 6.05 0 0 0 6.05 6.05h9.253a6.05 6.05 0 0 0 6.05-6.05V95.73c0-.678-.112-1.33-.318-1.94.445.105.908.16 1.385.16h27.758a6.05 6.05 0 0 0 6.05-6.05v-9.252a6.05 6.05 0 0 0-6.05-6.05H22.42a6.05 6.05 0 0 0-6.05 6.05V87.9c0 .678.112 1.33.317 1.939a6.065 6.065 0 0 0-1.385-.16H6.05Zm102.135-40.926a6.05 6.05 0 0 1 6.05-6.05h9.253a6.05 6.05 0 0 1 6.049 6.05v9.253a6.05 6.05 0 0 1-6.049 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.253ZM67.616 184.698a6.05 6.05 0 0 1 6.05-6.05h9.252c.678 0 1.33.111 1.939.317a6.064 6.064 0 0 1-.16-1.385v-9.253a6.05 6.05 0 0 1 6.05-6.049H100a6.05 6.05 0 0 1 6.05 6.049v9.253a6.05 6.05 0 0 1-6.05 6.05h-9.253c-.678 0-1.33-.112-1.938-.317.104.444.159.908.159 1.385v9.252a6.05 6.05 0 0 1-6.05 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.252Zm78.291-120.285a6.05 6.05 0 0 1 6.05-6.05h41.993a6.05 6.05 0 0 1 6.05 6.05v9.252a6.05 6.05 0 0 1-6.05 6.05h-41.993a6.05 6.05 0 0 1-6.05-6.05v-9.252ZM95.018 0a6.05 6.05 0 0 0-6.05 6.05v17.082a6.05 6.05 0 0 0 6.05 6.05h9.252a6.05 6.05 0 0 0 6.05-6.05V6.05A6.05 6.05 0 0 0 104.27 0h-9.252Z"
    }
  ),
  /* @__PURE__ */ jsx10(
    "path",
    {
      fill: "url(#a)",
      fillRule: "evenodd",
      d: "M12.1 0C5.417 0 0 5.417 0 12.1v18.505c0 6.682 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.418 12.1-12.1V12.1c0-6.683-5.418-12.1-12.1-12.1H12.1Zm18.505 11.388H12.1a.712.712 0 0 0-.712.712v18.505c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712V12.1a.712.712 0 0 0-.712-.712Z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ jsx10(
    "path",
    {
      fill: "url(#a)",
      d: "M197.026 200c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-17.616c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.545.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808h-11.897v-11.744h-11.896v-23.487h11.896v8.808c0 .778.314 1.525.872 2.076.557.55 1.314.86 2.102.86h5.949c.788 0 1.545-.31 2.103-.86a2.922 2.922 0 0 0 .871-2.076v-8.808h8.922c.789 0 1.545-.309 2.103-.86a2.916 2.916 0 0 0 .871-2.076v-5.872c0-.779-.313-1.525-.871-2.076a2.992 2.992 0 0 0-2.103-.86h-29.741c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v8.808h-23.792v-11.744h8.922c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-5.872c0-.778-.313-1.525-.871-2.076a2.996 2.996 0 0 0-2.103-.86h-5.948c-.789 0-1.546.31-2.103.86a2.918 2.918 0 0 0-.871 2.076v8.808H119.7c-.789 0-1.545.309-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.525.871 2.076.558.551 1.314.86 2.103.86h20.819v8.808c0 .778.313 1.525.871 2.076.557.55 1.314.86 2.103.86h8.922v8.808c0 .778.313 1.525.871 2.076.558.55 1.314.859 2.103.859h8.922v11.744h-20.818c-.789 0-1.546.31-2.103.86a2.916 2.916 0 0 0-.871 2.076v5.872c0 .779.313 1.526.871 2.076a2.99 2.99 0 0 0 2.103.86h17.844c.789 0 1.545-.309 2.103-.86.558-.55.871-1.297.871-2.076v-8.808h11.896v8.808c0 .779.314 1.526.872 2.076a2.99 2.99 0 0 0 2.102.86h17.845Z"
    }
  ),
  /* @__PURE__ */ jsx10(
    "path",
    {
      fill: "url(#a)",
      fillRule: "evenodd",
      d: "M157.295 12.1c0-6.683 5.418-12.1 12.1-12.1H187.9c6.683 0 12.1 5.417 12.1 12.1v18.505c0 6.682-5.417 12.1-12.1 12.1h-18.505c-6.682 0-12.1-5.418-12.1-12.1V12.1Zm12.1-.712H187.9c.393 0 .712.319.712.712v18.505a.712.712 0 0 1-.712.712h-18.505a.712.712 0 0 1-.712-.712V12.1c0-.393.319-.712.712-.712Z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ jsx10(
    "path",
    {
      fill: "url(#a)",
      fillRule: "evenodd",
      d: "M12.1 157.295c-6.683 0-12.1 5.418-12.1 12.1V187.9c0 6.683 5.417 12.1 12.1 12.1h18.505c6.682 0 12.1-5.417 12.1-12.1v-18.505c0-6.682-5.418-12.1-12.1-12.1H12.1Zm19.217 12.1a.712.712 0 0 0-.712-.712H12.1a.712.712 0 0 0-.712.712V187.9c0 .393.319.712.712.712h18.505a.712.712 0 0 0 .712-.712v-18.505Z",
      clipRule: "evenodd"
    }
  ),
  /* @__PURE__ */ jsx10(
    "path",
    {
      fill: "url(#a)",
      d: "M6.05 89.68A6.05 6.05 0 0 0 0 95.73v9.252a6.05 6.05 0 0 0 6.05 6.05h9.253a6.05 6.05 0 0 0 6.05-6.05V95.73c0-.678-.112-1.33-.318-1.94.445.105.908.16 1.385.16h27.758a6.05 6.05 0 0 0 6.05-6.05v-9.252a6.05 6.05 0 0 0-6.05-6.05H22.42a6.05 6.05 0 0 0-6.05 6.05V87.9c0 .678.112 1.33.317 1.939a6.065 6.065 0 0 0-1.385-.16H6.05Z"
    }
  ),
  /* @__PURE__ */ jsx10(
    "path",
    {
      fill: "url(#a)",
      d: "M108.185 48.754a6.05 6.05 0 0 1 6.05-6.05h9.253a6.05 6.05 0 0 1 6.049 6.05v9.253a6.05 6.05 0 0 1-6.049 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.253Z"
    }
  ),
  /* @__PURE__ */ jsx10(
    "path",
    {
      fill: "url(#a)",
      d: "M67.616 184.698a6.05 6.05 0 0 1 6.05-6.05h9.252c.678 0 1.33.111 1.939.317a6.064 6.064 0 0 1-.16-1.385v-9.253a6.05 6.05 0 0 1 6.05-6.049H100a6.05 6.05 0 0 1 6.05 6.049v9.253a6.05 6.05 0 0 1-6.05 6.05h-9.253c-.678 0-1.33-.112-1.938-.317.104.444.159.908.159 1.385v9.252a6.05 6.05 0 0 1-6.05 6.05h-9.253a6.05 6.05 0 0 1-6.05-6.05v-9.252Z"
    }
  ),
  /* @__PURE__ */ jsx10(
    "path",
    {
      fill: "url(#a)",
      d: "M145.907 64.413a6.05 6.05 0 0 1 6.05-6.05h41.993a6.05 6.05 0 0 1 6.05 6.05v9.252a6.05 6.05 0 0 1-6.05 6.05h-41.993a6.05 6.05 0 0 1-6.05-6.05v-9.252Z"
    }
  ),
  /* @__PURE__ */ jsx10(
    "path",
    {
      fill: "url(#a)",
      d: "M95.018 0a6.05 6.05 0 0 0-6.05 6.05v17.082a6.05 6.05 0 0 0 6.05 6.05h9.252a6.05 6.05 0 0 0 6.05-6.05V6.05A6.05 6.05 0 0 0 104.27 0h-9.252Z"
    }
  ),
  /* @__PURE__ */ jsx10("defs", { children: /* @__PURE__ */ jsxs6("linearGradient", { id: "a", x1: "0", x2: "200", y1: "0", y2: "200", gradientUnits: "userSpaceOnUse", children: [
    /* @__PURE__ */ jsx10("stop", { offset: ".37", stopColor: "#fff", stopOpacity: "0" }),
    /* @__PURE__ */ jsx10("stop", { offset: ".5", stopColor: "#fff", stopOpacity: ".85" }),
    /* @__PURE__ */ jsx10("stop", { offset: ".63", stopColor: "#fff", stopOpacity: "0" })
  ] }) })
] });
var QRPlaceholderIcon_default = QRPlaceholderIcon;

// src/components/IDKitWidget/States/WorldID/QRState.tsx
import { Fragment, jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var QRState = ({ qrData, showQR, setShowQR }) => {
  const media = useMedia_default();
  const [copiedLink, setCopiedLink] = useState2(false);
  const copyLink = useCallback(() => {
    copy(qrData ?? "");
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2e3);
  }, [qrData]);
  return /* @__PURE__ */ jsxs7(Fragment, { children: [
    /* @__PURE__ */ jsxs7("div", { className: "mb-10 space-y-4 md:hidden", children: [
      /* @__PURE__ */ jsxs7(
        motion.a,
        {
          href: qrData ?? "",
          whileTap: { scale: 0.95 },
          whileHover: { scale: 1.05 },
          transition: { layout: { duration: 0.15 } },
          layoutId: media == "desktop" ? void 0 : "worldid-button",
          className: classNames(
            "flex w-full space-x-2 items-center px-4 py-4 border border-transparent font-medium rounded-2xl shadow-sm",
            "bg-0d151d dark:bg-white text-white dark:text-0d151d"
          ),
          children: [
            /* @__PURE__ */ jsx11(WorldcoinIcon_default, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsx11(
              motion.span,
              {
                className: "flex-1 text-center",
                transition: { layout: { duration: 0.15 } },
                layoutId: media == "desktop" ? void 0 : "worldid-text",
                children: __("Open Worldcoin App")
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsxs7("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs7("div", { className: "flex items-center space-x-4 ", children: [
          /* @__PURE__ */ jsx11("hr", { className: "flex-1" }),
          /* @__PURE__ */ jsx11("span", { className: "text-xs font-medium text-9ba3ae", children: "or" }),
          /* @__PURE__ */ jsx11("hr", { className: "flex-1" })
        ] }),
        /* @__PURE__ */ jsx11(
          motion.button,
          {
            className: "w-full rounded-2xl border border-ebecef p-4 text-lg font-medium text-3c424b",
            onClick: () => setShowQR((state) => !state),
            children: showQR ? __("Hide QR Code") : __("Display QR Code")
          }
        )
      ] })
    ] }),
    (media == "desktop" || showQR) && /* @__PURE__ */ jsxs7(Fragment, { children: [
      /* @__PURE__ */ jsx11(AnimatePresence, { children: copiedLink && /* @__PURE__ */ jsx11(
        motion.div,
        {
          className: "text-sm text-9eafc0",
          initial: "hidden",
          animate: "visible",
          exit: "exit",
          variants: {
            hidden: { opacity: 0, height: 0, marginTop: 0, y: 0 },
            visible: {
              opacity: 1,
              height: "auto",
              marginTop: 8,
              y: -20,
              transition: {
                duration: 0.25,
                opacity: { delay: 0.05, duration: 0.2 },
                ease: "easeInOut"
              }
            },
            exit: {
              opacity: 0,
              height: 0,
              marginTop: 0,
              y: 0,
              transition: {
                duration: 0.4,
                delay: 0.1,
                opacity: { duration: 0.25, delay: 0 },
                ease: "easeInOut"
              }
            }
          },
          children: /* @__PURE__ */ jsx11("span", { className: "rounded-lg border border-f1f5f8 px-2 py-1 text-sm", children: __("QR Code copied") })
        },
        "copied"
      ) }),
      /* @__PURE__ */ jsx11("div", { className: "relative inline-flex items-center justify-center rounded-2xl border border-f1f5f8 p-2 dark:border-f1f5f8/10", children: /* @__PURE__ */ jsx11("div", { className: "text-29343f dark:text-white", children: qrData ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
        /* @__PURE__ */ jsx11("div", { onClick: copyLink, className: "cursor-pointer", children: /* @__PURE__ */ jsx11(QRCode_default, { data: qrData, size: 244 }) })
      ) : /* @__PURE__ */ jsx11("div", { className: "flex h-[244px] w-[244px] items-center justify-center", children: /* @__PURE__ */ jsx11(QRPlaceholderIcon_default, { className: "h-[244px] w-[244px] animate-pulse" }) }) }) })
    ] })
  ] });
};
var QRState_default = QRState;

// src/components/IDKitWidget/States/WorldIDState.tsx
import { shallow } from "zustand/shallow";
import { useEffect as useEffect4, useState as useState3 } from "react";

// src/services/wld-bridge.ts
import { useEffect as useEffect3, useRef } from "react";
import { useWorldBridgeStore } from "@worldcoin/idkit-core";
var useWorldBridge = (app_id, action, signal, bridge_url, verification_level, action_description) => {
  const ref_verification_level = useRef(verification_level);
  const { reset, result, connectorURI, createClient, pollForUpdates, verificationState, errorCode } = useWorldBridgeStore();
  useEffect3(() => {
    if (!connectorURI) {
      void createClient({
        app_id,
        action,
        signal,
        bridge_url,
        action_description,
        verification_level: ref_verification_level.current
      });
    }
  }, [app_id, action, signal, action_description, createClient, ref_verification_level, bridge_url, connectorURI]);
  useEffect3(() => {
    if (!connectorURI || result || errorCode) return;
    const interval = setInterval(() => void pollForUpdates(), 3e3);
    return () => clearInterval(interval);
  }, [connectorURI, pollForUpdates, errorCode, result]);
  return { connectorURI, reset, result, verificationState, errorCode };
};

// src/components/Icons/LoadingIcon.tsx
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
var LoadingIcon = ({ className, ...props }) => /* @__PURE__ */ jsxs8(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    className: `animate-spin motion-reduce:animate-[spin_1.5s_linear_infinite] ${className}`,
    ...props,
    children: [
      /* @__PURE__ */ jsx12("circle", { cx: "12", cy: "12", r: "10.75", stroke: "#191C20", strokeOpacity: ".16", strokeWidth: "2.5" }),
      /* @__PURE__ */ jsx12(
        "path",
        {
          fill: "#191C20",
          d: "M17.28 2.633c.338-.6.127-1.368-.505-1.642A12 12 0 0 0 7.459.892c-.638.261-.864 1.024-.539 1.632.326.607 1.08.827 1.725.584a9.504 9.504 0 0 1 6.897.073c.64.257 1.399.053 1.737-.548Z"
        }
      )
    ]
  }
);
var LoadingIcon_default = LoadingIcon;

// src/components/IDKitWidget/States/WorldIDState.tsx
import { AppErrorCodes as AppErrorCodes2, VerificationState, VerificationLevel } from "@worldcoin/idkit-core";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
var getOptions = (store) => ({
  signal: store.signal,
  app_id: store.app_id,
  action: store.action,
  setStage: store.setStage,
  bridge_url: store.bridge_url,
  handleVerify: store.handleVerify,
  setErrorState: store.setErrorState,
  verification_level: store.verification_level,
  action_description: store.action_description
});
var WorldIDState = () => {
  const [showQR, setShowQR] = useState3(false);
  const {
    app_id,
    action,
    signal,
    setStage,
    handleVerify,
    bridge_url,
    action_description,
    verification_level,
    setErrorState
  } = idkit_default(getOptions, shallow);
  const { connectorURI, reset, errorCode, result, verificationState } = useWorldBridge(
    app_id,
    action,
    signal,
    bridge_url,
    verification_level,
    action_description
  );
  useEffect4(() => reset, [reset]);
  useEffect4(() => {
    if (verificationState === VerificationState.Failed) {
      setStage("ERROR" /* ERROR */);
      setErrorState({ code: errorCode ?? AppErrorCodes2.GenericError });
    }
    if (result) {
      if (verification_level == VerificationLevel.Orb && result.verification_level == VerificationLevel.Device) {
        console.error(
          "Credential type received from wallet does not match configured credential_types. This should only happen when manually selecting disallowed credentials in the Worldcoin Simulator."
        );
        setStage("ERROR" /* ERROR */);
        setErrorState({ code: AppErrorCodes2.CredentialUnavailable });
        return;
      }
      return handleVerify(result);
    }
  }, [result, handleVerify, verificationState, setStage, errorCode, setErrorState, verification_level]);
  return /* @__PURE__ */ jsxs9("div", { className: "-mt-6 space-y-10", children: [
    /* @__PURE__ */ jsxs9("div", { children: [
      /* @__PURE__ */ jsx13("div", { className: "mb-4 flex items-center justify-center", children: /* @__PURE__ */ jsx13(WorldcoinIcon_default, { className: "h-10 text-0d151d dark:text-white" }) }),
      /* @__PURE__ */ jsx13("p", { className: "text-center font-sora text-2xl font-semibold text-gray-900 dark:text-white", children: __("Verify with World ID") }),
      /* @__PURE__ */ jsx13("p", { className: "mt-3 text-center text-657080 dark:text-9eafc0 md:mt-2", children: "Please use your World App to scan the QR code" })
    ] }),
    /* @__PURE__ */ jsxs9("div", { className: "relative", children: [
      verificationState == VerificationState.WaitingForApp && /* @__PURE__ */ jsxs9("div", { className: "absolute inset-0 flex flex-col items-center justify-center space-y-6", children: [
        /* @__PURE__ */ jsx13(LoadingIcon_default, { className: "h-6 w-6" }),
        /* @__PURE__ */ jsxs9("div", { children: [
          /* @__PURE__ */ jsx13("p", { className: "font-bold text-657080", children: "Verifying" }),
          /* @__PURE__ */ jsx13("p", { className: "text-sm text-657080", children: "Please continue in app" })
        ] })
      ] }),
      /* @__PURE__ */ jsx13(
        "div",
        {
          className: verificationState === VerificationState.WaitingForApp ? "opacity-40 blur-lg transition duration-500 ease-in-out" : "transition duration-500 ease-in-out",
          children: /* @__PURE__ */ jsx13(QRState_default, { showQR, setShowQR, qrData: connectorURI })
        }
      )
    ] })
  ] });
};
var WorldIDState_default = WorldIDState;

// src/components/IDKitWidget/BaseWidget.tsx
import * as Dialog from "@radix-ui/react-dialog";
import { Fragment as Fragment2, useEffect as useEffect5, useMemo } from "react";
import { AnimatePresence as AnimatePresence2, motion as motion2 } from "framer-motion";

// src/components/IDKitWidget/States/HostAppVerificationState.tsx
import { memo } from "react";
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
var HostAppVerificationState = () => {
  return /* @__PURE__ */ jsxs10("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx14("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx14(LoadingIcon_default, { className: "h-24 w-24" }) }),
    /* @__PURE__ */ jsx14("div", { className: "mt-4 text-70868f", children: __("Transmitting verification to host app. Please wait...") })
  ] });
};
var HostAppVerificationState_default = memo(HostAppVerificationState);

// src/components/IDKitWidget/BaseWidget.tsx
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
var getParams2 = ({ open, processing, onOpenChange, stage, setStage, setOptions }) => ({
  stage,
  setStage,
  processing,
  setOptions,
  isOpen: open,
  onOpenChange
});
var IDKitWidget = ({ children, ...config }) => {
  const media = useMedia_default();
  const { isOpen, onOpenChange, stage, setOptions } = idkit_default(getParams2, shallow2);
  useEffect5(() => {
    if (config.action === "") {
      throw new Error(__("Action cannot be an empty string."));
    }
    setOptions(config, "props" /* PROPS */);
  }, [config, setOptions]);
  const StageContent = useMemo(() => {
    switch (stage) {
      case "WORLD_ID" /* WORLD_ID */:
        return WorldIDState_default;
      case "SUCCESS" /* SUCCESS */:
        return SuccessState_default;
      case "ERROR" /* ERROR */:
        return ErrorState_default;
      case "HOST_APP_VERIFICATION" /* HOST_APP_VERIFICATION */:
        return HostAppVerificationState_default;
      default:
        throw new Error(__("Invalid IDKitStage :stage.", { stage }));
    }
  }, [stage]);
  return /* @__PURE__ */ jsxs11(Dialog.Root, { open: isOpen, onOpenChange, children: [
    children?.({ open: () => onOpenChange(true) }),
    /* @__PURE__ */ jsx15(Dialog.Portal, { forceMount: true, children: /* @__PURE__ */ jsx15(Fragment2, { children: /* @__PURE__ */ jsx15(AnimatePresence2, { children: isOpen && /* @__PURE__ */ jsxs11(root.div, { mode: "open", id: "idkit-widget", children: [
      /* @__PURE__ */ jsx15(Styles_default, {}),
      /* @__PURE__ */ jsxs11("div", { id: "modal", className: "fixed z-10 font-sans", children: [
        /* @__PURE__ */ jsx15(Dialog.Overlay, { asChild: true, children: /* @__PURE__ */ jsx15(
          motion2.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            exit: { opacity: 0 },
            className: "fixed inset-0 bg-black/50 backdrop-blur-lg"
          }
        ) }),
        /* @__PURE__ */ jsx15("div", { className: "fixed inset-0 z-10 overflow-y-hidden md:overflow-y-auto", children: /* @__PURE__ */ jsx15("div", { className: "flex min-h-full items-end justify-center text-center md:items-center md:p-4", children: /* @__PURE__ */ jsx15(Dialog.Content, { asChild: true, children: /* @__PURE__ */ jsx15(
          motion2.div,
          {
            layout: media == "mobile" ? "position" : true,
            exit: media == "mobile" ? "initMob" : "init",
            initial: media == "mobile" ? "initMob" : "init",
            animate: media == "mobile" ? "animateMob" : "animate",
            variants: {
              init: { opacity: 0, scale: 0.9 },
              initMob: { translateY: "100%" },
              animate: { opacity: 1, scale: 1 },
              animateMob: { translateY: 0 }
            },
            transition: { layout: { duration: 0.15 } },
            className: "relative z-50 flex min-h-screen w-full flex-col bg-white pt-6 shadow focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75 dark:bg-0d151d md:min-h-[35rem] md:max-w-md md:rounded-2xl",
            children: /* @__PURE__ */ jsxs11(Toast.Provider, { children: [
              /* @__PURE__ */ jsx15(Toast.Viewport, { className: "flex justify-center" }),
              /* @__PURE__ */ jsx15("div", { className: "mx-6 mb-12 flex items-center justify-between", children: /* @__PURE__ */ jsx15(Dialog.Close, { className: "flex items-center justify-center rounded-full dark:text-white", children: /* @__PURE__ */ jsx15(XMarkIcon_default, { className: "h-5 w-5" }) }) }),
              /* @__PURE__ */ jsx15("div", { className: "relative mx-6 mb-6 flex flex-1 flex-col items-center justify-center", children: /* @__PURE__ */ jsx15(StageContent, {}) }),
              /* @__PURE__ */ jsxs11("div", { className: "flex items-center justify-between border-t border-f5f5f7 p-7 md:rounded-b-2xl", children: [
                /* @__PURE__ */ jsxs11(
                  "a",
                  {
                    href: "https://worldcoin.org/world-id",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "flex items-center gap-1 text-sm text-9eafc0",
                    children: [
                      /* @__PURE__ */ jsx15(WorldcoinIcon_default, { className: "w-4 text-9eafc0 dark:text-white" }),
                      /* @__PURE__ */ jsx15("span", { children: __("Powered by Worldcoin") })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx15(
                  "a",
                  {
                    href: "https://developer.worldcoin.org/privacy-statement",
                    target: "_blank",
                    rel: "noreferrer",
                    className: "text-sm text-9eafc0 hover:underline",
                    children: __("Terms & Privacy")
                  }
                )
              ] })
            ] })
          }
        ) }) }) })
      ] })
    ] }) }) }) })
  ] });
};
var BaseWidget_default = IDKitWidget;

// src/components/IDKitWidget/index.tsx
var IDKitWidget_default = memo2(BaseWidget_default);

// src/index.ts
import { VerificationLevel as VerificationLevel2 } from "@worldcoin/idkit-core";
import { solidityEncode } from "@worldcoin/idkit-core/hashing";
import { verifyCloudProof } from "@worldcoin/idkit-core/backend";
export {
  IDKitWidget_default as IDKitWidget,
  VerificationLevel2 as VerificationLevel,
  solidityEncode,
  useIDKit_default as useIDKit,
  verifyCloudProof
};
