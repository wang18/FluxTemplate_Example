var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants =  require('../constants/AppConstants');

var AppAction = {
    addItem: function (text) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_NEW_ITEM,
            text: text
        });
    }
};

module.exports = AppAction;

