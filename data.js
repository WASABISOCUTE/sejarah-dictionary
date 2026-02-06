const words = [
  {
    "ms": "Komunisme",
    "cn": "共产主义",
    "MsDescription": "Ideologi yang memperjuangkan masyarakat tanpa kelas dan pemilikan bersama harta benda.",
    "Description": "一种主张建立无阶级社会和公有制的意识形态。",
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
    "MsDescription": "Sekumpulan manusia yang berkongsi bahasa, budaya, dan sejarah yang sama.",
    "Description": "拥有共同语言、文化和历史背景的人群。",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-03"
  },
  {
    "ms": "Inskripsi Telaga Batu",
    "cn": "石井铭文",
    "MsDescription": "Prasasti yang mengandungi sumpah setia rakyat kepada pemerintah Srivijaya.",
    "Description": "记载了臣民对三佛齐统治者效忠誓言的石碑。",
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
    "MsDescription": "Gelaran pemerintah tertinggi dalam kerajaan Islam.",
    "Description": "伊斯兰王国最高统治者的称号。",
    "example": "",
    "tags": ["Profesion"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Bendahara",
    "cn": "宰相",
    "MsDescription": "Ketua pentadbir dan penasihat utama Sultan dalam Kesultanan Melayu Melaka.",
    "Description": "马六甲王朝的首席行政长官及苏丹的主要顾问。",
    "example": "",
    "tags": ["Profesion"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Penghulu Bandahari",
    "cn": "财政部长",
    "MsDescription": "Pembesar yang menguruskan aset dan kewangan negara.",
    "Description": "负责管理国家资产和财政的大臣。",
    "example": "",
    "tags": ["Profesion"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Laksamana",
    "cn": "海军将领",
    "MsDescription": "Ketua angkatan laut dan penjaga keselamatan di laut.",
    "Description": "海军统帅及海上安全的守护者。",
    "example": "",
    "tags": ["Profesion"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Temenggung",
    "cn": "天猛公",
    "MsDescription": "Pembesar yang menjaga keselamatan dan ketenteraman dalam negeri.",
    "Description": "负责维护国内治安与安全的大臣。",
    "example": "",
    "tags": ["Profesion"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Kedudukan",
    "cn": "地位",
    "MsDescription": "Status atau pangkat seseorang dalam hierarki sosial.",
    "Description": "个人在社会等级中的身份或职衔。",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Sistem pentadbiran",
    "cn": "行政体系",
    "MsDescription": "Struktur pengurusan pemerintahan sesebuah kerajaan.",
    "Description": "政府的治理管理结构。",
    "example": "",
    "tags": ["Sistem"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Kerajaan",
    "cn": "政府",
    "MsDescription": "Badan organisasi yang mentadbir negara dan menguatkuasakan undang-undang.",
    "Description": "治理国家并执行法律的组织机构。",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Sistem Pembesar Empat Lipatan",
    "cn": "四倍数官员体系",
    "MsDescription": "Sistem pentadbiran sistematik Kesultanan Melayu Melaka yang berasaskan empat pembesar utama.",
    "Description": "基于四位主要大臣的马六甲王朝系统化行政体系。",
    "example": "",
    "tags": ["Sistem"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Orang Laut",
    "cn": "海民",
    "MsDescription": "Penduduk persisiran yang mahir dalam pelayaran dan menjadi tenaga tentera laut.",
    "Description": "精通航海并成为海军力量的沿海居民。",
    "example": "",
    "tags": ["Profesion"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Ekonomi",
    "cn": "经济",
    "MsDescription": "Aktiviti berkaitan pengeluaran, pengagihan, dan penggunaan kekayaan negara.",
    "Description": "与国家财富的生产、分配和消费有关的活动。",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Fasal",
    "cn": "条款",
    "MsDescription": "Perkara atau ceraian tertentu dalam undang-undang.",
    "Description": "法律中的特定条文或章节。",
    "example": "",
    "tags": ["Perjanjian"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Pengebumian",
    "cn": "葬礼",
    "MsDescription": "Adat istiadat menguruskan mayat mengikut budaya dan kepercayaan.",
    "Description": "根据文化和信仰处理遗体的习俗。",
    "example": "",
    "tags": ["Peristiwa"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Percukaian",
    "cn": "税收",
    "MsDescription": "Sistem pungutan bayaran wajib oleh kerajaan untuk perbelanjaan negara.",
    "Description": "政府为国家开支而征收强制性款项的制度。",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Diwarisi",
    "cn": "继承",
    "MsDescription": "Menerima warisan dari seseorang",
    "Description": "从某人那里继承遗产或财产。",
    "example": "",
    "tags": ["TingkahLaku"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Dikarun",
    "cn": "惩罚",
    "MsDescription": "Menghukum seseorang mengikut peraturan dan undang-undang.",
    "Description": "根据规则和法律惩罚某人。",
    "example": "",
    "tags": ["TingkahLaku"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Peraturan",
    "cn": "规则",
    "MsDescription": "Peraturan atau undang-undang yang mengaturkan sesuatu.",
    "Description": "规则或法律来规范某事。",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Golongan",
    "cn": "阶层",
    "MsDescription": "Kumpulan orang yang mempunyai status atau peranan yang sama dalam masyarakat.",
    "Description": "社会中拥有相同地位或角色的人群。",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Kedaulatan",
    "cn": "主权",
    "MsDescription": "Kerajaan atau negara yang mempunyai kekuasaan dan kebebasan untuk menguruskan diri sendiri.",
    "Description": "拥有独立治理和自主权的国家或政权。",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Revolusi",
    "cn": "革命",
    "MsDescription": "Perubahan yang signifikan dalam struktur atau sistem politik, ekonomi, atau sosial.",
    "Description": "在政治、经济或社会结构方面发生的重要变革。",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Revolusi Keagungan",
    "cn": "光荣革命",
    "kawasan": "Kerajaan England",
    "MsDescription": "Satu rampasan kuasa tanpa pertumpahan darah yang berlaku antara tahun 1688 dan 1689.",
    "Description": "于1688年到1689年间发生的一场不流血政变，标志着英国君主立宪制的开端。",
    "ringkasanAcara": "Belaku disebabkan oleh keinginan menegakkan kedaulatan parlimen dan hak asasi rakyat.",
    "eventProcess": "此举是为了维护议会主权和人民的基本权利。",
    "relatedPersonnel": "",
    "tags": ["Revolusi"],
    "updated": "2026-02-04"
  },
  {
    "ms": "Dasar Penjajahan British",
    "cn": "英国殖民政策",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["Perjanjian"],
    "updated": "2026-02-06"
  },
  {
    "ms": "Pemberontakan",
    "cn": "叛乱",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["Tingkah Laku"],
    "updated": "2026-02-06"
  },
  {
    "ms": "Askar upahan",
    "cn": "雇佣兵",
    "MsDescription": "Tentera yang disewa untuk berkhidmat dalam peperangan.",
    "Description": "为战争服务的雇佣士兵。",
    "example": "",
    "tags": ["Profesion"],
    "updated": "2026-02-06"
  },
  {
    "ms": "Sosioagama",
    "cn": "社会宗教",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["Isme"],
    "updated": "2026-02-06"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
  {
    "ms": "",
    "cn": "",
    "MsDescription": "",
    "Description": "",
    "example": "",
    "tags": ["General"],
    "updated": "2026-02-04"
  },
]
