function getRoute() {

  const origin = document.getElementById('origin');
  const indexOrigin = origin.selectedIndex;

  const destination = document.getElementById('destination');
  const indexDestination = destination.selectedIndex;
  const nameCityDestination = destination.options[indexDestination].text;

  let root = origin.options[indexOrigin].text;
  let cy = cytoscape({
    container: document.getElementById('cy'),

    boxSelectionEnabled: false,
    autounselectify: true,

    style: cytoscape.stylesheet()
      .selector('node')
      .style({
        'content': 'data(id)'
      })
      .selector('edge')
      .style({
        'curve-style': 'bezier',
        'target-arrow-shape': 'triangle',
        'width': 4,
        'line-color': '#ddd',
        'target-arrow-color': '#ddd'
      })
      .selector('.highlighted')
      .style({
        'background-color': '#61bffc',
        'line-color': '#61bffc',
        'target-arrow-color': '#61bffc',
        'transition-property': 'background-color, line-color, target-arrow-color',
        'transition-duration': '0.5s'
      }),

    elements: {
      nodes: [
        { data: { id: 'Duitama' } },
        { data: { id: 'Sogamoso' } },
        { data: { id: 'Tibasosa' } },
        { data: { id: 'Paipa' } },
        { data: { id: 'Tunja' } },
        { data: { id: 'Santa Rosa' } },
        { data: { id: 'Belencito' } },
        { data: { id: 'Corrales' } },
        { data: { id: 'Floresta' } },
        { data: { id: 'Morca' } },
        { data: { id: 'Mongui' } },
        { data: { id: 'Mongua' } },
        { data: { id: 'Nobsa' } },
        { data: { id: 'Iza' } }
      ],

      edges: [
        {
          data: {
            id: 'tunja-paipa', weight: 45.5, source: 'Tunja', target: 'Paipa'
          }
        },
        {
          data: {
            id: 'paipa-tunja', weight: 45.5, source: 'Paipa', target: 'Tunja'
          }
        },
        {
          data: {
            id: 'paipa-duitama', weight: 13.4, source: 'Paipa',
            target: 'Duitama'
          }
        },
        {
          data: {
            id: 'duitama-paipa', weight: 13.4, source: 'Duitama',
            target: 'Paipa'
          }
        },
        {
          data: {
            id: 'duitama-nobsa', weight: 19.4, source: 'Duitama',
            target: 'Nobsa'
          }
        },
        {
          data: {
            id: 'nobsa-duitama', weight: 19.4, source: 'Nobsa',
            target: 'Duitama'
          }
        },
        {
          data: {
            id: 'duitama-santa-rosa', weight: 9.4, source: 'Duitama',
            target: 'Santa Rosa'
          }
        },
        {
          data: {
            id: 'santa-rosa-duitama', weight: 9.4, source: 'Santa Rosa',
            target: 'Duitama'
          }
        },
        {
          data: {
            id: 'duitama-tibasosa', weight: 7.2, source: 'Duitama',
            target: 'Tibasosa'
          }
        },
        {
          data: {
            id: 'tibasosa-duitama', weight: 7.2, source: 'Tibasosa',
            target: 'Duitama'
          }
        },
        {
          data: {
            id: 'nobsa-belencito', weight: 9, source: 'Nobsa',
            target: 'Belencito'
          }
        },
        {
          data: {
            id: 'belencito-nobsa', weight: 9, source: 'Belencito',
            target: 'Nobsa'
          }
        },
        {
          data: {
            id: 'nobsa-sogamoso', weight: 15, source: 'Nobsa',
            target: 'Sogamoso'
          }
        },
        {
          data: {
            id: 'sogamoso-nobsa', weight: 15, source: 'Sogamoso',
            target: 'Nobsa'
          }
        },
        {
          data: {
            id: 'santa-rosa-floresta', weight: 39, source: 'Santa Rosa',
            target: 'Floresta'
          }
        },
        {
          data: {
            id: 'floresta-santa-rosa', weight: 39, source: 'Floresta',
            target: 'Santa Rosa'
          }
        },
        {
          data: {
            id: 'tibasosa-sogamoso', weight: 9, source: 'Tibasosa',
            target: 'Sogamoso'
          }
        },
        {
          data: {
            id: 'sogamoso-tibasosa', weight: 9, source: 'Sogamoso',
            target: 'Tibasosa'
          }
        },
        {
          data: {
            id: 'belencito-corrales', weight: 43, source: 'Belencito',
            target: 'Corrales'
          }
        },
        {
          data: {
            id: 'corrales-belencito', weight: 43, source: 'Corrales',
            target: 'Belencito'
          }
        },
        {
          data: {
            id: 'belencito-iza', weight: 25.3, source: 'Belencito',
            target: 'Iza'
          }
        },
        {
          data: {
            id: 'iza-belencito', weight: 25.3, source: 'Iza',
            target: 'Belencito'
          }
        },
        {
          data: {
            id: 'sogamoso-iza', weight: 6.3, source: 'Sogamoso', target: 'Iza'
          }
        },
        {
          data: {
            id: 'iza-sogamoso', weight: 6.3, source: 'Iza', target: 'Sogamoso'
          }
        },
        {
          data: {
            id: 'sogamoso-morca', weight: 16.6, source: 'Sogamoso',
            target: 'Morca'
          }
        },
        {
          data: {
            id: 'morca-sogamoso', weight: 16.6, source: 'Morca',
            target: 'Sogamoso'
          }
        },
        {
          data: {
            id: 'belencito-mongua', weight: 24.9, source: 'Belencito',
            target: 'Mongua'
          }
        },
        {
          data: {
            id: 'mongua-belencito', weight: 24.9, source: 'Mongua',
            target: 'Belencito'
          }
        },
        {
          data: {
            id: 'corrales-floresta', weight: 13, source: 'Corrales',
            target: 'Floresta'
          }
        },
        {
          data: {
            id: 'floresta-corrales', weight: 13, source: 'Floresta',
            target: 'Corrales'
          }
        },
        {
          data: {
            id: 'iza-mongui', weight: 19, source: 'Iza', target: 'Mongui'
          }
        },
        {
          data: {
            id: 'mongui-iza', weight: 19, source: 'Mongui', target: 'Iza'
          }
        },
        {
          data: {
            id: 'morca-mongui', weight: 11, source: 'Morca', target: 'Mongui'
          }
        },
        {
          data: {
            id: 'mongui-morca', weight: 11, source: 'Mongui', target: 'Morca'
          }
        },
        {
          data: {
            id: 'mongui-mongua', weight: 13.5, source: 'Mongui',
            target: 'Mongua'
          }
        },
        {
          data: {
            id: 'mongua-mongui', weight: 13.5, source: 'Mongua',
            target: 'Mongui'
          }
        },
      ]
    },

    layout: {
      name: 'breadthfirst',
      directed: true,
      roots: `#${root}`,
    },

  });

  let dijkstra = cy.elements().dijkstra(`#${root}`, function (edge) {
    return edge.data('weight');
  }, true);

  alert(`Total de kilometros : ${dijkstra.distanceTo(
    `#${nameCityDestination}`)} Km`);
  alert(`El recorrido de ${root} a ${nameCityDestination} fue: \n${dijkstra.pathTo(
    `#${nameCityDestination}`)
    .map((element) => `${element._private.data.id} \n`)}`);
};
