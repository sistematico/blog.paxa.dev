export interface ProjectO {
  id: number
  name: string
  description: string
  html_url: string
  homepage?: string
}

export interface Project {
  id:                          number;
  name:                        string;
  html_url:                    string;
  description:                 null | string;
  fork:                        boolean;
  url?:                         string;
  // created_at:                  Date;
  // updated_at:                  Date;
  // pushed_at:                   Date;
  homepage:                    null | string;
  // size:                        number;
  stargazers_count?:            number;
  watchers_count?:              number;
}

const token = import.meta.env.PUBLIC_GITHUB_TOKEN;

async function fetchGitHubRepos(username: string): Promise<any[]> {
  const response = await fetch(`https://api.github.com/users/${username}/repos`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.json();
}

async function fetchGitHubForks(username: string): Promise<any[]> {
  const repos = await fetchGitHubRepos(username);
  const forksPromises = repos
    .filter(repo => repo.fork)
    .map(repo => fetch(repo.url, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    }).then(response => response.json()));

  return Promise.all(forksPromises);
}

export async function fetchGitHubProjects(username: string, filterNames: string[] = [], includeForks: boolean = true): Promise<Project[]> {
  const repos = await fetchGitHubRepos(username);
  let projects = repos.map((repo: any) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: repo.html_url,
    homepage: repo.homepage,
    fork: repo.fork,
  }));

  if (includeForks) {
    const forks = await fetchGitHubForks(username);
    const forkProjects = forks.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      fork: repo.fork,
    }));
    projects = projects.concat(forkProjects);
  }

  if (filterNames.length > 0) {
    projects = projects.filter(project => filterNames.includes(project.name) || project);
  }

  return projects;
}






// async function fetchGitHubRepos(username: string): Promise<any[]> {
//   const response = await fetch(`https://api.github.com/users/${username}/repos`);
//   return response.json();
// }

// async function fetchGitHubForks(username: string): Promise<any[]> {
//   const repos = await fetchGitHubRepos(username);
//   const forksPromises = repos
//     .filter(repo => repo.fork)
//     .map(repo => fetch(repo.url).then(response => response.json()));

//   return Promise.all(forksPromises);
// }

// export async function fetchGitHubProjects(username: string, filterNames: string[] = [], includeForks: boolean = false): Promise<Project[]> {
//   const repos = await fetchGitHubRepos(username);
//   let projects = repos.map((repo: any) => ({
//     id: repo.id,
//     name: repo.name,
//     description: repo.description,
//     html_url: repo.html_url,
//     homepage: repo.homepage,
//     fork: repo.fork,
//   }));

//   if (includeForks) {
//     const forks = await fetchGitHubForks(username);
//     const forkProjects = forks.map((repo: any) => ({
//       id: repo.id,
//       name: repo.name,
//       description: repo.description,
//       html_url: repo.html_url,
//       homepage: repo.homepage,
//       fork: repo.fork,
//     }));
//     projects = projects.concat(forkProjects);
//   }

//   if (filterNames.length > 0) {
//     projects = projects.filter(project => filterNames.includes(project.name));
//   }

//   return projects;
// }
