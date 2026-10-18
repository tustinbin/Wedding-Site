# Wedding website

A one-page wedding invitation you can host on GitHub Pages. Names, the date, locations, the photo, and links are all set in `js/config.js`.

## Preview on your computer

1. Open the project folder.
2. Double-click `index.html`, or use a small local server so links behave the way they will online.

In this folder, run:

```bash
python -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080).

Edit `js/config.js`, save, and refresh the page.

## Publish with GitHub Pages

1. Create a new empty repository on GitHub.
2. Add these project files to the repository. You can upload them on the GitHub website, or from this folder run:

```bash
git init
git add .
git commit -m "Add wedding website"
git branch -M main
git remote add origin https://github.com/YOUR_USER/YOUR_REPO.git
git push -u origin main
```

3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Choose the `main` branch and the `/ (root)` folder, then save.
6. After a minute or two, GitHub shows the site address. It looks like `https://YOUR_USER.github.io/YOUR_REPO/`.

The `.nojekyll` file tells GitHub Pages to publish the files as they are.

Share that address only after the placeholders below are replaced.

## Placeholders to replace

All of these are in `js/config.js`:

| Placeholder | What to put there |
| --- | --- |
| `photoSrc` | Path to your engagement photo, such as `images/engagement.jpg`. Leave `""` until the photo is ready. |
| `photoAlt` | A short description of that photo |
| `[ADDRESS_FORM_URL]` | Google Form link where guests share contact information for an invite |
| `location` | Currently `tbd` |
| `reception` | Currently `tbd` |

## Add the engagement photo

1. Save the photo in the `images` folder.
2. In `js/config.js`, set `photoSrc` to `images/your-file-name.jpg`.
3. Set `photoAlt` to a short description.
4. Refresh the page.

A wide photo fits the banner. The picture is cropped gently to fill the space behind the greeting.
