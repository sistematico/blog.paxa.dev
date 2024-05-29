// export type ProjectData = Array<{
//   name: string
//   description?: string
//   icon?: string
//   href: string
// }>

export interface ProjectO {
  id: number
  name: string
  description: string
  html_url: string
  homepage?: string
}

export interface Project {
  id:                          number
  name:                        string
  html_url:                    string
  description:                 null | string
  fork:                        boolean
  url?:                         string
  // created_at:                  Date
  // updated_at:                  Date
  // pushed_at:                   Date
  homepage:                    null | string
  // size:                        number
  stargazers_count?:            number
  watchers_count?:              number
}