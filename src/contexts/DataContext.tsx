import { useState } from "react";
import { FormSummaryInfo, PersonalInfo } from "types/form.ts";

interface IDataPlan {
  personalInfoData: PersonalInfo;
  planInfoData: FormSummaryInfo;
}

// eslint-disable-next-line react-refresh/only-export-components
export const useDataContext = () => {
  const [data, setData] = useState<IDataPlan[]>([]);

  return {
    data,
    setData,
  };
};
