# GitHub Pages Deployment Guide

This guide will walk you through deploying your Quality of Life website to GitHub Pages.

## Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Git Installed**: Ensure Git is installed on your local machine
3. **Repository Setup**: Your quality-of-life repository should be on GitHub

## Step 1: Push Your Code to GitHub

If you haven't already, push your code to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: Quality of Life website"

# Add your GitHub repository as remote origin
git remote add origin https://github.com/kiruthika/quality-of-life.git

# Push to main branch
git push -u origin main
```

## Step 2: Configure GitHub Pages

1. Go to your GitHub repository: `https://github.com/kiruthika/quality-of-life`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

## Step 3: Deploy Your Website

The project is already configured for GitHub Pages deployment. Simply run:

```bash
npm run deploy
```

This command will:
1. Build your project (`npm run build`)
2. Deploy the build folder to the `gh-pages` branch
3. Make your website available at `https://kiruthika.github.io/quality-of-life`

## Step 4: Verify Deployment

1. Wait a few minutes for GitHub Pages to build and deploy
2. Visit `https://kiruthika.github.io/quality-of-life`
3. Your website should be live!

## Automatic Deployment

For future updates, follow this workflow:

1. Make your changes to the code
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: [describe your changes]"
   git push origin main
   ```
3. Deploy the changes:
   ```bash
   npm run deploy
   ```

## Troubleshooting

### Build Errors
If you encounter build errors:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Deployment Issues
- Make sure your repository is public (or you have GitHub Pro for private repos)
- Check that the `gh-pages` package is installed
- Verify your `package.json` has the correct homepage URL

### Website Not Loading
- Wait 5-10 minutes for GitHub Pages to build
- Check the Actions tab in your repository for build status
- Verify the URL is correct: `https://kiruthika.github.io/quality-of-life`

## Custom Domain (Optional)

If you want to use a custom domain:

1. In GitHub Pages settings, enter your custom domain
2. Add a CNAME record pointing to `kiruthika.github.io`
3. Update the `homepage` field in `package.json`
4. Redeploy with `npm run deploy`

## Performance Tips

- Images are optimized automatically during build
- CSS and JavaScript are minified and compressed
- Consider using a CDN for better global performance

## Support

If you encounter issues:
1. Check the GitHub Pages documentation
2. Review the build logs in the Actions tab
3. Create an issue in your repository

---

Your Quality of Life website is now ready to help people improve their health and wellness! 🎉 