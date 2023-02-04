import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateList from './component/CreateList/CreateList';
import ListContent from './component/ListContent/ListContent';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NoPageFound from './component/NoPageFound/NoPageFound';
import ListContentEdit from './component/ListContent/ListContentEdit';



function App() {
  return (
    <BrowserRouter>
    <Routes>
          <Route exact path='/' element={<CreateList />} />
          <Route path='/todoli' element={<CreateList />} />

          <Route path="/listcontent/Grocery" element={<ListContent category = "Grocery"/>} >
            <Route path='edit/:task' element = {<ListContentEdit/>}/>
          </Route>

          <Route path="/listcontent/Assignment" element={<ListContent category = "Assignment"/>} >
            <Route path='edit/:task' element = {<ListContentEdit/>}/>
          </Route> 

          <Route path="/listcontent/Chore" element={<ListContent category = "Chore"/>} >
            <Route path='edit/:task' element = {<ListContentEdit/>}/>
          </Route>

          <Route path="/listcontent/Other" element={<ListContent category = "Other"/>} >
            <Route path='edit/:task' element = {<ListContentEdit/>}/>
          </Route>
        <Route path='*' element={<NoPageFound/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
