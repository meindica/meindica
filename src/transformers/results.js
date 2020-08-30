const transformResults = ({ node }) => ({
  id: node.id,
  date: node.carimbodedatahora,
  locale: node.cidadeestadoquevocemora,
  name: node.nomeesobrenome,
  senority: node.senioridadedavagaquevocebusca,
  linkedin: node.urldoseulinkedin,
  stack: node.vagadetecnologiaquevocetaprocurando,
  working: /sim/i.test(node.voceestasemempregoatualmente),
  realocate: /sim/i.test(node.considerasemudarcasoavagasejaforadasuacidade),
})

module.exports = { transformResults }
