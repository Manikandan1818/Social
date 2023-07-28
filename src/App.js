import About from "./About";
import Footer from "./Footer";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import PostPage from "./PostPage";

function App() {
  return (
    <div className="App">
      <Home />
      <Nav />
      <About />
      <NewPost />
      <PostPage />
      <Missing />
      <Footer />
    </div>
  );
}

export default App;
