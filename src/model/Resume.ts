export interface IResume {
  meta: object
  basics: {
    name: string
    email: string
    phone: string
    summary: string
  }
  work: object[]
  education: object[]
  skills: object[]
  languages: ILanguage[]
  interests: object[]
}

export interface ILanguage {
  language: string
  fluency: string
}
