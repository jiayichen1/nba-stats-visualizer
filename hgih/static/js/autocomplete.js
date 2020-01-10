$(document).ready(function(){
    // Sonstructs the suggestion engine
    var active_names = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        // The url points to a json file that contains an array of country names
        prefetch: '../static/stats/active_names.json'
    });
    
    // Initializing the typeahead with remote dataset without highlighting
    $('.typeahead').typeahead(null, {
        name: 'active_names',
        source: active_names,
        limit: 10 /* Specify max number of suggestions to be displayed */
    });
});