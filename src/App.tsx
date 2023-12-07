import "./assets/styles/App.scss";
import { Container } from "reactstrap";
import { Footer, Navbar } from "./Components";

export const App = () => {
  return (
    <Container>
      <Navbar />
      <Footer />
    </Container>
  )
}