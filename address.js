// Some starter code
const container = document.querySelector("#addressList");

document.querySelector("#saveEntry").addEventListener("click", event => {
  /*
        Collect the user put by selecting the input fields, one
        at a time, and accessing the `value` property
    */
  const personName = document.querySelector("#fullName").value;
  const personAddress = document.querySelector("#address").value;

  // Once you have collected all the values, update the DOM
  // with some HTML
  container.innerHTML += `
        <section>
            <h1>${personName}</h1>
            <div>${personAddress}</div>
        </section>
    `;
});

const itemContainer = document.getElementById("favoriteList");

document.getElementById("saveIt").addEventListener("click", event => {
  const favThing = document.getElementById("favorites").value;
  const locat = document.getElementById("location").value;

  if (favThing.length === 0 || locat.length === 0) {
    alert("Enter all information!");
  } else {
    itemContainer.innerHTML += `<h2>I can purchase ${favThing} at ${locat}</h2>`;
  }

  document.getElementById("favorites").value = "";
  document.getElementById("location").value = "";
});
