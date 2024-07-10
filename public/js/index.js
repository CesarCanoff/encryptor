'use restrict';

const verifyKeyToEncrypt = (key) => {
  switch (key) {
    case 'a':
      return 'ai';
    case 'e':
      return 'enter';
    case 'i':
      return 'imes';
    case 'o':
      return 'ober';
    case 'u':
      return 'ufat';
    default:
      return key;
  }
};

const verifyWordToDecrypt = (word) => {
  let wordReplaced = word;

  let replaced = true;
  while (replaced) {
    replaced = false;

    if (wordReplaced.includes('ai')) {
      wordReplaced = wordReplaced.replace('ai', 'a');
      replaced = true;
    }

    if (wordReplaced.includes('enter')) {
      wordReplaced = wordReplaced.replace('enter', 'e');
      replaced = true;
    }

    if (wordReplaced.includes('imes')) {
      wordReplaced = wordReplaced.replace('imes', 'i');
      replaced = true;
    }

    if (wordReplaced.includes('ober')) {
      wordReplaced = wordReplaced.replace('ober', 'o');
      replaced = true;
    }

    if (wordReplaced.includes('ufat')) {
      wordReplaced = wordReplaced.replace('ufat', 'u');
      replaced = true;
    }
  }

  return wordReplaced;
};

const handleEncryptText = () => {
  const textInput = document.getElementById('main-text-input');
  let encryptedText = '';

  for (letter of textInput.value) {
    encryptedText += verifyKeyToEncrypt(letter);
  }

  showTextOnScreen(encryptedText);
  clearMainInput();
};

const handleDecryptText = () => {
  const textInput = document.getElementById('main-text-input');
  let decryptedText = '';

  for (letter of textInput.value) {
    decryptedText = verifyWordToDecrypt(textInput.value);
  }

  showTextOnScreen(decryptedText);
  clearMainInput();
};

const showTextOnScreen = (text) => {
  const outputPlace = document.querySelector('.output-encrypted-text');

  outputPlace.style.justifyContent = 'space-between';
  outputPlace.style.alignItems = 'center';

  const elementoToAddInner = `<div class="encrypted-text">
  <p>${text}</p>
  </div>`;

  const copyButtonToAddInner = `<div class="container-copy-button">
  <button class="copy-button" onclick="copyTextToClipboard()">
  <span>Copiar</span>
  </button></div>`;

  outputPlace.innerHTML = elementoToAddInner;
  outputPlace.innerHTML += copyButtonToAddInner;
};

const clearMainInput = () => {
  document.getElementById('main-text-input').value = '';
};

const clearOutputText = () => {
  document.querySelector('.output-encrypted-text').innerHTML = '';
};

const copyTextToClipboard = () => {
  const textToCopy = document.querySelector('.encrypted-text p').textContent;
  navigator.clipboard.writeText(textToCopy);

  clearOutputText();
};
