import { useRoutes } from "react-router-dom"
import { Home } from "@pages/home/Home.tsx"
import { FormSubscription } from "@pages/form-subscription/FormSubscription.tsx"
import Main from "@layout/Main.tsx"

const Router = () => {
  return useRoutes([
    {
      element: <Main />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/form-subscription",
          element: <FormSubscription />,
        },
      ],
    },
  ])
}

export default Router
