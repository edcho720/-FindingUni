import Header from "./Header"
import Timeline from "./Timeline"
import Footer from "./Footer"
import Main from "./Main"
import Story from "./Story"
import Top from "./Top"

function App() {
  return (
    <div className="container">
      <Top />
      <Header />
      <Main />
      <Timeline />
      <Story />
      <Footer />
    </div>
  );
}

export default App;
