import { useQuery } from '@tanstack/react-query'

export interface GithubStats {
  stars: number
  openIssues: number
  updatedAt: string
}

async function fetchGithubStats(repo: string): Promise<GithubStats> {
  const res = await fetch(`https://api.github.com/repos/${repo}`)
  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status}`)
  }
  const data = await res.json()
  return {
    stars: data.stargazers_count,
    openIssues: data.open_issues_count,
    updatedAt: data.pushed_at,
  }
}

export function useGithubStats(repo?: string) {
  return useQuery({
    queryKey: ['github-repo', repo],
    queryFn: () => fetchGithubStats(repo as string),
    enabled: Boolean(repo),
  })
}
