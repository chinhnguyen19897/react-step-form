import { Form } from "@pages/form/Form.tsx"
import { Home } from "@pages/home/Home.tsx"

const routerData = [
  {
    path: "/home",
    element: <Home />,
    title: "Home",
  },
  {
    path: "/step-form",
    element: <Form />,
    title: "form Person",
  },
]

export default routerData
