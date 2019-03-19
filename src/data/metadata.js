const metadata = {
    "outcomes": {
      "Yes": "Compliant means zero Priority or Priority Foundation violations were cited or all P and PF violations were corrected.",
      "No": "Not compliant means Priority or Priority Foundation violations were cited and not corrected."
    },
  
    "violations": {
      "Priority": "Priority violations are the most serious category and directly contribute to foodborne illness or food poisoning.",
      "Foundation": "Priority Foundation violations are the second most serious category and indirectly contribute to foodborne illness or food poisoning.",
      "Core": "Core violations are the least serious category and do not significantly contribute to foodborne illness or food poisoning, but are violations of other legal requirements."
    },
  
    "risks": {
      "High": "High indicates very complex food preparation and therefore a more frequent review schedule, such as full service restaurants.",
      "Medium": "Medium indicates moderately complex food preparation, such as hamburger fast food chains and bars that serve food.",
      "Low": "Low indicates very limited food preparation and therefore a less frequent review schedule, such as a coffee shops or bars that only serve beverages.",
      "null": "Complexity level is based on an establishment's food preparation; more complex food preparation increases risk and results in a more frequent review schedule. This is a new field that is in the process of being updated by the Detroit Health Department."
    },
  
    "inspections": {
      "Routine inspection": "",
      "Complaint": "",
      "Pre-opening / Plan review": ""
    },
  
    "establishments": "This data includes restaurants and other food service establishments, like school cafeterias or stadium concessions, that are inspected by the Detroit Health Department (DHD). Grocery stores, convenience stores, and other packaged and raw food establishments are inspected by the Michigan Department of Agriculture and Rural Development (MDARD) and are not included here.",
    
    "disclaimer": "If a restaurant, bar, or other food service establishment that prepares or serves food and beverages in Detroit is not found in this data, please email foodsafety@detroitmi.gov or call 313-876-0135 for follow up. Please include the name and address of the establishment, and the date and time of your visit in your message.",
    
    "foodCodeLink": "https://www.michigan.gov/documents/mdard/MI_Modified_2009_Food_Code_396675_7.pdf",
    
    "contact": "foodsafety@detroitmi.gov",

    "faqs": [
      {
        question: "Are restaurants assigned grades?",
        answer: "No, the Detroit Health Department does not assign grades or scores to establishments based on their inspection outcomes. This practice is consistent across the state of Michigan; no municipal health departments currently utilize a grading system. Instead, an inspection is marked as compliant or not compliant based on the types of violations cited and whether or not they were corrected."
      },
      {
        question: "What does complexity level mean for establishments?",
        answer: "Complexity level is based on an establishment's food preparation; more complex food preparation increases risk and results in a more frequent review schedule. Possible values are High, Medium, and Low. This is a new field that is in the process of being updated by the Detroit Health Department, so some values may still appear null or unknown until the next review cycle."
      },
      {
        question: "I searched for a bakery that I know is in Detroit and open for business, but I don't see it included here?",
        answer: "If a bakery sells wholesale items, then it would be inspected by the Michigan Department of Agriculture and Rural Developement (MDARD), and therefore not included in this dataset."
      },
      {
        question: "I searched for a food truck that I see around Detroit, but I don't see it included here?",
        answer: "Food trucks operating in Detroit can be licensed to any municipal health department based on the owner's registered address. Independent of where they are licensed to, all food trucks should have their license visibly displayed on the exterior of the vehicle."
      },
      {
        question: "How often are these data updated?",
        answer: "Restaurant inspections data is updated monthly on the last day of the month and includes data through the last full month. For example, on March 31, the data will be updated to reflect inspections through February 28. This allows food safety inspectors time to verify their reports and follow up about corrections."
      },
      {
        question: "How can I access the raw data?",
        answer: "Restaurant inspections data is made freely available on Detroit's open data portal at data.detroitmi.gov."
      }
    ]
  };
  
  export default metadata;