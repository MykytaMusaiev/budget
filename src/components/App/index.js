import React from 'react';
import {Wrapper} from "./styles";
import {Route, Routes} from "react-router-dom"
import Home from "../Home";
import Statistics from "../Statistics";
import About from "../About";
import {open} from "../../utils/indexdb"

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = ({
            loading: true
        })

    }

    componentDidMount() {
        open().then(() => {
            this.setState({
                loading: false
            })
        }).catch(() => console.error('Помилка'));
    }

    render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        }
        return (
            <Wrapper>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/statistics" element={<Statistics/>}/>
                    <Route path="/about" element={<About/>}/>
                </Routes>
            </Wrapper>
        )
    }
};

export default App;