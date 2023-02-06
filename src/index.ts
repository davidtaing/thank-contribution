import * as core from "@actions/core";
import * as github from "@actions/github";

async function run() {
  const GITHUB_TOKEN = core.getInput("repo-token", { required: true });

  const octokit = github.getOctokit(GITHUB_TOKEN);
  const context = github.context;
  const MESSAGE = `Congratulations ${context.issue.owner} for landing this pull request!`;

  octokit.rest.issues.createComment({
    ...context.repo,
    issue_number: context.issue.number,
    body: MESSAGE,
  });
}

run();
