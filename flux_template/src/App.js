var createReactclass = require('create-react-class');
var React = require('react');
var AppStore = require('./store/AppStore');
var MyButton = require('./components/MyButton');
var AppAction = require('./actions/AppActions');

var App = createReactclass({
    getInitialState: function () {
      return {items: AppStore.getItem()};
    },
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        AppStore.removeChangeListener(this._onChange);
    },
    _onChange: function(){
        this.setState({item: AppStore.getItem()});
    },
    render: function() {
        return (
            <div className="App">
                <h1>Flux Template</h1>
                <MyButton onClick={this.createNewItem} items={this.state.items} />
            </div>
        );
    },
    createNewItem: function () {
        AppAction.addItem('New Item');
    }
});

module.exports = App;
