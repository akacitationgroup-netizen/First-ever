# Deploying this repo with GitHub Actions → Azure Static Web Apps

This guide shows the minimal steps to deploy the static site in this repository to Azure Static Web Apps using GitHub Actions (the workflow file is included at `.github/workflows/azure-static-web-apps.yml`).

What you'll need

- an Azure subscription
- permissions to create a Static Web App resource in the subscription, or an existing Static Web App
- a GitHub repository (this repo) with push access

Steps

1) Create an Azure Static Web App (portal)

- Go to https://portal.azure.com → Create a resource → Static Web App.
- Choose a name for the Static Web App and a region.
- For Deployment details, you can skip connecting GitHub (we'll use a deployment token) or connect GitHub directly if you prefer.

2) Get the deployment token

- In the Static Web App resource in the Azure portal, open "Manage deployment token" (or look for "Deployment token" in the Properties/Overview blade).
- Copy the token — this is the secret the GitHub Action needs.

3) Add the token to your GitHub repo

- On GitHub, open the repository → Settings → Secrets and variables → Actions → New repository secret.
- Name the secret: `AZURE_STATIC_WEB_APPS_API_TOKEN` and paste the token value.

4) Customize the workflow (optional)

- The included workflow runs on push to `main`. If your main branch is named differently, update the `on.push.branches` value in `.github/workflows/azure-static-web-apps.yml`.
- If you build the site (for example using a bundler), set `output_location` to the directory that contains the built files (for example `dist` or `build`). If your site is the raw files at the repo root, leave `app_location: "/"` and `output_location: "/"`.

5) Trigger a deployment

- Push to the branch you configured (default `main`). The workflow will run and deploy the repository contents to the Static Web App.
- Check the Actions tab in GitHub for job logs. Azure Static Web Apps will publish the site and provide a production URL in the portal.

Notes & tips

- If you prefer connecting GitHub directly (OAuth) during Static Web App creation, Azure will create the workflow automatically and you won't need to add the deployment token secret manually.
- For advanced scenarios (APIs, multiple environments), update `api_location` and use environment-specific secrets.

Need help?

- I can update the workflow to set `output_location` to `dist` and add a sample `package.json` + build script if you plan to use a bundler.
- If you give me the Static Web App name and whether you connected GitHub at creation time, I can provide the exact secret creation steps and a ready README badge.
