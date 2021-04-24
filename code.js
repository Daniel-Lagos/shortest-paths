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
        { data: { id: 'tp', weight: 1, source: 'Tunja', target: 'Paipa' } },
        {
          data: {
            id: 'dt', weight: 3, source: 'Duitama', target: 'Tibasosa'
          }
        },
        {
          data: {
            id: 'ds', weight: 4, source: 'Duitama', target: 'Santa Rosa'
          }
        },
        {
          data: {
            id: 'ts', weight: 5, source: 'Tibasosa', target: 'Sogamoso'
          }
        },
        { data: { id: 'ns', weight: 6, source: 'Nobsa', target: 'Sogamoso' } },
        { data: { id: 'dn', weight: 2, source: 'Duitama', target: 'Nobsa' } },
        { data: { id: 'sm', weight: 4, source: 'Sogamoso', target: 'Morca' } },
        {
          data: {
            id: 'nb', weight: 21, source: 'Nobsa', target: 'Belencito'
          }
        },
        { data: { id: 'si', weight: 12, source: 'Sogamoso', target: 'Iza' } },
        { data: { id: 'mm', weight: 23, source: 'Morca', target: 'Mongui' } },
        { data: { id: 'mma', weight: 25, source: 'Mongui', target: 'Mongua' } },
        {
          data: {
            id: 'mmrca', weight: 42, source: 'Mongua', target: 'Morca'
          }
        },
        {
          data: {
            id: 'mab', weight: 22, source: 'Mongua', target: 'Belencito'
          }
        },
        {
          data: {
            id: 'mb', weight: 54, source: 'Mongui', target: 'Belencito'
          }
        },
        {
          data: {
            id: 'bc', weight: 42, source: 'Belencito', target: 'Corrales'
          }
        },
        {
          data: {
            id: 'cf', weight: 72, source: 'Corrales', target: 'Floresta'
          }
        },
        {
          data: {
            id: 'fs', weight: 92, source: 'Floresta', target: 'Santa Rosa'
          }
        },
        { data: { id: 'pd', weight: 17, source: 'Paipa', target: 'Duitama' } },
        { data: { id: 'dp', weight: 17, source: 'Duitama', target: 'Paipa' } },
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
  alert(`El recorrido de ${root} a ${nameCityDestination} fue:${dijkstra.pathTo(
    `#${nameCityDestination}`)
    .map((element) => element._private.data.id)}`);
};
