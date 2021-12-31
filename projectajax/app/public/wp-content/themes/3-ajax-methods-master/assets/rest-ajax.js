const getStoreBtnRest = document.getElementById('get_store_rest');

if (getStoreBtnRest) {

  getStoreBtnRest.addEventListener('click', (e) => {
    e.preventDefault();

    // invia una richiesta ad una rest route, chiamata stores, e prende la num 6
    fetch('/wp-json/wpc/v1/stores/6/').then(response => {

      return response.json();

    }).then(jsonResponse => {

      console.log({ jsonResponse});
      // console.log({jsonResponse});

    });

  });

}
