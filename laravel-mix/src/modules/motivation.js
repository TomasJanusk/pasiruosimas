const url = document.querySelector("#url");
const textarea = document.querySelector("#textarea");
const saveButton = document.querySelector("#issaugoti");
saveButton.addEventListener("click", addMessage);
const upLoad = document.querySelector("#ikelimas");

function addMessage() {
  const imgUrl = url.value;
  const textMessage = textarea.value;

  const div = document.createElement("div");
  const image = document.createElement("img");
  image.src = imgUrl;
  const text = document.createElement("h3");
  text.textContent = textMessage;
  div.append(image);
  div.append(text);
  upLoad.append(div);

  const saveData = {
    imgUrl: imgUrl,
    textMessage: textMessage,
  };
  localStorage.setItem("motivacijaData", JSON.stringify(saveData));
  
}
export default addMessage;
