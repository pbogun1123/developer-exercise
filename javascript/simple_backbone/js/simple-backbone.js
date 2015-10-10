// simple-backbone.js

// Collection
var QuoteCollection = Backbone.PageableCollection.extend({
	url: 'https://gist.githubusercontent.com/anonymous/8f61a8733ed7fa41c4ea/raw/1e90fd2741bb6310582e3822f59927eb535f6c73/quotes.json',
	mode: "client",
	state: {
		pageSize: 15
	}
});

// Backgrid Columns
var columns = [
		{name: "source", editable: false, cell: "string"},
		{name: "context", editable: false, cell: "string"},
		{name: "quote", editable: false, cell: "string"},
		{name: "theme", editable: false, cell: "string"}];

// Collection Instance
var quoteCollection = new QuoteCollection();

// Backgrid
var backgrid = new Backgrid.Grid({
	columns: columns,
	collection: quoteCollection
});

// Paginator
var paginator = new Backgrid.Extension.Paginator({
	collection: quoteCollection
});

// Bind to HTML element
$("#quote-grid").append(backgrid.render().el);
$("#paginator").append(paginator.render().el);

// Fetch JSON from URL
quoteCollection.fetch();
