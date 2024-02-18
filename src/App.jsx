import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "@/pages/Home.jsx";
import Claim from "@/pages/Claim.jsx";
import Fail from "@/pages/Fail.jsx";
import Staking from "@/pages/Staking.jsx";
import AppLayout from "@/components/layout/AppLayout/AppLayout.jsx";
import Nice from "@/pages/Nice.jsx";
import Buy from "@/pages/Buy.jsx";
function App() {
    return (
        <Router>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/claim" element={<Claim/>}/>
                    <Route path="/nice" element={<Nice/>}/>
                    <Route path="/fail" element={<Fail/>}/>
                    <Route path="/buy" element={<Buy/>}/>
                    <Route path="/staking" element={<Staking/>}/>
                </Route>
            </Routes>
        </Router>
    );
}
export default App
