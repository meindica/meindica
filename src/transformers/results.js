export const transformResults = ({ node }) => ({
  id: node.id,
  locale: node.cidade_estadoQueVoc_Mora_,
  name: node.nomeESobrenome_,
  senority: node.senioridadeDaVagaQueVoc_Busca_,
  linkedin: node.urlDoSeuLinkedIn_,
  stack: node.vagaDeTecnologiaQueVoc_T_Procurando_,
  working: !/sim/i.test(node.voc_Est_SemEmpregoAtualmente_),
  realocate: /sim/i.test(node.consideraSeMudarCasoAVagaSejaForaDaSuaCidade_),
})
