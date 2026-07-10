// =====================================================================
//  SF ADMIN SCENARIO QUIZ — Question Bank
//  Fixed 40 questions per session: 20 Scenario + 20 MCQ
//  Questions appear in fixed order — no randomisation
// =====================================================================

const QUESTIONS = [

  // ══════════════════════════════════════════════════════════════
  //  PART 1 — SCENARIO / DESCRIPTIVE  (Q1 – Q20)
  // ══════════════════════════════════════════════════════════════

  {
    id: 1,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "CRM Basics",
    scenario: "ABC Technologies wants separate environments for development, testing, and production. Developers should not directly make changes in the live system.",
    question: "Which Salesforce environments would you recommend for development, testing, and production? Explain your choice.",
    placeholder: "Enter your answer..."
  },
  {
    id: 2,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Schema",
    scenario: "A university wants to store Student information, including Student ID, Date of Birth, Email, Admission Date, and CGPA.",
    question: "Which fields would you create, and what data type would you choose for each field?",
    placeholder: "Enter your answer..."
  },
  {
    id: 3,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Relationships",
    scenario: "Each Department can have multiple Students, but every Student belongs to only one Department.",
    question: "Which relationship type would you use between Department and Student? Explain why.",
    placeholder: "Enter your answer..."
  },
  {
    id: 4,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Relationships",
    scenario: "Students can enroll in multiple Courses, and each Course can have many Students.",
    question: "How would you design this relationship in Salesforce?",
    placeholder: "Enter your answer..."
  },
  {
    id: 5,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Schema",
    scenario: "A College record should automatically display the total number of Students enrolled in that college.",
    question: "Which Salesforce feature would you use? What relationship is required for it to work?",
    placeholder: "Enter your answer..."
  },
  {
    id: 6,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Schema",
    scenario: "The HR team wants to automatically calculate an employee's experience in years based on the Joining Date.",
    question: "Would you use a Formula Field or another automation? Explain your decision.",
    placeholder: "Enter your answer..."
  },
  {
    id: 7,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Security",
    scenario: "Two Sales users have the same profile, but only one user should be allowed to export reports.",
    question: "How would you provide this additional access without affecting other users?",
    placeholder: "Enter your answer..."
  },
  {
    id: 8,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Security",
    scenario: "The Opportunity object is set to Private. Sales Managers should be able to view Opportunities owned by all Sales Executives in their region.",
    question: "Which security features would you configure to achieve this requirement?",
    placeholder: "Enter your answer..."
  },
  {
    id: 9,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Queues & Public Groups",
    scenario: "All new customer support Cases should be assigned to a common group until an agent accepts them.",
    question: "Would you use a Queue or a Public Group? Explain why.",
    placeholder: "Enter your answer..."
  },
  {
    id: 10,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Security",
    scenario: "Employees should be able to view Salary information, but only HR Managers should be able to edit it.",
    question: "Which Salesforce security feature would you configure?",
    placeholder: "Enter your answer..."
  },
  {
    id: 11,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Schema",
    scenario: "Sales Representatives and Sales Managers use the same Opportunity object, but Managers need additional approval fields that Representatives should not see.",
    question: "How would you configure the user interface to satisfy this requirement?",
    placeholder: "Enter your answer..."
  },
  {
    id: 12,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Schema",
    scenario: "An organization manages Domestic and International Customers. Both require different page layouts and picklist values.",
    question: "How would you implement this requirement in Salesforce?",
    placeholder: "Enter your answer..."
  },
  {
    id: 13,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Schema",
    scenario: "When Country is selected as India, users should only see Indian States. If Country is USA, only US States should appear.",
    question: "Which Salesforce feature would you use, and how would you configure it?",
    placeholder: "Enter your answer..."
  },
  {
    id: 14,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Automation tool",
    scenario: "The Finance team does not want Opportunities to be marked as Closed Won unless the Amount is greater than zero.",
    question: "How would you enforce this business rule?",
    placeholder: "Enter your answer..."
  },
  {
    id: 15,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Automation tool",
    scenario: "Whenever a new Case is created with Priority = High, an email should automatically be sent to the Support Manager.",
    question: "Which automation tool would you use, and why?",
    placeholder: "Enter your answer..."
  },
  {
    id: 16,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Flows",
    scenario: "A service representative needs a guided screen to collect customer information and create multiple related records in one process.",
    question: "Which type of Flow would you recommend? Explain your reasoning.",
    placeholder: "Enter your answer..."
  },
  {
    id: 17,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Automation tool",
    scenario: "Every night at 12:00 AM, inactive Leads older than 180 days should be updated with the status 'Archived'.",
    question: "Which Salesforce automation would you use for this requirement?",
    placeholder: "Enter your answer..."
  },
  {
    id: 18,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Lightning App Builder",
    scenario: "Sales Managers want to see a dashboard, recent Opportunities, and key account information together on the Account record page, while Sales Representatives should continue using the standard page.",
    question: "How would you configure the Lightning Record Page to meet this requirement?",
    placeholder: "Enter your answer..."
  },
  {
    id: 19,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Reports",
    scenario: "The CEO wants to view total sales by Region and then by Sales Representative in a single report.",
    question: "Which report format would you create and why?",
    placeholder: "Enter your answer..."
  },
  {
    id: 20,
    part: "Part 1 — Scenario Questions",
    type: "scenario",
    category: "Dashboards",
    scenario: "Sales Managers need to monitor monthly revenue, top-performing sales representatives, and pipeline status from one screen.",
    question: "How would you design the dashboard? Mention the report types and dashboard components you would use.",
    placeholder: "Enter your answer..."
  },

  // ══════════════════════════════════════════════════════════════
  //  PART 2 — MCQ  (Q21 – Q40)
  // ══════════════════════════════════════════════════════════════
  {
    id: 21,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "CRM Basics",
    scenario: "A company wants developers to build new features without affecting live business data.",
    question: "Which Salesforce environment should developers primarily use?",
    options: [
      "Production Org",
      "Developer Sandbox",
      "Developer Edition",
      "Scratch Org"
    ],
    answer: 1
  },
  {
    id: 22,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Schema",
    scenario: "An HR application needs to store an employee's Date of Birth.",
    question: "Which field type is most appropriate?",
    options: [
      "Text",
      "Number",
      "Date",
      "Picklist"
    ],
    answer: 2
  },
  {
    id: 23,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Relationships",
    scenario: "Every Invoice belongs to one Customer, but deleting the Customer should also delete all related Invoices.",
    question: "Which relationship should you choose?",
    options: [
      "Lookup Relationship",
      "Master-Detail Relationship",
      "External Lookup",
      "Hierarchical Relationship"
    ],
    answer: 1
  },
  {
    id: 24,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Relationships",
    scenario: "Students can enroll in many Courses, and Courses can have many Students.",
    question: "How should this relationship be implemented?",
    options: [
      "Lookup Relationship",
      "Master-Detail Relationship",
      "Junction Object with two Master-Detail relationships",
      "Hierarchical Relationship"
    ],
    answer: 2
  },
  {
    id: 25,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Schema",
    scenario: "A manager wants to see the total number of Orders related to each Customer.",
    question: "Which feature can calculate this automatically?",
    options: [
      "Formula Field",
      "Workflow Rule",
      "Roll-Up Summary Field",
      "Validation Rule"
    ],
    answer: 2
  },
  {
    id: 26,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Schema",
    scenario: "The system should automatically calculate the number of days between Start Date and End Date.",
    question: "Which feature should be used?",
    options: [
      "Validation Rule",
      "Formula Field",
      "Workflow Rule",
      "Queue"
    ],
    answer: 1
  },
  {
    id: 27,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Security",
    scenario: "One Sales user needs Edit access to Opportunities without changing the Profile assigned to other users.",
    question: "What is the best solution?",
    options: [
      "Create a new Profile",
      "Assign a Permission Set",
      "Create a Sharing Rule",
      "Change OWD"
    ],
    answer: 1
  },
  {
    id: 28,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Schema",
    scenario: "New Cases should be available for any Support Agent to claim.",
    question: "Which feature should be used?",
    options: [
      "Public Group",
      "Queue",
      "Role Hierarchy",
      "Permission Set"
    ],
    answer: 1
  },
  {
    id: 29,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Security",
    scenario: "An org has OWD set to Private for Accounts.",
    question: "Which feature allows automatic access to records based on ownership criteria?",
    options: [
      "Validation Rule",
      "Sharing Rule",
      "Formula Field",
      "Page Layout"
    ],
    answer: 1
  },
  {
    id: 30,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Security",
    scenario: "Only Finance users should be able to edit the Salary field.",
    question: "Which feature controls access to individual fields?",
    options: [
      "Record Types",
      "Page Layouts",
      "Field-Level Security",
      "Role Hierarchy"
    ],
    answer: 2
  },
  {
    id: 31,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Schema",
    scenario: "Managers need additional fields on the Opportunity page that Sales Reps should not see.",
    question: "Which feature supports this requirement?",
    options: [
      "Permission Set Group",
      "Page Layout Assignment",
      "Sharing Rule",
      "Queue"
    ],
    answer: 1
  },
  {
    id: 32,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Schema",
    scenario: "Business and Personal Accounts require different picklist values and layouts.",
    question: "Which feature should be used?",
    options: [
      "Formula Fields",
      "Record Types",
      "Queues",
      "Schema Builder"
    ],
    answer: 1
  },
  {
    id: 33,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Schema",
    scenario: "After selecting Country = India, only Indian States should be displayed.",
    question: "Which feature provides this functionality?",
    options: [
      "Validation Rule",
      "Field Dependency",
      "Permission Set",
      "Sharing Rule"
    ],
    answer: 1
  },
  {
    id: 34,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Automation",
    scenario: "An Opportunity should not be saved if the Close Date is in the past.",
    question: "Which feature should enforce this business rule?",
    options: [
      "Workflow Rule",
      "Validation Rule",
      "Formula Field",
      "Record Type"
    ],
    answer: 1
  },
  {
    id: 35,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Automation",
    scenario: "Whenever a Lead is converted, a follow-up Task should automatically be created.",
    question: "Which automation is best suited for this requirement?",
    options: [
      "Screen Flow",
      "Record-Triggered Flow",
      "Approval Process",
      "Dashboard"
    ],
    answer: 1
  },
  {
    id: 36,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Flow",
    scenario: "Customer service agents need a guided form to collect information before creating a Case.",
    question: "Which Flow type should be used?",
    options: [
      "Auto-Launched Flow",
      "Screen Flow",
      "Scheduled Flow",
      "Workflow Rule"
    ],
    answer: 1
  },
  {
    id: 37,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Flow",
    scenario: "Every Sunday, inactive Contacts should automatically receive a follow-up Task.",
    question: "Which automation is the best choice?",
    options: [
      "Record-Triggered Flow",
      "Scheduled Flow",
      "Validation Rule",
      "Quick Action"
    ],
    answer: 1
  },
  {
    id: 38,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "Email Alerts",
    scenario: "When a Case is closed, the customer should automatically receive a thank-you email.",
    question: "Which feature is responsible for sending the email?",
    options: [
      "Email Alert",
      "Validation Rule",
      "Formula Field",
      "Roll-Up Summary"
    ],
    answer: 0
  },
  {
    id: 39,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "",
    scenario: "A Sales Manager wants to group Opportunities by Stage and then by Owner.",
    question: "Which report format is most suitable?",
    options: [
      "Tabular",
      "Summary",
      "Matrix",
      "Joined"
    ],
    answer: 2
  },
  {
    id: 40,
    part: "Part 2 — Multiple Choice Questions",
    type: "mcq",
    category: "",
    scenario: "Executives want to see pipeline value, top sales reps, and closed revenue in a single view.",
    question: "Which Salesforce feature should you create?",
    options: [
      "Dashboard",
      "List View",
      "Schema Builder",
      "Approval Process"
    ],
    answer: 0
  }
];
