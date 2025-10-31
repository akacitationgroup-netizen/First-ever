# Azure DevOps - quick start for this repo

This repository contains a small static site and example pipeline configuration to help you get started with Azure DevOps.

Contents

- `index.html` — Azure DevOps themed landing page
- `assets/` — CSS and JS
- `azure-pipelines.yml` — example Azure Pipelines YAML
- `docs/azure-devops.md` — step-by-step guide to connect to Azure DevOps and add a build badge

Quick start

1. Create (or use an existing) project in Azure DevOps: https://dev.azure.com
2. Push this repository to your Azure Repos or connect GitHub to Azure Pipelines.
3. Create a pipeline and choose "Existing Azure Pipelines YAML file" — point it to `azure-pipelines.yml`.
4. After a successful run, add the build badge snippet from `docs/azure-devops.md` to your README.

If you'd like, I can update your main `README.md` directly with an Azure DevOps badge once you provide the organization and project names.
