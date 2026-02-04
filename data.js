const words = [
  {
    "ms": "Komunisme",
    "cn": "共产主义",
    "MsDescription": "",
    "Description": "",
    "tags": [
      "Isme"
    ],
    "similar": [
      "Sovietisme",
      "Marxisme"
    ],
    "example": "",
    "updated": "2026-02-03"
  },
  {
    "ms": "Kerajaan Funan",
    "cn": "扶南王国",
    "MsDescription": "Abad pertama hingga abad ke-6",
    "Description": "",
    "tags": ["Negara"],
    "updated": "2026-02-03"
  },
  {
    "ms": "Kerajaan Champa",
    "cn": "占婆王国",
    "MsDescription": "Abad kedua hingga abad ke-15",
    "Description": "",
    "tags": ["Negara"],
    "updated": "2026-02-03"
  },
  {
    "ms": "Kerajaan Srivijaya",
    "cn": "三佛齐王国",
    "MsDescription": "Abad ketujuh hingga abad ke-13",
    "Description": "",
    "tags": ["Negara"],
    "updated": "2026-02-03"
  },
  {
    "ms": "Kesultanan Melayu Melaka",
    "cn": "马六甲王国",
    "MsDescription": "Abad ke-15 hingga abad ke-16",
    "Description": "",
    "tags": ["Negara"],
    "updated": "2026-02-03"
  },
  {
    "ms": "Kesultanan Johor-Riau",
    "cn": "柔佛-廖内王国",
    "MsDescription": "Abad ke-16 hingga abad ke-19",
    "Description": "",
    "tags": ["Negara"],
    "updated": "2026-02-03"
  },
  {
    "ms": "Kerajaan Majapahit",
    "cn": "满者伯夷王国",
    "MsDescription": "Abad ke-13 hingga abad ke-16",
    "Description": "",
    "tags": ["Negara"],
    "updated": "2026-02-03"
  },
  {
    "ms": "Kerajaan Kedah Tua",
    "cn": "吉打王国",
    "MsDescription": "Abad ketujuh hingga abad ke-11",
    "Description": "",
    "tags": ["Negara"],
    "updated": "2026-02-03"
  },
  {
    "ms": "Raja",
    "cn": "国王",
    "MsDescription": "Kedudukan raja diperkukuh dengan sistem pentadbiran yang dibantu oleh pera pembesar. Rakyat memberikan ketaatan kepada raja. Raja dianggap suci.",
    "Description": "国王的地位通过由皇家宫廷协助的行政体系得到巩固。人民服从国王。国王被视为神圣不可侵犯的。",
    "tags": ["Profesion"],
    "updated": "2026-02-03"
  },
  {
    "ms": "Undang-undang",
    "cn": "法律",
    "MsDescription": "Dilaksanakan bagi memastikan kesejahteraan sesebuah kerajaan. Undang-undang menjadi panduan dalam pentadbiran. Undang-undang terpakai di seluruh wilayah pengaruh.",
    "Description": "法律是为规范人类活动而制定的法律。这些法律确保了人类活动的顺利进行。",
    "example": "Kerajaan Majapahit mengamalkan undang-undang Kutara Manawa.",
    "tags": ["General"],
    "updated": "2026-02-03"
  },
  {
    "ms": "Bangsa",
    "cn": "民族",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-03"
  },
  {
    "ms": "Inskripsi Telaga Batu",
    "cn": "石井铭文",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["Benda"],
    "updated": "2026-02-03"
  },
  {
    "ms": "Undang-undang Laut Melaka",
    "cn": "马六甲海事法典",
    "MsDescription": "Undang-undang Laut Melaka merupakan undang-undang yang digubal untuk mengatur aktiviti perdagangan di pelabuhan Melaka. Undang-undang ini memastikan keselamatan dan kelancaran aktiviti perdagangan di pelabuhan Melaka.",
    "Description": "马六甲海事法是为规范马六甲港口的贸易活动而制定的法律。这些法律确保了马六甲港口贸易活动的顺利进行。",
    "tags": ["Perjanjian"],
    "updated": "2026-02-03"
    },
    {
        "ms": "Sultan",
        "cn": "苏丹",
        "MsDescription": "",
        "Description": "",
        "example": "",
        "tags": ["Profesion"],
        "updated": "2026-02-04"
    },
    {
        "ms": "Bendahara",
        "cn": "宰相",
        "MsDescription": "",
        "Description": "",
        "example": "",
        "tags": ["Profesion"],
        "updated": "2026-02-04"
    },
    {
        "ms": "Penghulu Bandahari",
        "cn": "财政部长",
        "MsDescription": "",
        "Description": "",
        "example": "",
        "tags": ["Profesion"],
        "updated": "2026-02-04"
    },
    {
        "ms": "Laksamana",
        "cn": "海军将领",
        "MsDescription": "",
        "Description": "",
        "example": "",
        "tags": ["Profesion"],
        "updated": "2026-02-04"
    },
    {
        "ms": "Temenggung",
        "cn": "天猛公",
        "MsDescription": "",
        "Description": "",
        "example": "",
        "tags": ["Profesion"],
        "updated": "2026-02-04"
    },
    {
        "ms": "Kedudukan",
        "cn": "地位",
        "MsDescription": "",
        "Description": "",
        "example": "",
        "tags": ["General"],
        "updated": "2026-02-04"
    },
    {
        "ms": "Sistem pentadbiran",
        "cn": "行政体系",
        "MsDescription": "",
        "Description": "",
        "example": "",
        "tags": ["Sistem"],
        "updated": "2026-02-04"
    },
    {
        "ms": "Kerajaan",
        "cn": "政府",
        "MsDescription": "",
        "Description": "",
        "example": "",
        "tags": ["General"],
        "updated": "2026-02-04"
    },
    {
        "ms": "Sistem Pembesar Empat Lipatan",
        "cn": "四倍数官员体系",
        "MsDescription": "",
        "Description": "",
        "example": "",
        "tags": ["Sistem"],
        "updated": "2026-02-04"
    },
    {
        "ms": "Orang Laut",
        "cn": "海民",
        "MsDescription": "",
        "Description": "靠海维生的居民",
        "example": "",
        "tags": ["Profesion"],
        "updated": "2026-02-04"
    },
    {
        "ms": "Ekonomi",
        "cn": "经济",
        "MsDescription": "",
        "Description": "",
        "example": "",
        "tags": ["General"],
        "updated": "2026-02-04"
    },
    {
        "ms": "Fasal",
        "cn": "条款",
        "MsDescription": "",
        "Description": "",
        "example": "",
        "tags": ["Perjanjian"],
        "updated": "2026-02-04"
    },
    {
        "ms": "Pengebumian",
        "cn": "葬礼",
        "MsDescription": "",
        "Description": "",
        "example": "",
        "tags": ["Peristiwa"],
        "updated": "2026-02-04"
    },
    {
        "ms": "Percukaian",
        "cn": "税收",
        "MsDescription": "",
        "Description": "",
        "example": "",
        "tags": ["General"],
        "updated": "2026-02-04"
    },
];
