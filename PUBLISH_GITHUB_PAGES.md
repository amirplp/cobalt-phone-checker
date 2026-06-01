# Publish This on GitHub Pages

This project is plain HTML, CSS, and JavaScript, so it can run on GitHub Pages for free from a public repository.

## Fastest way

1. Go to GitHub and create a public repository, for example `cobalt-phone-checker`.
2. Upload these files to the repository root:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `.nojekyll`
   - `assets/` if you want to keep the QR helper images
3. Open the repository `Settings`.
4. Go to `Pages`.
5. Under `Build and deployment`, choose `Deploy from a branch`.
6. Select `main` and `/root`, then save.
7. Wait a few minutes and open the Pages URL.

Your public URL will usually look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/cobalt-phone-checker/
```

Use that URL to generate the QR code for the poster.

## Notes

- No backend is needed.
- No database is needed.
- The site uses a local hero image, so the main visual does not depend on a third-party image link.
- The estimates are educational proxies, not a verified audit of a specific phone brand.
