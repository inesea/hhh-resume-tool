export interface IResume {
  meta: object
  basics: {
    name: string
    email: string
    phone: string
    summary: string
  }
  work: IWork[]
  education: object[]
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
  name: string
  location: string
  position: string
  startDate: string
  endDate: string
  summary: string
  highlights: string[]
}
