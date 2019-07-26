export interface IResume {
  meta?: object
  basics: {
    name: string
    email: string
    phone: string
    summary: string
  }
  work: IWork[]
  education: IEducation[]
  languages: ILanguage[]
  skills: string[]
  certificates: ICertificate[]
  interests: string[]
}

export interface ILanguage {
  name: string
  fluency: string
}

export interface ICertificate {
  name: string
  date: string
}

export interface IWork {
  page: number
  name: string
  location: string
  position: string
  startDate: string
  endDate: string
  summary: string
  highlights: string[]
}

export interface IEducation {
  institution: string
  location: string
  area: string
  studyType: string
  startDate: string
  endDate: string
  gpa: string
  result?: string
  courses: string[]
}
