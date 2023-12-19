import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <>
      {["dark"].map((variant) => (
        <Alert key={variant} variant={variant}>
          <h1>EpiBook</h1>
          <p>La tua libreria a portata di Click</p>
        </Alert>
      ))}
    </>
  );
}

export default Welcome;
