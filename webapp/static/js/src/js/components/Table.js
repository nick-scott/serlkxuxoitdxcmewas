import React from "react";

export default class Table extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.data !== state.data && props.data.length > 0) {
            console.log('getDerivedStateFromProps', state, props);
            return {data: props.data};
        }
        return state
    }

    renderRows() {
        let ret = []
        if (this.state.data) {
            this.state.data.forEach((row, index) => {
                ret.push(<div key={index}>{JSON.stringify(row)}</div>)
            })
        }
        return ret
    }

    render() {
        return <div className={"SomeTable"}>
            {this.renderRows()}
        </div>

    }
}