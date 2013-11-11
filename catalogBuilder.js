var catalogBuilder={};
var input = null;

catalogBuilder.initialize = function(method){
	input = {
			add:false,
			remove:false,
			list:false,
			search:false,
			inputData:false,
			Isbn:false ,
			Price:false,
			Author:false,
			Title:false,
			Publisher:false,
			Help:false};
			return catalogBuilder;
}

catalogBuilder.withAdd=function(shouldAdd){
	input.add = shouldAdd;
	return catalogBuilder;
};

catalogBuilder.withRemove=function(shouldRemove){
	input.remove = shouldRemove;
	return catalogBuilder;
};

catalogBuilder.withList = function(shouldList){
	input.list = shouldList;
	return catalogBuilder;
}
catalogBuilder.withIsbn = function(shouldIsbn){
	input.Isbn = shouldIsbn;
	return catalogBuilder;
}
catalogBuilder.withHelp =function(shouldHelp){
	input.Help = shouldHelp;
	return catalogBuilder;
}
catalogBuilder.build = function(){
	return input;
};
exports.catalogBuilder = catalogBuilder;



test._17bookcatalog_will_GIVE_enter_book_Isbn_to_remove_error = function(){
	var result = catalogBuilder.initialize().withRemove(true).build();
	var expected = "enter book Isbn to remove\r\ncheck --help for options"
	assert.equal(expected,catalog.bookcatalog(result,["remove","-isbn"]));
}