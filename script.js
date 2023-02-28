const translateBtn = document.getElementById("translate-btn");

translateBtn.addEventListener("click", () => {
  const inputText = document.getElementById("input-text").value;
  const selectLang = document.getElementById("select-lang").value;
  const outputText = document.getElementById("output-text");

  fetch(`https://api.mymemory.translated.net/get?q=${inputText}&langpair=en|${selectLang}`)
    .then(response => response.json())
    .then(data => {
      outputText.value = data.responseData.translatedText;
    })
    .catch(error => {
      console.error(error);
      outputText.value = "Error translating text. Please try again later.";
    });
});
