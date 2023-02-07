
export interface Report {
  id: string
  source:  string
  reference: Reference
  state: string
  payload: Payload
  created: Date
}

interface Reference {
  referenceId: string
  referenceType: string
}

interface Payload {
  source: string
  reportType: string
  message?: string
  reportId: string
  referenceResourceId: string
  referenceResourceType: string
}
