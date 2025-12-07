const container_rgb = document.getElementById("container-rgb");
const container_hex = document.getElementById("container-hex");
const container_hsl = document.getElementById("container-hsl");
const navigation = document.getElementById("navigation");
const rgb_blue_value = document.getElementById("rgb-blue-value");
const rgb_green_value = document.getElementById("rgb-green-value");
const rgb_red_value = document.getElementById("rgb-red-value");
const rgb_slider_blue = document.getElementById("rgb-slider-blue");
const rgb_slider_green = document.getElementById("rgb-slider-green");
const rgb_slider_red = document.getElementById("rgb-slider-red");
const hex_slider_blue = document.getElementById("hex-slider-blue");
const hex_slider_green = document.getElementById("hex-slider-green");
const hex_slider_red = document.getElementById("hex-slider-red");
const hex_value = document.getElementById("hex-value");
const hsl_lightness_value = document.getElementById("hsl-lightness-value");
const hsl_saturation_value = document.getElementById("hsl-saturation-value");
const hsl_hue_value = document.getElementById("hsl-hue-value");
const hsl_slider_hue = document.getElementById("hsl-slider-hue");
const hsl_slider_lightness = document.getElementById("hsl-slider-lightness");
const hsl_slider_saturation = document.getElementById("hsl-slider-saturation");


function openNavBar() {
  navigation.style.display = "block";
}


function closeNavBar() {
  navigation.style.display = "none";
}


function rgbBackgroundColor(red, green, blue) {
  container_rgb.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

rgb_slider_red.oninput = function() {
  rgb_red_value.textContent = this.value;
  rgbBackgroundColor(this.value, rgb_slider_green.value, rgb_slider_blue.value);
}

rgb_slider_green.oninput = function() {
  rgb_green_value.textContent = this.value;
  rgbBackgroundColor(rgb_slider_red.value, this.value, rgb_slider_blue.value);
}

rgb_slider_blue.oninput = function() {
  rgb_blue_value.textContent = this.value;
  rgbBackgroundColor(rgb_slider_red.value, rgb_slider_green.value, this.value);
}

rgbBackgroundColor(rgb_slider_red.value, rgb_slider_green.value, rgb_slider_blue.value);


function hexBackgroundColor() {
  container_hex.style.backgroundColor = `#${hex_value.textContent}`;
}

hex_slider_red.oninput = function() {
  red = parseInt(hex_slider_red.value).toString(16);
  green = parseInt(hex_slider_green.value).toString(16);
  blue = parseInt(hex_slider_blue.value).toString(16);
  if (red == 0) {red = "00"};
  if (green == 0) {green = "00"};
  if (blue == 0) {blue = "00"};
  hex = red + green + blue;
  hex_value.textContent = hex;
  hexBackgroundColor();
}

hex_slider_green.oninput = function() {
  red = parseInt(hex_slider_red.value).toString(16);
  green = parseInt(hex_slider_green.value).toString(16);
  blue = parseInt(hex_slider_blue.value).toString(16);
  if (red == 0) {red = "00"};
  if (green == 0) {green = "00"};
  if (blue == 0) {blue = "00"};
  hex = red + green + blue;
  hex_value.textContent = hex;
  hexBackgroundColor();
}

hex_slider_blue.oninput = function() {
  red = parseInt(hex_slider_red.value).toString(16);
  green = parseInt(hex_slider_green.value).toString(16);
  blue = parseInt(hex_slider_blue.value).toString(16);
  if (red == 0) {red = "00"};
  if (green == 0) {green = "00"};
  if (blue == 0) {blue = "00"};
  hex = red + green + blue;
  hex_value.textContent = hex;
  hexBackgroundColor();
}

hexBackgroundColor();


function hslBackgroundColor() {
  container_hsl.style.backgroundColor = `hsl(${parseInt(hsl_slider_hue.value)}, ${parseInt(hsl_slider_saturation.value)}%, ${parseInt(hsl_slider_lightness.value)}%)`;
}

hsl_slider_hue.oninput = function() {
  hsl_hue_value.textContent = this.value;
  hslBackgroundColor();
}

hsl_slider_saturation.oninput = function() {
  hsl_saturation_value.textContent = this.value;
  hslBackgroundColor();
}

hsl_slider_lightness.oninput = function() {
  hsl_lightness_value.textContent = this.value;
  hslBackgroundColor();
}

hslBackgroundColor();