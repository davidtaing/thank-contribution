# thank-for-landing-pr-action 

[![Thank for Landing PR](https://github.com/davidtaing/thank-for-landing-pr-action/actions/workflows/thank-for-landing.yml/badge.svg)](https://github.com/davidtaing/thank-for-landing-pr-action/actions/workflows/thank-for-landing.yml)

Fun GitHub Action that thanks a Contributor for Landing a Pull Request by leaving a comment.

## Inputs

| Name         | Description                                                                                                                                                           | Required |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `repo-token` | The [`GITHUB_TOKEN` secret](https://docs.github.com/en/actions/configuring-and-managing-workflows/authenticating-with-the-github_token#about-the-github_token-secret) | **Yes**  |

## Outputs

N/A

## Usage Example

```yml
name: "Thank for Landing PR"

on:
  pull_request:
    types: [closed]

jobs:
  thank_for_landing:
    if: github.event.pull_request.merged == true
    runs-on: ubuntu-22.04
    permissions:
      issues: write
    steps:
      - name: Setup pnpm
        uses: pnpm/action-setup@v2.2.4
      - name: Thank Contributor for Landing PRs
        uses: davidtaing/thank-for-landing-pr-action@v0.3
        with:
          repo-token: "${{ secrets.GITHUB_TOKEN }}"
```
