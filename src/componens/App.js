import Header from "./Header/Header";
import LeftSidebar from "./LeftSidebar/LeftSidebar" ;
import ContentBlock from "./ContentBlock/ContentBlock";



function App() {
  return (
    <div className="w-[100vw] h-[100vh]">
      <Header/>
      <div className = {`flex h-[95%]`}>
      <LeftSidebar/>
      <ContentBlock/>
      </div>
    </div>
  );
}

export default App;
