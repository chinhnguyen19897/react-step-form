import { useState } from "react"
import { FormSummaryInfo, PersonalInfo } from "types/form.ts"

interface dataPlan {
  personalInfoData: PersonalInfo
  planInfoData: FormSummaryInfo
}

export const useDataContext = () => {
  const [data, setData] = useState<dataPlan[]>([])

  return {
    data,
    setData,
  }
}
