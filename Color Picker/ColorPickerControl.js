function ColorPickerControl() { };

ColorPickerControl.prototype.initialize = function(host, component) {
  this.host = host;
  this.color = "";
  
  var colorpicker = document.createElement("INPUT");
  colorpicker.setAttribute("type", "color");
  colorpicker.setAttribute("value", "");
  colorpicker.setAttribute("id", "selectedColor");
	host.append(colorpicker);
}

ColorPickerControl.prototype.resize = function(height, width) {
  if (this.host && height && width && (height > 0) && (width > 0)) {
    this.host.css({ width: width, height: height });
  }
};

ColorPickerControl.prototype.setValue = function(data) {
//Process input data
};

ColorPickerControl.prototype.getValue = function() {
  var theInput = document.getElementById("selectedColor");
  this.color = theInput.value;

  theInput.addEventListener("input", function() {
    this.color = theInput.value;
  }, false);
  
  return {
    CurrentColor: this.color
  };
};