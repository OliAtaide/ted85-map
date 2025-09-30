const dados = [
  {
    "Média-BR": {
      Geral: "97.9%",
      Indígena: "94.6%",
    },
    Norte: {
      Geral: "96.3%",
      Indígena: "93.4%",
    },
    Nordeste: {
      Geral: "97.1%",
      Indígena: "96.9%",
    },
    "Centro-Oeste": {
      Geral: "98.5%",
      Indígena: "94.0%",
    },
    Sudeste: {
      Geral: "98.5%",
      Indígena: "98.1%",
    },
    Sul: {
      Geral: "98.5%",
      Indígena: "98.1%",
    },
  },
  {
    "Média-BR": {
      Geral: "74.8%",
      Indígena: "45.2%",
    },
    Norte: {
      Geral: "58.6%",
      Indígena: "37.0%",
    },
    Nordeste: {
      Geral: "71.9%",
      Indígena: "58.8%",
    },
    "Centro-Oeste": {
      Geral: "73.8%",
      Indígena: "43.5%",
    },
    Sudeste: {
      Geral: "79.1%",
      Indígena: "71.8%",
    },
    Sul: {
      Geral: "82.5%",
      Indígena: "65.3%",
    },
  },
  {
    "Média-BR": {
      Geral: "73.4%",
      Indígena: "46.1%",
    },
    Norte: {
      Geral: "57.5%",
      Indígena: "39.1%",
    },
    Nordeste: {
      Geral: "69.6%",
      Indígena: "57.7%",
    },
    "Centro-Oeste": {
      Geral: "73.6%",
      Indígena: "44.1%",
    },
    Sudeste: {
      Geral: "78.3%",
      Indígena: "68.9%",
    },
    Sul: {
      Geral: "80.2%",
      Indígena: "64.1%",
    },
  },
];

const convertKey = (key) => {
  return key
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/-([a-z])/g, (match, p1) => p1.toUpperCase())
    .replace(/^([A-Z])/, (match, p1) => p1.toLowerCase())
    .replace(/-/g, "");
};

dados.forEach((item, index) => {
  $("#dataTabContent").append(`
    <div class="tab-pane fade ${
      index === 0 ? "show active" : ""
    }" id="data-tab-pane-${index}" role="tabpanel" aria-labelledby="data-tab-${index}" tabindex="${index}">
      <div class="region-list">
        ${Object.entries(item)
          .map(
            ([key, value]) =>
              `
          <div class="region ${convertKey(key)}" id="${convertKey(
                key
              )}${index}">
            <h3 class="region-title">${key}</h3>
            <div class="row">
              <div class="col">
                <div class="card data-card">
                  <div class="card-body">
                    <div class="data-title">
                      Geral
                    </div>
                    <div class="data-text">
                      ${value.Geral}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card data-card">
                  <div class="card-body">
                    <div class="data-title">
                      Indígena
                    </div>
                    <div class="data-text">
                      ${value.Indígena}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          `
          )
          .join("")}
      </div>
    </div>
  `);
});

$("svg g").each(function (index, element) {
  $(this).append(`
    <text><tspan>${$(this).attr("id")}</tspan></text>
    `);
});

$("#nextBtn").click(function () {
  $("#mainContainer").hide();
  $(".subheader").hide();
  $("#endContainer").show();
});

$("#backBtn").click(function () {
  $("#mainContainer").show();
  $(".subheader").show();
  $("#endContainer").hide();
});

$("#endContainer").hide();
