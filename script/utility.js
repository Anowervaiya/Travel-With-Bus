function getInnterTextById(elementId) {
  const elementText = document.getElementById(elementId);
  return parseInt(elementText.innerText);
}

function setValue(elementId, value) {
  const elementText = document.getElementById(elementId);
  elementText.innerText = value;
}

function setBgBYId(elementId, color) {
  const valubyId = document.getElementById(elementId);
  valubyId.style.backgroundColor = color;
}

function removeBgById(elementId) {
  const valubyId = document.getElementById(elementId);
  valubyId.style.backgroundColor = "";
}

function getTextById(elementId) {
  const elementText = document.getElementById(elementId);
  return elementText;
}
