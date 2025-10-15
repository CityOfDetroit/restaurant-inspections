const metadata = {
    "outcomes": {
      "Yes": "Compliant means zero Priority or Priority Foundation violations were cited, or all were corrected.",
      "No": "Not compliant means Priority or Priority Foundation violations were cited and not corrected."
    },
  
    "violations": {
      "Priority": "Priority violations are the most serious category and directly contribute to foodborne illness or food poisoning.",
      "Foundation": "Priority Foundation violations are the second most serious category and indirectly contribute to foodborne illness or food poisoning.",
      "Core": "Core violations are the least serious category and primarily relate to general cleanliness and facility maintenance."
    },
  
    "risks": {
      "High": "High indicates complex food preparation; these facilities are inspected two or more times per year.",
      "Medium": "Medium indicates moderately complex food preparation; these facilities are inspected at least once a year.",
      "Low": "Low indicates simple food preparation; these facilities are inspected once a year.",
      "null": "Complexity level is based on an establishment's food preparation; more complex food preparation increases risk and results in a more frequent review schedule. This is a new field that is in the process of being updated by the Detroit Health Department."
    },

    "links": {
      "dhd": {
        display: "Detroit Health Department (DHD)",
        url: "https://detroitmi.gov/departments/detroit-health-department"
      },
      "dhdFoodSafety": {
        display: "DHD Food Safety",
        url: "https://detroitmi.gov/departments/detroit-health-department/programs-and-services/food-safety"
      },
      "dhdEmail": {
        display: "FoodSafetyDHD@detroitmi.gov",
        url: "mailto:foodsafetydhd@detroitmi.gov"
      },
      "dhdPhone": {
        display: "313-876-0135",
        url: "tel:+13138760135"
      }, 
      "mdard": {
        display: "Michigan Department of Agriculture & Rural Development (MDARD)",
        url: "https://www.michigan.gov/mdard/"
      },
      "foodCode": {
        display: "Michigan Food Code",
        url: "https://www.michigan.gov/documents/mdard/MI_Modified_2009_Food_Code_396675_7.pdf"
      },
      "feedbackForm": {
        display: "this form",
        url: "https://app.smartsheet.com/b/form/1ef3cb1533644a3aa40dad4caf696dbb"
      },
      "odt": {
        display: "Open Data",
        url: "https://data.detroitmi.gov/pages/about-detroit-open-data"
      },
      "git": {
        display: "GitHub",
        url: "https://github.com/cityofdetroit/restaurant-inspections"
      },
      "openData": {
        display: "open data",
        url: "https://data.detroitmi.gov/"
      }
    },

    "faqs_data": [
      {
        question: "How many restaurants are in Detroit?",
        answer: "As of September 2023, there are nearly 4,000 restaurant establishments operating in Detroit. This includes full service restaurants, faith based establishments, schools, coffee shops, bars, fast food chains, mobile food units, stadiums and casinos. In the <a href='https://data.detroitmi.gov/datasets/detroitmi::restaurant-inspections-2/explore?layer=0' target='_blank' rel='noopener noreferrer'>complete dataset</a> on the open data portal, you'll find over 6,500 open and closed establishments inspected by the Detroit Health Department since August 1, 2016."
      },
      {
        question: "How many inspections are done?",
        answer: "The Detroit Health Department conducts 200-400 inspections per month. Approximately 2,500 inspections were conducted in 2022. Establishments are scheduled for routine inspections based on the complexity of their food preparation. See the 'Review frequency' field. Explore the entire <a href='https://data.detroitmi.gov/datasets/detroitmi::restaurant-inspections-2/' target='_blank' rel='noopener noreferrer'>restaurant inspection dataset</a> to view the data in bulk."
      },
      {
        question: "Are restaurants assigned grades?",
        answer: "No, the Detroit Health Department does not assign grades or scores to establishments based on their inspection outcomes. Currently, no health department in Michigan utilizes a grading system. Instead, an inspection is marked as compliant or not compliant based on the type of violation(s) cited and whether or not they were corrected."
      },
      {
        question: "What are the most serious violations?",
        answer: "Priority violations are the most serious category of food code violations and directly contribute to foodborne illness outbreaks or food poisoning occurances. The second most serious violations are Priority Foundation, and the least serious are Core. An inspection only results in compliance when zero Priority or Priority Foundation violations are cited, or when all are corrected."
      },
      {
        question: "How long do restaurants have to correct their violations?",
        answer: "Priority violations are typically corrected during the inspection, while Priority Foundation violations should be corrected within 30 days and Core violations should be corrected within 90 days."
      },
      {
        question: "How does the Detroit Health Department follow-up after a violation is cited?",
        answer: "The Detroit Health Department follows-up within 30 days to check the status of uncorrected Priority and Priority Foundation violations. Uncorrected Core violations are reviewed at the next routine inspection."
      },
      {
        question: "What is a restaurant's complexity level?",
        answer: "Complexity level is based on an establishment's food preparation; more complex food preparation increases risk and results in a more frequent review schedule. Possible values are High, Medium, and Low. This is a new field that is in the process of being updated by the Detroit Health Department, so some values may still appear null or unknown until the next review cycle."
      },
      {
        question: "I searched for a bakery that I know is in Detroit and open for business, but I don't see it included here?",
        answer: "If a bakery primarily wholesales to other businesses, then it is inspected by the Michigan Department of Agriculture and Rural Developement (MDARD), and therefore not included in this dataset."
      },
      {
        question: "I searched for a food truck that I see around Detroit, but I don't see it included here?",
        answer: "Food trucks operating in Detroit may be licensed by another health department in the state and may operate in other areas. All food trucks should have their license decal visibly displayed on the exterior of the vehicle."
      },
      {
        question: "How often is this data updated?",
        answer: "Restaurant inspections data is updated monthly and includes data through the last full month. For example, if the data is updated on March 31, the data will be updated to reflect inspections through February 28. This allows food safety inspectors time to verify their reports and follow-up on corrections."
      },
      {
        question: "How can I access the raw data?",
        answer: "Restaurant inspections data is made freely available on Detroit's <a href='https://data.detroitmi.gov/search?q=restaurant' target='_blank' rel='noopener noreferrer'>open data portal</a>."
      }
    ],

    "faqs_process": [
      {
        question: "What happens during a food safety inspection?",
        answer: "The Detroit Health Department Food Safety team observes food handling and facility operations during an inspection. Observed violations that occur during an inspection are documented and discussed with management and staff. Any violations that are able to be corrected on-site during the inspection are documented as corrected."
      },
      {
        question: "How is a complaint inspection different than a routine inspection?",
        answer: "During a complaint inspection, the Detroit Health Department inspector will only observe and document violations related to the complaint. During a routine inspection, the entire facility and processes of an establishment are observed."
      },
      {
        question: "What is the goal of food safety inspections?",
        answer: "Food Safety inspections are conducted to reduce the potential for foodborne illness and food poisoning."
      },
      {
        question: "What is the responsibility of the restaurant's Person-In-Charge (Manager/Supervisor)?",
        answer: "The role of the Person-In-Charge is to ensure that employees are trained and following food safety standards."
      },
      {
        question: "What are the Food Safety standards based on?",
        answer: "Food Safety standards are based on the Food and Drug Administration (FDA) foodborne illness risk factors. The control measures to protect consumer health are: demonstration of knowledge; employee health; preventing contamination from hands; time and temperature requirements for cooking and holding food; approved food sources; and, consumer advisories."
      },
      {
        question: "At what point does the Detroit Health Department shut a restaurant down?",
        answer: "An establishment may be asked to close during interruptions of utility services, contaminated water supply, fire, flood, sewage back-up, or any situation where safe operations cannot be assured. The Detroit Health Department will issue a Closure Order if necessary."
      },
      {
        question: "What should the public pay attention to when dining out?",
        answer: "The public should pay attention to restaurant cleanliness, maintenance, food handling practices, the presence of management and the appearance of employees (such as clean clothes and hands, hair coverings when required, etc)."
      },
    ]
  };
  
  export default metadata;