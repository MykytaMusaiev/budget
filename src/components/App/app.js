import React from 'react';
import {open} from "../../utils/indexdb"
import Header from "../Header";


import {GlobalStyle, Wrapper} from "./styles";
import LinksRouter from "../Router";

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
                <GlobalStyle/>
                    <Header/>
                <LinksRouter/>
            </Wrapper>
        )
    }
}

export default App;