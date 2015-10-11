// simple-backbone.js

// Collection
var QuoteCollection = Backbone.PageableCollection.extend({
	url: 'https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json',
	mode: "client",
	state: {
		pageSize: 15
	}
});

// Initialize Collection
var quoteCollection = new QuoteCollection();

// Backgrid Columns
var columns = [
		{name: "source", label: "Source", editable: false, cell: "string"},
		{name: "context", label: "Context", editable: false, cell: "string"},
		{name: "quote", label: "Quote", editable: false, cell: "string"},
		{name: "theme", label: "Theme", editable: false, cell: "string"}];

// Initialize Backgrid
var backgrid = new Backgrid.Grid({
	columns: columns,
	collection: quoteCollection
});

// Initialize Paginator
var paginator = new Backgrid.Extension.Paginator({
	collection: quoteCollection
});

// Theme Filter
var themeFilter = new Backgrid.Extension.SelectFilter({
	collection: quoteCollection,
	field: "theme",
	
	selectOptions: [
		{label: "All", value: null},
		{label: "Games", value: ["games"]},
		{label: "Movies", value: ["movies"]}],
	
	makeMatcher: function(value) {
		return function(model) {
			return _.indexOf(value, model.get(this.field)) >= 0;
		}
	}	
});

// Render Elements
$("#quote-grid").append(backgrid.render().el);
$("#paginator").append(paginator.render().el);

$themeFilter = themeFilter.render().$el;
$("#theme-filter").replaceWith($themeFilter);

// Fetch JSON from URL
quoteCollection.fetch();
