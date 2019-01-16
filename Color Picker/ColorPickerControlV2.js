function MultiColorPickerControl() { };

MultiColorPickerControl.prototype.initialize = function(host, component) {
  this.host = host;
  this.color = "";
  
  var colorpicker = document.createElement("INPUT");
  colorpicker.setAttribute("type", "color");
  colorpicker.setAttribute("value", "");
  host.append(colorpicker);
  
  this.colorPicker = colorpicker;
}

MultiColorPickerControl.prototype.resize = function(height, width) {
  if (this.host && height && width && (height > 0) && (width > 0)) {
    this.host.css({ width: width, height: height });
  }
};

MultiColorPickerControl.prototype.setValue = function(data) {
 //Enter Input Data 
};

MultiColorPickerControl.prototype.getValue = function() {
  var theInput = this.colorPicker
  this.color = theInput.value;

  theInput.addEventListener("input", function() {
    this.color = theInput.value;
  }, false);
  
  return {
    CurrentColor: this.color
  };
};