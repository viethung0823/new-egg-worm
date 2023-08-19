function renderText(elementId, japaneseText, englishText) {
  const language = localStorage.getItem("language");
  const text = language === "jp" ? japaneseText : englishText;

  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  } else {
    console.error("Element not found with ID:", elementId);
  }
}