import { Home } from "@pages/home/Home.tsx"
import { FormSubscription } from "@pages/form-subscription/FormSubscription.tsx"

const routerData = [
  {
    path: "/home",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/form-subscription",
    element: <FormSubscription />,
    title: "Form Subscription",
  },
]

export default routerData
