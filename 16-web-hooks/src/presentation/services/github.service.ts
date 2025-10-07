import { GithubIssuePayload } from '../../interfaces/github-issue.interface.js';
import { GithubStarPayload } from '../../interfaces/github-star.interface.js';

export class GithubService {
  constructor(){}

  onStar(payload:GithubStarPayload):string {
    const { action, repository, sender, starred_at } = payload;

    return `User ${sender.login} ${action} star on ${repository.full_name} ${starred_at ? `at ${starred_at}` : ''}`
  }

  onIssue(payload:GithubIssuePayload):string {
    const { action, issue, repository, sender } = payload;

    return `User ${sender.login} ${action} issue called ${issue.title} on ${repository.full_name}`
  }
}