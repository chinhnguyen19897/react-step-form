type Props = {
  isActive: boolean
  stepNumber: number
  title: string
}

export const StepIndicator = ({ isActive, stepNumber, title }: Props) => {
  return (
    <section className="step-indicator--wrapper">
      <section className={`${isActive ? "active" : ""} step-number`}>
        {stepNumber}
      </section>
      <article className="step-indicator--title">
        <h2 className="step-title">Step {stepNumber}</h2>
        <h2 className="step-subtitle">{title}</h2>
      </article>
    </section>
  )
}
