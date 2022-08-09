import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from './GlobalStyle'
import App from './pages/App'

function RouterDom () {
    return (
        <Router>
            <GlobalStyle/>
            <Routes>
                <Route path="/" element={<App/>} />
            </Routes>
        </Router>
    )
}

export default RouterDom