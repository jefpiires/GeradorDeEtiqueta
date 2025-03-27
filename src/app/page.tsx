'use client';
import { useState } from "react";
import Select from "react-select";

type Filial = {
  id: string;
  nome: string;
  code: string;
};

type SelectOption = {
  value: string;
  label: string;
};

export default function Home() {

  const filiais: Filial[] = [
    {
      id: "486",
      code: "486",
      nome: "VESPASIANO"
    },
    {
      id: "488",
      code: "488",
      nome: "PEDRO LEOPOLDO"
    },
    {
      id: "536",
      code: "536",
      nome: "INDIANOPOLIS"
    },
    {
      id: "496",
      code: "496",
      nome: "GOIANIA"
    },
    {
      id: "500",
      code: "500",
      nome: "GOIANIA"
    },
    {
      id: "508",
      code: "508",
      nome: "SAO JOSE DO RIO PARDO"
    },
    {
      id: "537",
      code: "537",
      nome: "SACRAMENTO"
    },
    {
      id: "493",
      code: "493",
      nome: "RIBEIRAO DAS NEVES"
    },
    {
      id: "513",
      code: "513",
      nome: "ENGENHEIRO CALDAS"
    },
    {
      id: "476",
      code: "476",
      nome: "VALENTIM GENTIL"
    },
    {
      id: "515",
      code: "515",
      nome: "CRISTALINA"
    },
    {
      id: "474",
      code: "474",
      nome: "SAO PEDRO DA UNIAO"
    },
    {
      id: "477",
      code: "477",
      nome: "SAO JOAO NEPOMUCENO"
    },
    {
      id: "539",
      code: "539",
      nome: "ABADIA DOS DOURADOS"
    },
    {
      id: "542",
      code: "542",
      nome: "COCOS"
    },
    {
      id: "478",
      code: "478",
      nome: "BARAO DE COCAIS"
    },
    {
      id: "549",
      code: "549",
      nome: "LADAINHA"
    },
    {
      id: "526",
      code: "526",
      nome: "RIO VERMELHO"
    },
    {
      id: "480",
      code: "480",
      nome: "CORREGO DANTA"
    },
    {
      id: "479",
      code: "479",
      nome: "CERES"
    },
    {
      id: "482",
      code: "482",
      nome: "JAGUAQUARA"
    },
    {
      id: "499",
      code: "499",
      nome: "CHAPADAO DO SUL"
    },
    {
      id: "531",
      code: "531",
      nome: "ITABIRITO"
    },
    {
      id: "506",
      code: "506",
      nome: "CASSILANDIA"
    },
    {
      id: "509",
      code: "509",
      nome: "UBERLANDIA"
    },
    {
      id: "548",
      code: "548",
      nome: "MONTES CLAROS"
    },
    {
      id: "481",
      code: "481",
      nome: "ANDRELANDIA"
    },
    {
      id: "483",
      code: "483",
      nome: "TARUMIRIM"
    },
    {
      id: "484",
      code: "484",
      nome: "LAGOA SANTA"
    },
    {
      id: "494",
      code: "494",
      nome: "CONSELHEIRO LAFAIETE"
    },
    {
      id: "498",
      code: "498",
      nome: "LAGOA DOURADA"
    },
    {
      id: "503",
      code: "503",
      nome: "IPORA"
    },
    {
      id: "514",
      code: "514",
      nome: "GOIANIA"
    },
    {
      id: "518",
      code: "518",
      nome: "NOVA VICOSA"
    },
    {
      id: "524",
      code: "524",
      nome: "MAR DE ESPANHA"
    },
    {
      id: "525",
      code: "525",
      nome: "COSTA RICA"
    },
    {
      id: "527",
      code: "527",
      nome: "GUARAPARI"
    },
    {
      id: "532",
      code: "532",
      nome: "VIRGINIA"
    },
    {
      id: "533",
      code: "533",
      nome: "RIFAINA"
    },
    {
      id: "543",
      code: "543",
      nome: "JAPONVAR"
    },
    {
      id: "545",
      code: "545",
      nome: "CHAPADA DO NORTE"
    },
    {
      id: "544",
      code: "544",
      nome: "PEDRAS DE MARIA DA CRUZ"
    },
    {
      id: "704",
      code: "704",
      nome: "ARAXA"
    },
    {
      id: "547",
      code: "547",
      nome: "DIVINOPOLIS"
    },
    {
      id: "487",
      code: "487",
      nome: "SANTA BARBARA"
    },
    {
      id: "485",
      code: "485",
      nome: "SAO DOMINGOS DO PRATA"
    },
    {
      id: "489",
      code: "489",
      nome: "ITANHANDU"
    },
    {
      id: "490",
      code: "490",
      nome: "SANTA LUZIA"
    },
    {
      id: "501",
      code: "501",
      nome: "VITORIA DA CONQUISTA"
    },
    {
      id: "502",
      code: "502",
      nome: "ITAPURANGA"
    },
    {
      id: "507",
      code: "507",
      nome: "JEQUIE"
    },
    {
      id: "516",
      code: "516",
      nome: "ALVINOPOLIS"
    },
    {
      id: "534",
      code: "534",
      nome: "ITAJUBA"
    },
    {
      id: "519",
      code: "519",
      nome: "ITAMONTE"
    },
    {
      id: "523",
      code: "523",
      nome: "TEIXEIRA DE FREITAS"
    },
    {
      id: "993",
      code: "993",
      nome: "CONTAGEM"
    },
    {
      id: "512",
      code: "512",
      nome: "CASA BRANCA"
    },
    {
      id: "538",
      code: "538",
      nome: "UBERLANDIA"
    },
    {
      id: "535",
      code: "535",
      nome: "BELA VISTA DE GOIAS"
    },
    {
      id: "491",
      code: "491",
      nome: "PORANGATU"
    },
    {
      id: "521",
      code: "521",
      nome: "MUCURI"
    },
    {
      id: "522",
      code: "522",
      nome: "GONZAGA"
    },
    {
      id: "505",
      code: "505",
      nome: "GOVERNADOR VALADARES"
    },
    {
      id: "463",
      code: "463",
      nome: "BARRA DA ESTIVA"
    },
    {
      id: "464",
      code: "464",
      nome: "MONTANHA"
    },
    {
      id: "360",
      code: "360",
      nome: "PARANAIGUARA"
    },
    {
      id: "325",
      code: "325",
      nome: "IGUAI"
    },
    {
      id: "465",
      code: "465",
      nome: "SABINOPOLIS"
    },
    {
      id: "471",
      code: "471",
      nome: "BELO CAMPO"
    },
    {
      id: "448",
      code: "448",
      nome: "CASTELO"
    },
    {
      id: "450",
      code: "450",
      nome: "MIMOSO DO SUL"
    },
    {
      id: "446",
      code: "446",
      nome: "LIVRAMENTO DE NOSSA SENHORA"
    },
    {
      id: "356",
      code: "356",
      nome: "PIRACANJUBA"
    },
    {
      id: "361",
      code: "361",
      nome: "CONDEUBA"
    },
    {
      id: "396",
      code: "396",
      nome: "VIRGINOPOLIS"
    },
    {
      id: "438",
      code: "438",
      nome: "IAPU"
    },
    {
      id: "439",
      code: "439",
      nome: "ARAXA"
    },
    {
      id: "429",
      code: "429",
      nome: "ITAMBE"
    },
    {
      id: "436",
      code: "436",
      nome: "AURIFLAMA"
    },
    {
      id: "319",
      code: "319",
      nome: "APARECIDA DO TABOADO"
    },
    {
      id: "331",
      code: "331",
      nome: "AFONSO CLAUDIO"
    },
    {
      id: "333",
      code: "333",
      nome: "IUNA"
    },
    {
      id: "335",
      code: "335",
      nome: "ABRE CAMPO"
    },
    {
      id: "342",
      code: "342",
      nome: "GUACUI"
    },
    {
      id: "135",
      code: "135",
      nome: "MONTE SANTO DE MINAS"
    },
    {
      id: "610",
      code: "610",
      nome: "ICEM"
    },
    {
      id: "136",
      code: "136",
      nome: "CARMO DO CAJURU"
    },
    {
      id: "137",
      code: "137",
      nome: "NOVO CRUZEIRO"
    },
    {
      id: "138",
      code: "138",
      nome: "ITAOBIM"
    },
    {
      id: "139",
      code: "139",
      nome: "PADRE PARAISO"
    },
    {
      id: "612",
      code: "612",
      nome: "NOVA PONTE"
    },
    {
      id: "140",
      code: "140",
      nome: "PARAOPEBA"
    },
    {
      id: "141",
      code: "141",
      nome: "NOVA RESENDE"
    },
    {
      id: "613",
      code: "613",
      nome: "CAMPO FLORIDO"
    },
    {
      id: "142",
      code: "142",
      nome: "NANUQUE"
    },
    {
      id: "143",
      code: "143",
      nome: "ITINGA"
    },
    {
      id: "144",
      code: "144",
      nome: "GUARANESIA"
    },
    {
      id: "614",
      code: "614",
      nome: "ARAPUA"
    },
    {
      id: "617",
      code: "617",
      nome: "SAO GONCALO DO ABAETE"
    },
    {
      id: "145",
      code: "145",
      nome: "FRONTEIRA"
    },
    {
      id: "280",
      code: "280",
      nome: "IPAMERI"
    },
    {
      id: "267",
      code: "267",
      nome: "SANTA VITORIA"
    },
    {
      id: "291",
      code: "291",
      nome: "CONGONHAS"
    },
    {
      id: "328",
      code: "328",
      nome: "ELOI MENDES"
    },
    {
      id: "344",
      code: "344",
      nome: "BELO ORIENTE"
    },
    {
      id: "609",
      code: "609",
      nome: "NUPORANGA"
    },
    {
      id: "312",
      code: "312",
      nome: "OURO PRETO"
    },
    {
      id: "696",
      code: "696",
      nome: "RESENDE COSTA"
    },
    {
      id: "690",
      code: "690",
      nome: "POTIRENDABA"
    },
    {
      id: "322",
      code: "322",
      nome: "SANTA HELENA DE GOIAS"
    },
    {
      id: "327",
      code: "327",
      nome: "CAXAMBU"
    },
    {
      id: "615",
      code: "615",
      nome: "GUARDA-MOR"
    },
    {
      id: "616",
      code: "616",
      nome: "ESTRELA DO SUL"
    },
    {
      id: "618",
      code: "618",
      nome: "PLANURA"
    },
    {
      id: "150",
      code: "150",
      nome: "SAO JOAO DO PARAISO"
    },
    {
      id: "151",
      code: "151",
      nome: "CAPELINHA"
    },
    {
      id: "155",
      code: "155",
      nome: "CAPITAO ENEAS"
    },
    {
      id: "619",
      code: "619",
      nome: "LAGAMAR"
    },
    {
      id: "620",
      code: "620",
      nome: "VARJAO DE MINAS"
    },
    {
      id: "147",
      code: "147",
      nome: "ALMENARA"
    },
    {
      id: "148",
      code: "148",
      nome: "JEQUITINHONHA"
    },
    {
      id: "152",
      code: "152",
      nome: "ITAMARANDIBA"
    },
    {
      id: "157",
      code: "157",
      nome: "RIO PARDO DE MINAS"
    },
    {
      id: "622",
      code: "622",
      nome: "ARAUJOS"
    },
    {
      id: "153",
      code: "153",
      nome: "DIAMANTINA"
    },
    {
      id: "154",
      code: "154",
      nome: "BURITIZEIRO"
    },
    {
      id: "159",
      code: "159",
      nome: "MONTE AZUL PAULISTA"
    },
    {
      id: "203",
      code: "203",
      nome: "ARAXA"
    },
    {
      id: "623",
      code: "623",
      nome: "PERDIGAO"
    },
    {
      id: "164",
      code: "164",
      nome: "CABO VERDE"
    },
    {
      id: "163",
      code: "163",
      nome: "PEDRA AZUL"
    },
    {
      id: "167",
      code: "167",
      nome: "CANDEIAS"
    },
    {
      id: "631",
      code: "631",
      nome: "PAINS"
    },
    {
      id: "161",
      code: "161",
      nome: "MATO VERDE"
    },
    {
      id: "162",
      code: "162",
      nome: "SANTO ANTONIO DO AMPARO"
    },
    {
      id: "168",
      code: "168",
      nome: "POCO FUNDO"
    },
    {
      id: "165",
      code: "165",
      nome: "BOM SUCESSO"
    },
    {
      id: "626",
      code: "626",
      nome: "CAPETINGA"
    },
    {
      id: "628",
      code: "628",
      nome: "SAO JOSE DA BARRA"
    },
    {
      id: "630",
      code: "630",
      nome: "MEDEIROS"
    },
    {
      id: "169",
      code: "169",
      nome: "POTE"
    },
    {
      id: "180",
      code: "180",
      nome: "MEDINA"
    },
    {
      id: "191",
      code: "191",
      nome: "CARLOS CHAGAS"
    },
    {
      id: "664",
      code: "664",
      nome: "CAJOBI"
    },
    {
      id: "627",
      code: "627",
      nome: "PIMENTA"
    },
    {
      id: "170",
      code: "170",
      nome: "MATEUS LEME"
    },
    {
      id: "172",
      code: "172",
      nome: "VARZELANDIA"
    },
    {
      id: "637",
      code: "637",
      nome: "LIMEIRA DO OESTE"
    },
    {
      id: "166",
      code: "166",
      nome: "GOUVEIA"
    },
    {
      id: "632",
      code: "632",
      nome: "ITAMOGI"
    },
    {
      id: "173",
      code: "173",
      nome: "MINAS NOVAS"
    },
    {
      id: "174",
      code: "174",
      nome: "SAO JOAO EVANGELISTA"
    },
    {
      id: "652",
      code: "652",
      nome: "SAO FRANCISCO DE SALES"
    },
    {
      id: "206",
      code: "206",
      nome: "MONTALVANIA"
    },
    {
      id: "223",
      code: "223",
      nome: "BARRA DO CHOCA"
    },
    {
      id: "634",
      code: "634",
      nome: "MARAVILHAS"
    },
    {
      id: "171",
      code: "171",
      nome: "SANTA MARIA DO SUACUI"
    },
    {
      id: "633",
      code: "633",
      nome: "CAMPO DO MEIO"
    },
    {
      id: "176",
      code: "176",
      nome: "ARAGUARI"
    },
    {
      id: "653",
      code: "653",
      nome: "COQUEIRAL"
    },
    {
      id: "260",
      code: "260",
      nome: "SERRA AZUL"
    },
    {
      id: "125",
      code: "125",
      nome: "IPUA"
    },
    {
      id: "644",
      code: "644",
      nome: "JURUAIA"
    },
    {
      id: "668",
      code: "668",
      nome: "RIOLANDIA"
    },
    {
      id: "238",
      code: "238",
      nome: "TANQUE NOVO"
    },
    {
      id: "241",
      code: "241",
      nome: "TOCANTINS"
    },
    {
      id: "669",
      code: "669",
      nome: "BUENO BRANDAO"
    },
    {
      id: "234",
      code: "234",
      nome: "CARANGOLA"
    },
    {
      id: "270",
      code: "270",
      nome: "LAMBARI"
    },
    {
      id: "269",
      code: "269",
      nome: "CRUZILIA"
    },
    {
      id: "678",
      code: "678",
      nome: "OUROESTE"
    },
    {
      id: "679",
      code: "679",
      nome: "DORES DE CAMPOS"
    },
    {
      id: "276",
      code: "276",
      nome: "ITABERAI"
    },
    {
      id: "277",
      code: "277",
      nome: "JARAGUA"
    },
    {
      id: "853",
      code: "853",
      nome: "FRANCISCO SA "
    },
    {
      id: "294",
      code: "294",
      nome: "SAO SIMAO"
    },
    {
      id: "349",
      code: "349",
      nome: "SAO ROMAO"
    },
    {
      id: "274",
      code: "274",
      nome: "CAMPANHA"
    },
    {
      id: "284",
      code: "284",
      nome: "GOIAS"
    },
    {
      id: "286",
      code: "286",
      nome: "AGUAS FORMOSAS"
    },
    {
      id: "289",
      code: "289",
      nome: "TEOFILO OTONI"
    },
    {
      id: "288",
      code: "288",
      nome: "RAUL SOARES"
    },
    {
      id: "677",
      code: "677",
      nome: "SAO TIAGO"
    },
    {
      id: "268",
      code: "268",
      nome: "MORRINHOS"
    },
    {
      id: "281",
      code: "281",
      nome: "LAJINHA"
    },
    {
      id: "681",
      code: "681",
      nome: "ESTIVA"
    },
    {
      id: "682",
      code: "682",
      nome: "CACHOEIRA DE MINAS"
    },
    {
      id: "126",
      code: "126",
      nome: "CARMOPOLIS DE MINAS"
    },
    {
      id: "127",
      code: "127",
      nome: "BOTELHOS"
    },
    {
      id: "128",
      code: "128",
      nome: "ITAPECERICA"
    },
    {
      id: "129",
      code: "129",
      nome: "UBERLANDIA"
    },
    {
      id: "130",
      code: "130",
      nome: "GUAPE"
    },
    {
      id: "131",
      code: "131",
      nome: "MACHADO"
    },
    {
      id: "645",
      code: "645",
      nome: "JACUI"
    },
    {
      id: "802",
      code: "802",
      nome: "ARAXA"
    },
    {
      id: "283",
      code: "283",
      nome: "VISCONDE DO RIO BRANCO"
    },
    {
      id: "282",
      code: "282",
      nome: "IPANEMA"
    },
    {
      id: "253",
      code: "253",
      nome: "ITUMBIARA"
    },
    {
      id: "272",
      code: "272",
      nome: "SAO LUIS DE MONTES BELOS"
    },
    {
      id: "285",
      code: "285",
      nome: "JUATUBA"
    },
    {
      id: "279",
      code: "279",
      nome: "PALMEIRAS DE GOIAS"
    },
    {
      id: "290",
      code: "290",
      nome: "MARIANA"
    },
    {
      id: "688",
      code: "688",
      nome: "BORDA DA MATA"
    },
    {
      id: "684",
      code: "684",
      nome: "BOM REPOUSO"
    },
    {
      id: "295",
      code: "295",
      nome: "IGARAPE"
    },
    {
      id: "244",
      code: "244",
      nome: "MONTE ALEGRE DE MINAS"
    },
    {
      id: "297",
      code: "297",
      nome: "MACAUBAS"
    },
    {
      id: "301",
      code: "301",
      nome: "IBIRACI"
    },
    {
      id: "287",
      code: "287",
      nome: "NOVA GRANADA"
    },
    {
      id: "293",
      code: "293",
      nome: "OURO BRANCO"
    },
    {
      id: "292",
      code: "292",
      nome: "INHAPIM"
    },
    {
      id: "304",
      code: "304",
      nome: "EDEIA"
    },
    {
      id: "307",
      code: "307",
      nome: "CAMANDUCAIA"
    },
    {
      id: "305",
      code: "305",
      nome: "SERRO"
    },
    {
      id: "693",
      code: "693",
      nome: "IBIRA"
    },
    {
      id: "308",
      code: "308",
      nome: "JORDANIA"
    },
    {
      id: "310",
      code: "310",
      nome: "DIVINO"
    },
    {
      id: "132",
      code: "132",
      nome: "ARINOS"
    },
    {
      id: "133",
      code: "133",
      nome: "MONTE BELO"
    },
    {
      id: "134",
      code: "134",
      nome: "BRASILIA DE MINAS"
    },
    {
      id: "608",
      code: "608",
      nome: "ARAMINA"
    },
    {
      id: "698",
      code: "698",
      nome: "MACAUBAL"
    },
    {
      id: "699",
      code: "699",
      nome: "SALES"
    },
    {
      id: "314",
      code: "314",
      nome: "MONTE SIAO"
    },
    {
      id: "316",
      code: "316",
      nome: "BAEPENDI"
    },
    {
      id: "318",
      code: "318",
      nome: "SAO GABRIEL DA PALHA"
    },
    {
      id: "320",
      code: "320",
      nome: "CENTRAL DE MINAS"
    },
    {
      id: "324",
      code: "324",
      nome: "TANHACU"
    },
    {
      id: "330",
      code: "330",
      nome: "BRUMADINHO"
    },
    {
      id: "329",
      code: "329",
      nome: "UBAI"
    },
    {
      id: "852",
      code: "852",
      nome: "MONTES CLAROS"
    },
    {
      id: "108",
      code: "108",
      nome: "ITACARAMBI"
    },
    {
      id: "109",
      code: "109",
      nome: "MUZAMBINHO"
    },
    {
      id: "110",
      code: "110",
      nome: "VIRADOURO"
    },
    {
      id: "111",
      code: "111",
      nome: "SAO FRANCISCO"
    },
    {
      id: "112",
      code: "112",
      nome: "SAO JOAO DA PONTE"
    },
    {
      id: "661",
      code: "661",
      nome: "GUARACI"
    },
    {
      id: "640",
      code: "640",
      nome: "PIRACEMA"
    },
    {
      id: "643",
      code: "643",
      nome: "ITATIAIUCU"
    },
    {
      id: "646",
      code: "646",
      nome: "IGARATINGA"
    },
    {
      id: "647",
      code: "647",
      nome: "PRATAPOLIS"
    },
    {
      id: "196",
      code: "196",
      nome: "CAETITE"
    },
    {
      id: "660",
      code: "660",
      nome: "IPUIUNA"
    },
    {
      id: "195",
      code: "195",
      nome: "GUANAMBI"
    },
    {
      id: "198",
      code: "198",
      nome: "CANDIDO SALES"
    },
    {
      id: "208",
      code: "208",
      nome: "UBERABA"
    },
    {
      id: "207",
      code: "207",
      nome: "BAIXO GUANDU"
    },
    {
      id: "220",
      code: "220",
      nome: "SAO GONCALO DO SAPUCAI"
    },
    {
      id: "116",
      code: "116",
      nome: "NEPOMUCENO"
    },
    {
      id: "117",
      code: "117",
      nome: "TUPACIGUARA"
    },
    {
      id: "606",
      code: "606",
      nome: "LAGOA FORMOSA"
    },
    {
      id: "118",
      code: "118",
      nome: "CONCEICAO DA APARECIDA"
    },
    {
      id: "119",
      code: "119",
      nome: "MIRABELA"
    },
    {
      id: "184",
      code: "184",
      nome: "CONSELHEIRO PENA"
    },
    {
      id: "205",
      code: "205",
      nome: "PALMAS DE MONTE ALTO"
    },
    {
      id: "209",
      code: "209",
      nome: "CACULE"
    },
    {
      id: "654",
      code: "654",
      nome: "CAPITOLIO"
    },
    {
      id: "211",
      code: "211",
      nome: "LAGOA GRANDE"
    },
    {
      id: "210",
      code: "210",
      nome: "MONTES CLAROS"
    },
    {
      id: "656",
      code: "656",
      nome: "CARMO DA MATA"
    },
    {
      id: "219",
      code: "219",
      nome: "SANTOS DUMONT"
    },
    {
      id: "659",
      code: "659",
      nome: "SALES OLIVEIRA"
    },
    {
      id: "657",
      code: "657",
      nome: "SAO TOMAS DE AQUINO"
    },
    {
      id: "658",
      code: "658",
      nome: "SAO ROQUE DE MINAS"
    },
    {
      id: "212",
      code: "212",
      nome: "ESPERA FELIZ"
    },
    {
      id: "662",
      code: "662",
      nome: "PALESTINA"
    },
    {
      id: "217",
      code: "217",
      nome: "VICOSA"
    },
    {
      id: "655",
      code: "655",
      nome: "SAO GONCALO DO PARA"
    },
    {
      id: "221",
      code: "221",
      nome: "LEOPOLDINA"
    },
    {
      id: "665",
      code: "665",
      nome: "SEVERINIA"
    },
    {
      id: "227",
      code: "227",
      nome: "ARACATU"
    },
    {
      id: "226",
      code: "226",
      nome: "VIRGEM DA LAPA"
    },
    {
      id: "666",
      code: "666",
      nome: "GURINHATA"
    },
    {
      id: "214",
      code: "214",
      nome: "MATIPO"
    },
    {
      id: "213",
      code: "213",
      nome: "CARATINGA"
    },
    {
      id: "215",
      code: "215",
      nome: "ERVALIA"
    },
    {
      id: "228",
      code: "228",
      nome: "TRES PONTAS"
    },
    {
      id: "225",
      code: "225",
      nome: "MALACACHETA"
    },
    {
      id: "230",
      code: "230",
      nome: "ATALEIA"
    },
    {
      id: "216",
      code: "216",
      nome: "PIRES DO RIO"
    },
    {
      id: "663",
      code: "663",
      nome: "SANTA RITA DE CALDAS"
    },
    {
      id: "218",
      code: "218",
      nome: "CAMBUQUIRA"
    },
    {
      id: "235",
      code: "235",
      nome: "GUARIBA"
    },
    {
      id: "233",
      code: "233",
      nome: "MUTUM"
    },
    {
      id: "236",
      code: "236",
      nome: "TAPIRATIBA"
    },
    {
      id: "222",
      code: "222",
      nome: "ANAGE"
    },
    {
      id: "237",
      code: "237",
      nome: "ORIZONA"
    },
    {
      id: "240",
      code: "240",
      nome: "PLANALTO"
    },
    {
      id: "242",
      code: "242",
      nome: "PARAMIRIM"
    },
    {
      id: "232",
      code: "232",
      nome: "MANHUMIRIM"
    },
    {
      id: "239",
      code: "239",
      nome: "CARINHANHA"
    },
    {
      id: "670",
      code: "670",
      nome: "PARAISOPOLIS"
    },
    {
      id: "247",
      code: "247",
      nome: "MONSENHOR PAULO"
    },
    {
      id: "120",
      code: "120",
      nome: "FELIXLANDIA"
    },
    {
      id: "121",
      code: "121",
      nome: "ARACUAI"
    },
    {
      id: "122",
      code: "122",
      nome: "BURITIS"
    },
    {
      id: "123",
      code: "123",
      nome: "TIROS"
    },
    {
      id: "124",
      code: "124",
      nome: "ALFENAS"
    },
    {
      id: "256",
      code: "256",
      nome: "BOM JESUS DE GOIAS"
    },
    {
      id: "258",
      code: "258",
      nome: "JACUTINGA"
    },
    {
      id: "245",
      code: "245",
      nome: "PARAGUACU"
    },
    {
      id: "254",
      code: "254",
      nome: "ITUIUTABA"
    },
    {
      id: "675",
      code: "675",
      nome: "CALDAS"
    },
    {
      id: "674",
      code: "674",
      nome: "NAZARENO"
    },
    {
      id: "672",
      code: "672",
      nome: "INHAUMA"
    },
    {
      id: "262",
      code: "262",
      nome: "CONCEICAO DO RIO VERDE"
    },
    {
      id: "261",
      code: "261",
      nome: "SILVANIA"
    },
    {
      id: "673",
      code: "673",
      nome: "CARDOSO"
    },
    {
      id: "263",
      code: "263",
      nome: "IBATIBA"
    },
    {
      id: "255",
      code: "255",
      nome: "GOIATUBA"
    },
    {
      id: "264",
      code: "264",
      nome: "CACONDE"
    },
    {
      id: "676",
      code: "676",
      nome: "TERRA ROXA"
    },
    {
      id: "259",
      code: "259",
      nome: "PONTE NOVA"
    },
    {
      id: "77",
      code: "77",
      nome: "SERRA DO SALITRE"
    },
    {
      id: "78",
      code: "78",
      nome: "IGUATAMA"
    },
    {
      id: "79",
      code: "79",
      nome: "MOEMA"
    },
    {
      id: "80",
      code: "80",
      nome: "CRAVINHOS"
    },
    {
      id: "97",
      code: "97",
      nome: "ALTEROSA"
    },
    {
      id: "101",
      code: "101",
      nome: "CASSIA"
    },
    {
      id: "999",
      code: "999",
      nome: "ARAXA"
    },
    {
      id: "102",
      code: "102",
      nome: "CANAPOLIS"
    },
    {
      id: "189",
      code: "189",
      nome: "GUANHAES"
    },
    {
      id: "103",
      code: "103",
      nome: "PORTEIRINHA"
    },
    {
      id: "18",
      code: "18",
      nome: "COROMANDEL"
    },
    {
      id: "36",
      code: "36",
      nome: "PIUMHI"
    },
    {
      id: "8",
      code: "8",
      nome: "CARMO DO PARANAIBA"
    },
    {
      id: "21",
      code: "21",
      nome: "POMPEU"
    },
    {
      id: "19",
      code: "19",
      nome: "DORES DO INDAIA"
    },
    {
      id: "25",
      code: "25",
      nome: "CAMPINA VERDE"
    },
    {
      id: "26",
      code: "26",
      nome: "ITURAMA"
    },
    {
      id: "28",
      code: "28",
      nome: "ARCOS"
    },
    {
      id: "12",
      code: "12",
      nome: "PATROCINIO"
    },
    {
      id: "20",
      code: "20",
      nome: "PRATA"
    },
    {
      id: "41",
      code: "41",
      nome: "ARAXA"
    },
    {
      id: "5",
      code: "5",
      nome: "IBIA"
    },
    {
      id: "6",
      code: "6",
      nome: "SACRAMENTO"
    },
    {
      id: "7",
      code: "7",
      nome: "SAO GOTARDO"
    },
    {
      id: "9",
      code: "9",
      nome: "CAMPOS ALTOS"
    },
    {
      id: "10",
      code: "10",
      nome: "LUZ"
    },
    {
      id: "11",
      code: "11",
      nome: "IGARAPAVA"
    },
    {
      id: "33",
      code: "33",
      nome: "FORMIGA"
    },
    {
      id: "34",
      code: "34",
      nome: "PITANGUI"
    },
    {
      id: "35",
      code: "35",
      nome: "BOM DESPACHO"
    },
    {
      id: "38",
      code: "38",
      nome: "PATOS DE MINAS"
    },
    {
      id: "46",
      code: "46",
      nome: "ITAUNA"
    },
    {
      id: "47",
      code: "47",
      nome: "CAMPO BELO"
    },
    {
      id: "48",
      code: "48",
      nome: "PARA DE MINAS"
    },
    {
      id: "49",
      code: "49",
      nome: "PAPAGAIOS"
    },
    {
      id: "190",
      code: "190",
      nome: "TURMALINA"
    },
    {
      id: "50",
      code: "50",
      nome: "VAZANTE"
    },
    {
      id: "45",
      code: "45",
      nome: "PERDOES"
    },
    {
      id: "51",
      code: "51",
      nome: "JOAO PINHEIRO"
    },
    {
      id: "13",
      code: "13",
      nome: "LAGOA DA PRATA"
    },
    {
      id: "15",
      code: "15",
      nome: "ABAETE"
    },
    {
      id: "17",
      code: "17",
      nome: "SANTO ANTONIO DO MONTE"
    },
    {
      id: "197",
      code: "197",
      nome: "BRUMADO"
    },
    {
      id: "24",
      code: "24",
      nome: "FRUTAL"
    },
    {
      id: "16",
      code: "16",
      nome: "CONCEICAO DAS ALAGOAS"
    },
    {
      id: "44",
      code: "44",
      nome: "SAO JOAQUIM DA BARRA"
    },
    {
      id: "29",
      code: "29",
      nome: "MORRO AGUDO"
    },
    {
      id: "30",
      code: "30",
      nome: "MIGUELOPOLIS"
    },
    {
      id: "22",
      code: "22",
      nome: "ITUVERAVA"
    },
    {
      id: "37",
      code: "37",
      nome: "PEDREGULHO"
    },
    {
      id: "27",
      code: "27",
      nome: "JARDINOPOLIS"
    },
    {
      id: "53",
      code: "53",
      nome: "PARACATU"
    },
    {
      id: "14",
      code: "14",
      nome: "BAMBUI"
    },
    {
      id: "54",
      code: "54",
      nome: "PATROCINIO"
    },
    {
      id: "52",
      code: "52",
      nome: "ORLANDIA"
    },
    {
      id: "23",
      code: "23",
      nome: "GUAIRA"
    },
    {
      id: "4",
      code: "4",
      nome: "ARAXA"
    },
    {
      id: "31",
      code: "31",
      nome: "NOVA SERRANA"
    },
    {
      id: "605",
      code: "605",
      nome: "GUIMARANIA"
    },
    {
      id: "98",
      code: "98",
      nome: "GUARA"
    },
    {
      id: "104",
      code: "104",
      nome: "TAIOBEIRAS"
    },
    {
      id: "105",
      code: "105",
      nome: "SALINAS"
    },
    {
      id: "106",
      code: "106",
      nome: "FRANCISCO SA"
    },
    {
      id: "107",
      code: "107",
      nome: "JANUARIA"
    },
    {
      id: "188",
      code: "188",
      nome: "RESPLENDOR"
    },
    {
      id: "113",
      code: "113",
      nome: "PRADOPOLIS"
    },
    {
      id: "114",
      code: "114",
      nome: "DIVINOPOLIS"
    },
    {
      id: "115",
      code: "115",
      nome: "MARTINHO CAMPOS"
    },
    {
      id: "600",
      code: "600",
      nome: "PEDRINOPOLIS"
    },
    {
      id: "602",
      code: "602",
      nome: "PRATINHA"
    },
    {
      id: "603",
      code: "603",
      nome: "TAPIRA"
    },
    {
      id: "192",
      code: "192",
      nome: "MANTENA"
    },
    {
      id: "177",
      code: "177",
      nome: "FRANCA"
    },
    {
      id: "636",
      code: "636",
      nome: "FLORESTAL"
    },
    {
      id: "638",
      code: "638",
      nome: "CARNEIRINHO"
    },
    {
      id: "178",
      code: "178",
      nome: "CRISTALINA"
    },
    {
      id: "179",
      code: "179",
      nome: "GUAXUPE"
    },
    {
      id: "181",
      code: "181",
      nome: "MANGA"
    },
    {
      id: "182",
      code: "182",
      nome: "BRASILANDIA DE MINAS"
    },
    {
      id: "193",
      code: "193",
      nome: "ITAMBACURI"
    },
    {
      id: "650",
      code: "650",
      nome: "CRISTAIS"
    },
    {
      id: "55",
      code: "55",
      nome: "MONTE CARMELO"
    },
    {
      id: "56",
      code: "56",
      nome: "UNAI"
    },
    {
      id: "57",
      code: "57",
      nome: "SANTA JULIANA"
    },
    {
      id: "58",
      code: "58",
      nome: "OLIVEIRA"
    },
    {
      id: "59",
      code: "59",
      nome: "TRES MARIAS"
    },
    {
      id: "60",
      code: "60",
      nome: "VARZEA DA PALMA"
    },
    {
      id: "61",
      code: "61",
      nome: "JANAUBA"
    },
    {
      id: "63",
      code: "63",
      nome: "PONTAL"
    },
    {
      id: "64",
      code: "64",
      nome: "COLINA"
    },
    {
      id: "66",
      code: "66",
      nome: "ALPINOPOLIS"
    },
    {
      id: "642",
      code: "642",
      nome: "ILICINEA"
    },
    {
      id: "67",
      code: "67",
      nome: "PERDIZES"
    },
    {
      id: "70",
      code: "70",
      nome: "MORADA NOVA DE MINAS"
    },
    {
      id: "71",
      code: "71",
      nome: "CLAUDIO"
    },
    {
      id: "74",
      code: "74",
      nome: "CORINTO"
    },
    {
      id: "185",
      code: "185",
      nome: "CENTRALINA"
    },
    {
      id: "68",
      code: "68",
      nome: "PASSOS"
    },
    {
      id: "73",
      code: "73",
      nome: "PIRAPORA"
    },
    {
      id: "75",
      code: "75",
      nome: "CAJURU"
    },
    {
      id: "76",
      code: "76",
      nome: "CAPINOPOLIS"
    },
    {
      id: "81",
      code: "81",
      nome: "JAIBA"
    },
    {
      id: "82",
      code: "82",
      nome: "CARMO DO RIO CLARO"
    },
    {
      id: "83",
      code: "83",
      nome: "ESPINOSA"
    },
    {
      id: "84",
      code: "84",
      nome: "MONTE AZUL"
    },
    {
      id: "187",
      code: "187",
      nome: "PITANGUEIRAS"
    },
    {
      id: "85",
      code: "85",
      nome: "ITAPAGIPE"
    },
    {
      id: "86",
      code: "86",
      nome: "ALTINOPOLIS"
    },
    {
      id: "87",
      code: "87",
      nome: "RIO PARANAIBA"
    },
    {
      id: "91",
      code: "91",
      nome: "BOCAIUVA"
    },
    {
      id: "92",
      code: "92",
      nome: "CORACAO DE JESUS"
    },
    {
      id: "93",
      code: "93",
      nome: "SAO SEBASTIAO DO PARAISO"
    },
    {
      id: "648",
      code: "648",
      nome: "SERRANIA"
    },
    {
      id: "94",
      code: "94",
      nome: "ITAU DE MINAS"
    },
    {
      id: "88",
      code: "88",
      nome: "BOA ESPERANCA"
    },
    {
      id: "89",
      code: "89",
      nome: "CAMPOS GERAIS"
    },
    {
      id: "90",
      code: "90",
      nome: "PRESIDENTE OLEGARIO"
    },
    {
      id: "95",
      code: "95",
      nome: "BARRINHA"
    },
    {
      id: "183",
      code: "183",
      nome: "AIMORES"
    },
    {
      id: "96",
      code: "96",
      nome: "AREADO"
    },
    {
      id: "350",
      code: "350",
      nome: "BRAZOPOLIS"
    },
    {
      id: "345",
      code: "345",
      nome: "ALEGRE"
    },
    {
      id: "354",
      code: "354",
      nome: "HIDROLANDIA"
    },
    {
      id: "407",
      code: "407",
      nome: "MARIA DA FE"
    },
    {
      id: "379",
      code: "379",
      nome: "CORDISBURGO"
    },
    {
      id: "855",
      code: "855",
      nome: "LEOPOLDINA"
    },
    {
      id: "451",
      code: "451",
      nome: "BOA ESPERANCA"
    },
    {
      id: "433",
      code: "433",
      nome: "SANTA MARGARIDA"
    },
    {
      id: "378",
      code: "378",
      nome: "ESMERALDAS"
    },
    {
      id: "468",
      code: "468",
      nome: "ARAXA"
    },
    {
      id: "368",
      code: "368",
      nome: "QUIRINOPOLIS"
    },
    {
      id: "376",
      code: "376",
      nome: "MATOZINHOS"
    },
    {
      id: "851",
      code: "851",
      nome: "FRANCISCO SA"
    },
    {
      id: "370",
      code: "370",
      nome: "NOVA VENECIA"
    },
    {
      id: "460",
      code: "460",
      nome: "PASSA QUATRO"
    },
    {
      id: "461",
      code: "461",
      nome: "VILA VALERIO"
    },
    {
      id: "459",
      code: "459",
      nome: "POCOES"
    },
    {
      id: "389",
      code: "389",
      nome: "SANTANA DO PARAISO"
    },
    {
      id: "421",
      code: "421",
      nome: "CACU"
    },
    {
      id: "423",
      code: "423",
      nome: "PEDRO CANARIO"
    },
    {
      id: "424",
      code: "424",
      nome: "MARATAIZES"
    },
    {
      id: "462",
      code: "462",
      nome: "ARCEBURGO"
    },
    {
      id: "414",
      code: "414",
      nome: "BUENOPOLIS"
    },
    {
      id: "409",
      code: "409",
      nome: "PEREIRA BARRETO"
    },
    {
      id: "425",
      code: "425",
      nome: "BOM JESUS DO GALHO"
    },
    {
      id: "339",
      code: "339",
      nome: "INDIARA"
    },
    {
      id: "371",
      code: "371",
      nome: "CHAPADA GAUCHA"
    },
    {
      id: "365",
      code: "365",
      nome: "BARROSO"
    },
    {
      id: "363",
      code: "363",
      nome: "NAQUE"
    },
    {
      id: "362",
      code: "362",
      nome: "ITAPETINGA"
    },
    {
      id: "458",
      code: "458",
      nome: "SANTA FE DO SUL"
    },
    {
      id: "453",
      code: "453",
      nome: "ITAIPE"
    },
    {
      id: "385",
      code: "385",
      nome: "IBICUI"
    },
    {
      id: "386",
      code: "386",
      nome: "URUANA"
    },
    {
      id: "454",
      code: "454",
      nome: "SAO JOSE DO CALCADO"
    },
    {
      id: "395",
      code: "395",
      nome: "LAGOA DA PRATA"
    },
    {
      id: "388",
      code: "388",
      nome: "PIRENOPOLIS"
    },
    {
      id: "541",
      code: "541",
      nome: "BELO HORIZONTE"
    },
    {
      id: "492",
      code: "492",
      nome: "PIRAJUBA"
    },
    {
      id: "495",
      code: "495",
      nome: "CAMPINORTE"
    },
    {
      id: "504",
      code: "504",
      nome: "MONTES CLAROS"
    },
    {
      id: "510",
      code: "510",
      nome: "ALEM PARAIBA"
    },
    {
      id: "511",
      code: "511",
      nome: "BICAS"
    },
    {
      id: "520",
      code: "520",
      nome: "CAMPESTRE"
    },
    {
      id: "528",
      code: "528",
      nome: "IPIAU"
    },
    {
      id: "529",
      code: "529",
      nome: "DIVINOLANDIA"
    },
    {
      id: "530",
      code: "530",
      nome: "PALMEIRA D'OESTE"
    },
    {
      id: "540",
      code: "540",
      nome: "CORONEL MURTA"
    },
    {
      id: "546",
      code: "546",
      nome: "URUCUIA"
    },
    {
      id: "416",
      code: "416",
      nome: "MUQUI"
    },
    {
      id: "405",
      code: "405",
      nome: "IPABA"
    },
    {
      id: "403",
      code: "403",
      nome: "RIO CASCA"
    },
    {
      id: "447",
      code: "447",
      nome: "ARAXA"
    },
    {
      id: "427",
      code: "427",
      nome: "CURVELO"
    },
    {
      id: "383",
      code: "383",
      nome: "GOIANAPOLIS"
    },
    {
      id: "392",
      code: "392",
      nome: "ITAPEMIRIM"
    },
    {
      id: "393",
      code: "393",
      nome: "VARGEM ALTA"
    },
    {
      id: "854",
      code: "854",
      nome: "LEOPOLDINA"
    },
    {
      id: "441",
      code: "441",
      nome: "ANCHIETA"
    },
    {
      id: "443",
      code: "443",
      nome: "SOBRALIA"
    },
    {
      id: "445",
      code: "445",
      nome: "MARA ROSA"
    },
    {
      id: "442",
      code: "442",
      nome: "ILHA SOLTEIRA"
    },
    {
      id: "428",
      code: "428",
      nome: "CARANDAI"
    },
    {
      id: "431",
      code: "431",
      nome: "VIANOPOLIS"
    },
    {
      id: "517",
      code: "517",
      nome: "ITORORO"
    },
    {
      id: "497",
      code: "497",
      nome: "ITORORO"
    },
    {
      id: "475",
      code: "475",
      nome: "SANTO ANTONIO DA ALE"
    },
    {
      id: "472",
      code: "472",
      nome: "PIRANHAS"
    },
    {
      id: "373",
      code: "373",
      nome: "SAO MATEUS"
    },
    {
      id: "469",
      code: "469",
      nome: "CONGONHAL"
    },
    {
      id: "466",
      code: "466",
      nome: "JEQUITAI"
    },
    {
      id: "355",
      code: "355",
      nome: "MONTE APRAZIVEL"
    },
    {
      id: "358",
      code: "358",
      nome: "ALEXANIA"
    },
    {
      id: "467",
      code: "467",
      nome: "SAO FRANCISCO DE ITABAPOANA"
    },
    {
      id: "380",
      code: "380",
      nome: "ITARANA"
    },
    {
      id: "397",
      code: "397",
      nome: "ALFREDO CHAVES"
    },
    {
      id: "398",
      code: "398",
      nome: "MARECHAL FLORIANO"
    },
    {
      id: "402",
      code: "402",
      nome: "SANTA TEREZINHA DE GOIAS"
    },
    {
      id: "401",
      code: "401",
      nome: "SANCLERLANDIA"
    },
    {
      id: "440",
      code: "440",
      nome: "ARAGOIANIA"
    },
    {
      id: "449",
      code: "449",
      nome: "RIO NOVO DO SUL"
    },
    {
      id: "415",
      code: "415",
      nome: "SOORETAMA"
    },
    {
      id: "419",
      code: "419",
      nome: "PALMEIRAS DE GOIAS"
    },
    {
      id: "457",
      code: "457",
      nome: "SANTA MARIA DE JETIB"
    },
    {
      id: "391",
      code: "391",
      nome: "CASSILANDIA"
    },
    {
      id: "372",
      code: "372",
      nome: "SAO MIGUEL DO ARAGUAIA"
    },
    {
      id: "369",
      code: "369",
      nome: "JUSSARA"
    },
    {
      id: "435",
      code: "435",
      nome: "BARRO ALTO"
    },
    {
      id: "437",
      code: "437",
      nome: "LEOPOLDO DE BULHOES"
    },
    {
      id: "340",
      code: "340",
      nome: "ESPIRITO SANTO DO PINHAL"
    },
    {
      id: "336",
      code: "336",
      nome: "ECOPORANGA"
    },
    {
      id: "323",
      code: "323",
      nome: "CATALAO"
    },
    {
      id: "611",
      code: "611",
      nome: "CRISTAIS PAULISTA"
    },
    {
      id: "149",
      code: "149",
      nome: "ANDRADAS"
    },
    {
      id: "683",
      code: "683",
      nome: "PALMARES PAULISTA"
    },
    {
      id: "296",
      code: "296",
      nome: "JABOTICABAL"
    },
    {
      id: "692",
      code: "692",
      nome: "CRISTINA"
    },
    {
      id: "697",
      code: "697",
      nome: "IRAPUA"
    },
    {
      id: "309",
      code: "309",
      nome: "ACREUNA"
    },
    {
      id: "694",
      code: "694",
      nome: "TABAPUA"
    },
    {
      id: "691",
      code: "691",
      nome: "URUPES"
    },
    {
      id: "332",
      code: "332",
      nome: "ITAPURANGA"
    },
    {
      id: "341",
      code: "341",
      nome: "MIRASSOL"
    },
    {
      id: "334",
      code: "334",
      nome: "SARZEDO"
    },
    {
      id: "146",
      code: "146",
      nome: "POUSO ALEGRE"
    },
    {
      id: "158",
      code: "158",
      nome: "OLIMPIA"
    },
    {
      id: "621",
      code: "621",
      nome: "CORREGO DANTA"
    },
    {
      id: "156",
      code: "156",
      nome: "AGUA BOA"
    },
    {
      id: "160",
      code: "160",
      nome: "BARRETOS"
    },
    {
      id: "625",
      code: "625",
      nome: "ABADIA DOS DOURADOS"
    },
    {
      id: "624",
      code: "624",
      nome: "IRAI DE MINAS"
    },
    {
      id: "629",
      code: "629",
      nome: "SAO JOAO BATISTA DO GLORIA"
    },
    {
      id: "800",
      code: "800",
      nome: "ARAXA"
    },
    {
      id: "635",
      code: "635",
      nome: "SAO SEBASTIAO DO OESTE"
    },
    {
      id: "231",
      code: "231",
      nome: "BERILO"
    },
    {
      id: "248",
      code: "248",
      nome: "RIO POMBA"
    },
    {
      id: "275",
      code: "275",
      nome: "OURO FINO"
    },
    {
      id: "273",
      code: "273",
      nome: "SANTA CRUZ DAS PALMEIRAS"
    },
    {
      id: "680",
      code: "680",
      nome: "PIRAJUBA"
    },
    {
      id: "266",
      code: "266",
      nome: "MANHUACU"
    },
    {
      id: "347",
      code: "347",
      nome: "GRAO MOGOL"
    },
    {
      id: "343",
      code: "343",
      nome: "CAMPINORTE"
    },
    {
      id: "271",
      code: "271",
      nome: "GUAPO"
    },
    {
      id: "278",
      code: "278",
      nome: "GOIANESIA"
    },
    {
      id: "685",
      code: "685",
      nome: "CAREACU"
    },
    {
      id: "687",
      code: "687",
      nome: "ITAJOBI"
    },
    {
      id: "686",
      code: "686",
      nome: "PIRANGI"
    },
    {
      id: "298",
      code: "298",
      nome: "TANABI"
    },
    {
      id: "299",
      code: "299",
      nome: "TAMBAU"
    },
    {
      id: "300",
      code: "300",
      nome: "CASA BRANCA"
    },
    {
      id: "689",
      code: "689",
      nome: "CARMO DA CACHOEIRA"
    },
    {
      id: "302",
      code: "302",
      nome: "RIO VERDE"
    },
    {
      id: "265",
      code: "265",
      nome: "DIVINOLANDIA"
    },
    {
      id: "303",
      code: "303",
      nome: "BELA VISTA DE GOIAS"
    },
    {
      id: "695",
      code: "695",
      nome: "CARMO DE MINAS"
    },
    {
      id: "306",
      code: "306",
      nome: "SANTA RITA DO SAPUCA"
    },
    {
      id: "311",
      code: "311",
      nome: "SAO JOAO DEL REI"
    },
    {
      id: "607",
      code: "607",
      nome: "RIFAINA"
    },
    {
      id: "313",
      code: "313",
      nome: "INHUMAS"
    },
    {
      id: "315",
      code: "315",
      nome: "COSMORAMA"
    },
    {
      id: "700",
      code: "700",
      nome: "ESTRELA DOESTE"
    },
    {
      id: "326",
      code: "326",
      nome: "POCOES"
    },
    {
      id: "321",
      code: "321",
      nome: "PORTO FERREIRA"
    },
    {
      id: "317",
      code: "317",
      nome: "MOZARLANDIA"
    },
    {
      id: "651",
      code: "651",
      nome: "SANTANA DA VARGEM"
    },
    {
      id: "639",
      code: "639",
      nome: "CRUCILANDIA"
    },
    {
      id: "199",
      code: "199",
      nome: "URANDI"
    },
    {
      id: "204",
      code: "204",
      nome: "LIVRAMENTO DE NOSSA "
    },
    {
      id: "202",
      code: "202",
      nome: "PERDIZES"
    },
    {
      id: "900",
      code: "900",
      nome: "ARAXA"
    },
    {
      id: "224",
      code: "224",
      nome: "TRES CORACOES"
    },
    {
      id: "667",
      code: "667",
      nome: "JABORANDI"
    },
    {
      id: "243",
      code: "243",
      nome: "MURIAE"
    },
    {
      id: "252",
      code: "252",
      nome: "VARGEM GRANDE DO SUL"
    },
    {
      id: "229",
      code: "229",
      nome: "JOAIMA"
    },
    {
      id: "671",
      code: "671",
      nome: "INCONFIDENTES"
    },
    {
      id: "250",
      code: "250",
      nome: "SAO JOAO DA BOA VISTA"
    },
    {
      id: "249",
      code: "249",
      nome: "SANTA ROSA DE VITERBO"
    },
    {
      id: "257",
      code: "257",
      nome: "CURVELO"
    },
    {
      id: "251",
      code: "251",
      nome: "SAO JOSE DO RIO PARDO"
    },
    {
      id: "246",
      code: "246",
      nome: "BARRA DE SAO FRANCIS"
    },
    {
      id: "186",
      code: "186",
      nome: "LAGOA DA PRATA"
    },
    {
      id: "998",
      code: "998",
      nome: "ARAXA"
    },
    {
      id: "32",
      code: "32",
      nome: "FORMIGA"
    },
    {
      id: "39",
      code: "39",
      nome: "ARAXA"
    },
    {
      id: "43",
      code: "43",
      nome: "ARAXA"
    },
    {
      id: "99",
      code: "99",
      nome: "ARAXA"
    },
    {
      id: "100",
      code: "100",
      nome: "ARAXA"
    },
    {
      id: "42",
      code: "42",
      nome: "ARAXA"
    },
    {
      id: "40",
      code: "40",
      nome: "ARAXA"
    },
    {
      id: "3",
      code: "3",
      nome: "ARAXA"
    },
    {
      id: "200",
      code: "200",
      nome: "ARAXA"
    },
    {
      id: "604",
      code: "604",
      nome: "MATUTINA"
    },
    {
      id: "649",
      code: "649",
      nome: "PASSA TEMPO"
    },
    {
      id: "601",
      code: "601",
      nome: "CONQUISTA"
    },
    {
      id: "175",
      code: "175",
      nome: "GUANAMBI"
    },
    {
      id: "194",
      code: "194",
      nome: "UBERLANDIA"
    },
    {
      id: "641",
      code: "641",
      nome: "ITAGUARA"
    },
    {
      id: "62",
      code: "62",
      nome: "MONTE ALEGRE DE MINAS"
    },
    {
      id: "65",
      code: "65",
      nome: "BATATAIS"
    },
    {
      id: "69",
      code: "69",
      nome: "MONTE ALTO"
    },
    {
      id: "72",
      code: "72",
      nome: "SERRANA"
    },
    {
      id: "201",
      code: "201",
      nome: "ARAXA"
    },
    {
      id: "359",
      code: "359",
      nome: "CAIAPONIA"
    },
    {
      id: "701",
      code: "701",
      nome: "CACHOEIRA DA PRATA"
    },
    {
      id: "353",
      code: "353",
      nome: "FORTALEZA DE MINAS"
    },
    {
      id: "337",
      code: "337",
      nome: "TRINDADE"
    },
    {
      id: "351",
      code: "351",
      nome: "MONTIVIDIU"
    },
    {
      id: "348",
      code: "348",
      nome: "CARBONITA"
    },
    {
      id: "346",
      code: "346",
      nome: "PANCAS"
    },
    {
      id: "338",
      code: "338",
      nome: "ANICUNS"
    },
    {
      id: "352",
      code: "352",
      nome: "SENADOR CANEDO"
    },
    {
      id: "367",
      code: "367",
      nome: "ITOBI"
    },
    {
      id: "406",
      code: "406",
      nome: "CRIXAS"
    },
    {
      id: "408",
      code: "408",
      nome: "PEDRALVA"
    },
    {
      id: "410",
      code: "410",
      nome: "TIMOTEO"
    },
    {
      id: "411",
      code: "411",
      nome: "JAGUARE"
    },
    {
      id: "412",
      code: "412",
      nome: "FIRMINOPOLIS"
    },
    {
      id: "413",
      code: "413",
      nome: "GUAPIACU"
    },
    {
      id: "703",
      code: "703",
      nome: "NATERCIA"
    },
    {
      id: "426",
      code: "426",
      nome: "MINACU"
    },
    {
      id: "430",
      code: "430",
      nome: "ENTRE RIOS DE MINAS"
    },
    {
      id: "357",
      code: "357",
      nome: "SAO SIMAO"
    },
    {
      id: "375",
      code: "375",
      nome: "ITAPEVA"
    },
    {
      id: "420",
      code: "420",
      nome: "PINHEIROS"
    },
    {
      id: "422",
      code: "422",
      nome: "CALDAS NOVAS"
    },
    {
      id: "417",
      code: "417",
      nome: "BREJETUBA"
    },
    {
      id: "364",
      code: "364",
      nome: "PONTALINA"
    },
    {
      id: "366",
      code: "366",
      nome: "PARAUNA"
    },
    {
      id: "387",
      code: "387",
      nome: "GOIANIRA"
    },
    {
      id: "455",
      code: "455",
      nome: "ABADIANIA"
    },
    {
      id: "456",
      code: "456",
      nome: "DOMINGOS MARTINS"
    },
    {
      id: "384",
      code: "384",
      nome: "CERES"
    },
    {
      id: "452",
      code: "452",
      nome: "PINDORAMA"
    },
    {
      id: "390",
      code: "390",
      nome: "EXTREMA"
    },
    {
      id: "399",
      code: "399",
      nome: "ARAXA"
    },
    {
      id: "404",
      code: "404",
      nome: "MUNIZ FREIRE"
    },
    {
      id: "702",
      code: "702",
      nome: "PIRANGUINHO"
    },
    {
      id: "400",
      code: "400",
      nome: "NIQUELANDIA"
    },
    {
      id: "377",
      code: "377",
      nome: "RUBIATABA"
    },
    {
      id: "381",
      code: "381",
      nome: "PORANGATU"
    },
    {
      id: "394",
      code: "394",
      nome: "NEROPOLIS"
    },
    {
      id: "444",
      code: "444",
      nome: "IBIRACU"
    },
    {
      id: "434",
      code: "434",
      nome: "JATAI"
    },
    {
      id: "432",
      code: "432",
      nome: "URUACU"
    },
    {
      id: "473",
      code: "473",
      nome: "SUD MENNUCCI"
    }
  ]

  const [FilialSelecionada, SetFilialSelecionada] = useState<Filial | null>(null);
  const [generatedTexts, setGeneratedTexts] = useState<string[]>([]);
  const [tipo, setTipo] = useState<string>("DESK");
  const [quantidade, setQuantidade] = useState<number>(0);
  const [nomeEtiquetaPersonalizada, setNomeEtiquetaPersonalizada] = useState<string>("");
  const [EtiquetaPersonalizada, setEtiquetaPersonalizada] = useState<boolean>(false);


  const handleGenerateText = () => {
    if (EtiquetaPersonalizada && nomeEtiquetaPersonalizada) {
      setGeneratedTexts((prevTexts) => [...prevTexts, nomeEtiquetaPersonalizada]);
      return;
    }

    if (FilialSelecionada && quantidade > 0 && EtiquetaPersonalizada === false) {
      const newTexts: string[] = [];
      for (let i = 1; i <= quantidade; i++) {
        newTexts.push(`Z${FilialSelecionada.code} - ${tipo}${i}`);
      }
      setGeneratedTexts((prevTexts) => [...prevTexts, ...newTexts]);
    } else {
      if (!FilialSelecionada) {
        alert("Selecione uma filial antes de gerar o texto!");
      }
      alert("Informe a quantidade de etiquetas a serem geradas!");
    }
  };

  const handleSelectChange = (selectedOption: SelectOption | null) => {
    const filial = selectedOption
      ? filiais.find((c) => c.id === selectedOption.value) || null
      : null;
    SetFilialSelecionada(filial);
  };

  const handleTipoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;



    setTipo(!value ? 'DESK' : event.target.value);
  };

  const handleEtiquetaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;

    setEtiquetaPersonalizada(isChecked ? true : false);
  }

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value)
    if (value <= 0) {
      return;
    }
    setQuantidade(isNaN(value) ? 0 : value);
  };

  const handleLimparText = () => {
    setGeneratedTexts([]);
    setQuantidade(0);
    SetFilialSelecionada(null);
    setNomeEtiquetaPersonalizada("");
  }

  const imprimirEtiquetas = () => {
    // Abre uma nova janela com o conteúdo do preview
    const novaJanela = window.open('', '_blank');
    if (novaJanela) {

      novaJanela.document.write(`
          <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Etiquetas para Impressão</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    margin-top: 30px;
                    padding: 0;
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }
                .etiqueta {
                    width: 300px;
                    padding: 20px;
                    border: 2px solid #000;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 32px;
                    font-weight: bold;
                    text-align: center;
                    page-break-inside: avoid; /* Evita que as etiquetas sejam cortadas ao imprimir */
                }
            </style>
        </head>
        <body>
            <div>
                ${generatedTexts
          .map(
            (text) => `
                    <div class="etiqueta">
                        ${text}
                    </div>
                `
          )
          .join('')}
            </div>
            <script>
                // Chama a função de impressão automaticamente
                window.onload = () => {
                    window.print();
                };
            <\/script>
        </body>
        </html>
      `);
      novaJanela.document.close();
    };
  }


  return (
    <div className="bg-gray-100 flex justify-center min-h-screen min-w-screen">
      <div className="bg-white p-12 rounded-lg shadow-md w-full max-w-max my-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">GERADOR DE ETIQUETAS</h1>


        <div className="flex items-center mb-4">
          <input type="checkbox" className="" onChange={handleEtiquetaChange} />
          <span className="text-lg text-gray-700 ml-4 font-semibold">Etiqueta personalizada</span>
        </div>

        <div className="flex items-center mb-4 max-[450px]:flex-col">
          <span className="text-xl text-gray-700 font-semibold mr-4">Filial: </span>
          {!EtiquetaPersonalizada ? (
            <Select
              className="flex-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r from-slate-100 to-slate-200 text-sm font-bold"
              classNames={{
                control: (state) => `rounded-lg bg-gradient-to-r from-slate-100 to-slate-200 text-sm font-bold ${state.isFocused ? 'border-blue-500 ring-2 ring-blue-500 outline-none text-black' : ''
                  }`,
              }}
              options={filiais.map(filiais => ({ value: filiais.id, label: filiais.code + ' - ' + filiais.nome }))}
              onChange={handleSelectChange}
              value={FilialSelecionada ? {
                value: FilialSelecionada.id,
                label: FilialSelecionada.code + ' - ' + FilialSelecionada.nome
              } : null}
              placeholder="Selecione uma filial..."
            />) : (
            <input type="text" placeholder="Digite o nome da etiqueta" className="flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r from-slate-100 to-slate-200 placeholder:text-sm placeholder:font-semibold placeholder:normal-case uppercase" value={nomeEtiquetaPersonalizada} onChange={(e) => setNomeEtiquetaPersonalizada(e.target.value.toUpperCase())}
            />
          )}

        </div>

        <div className="flex items-center mb-4 max-[450px]:flex-col">
          <h1 className="text-lg font-semibold text-gray-700 mr-4">Tipo:</h1>
          <select name="select" className={`flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r from-slate-100 to-slate-200 text-sm font-bold disabled:bg-red-700 ${EtiquetaPersonalizada ? 'cursor-not-allowed bg-gray-100 text-gray-400 opacity-75' : 'text-black'}`} value={tipo} onChange={handleTipoChange} disabled={EtiquetaPersonalizada}>
            <option value="DESK" className="text-md font-bold">DESK</option>
            <option value="PDV" className="text-md font-bold">PDV</option>
          </select>
        </div>

        <div className="flex items-center mb-6 max-[450px]:flex-col">
          <h4 className="text-lg font-semibold text-gray-700 mr-4">Quantidade:</h4>
          <input type="number" placeholder="Digite a quantidade" className={`flex-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gradient-to-r from-slate-100 to-slate-200 placeholder:text-sm placeholder:font-semibold ${EtiquetaPersonalizada ? 'cursor-not-allowed bg-gray-100 text-gray-400 opacity-75' : ''}`} value={quantidade === 0 ? '' : quantidade} onChange={handleQuantityChange} disabled={EtiquetaPersonalizada} />
        </div>

        <div className="flex justify-between mb-6">
          <button className="bg-green-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-green-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-green-500 " onClick={handleGenerateText}>Gerar</button>

          <button className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg hover:bg-red-600 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500" onClick={handleLimparText}>Limpar</button>
        </div>


        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Preview das Etiquetas</h2>
          <div className="border border-gray-300 p-4 rounded-lg bg-gray-50">
            {generatedTexts.map((text, index) => (
              <div className="border-black border bg-white py-2 flex justify-center items-center flex-row" key={index} >
                <span className="font-bold text-2xl text-black">{text}</span>
              </div>
            ))}


          </div>
        </div>

        {generatedTexts.length > 0 && (
          <div className="mt-6">
            <button id="imprimirEtiquetas" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={imprimirEtiquetas}
            >
              Imprimir Etiquetas
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
