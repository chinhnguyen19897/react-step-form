import { useContext } from "react"
import { StepFormContext } from "context/FormContext.tsx"
import "./styles.scss"
const ThankYouForm = () => {
  const formAPI = useContext(StepFormContext)

  if (formAPI?.step !== 5) return <></>

  return (
    <>
      <section className="form-finished">
        <img src="/images/icon-thank-you.svg" alt="thank-you" />
        <h1>Thank You</h1>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@gaming.com
        </p>
      </section>
    </>
  )
}
export default ThankYouForm
