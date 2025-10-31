# Azure DevOps — quick start for this repo

This document shows how to connect this repository to Azure DevOps, create a pipeline using the included `azure-pipelines.yml`, and add a build status badge to the `README.md`.

1) Push this repository to Azure Repos (or connect GitHub)

- Create a project in Azure DevOps: https://dev.azure.com
- In the Project → Repos, either create a new repository and push this code, or connect an external GitHub repository.

2) Create a pipeline

- In Project → Pipelines → New pipeline.
- Choose your repo provider (Azure Repos Git or GitHub), select this repository, then "Existing Azure Pipelines YAML file".
- Point it to `azure-pipelines.yml` at the repo root and run the pipeline.

3) Pipeline notes

- The sample `azure-pipelines.yml` is minimal: it selects Node 18, runs `npm ci` and `npm run build` if present, and publishes the repository as an artifact called `site`.
- Update the YAML to match your build and deployment steps (for example, add `npm run build && npm run deploy` or use Azure Static Web Apps tasks).

4) Add a Build Status badge to `README.md`

- To add a badge that shows the latest build status, use the following markdown (replace placeholders):

```
[![Azure Pipelines](https://dev.azure.com/<your-org>/<your-project>/_apis/build/status/<pipeline-name>?branchName=main)](https://dev.azure.com/<your-org>/<your-project>/_build/latest?definitionId=<definitionId>&branchName=main)
```

- How to get `<definitionId>` and pipeline-name:
  - Open Pipelines → the pipeline you created → click "Edit" → the pipeline details page will show the URL and definition ID.

5) Common integrations

- Use Service Connections (Project Settings → Service connections) to connect to Azure subscriptions, container registries, or other services for deployments.
- For deploying static sites consider Azure Static Web Apps or GitHub Pages depending on your workflow.

If you'd like, I can:
- Create a pipeline YAML that deploys this static site to Azure Static Web Apps.
- Add a ready-to-use badge to `README.md` once you give me the organization/project/pipeline details.
