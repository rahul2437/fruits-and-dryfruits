const header = {
  homepage: "",
  title: "Smoving",
};

const products = [
  {
    name: `Banana`,
    description: [
      `Banana, fruit of the genus Musa, of the family Musaceae, is one of the most important fruit across the globe / world . Banana is a tropical crop,
      grows well in varied temperature ranging from humid tropical to dry mild subtropics. India takes pride in being the largest producer of bananas
      in the world.`,
      `The Indian banana is termed as G9 Banana / Green Banana / Cavendish Banana, The fruit is variable in size, color, and firmness, but is usually
      elongated and curved. The banana is valued worldwide for its flavor, nutritional value.`,
    ],
    availability: `Throughout the year`,
    isHidden: false,
  },
  {
    name: `INDIAN GRAPES`,
    description: [
      `A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. The grape is the most important crop
    grown in the world.`,
      `India is also one of the major exporter of fresh seedless Grapes to the world, they can be cultivated in variety of soils ,the soil should be well
    drained, having good water holding capacity, which encourages growth of grapes which are considered to be a very good source of vitamin`,
      `The Total area under grapes in India is about 40,000 ha, distributed mainly in Maharashtra, Karnataka, Andhra Pradesh and Tamil Nadu.`,
    ],
    availability: `Available from November To April`,
    isHidden: false,
  },
  {
    name: `Indian Pomegranate`,
    description: [
      `The pomegranate (Punica granatum) is a fruit-bearing deciduous shrub in the family Lythraceous. Pomegranate is one of the commercially
    important fruit crops of India.`,
      `Pomegranate grows well under semi-arid conditions, It thrives well under hot, dry summer and cold winter provided irrigation facilities are
    available. Indian Red Pomegranates specially Bhagwa (Kesar) variety is widely known for its shiny ochre in color and deep red seeds. It is
    usually big in size.`,
      `Pomegranates in their whole fruit form are low in calories and fat and high in fiber, vitamins, and minerals.`,
    ],
    availability: `Throughout the year`,
    isHidden: false,
  },
  {
    name: `Green Chilli`,
    description: [
      `Green chillies are scientifically known as Capsicum frutescens. The spiciness of green chillies comes from a chemical called capsaicin. Green chilies
    are a rich source of many nutrients due to presence of vitamin C and capsaicin.`,
      `Green chillies are a common vegetable used in kitchens for their spicy taste. The spice is grown throughout the year so there is no scarcity , and
    good quantity is exported.`,
      `Green chillies can also help in maintaining good heart health, and their consumption can reduce blood cholesterol levels.
    `,
    ],
    availability: `Throught the year`,
    isHidden: false,
  },
  {
    name: `Red Chilli`,
    description: [
      `Chilli is a fruit which belongs to Capsicum genus. These are categorized as hot pepper or Mirchi in Indian language . Red Chilli became famous all
    around the world because of its characteristics like pungency, taste and flavor.`,
      `Red chillies are jam-packed with Vitamin C that helps in supporting the immune system and combat chronic diseases. Prevents heart ailments:
    There are very powerful antioxidants in red chilli`,
      `Chilli exports account for about 48% in volume terms and 28% in value of the total spices export from India.`,
    ],
    availability: `Throught the year`,
    isHidden: false,
  },
  {
    name: `Finger Turmeric`,
    description: [
      `Turmeric is a common spice that comes from the root of Curcuma longa, It contains a chemical called curcumin . Turmeric is exported from India
    to more than 132 countries.`,
      `Commonly used as herb and spice worldwide, its properties make it smell poignant and strong in flavor which is a little bitter, hot and earthy in
    taste., its Utilization is also high in textile, medicinal and culinary industries.`,
      `Turmeric — and especially its most active compound, curcumin — have many scientifically proven health benefits, such as the potential
    to improve heart health and prevent against Alzheimer's and cancer. It's a potent anti-inflammatory and antioxidant. `,
    ],
    availability: `Throughout the year`,
    isHidden: false,
  },
  {
    name: `Fresh Ginger`,
    description: [
      `Ginger is a flowering plant whose rhizome, ginger, is widely used as a spice and a folk medicine. Fresh Ginger is propagated by planting
    rootstalk cuttings and has been under this type of cultivation for so long that it no longer goes to seed.`,
      `India is the largest producer of ginger in the world, Indian Fresh Ginger is well-known for its aromatic, spicy & pungent flavor. It is
    popularly used as a spice in Indian culinary preparations.`,
    ],
    availability: `Throughout the year`,
    isHidden: false,
  },
  {
    name: `Dry Ginger`,
    description: [
      `Dried ginger is nothing but fresh ginger, which has undergone a drying process, The fresh rhizomes are soaked in water overnight after which the
    outer peel is carefully removed using a knife or a peeler.`,
      `It is one of the oldest known spices and is cultivated in India for both as fresh vegetable and as a dried spice. Dried ginger has a more intense
    flavor than fresh ginger.`,
      `Ginger contains anti-inflammatory properties that make it an ideal home remedy for muscle and joint problems. It's also been linked to positive
    changes in cholesterol, blood sugar, blood pressure, inflammatory proteins and liver health. The area under cultivation in India is 107.54 thousand
    ha`,
    ],
    availability: `Throughout the year`,
    isHidden: false,
  },
  {
    name: `Lemon`,
    description: [
      `The lemon is a species of small evergreen trees in the flowering plant family Rutaceae, native to Asia, primarily Northeast India. Lemon is exported
    to over 99 countries from India.`,
      `Lemons give flavor to baked goods, sauces, salad dressings, marinades, drinks, and desserts.`,
      `Lemons are a good source of vitamin C and support heart health, they are often promoted as a weight loss food. The soluble fiber in lemons could
    help improve digestive health.`,
    ],
    availability: `Throughout the year`,
    isHidden: false,
  },
  {
    name: ``,
    description: [
      `Moringa also the botanical name for drumstick . India is the largest producer of Drumsticks , While it grows in most parts of India, it's probably
    more known in Southern India These are the pods of Moringa tree and are considered to be great for digestion
    • The humble drumsticks have powerful health benefits. Consuming drumsticks on a regular basis may help you streamline blood circulation well.
    Dried drumstick and moringa leaf powder can make amazing smoothies too. `,
    ],
    availability: `April to June`,
    isHidden: false,
  },
];

const about = {
  description: `ABOUT US
  Who are we ? Well we seek out the finest vegetables ,fruits and spices available , maintain the strictest quality standards in the industry , and have
  an unshakeable commitment to agriculture .We at Smoving overseas private limited are Agro Exporters from India, who believe in supplying fresh Fruits,
  Vegetables & other allied Agricultural Products across several terrains / countries . Our company serves as a beneficial platform to both farmers
  and market in terms of income which indirectly also helps the customers gain some benefits. We export all our products in the most systematic
  manner with skilfulness and ensure all our products are healthy and fresh , which assures us in maintaining the hygiene and Good agricultural
  practice. ( GAP). We make sure that we never fall behind with the latest technology, and the market necessity that guarantees stability and
  continuity in fulfilling the customers requirements. We have designed this website to deliver our products in just one click from the comfort of
  your homes .`,
};
export { header, products, about };
