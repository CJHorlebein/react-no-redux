const { Component } = React;
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            color: 'red'
        };
    }

    changeCount(value) {
        this.setState({
            count: this.state.count + value
        });
    }

    setValue(e) {
        e.preventDefault();
        let num = e.target.value == '' ? 0 : e.target.value;
        this.setState({ count: parseInt(num) });
    }

    setColor(e) {
        e.preventDefault();
        this.setState({ color: e.target.value });
    }

    render() {
        return (
            <div>
                <select onChange={e => this.setColor(e)}>
                    <option value='red'>Red</option>
                    <option value='blue'>Blue</option>
                    <option value='green'>Green</option>
                </select>
                <input type='text' onChange={e => this.setValue(e)} placeholder='Counter Value' />
                <h1 id='counterValue'>
                    <span style={{ color: this.state.color }}>{this.state.count}</span>
                </h1>
                {[-5, -1, 1, 5].map((val, i) => (
                    <button key={i} onClick={() => this.changeCount(val)}>
                        {val}
                    </button>
                ))}
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
