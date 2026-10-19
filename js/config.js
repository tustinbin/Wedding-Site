// Wedding website configuration
// ---------------------------------
// This is the only file you need to edit for names, the date, locations,
// your photo, and links. Save the file, then refresh the browser.
//
// Leave a value as "" or as its [PLACEHOLDER] to keep the empty state:
//   - photoSrc "" shows the photo placeholder behind the greeting
//   - addressFormUrl placeholder shows the button, but the button
//     stays inactive until you paste a real https link
//
// To change fixed sentences, edit index.html.

const WEDDING_CONFIG = {
  // Page background. Change this hex color, then refresh.
  // Examples: "#f7f3ec" ivory, "#f3efe6" warmer cream, "#eef2ea" soft sage.
  backgroundColor: "#f7f3ec",

  // Names, in the order you want them shown.
  nameOne: "Hailey Wills",
  nameTwo: "William Gifford",

  // Shown on the photo and again in Wedding Details.
  date: "1/16/27",

  // Write the location the way guests should read it.
  location: "Near Provo, UT (Exact location TBD)",

  // Reception place, time, or a short note. This site does not add details for you.
  reception: "Near Provo, UT (Exact location TBD)",

  // Engagement photo
  // 1. Put the image in the images folder (jpg, png, or webp).
  // 2. Set photoSrc, for example: "images/engagement.jpg"
  // A wide photo fits the banner best. Leave photoSrc as "" until you have one.
  // photoAlt is read aloud to guests using screen readers. Describe the picture.
  photoSrc: "IMG_6538.JPG",
  photoAlt: "Hailey Wills and William Gifford sitting together in a field",

  // Google Form where guests share contact information for an invite.
  // Example: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
  addressFormUrl: "https://docs.google.com/forms/d/e/1FAIpQLSc8xCRUOD-zOwyzB0O_WcvAdUhHQuABxrkfkJzU3AKl3saIMg/viewform?usp=publish-editor",
};
