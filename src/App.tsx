import "./assets/styles/App.scss";
import { Container } from "reactstrap";
import { Footer, Navbar } from "./Components";
import { AppRouter } from "./Router";

export const App = () => {
  return (
    <Container>
      <Navbar />
      <AppRouter/>
      <Footer />
    </Container>
  )
}