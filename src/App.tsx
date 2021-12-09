import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./modules/routes";
import { Header } from "./components/header";
import { Links } from "./components/links";
import { Row } from "./components/theme/grid";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <>
      <Routes>
        <Header />
        <Row>
          <Links />
        </Row>
      </Routes>
      <Row>
        <Footer />
      </Row>
    </>
  );
}
