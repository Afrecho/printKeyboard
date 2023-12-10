const divs = document.getElementsByClassName('innerDiv');

    function applyStyle1() {
      document.getElementById('myDiv').style.backgroundColor = '#b1b1b1';
      document.getElementById('myDiv').style.color = 'black';
      document.getElementsByClassName('marca')[0].style.color = 'black';

      for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = '#b1b1b1';
        divs[i].style.color = 'black';
        divs[i].style.borderColor = 'black';
      }
    }

    function applyStyle2() {
      document.getElementById('myDiv').style.backgroundColor = 'white';
      document.getElementById('myDiv').style.color = 'black';
      document.getElementsByClassName('marca')[0].style.color = 'black';

      for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = 'white';
        divs[i].style.color = 'black';
        divs[i].style.borderColor = 'black';
      }
    }

    function applyStyle3() {
      document.getElementById('myDiv').style.backgroundColor = 'black';
      document.getElementById('myDiv').style.color = 'white';
      document.getElementsByClassName('marca')[0].style.color = 'white';
    
      for (let i = 0; i < divs.length; i++) {
        divs[i].style.backgroundColor = 'black';
        divs[i].style.color = 'white';
        divs[i].style.borderColor = '#636363'; 
      }
    }
    

    function exportToPDF() {
      const element = document.getElementById('myDiv');
      const options = {
        filename: 'exported_keyboard.pdf' // Nombre del archivo PDF exportado
        
      };
      //element.style.margin = '10mm';
      

      html2pdf()
        .set(options)
        .from(element)
        .save();
    }



    
    // Función para traducir el texto del div a diferentes idiomas
  function translateText() {
    var textElement = document.querySelector('section p');
    var text = textElement.textContent;

    // Traducción al francés
    googleTranslate.translate(text, 'fr')
      .then(function(result) {
        textElement.textContent = result.text;
      })
      .catch(function(error) {
        console.error('Error translating to French:', error);
      });

    // Traducción al chino mandarín
    googleTranslate.translate(text, 'zh-CN')
      .then(function(result) {
        textElement.textContent = result.text;
      })
      .catch(function(error) {
        console.error('Error translating to Mandarin Chinese:', error);
      });

    // Traducción al coreano
    googleTranslate.translate(text, 'ko')
      .then(function(result) {
        textElement.textContent = result.text;
      })
      .catch(function(error) {
        console.error('Error translating to Korean:', error);
      });

    // Traducción al ruso
    googleTranslate.translate(text, 'ru')
      .then(function(result) {
        textElement.textContent = result.text;
      })
      .catch(function(error) {
        console.error('Error translating to Russian:', error);
      });

    // Traducción al español
    googleTranslate.translate(text, 'es')
      .then(function(result) {
        textElement.textContent = result.text;
      })
      .catch(function(error) {
        console.error('Error translating to Spanish:', error);
      });
  }

  // Llama a la función de traducción al cargar la página
  window.onload = translateText;

