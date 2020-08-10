import './search.html';


Template.search.helpers({
	inputAttributes() {
		return { 'class': 'easy-search-input', 'placeholder': 'Start Searching' };
	},
	players() {
		return Jokes.find({}, { sort: { createdAt: -1 } });
	},
	selectedName() {
		var joke = JokesIndex.config.mongoCollection.findOne({ __originalId: Session.get("selectedJoke") });
		return joke && joke.jokeName;
	},
	index() {
		return JokesIndex;
	},
	resultsCount(){
		return JokesIndex.getComponentDict().get('count');
	},
	showMore() {
		return false;
	},
});