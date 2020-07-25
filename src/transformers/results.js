export const transformResults = ({ node }) => ({
  id: node.id,
  date: node.carimbodedatahora,
  locale: node.cidadeestadoquevocemora,
  name: node.nomeesobrenome,
  senority: node.senioridadedavagaquevocebusca,
  linkedin: node.urldoseulinkedin,
  stack: node.vagadetecnologiaquevocetaprocurando,
  working: node.voceestasemempregoatualmente,
  realocate: node.considerasemudarcasoavagasejaforadasuacidade,
})
