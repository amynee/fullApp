Template.User.helpers({
	selected: function() {
		return Session.equals("selectedJoke", this.__originalId) ? "selected" : '';
	},
});

Template.User.events({
	'click': function() {
		Session.set("selectedJoke", this.__originalId);
    }
});