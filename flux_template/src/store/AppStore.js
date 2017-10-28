var EventEmitter = require('events').EventEmitter;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstant = require('../constants/AppConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';
var _items = [];

var AppStore = assign({}, EventEmitter.prototype, {
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on('change',callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change',callback);
    },
    addItem: function(text){
        _items.push(text);
    },
    getItem:function () {
        return _items;
    },
    setItems: function (items) {
        _items=items;
    }
});

AppDispatcher.register(function (payload) {
    var action =payload.action;
    switch(action.actionType){
        case AppConstant.ADD_NEW_ITEM:
            AppStore.addItem(action.text);
            AppStore.emitChange();
            break;
        default:
            break;
    }
    return true;
});

module.exports = AppStore;