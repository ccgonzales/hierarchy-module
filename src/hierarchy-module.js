/*
 * hierarchy-module
 * https://github.com/cgonzales/hierarchy-module
 *
 * Copyright (c) 2014 Chris Gonzales
 * Licensed under the MIT license.
 */

define(['jquery', 'underscore'], function($, _) {

var Hierarchy = function(options) {
  if ( !(this instanceof Hierarchy)) {
    return new Hierarchy(options);
  }

    var that = this;
    
    this.urlBase = options.urlBase;
    this.data = options.root;
    this.dataList = [];
    
    
    this.getUrlBase();
    
    this.init = (function() {
      that._setDataList(that.data);
      that._setDefaults();

      for(var i = 0; i < that.dataList.length; i++) {
        var $id = that.dataList[i].el;
        $id = $('#'+$id);
        $id.on('change', _.bind(that.changeHandler, that, i));
      }
    })();
  
    this.printDataList();  
};

/*  
An attempt to dynamically load the structure when the object is created.
However, due to the asynchronous nature of requirejs, the result is available
until after the init function is finished.
Further investigation is needed
------------------------------------------------------------------------------
Hierarchy.prototype.getStructure = function(structure) {
   $.getJSON('./src/sampleData.json').done(function(result) {
    this.options = result;
    });
  };
*/


  Hierarchy.prototype.getUrlBase = function(){
    console.log('base url ->' + this.urlBase);
  };


/*_setDefaults()
This function will check for a saved value of the HTML element by checking if the existing value is greater 
than zero (0). Otherwise it will iterates through each memeber in the dataSet to look for the 
memeber.default property. It will then loop through the corresponding 
HTML element for the matching value and apply the "selected" attribute.
*/
  Hierarchy.prototype._setDefaults = function() {
    console.log("----setting defaults----");
    //check for saved value > 0
    //otherwise set to default
    $.each(this.dataList, function() {
      if($('#'+this.el).val() <=0) {
        var defaultVal = this.default;
        if(defaultVal > 0){
          $.each($('#'+this.el).children('option'), function(){
            console.log($(this).val() +" " + defaultVal.toString());
            if($(this).val() === defaultVal.toString()){
              $(this).attr('selected', 'selected');
            }
          });
        }
      } 
    });
  };


  Hierarchy.prototype.printDataList = function(){
    for(var i = 0; i < this.dataList.length; i++) {
      console.log('------------')
      console.log('Item # ' + i);
      for( var key in this.dataList[i]) {
        console.log(key + " = " + this.dataList[i][key]);
      }
    }
  };


  Hierarchy.prototype._setDataList = function(data){
    var obj = {};
    for(var key in data) {
      if (key === 'child') {
        this._setDataList(data[key]);
      }
      else {
        obj[key] = data[key];
      }
    }
    this.dataList.unshift(obj);
  };


  /* changHandler
  This processes the changes event for the corresponding HTML element.
  */
  Hierarchy.prototype.changeHandler = function(currentIndex) {
    console.log(currentIndex);
    console.log($(event.target).attr('id') + ' has changed to ' + $(event.target).val());
    if ( (currentIndex + 2) < this.dataList.length){
      this._disableChildren(currentIndex + 2);
    }
  };

  /* _disableChildren
  This funciton disables HTML elements that are two positions from the start i.e. children's children
  */
  Hierarchy.prototype._disableChildren = function(startIndex) {
    for(startIndex; startIndex < this.dataList.length; startIndex++){
      $('#' + this.dataList[startIndex].el).attr('disabled', 'disabled');
    }
  };

  return Hierarchy;

});