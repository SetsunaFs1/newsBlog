import { Data_SnippetNews } from "../../utils/newsData";
import NewsSnippet from "../snippet/Snippet";
import "./App.css";


function App() {
  return <NewsSnippet newsData={Data_SnippetNews} />;
}

export default App;
