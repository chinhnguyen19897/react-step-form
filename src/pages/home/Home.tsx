import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <section className="home-page">
        <section>
          <h2>Subscriber Plan</h2>
          <Link to="/step-form">Get started</Link>
        </section>
      </section>
    </>
  );
};
