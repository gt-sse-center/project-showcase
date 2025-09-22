import { type Project } from "@/schema";

// Projects data extracted from the Georgia Tech CSSE website
export const projects: Project[] = [
  {
    id: 1,
    title: "PatientX.AI",
    description:
      "PatientX.AI is a machine learning-powered system designed to surface shared experiences among patients and caregivers navigating neurodegenerative diseases such as dementia. By analyzing thousands of posts from online health forums, the platform identifies frequently discussed topics—ranging from early symptoms to caregiving challenges—helping illuminate the typical patient journey. These insights empower caregivers, healthcare professionals, and patients themselves with clear understanding of what to expect. By bridging the gap between lived experiences and clinical care, PatientX.AI enhances communication between communities and care providers. The system brings transparency to the healthcare journey, uncovering patterns that can inform both individual decision-making and broader resource planning.",
    summary:
      "Machine learning system that analyzes patient forum data to identify shared experiences and challenges in neurodegenerative diseases",
    imageUrl: "/project-images/patientx-screenshot.png",
    category: ["ai-ml", "biomedical-engineering"],
    githubUrl: ["https://github.com/varun646/PatientX.AI"],
    demoUrl: [],
    featured: true,
    achievements: [
      "Improved topic detection capabilities using BERTopic for colloquial and context-rich language",
      "Enhanced interpretability with LLM-generated summaries of representative posts",
      "Uncovered over 150+ commonly experienced challenges",
      "Discovered new issues previously missed in patient/caregiver conversations",
      "Refined topic modeling pipeline for better understanding of patient forums",
    ],
    goals: [
      "Improve the topic detection capabilities of PatientX.AI",
      "Enhance the interpretability and clarity of identified topics for end users",
      "Enable healthcare professionals to identify unmet needs and intervention opportunities",
      "Support patients and caregivers in anticipating the course of illness through shared experiences",
    ],
    softwareSolution:
      "The project refined PatientX.AI's topic modeling pipeline using BERTopic, which proved effective for understanding colloquial and context-rich language in patient forums. We evaluated multiple modeling strategies and ultimately integrated LLMs to improve interpretability. These models were used to generate high-quality summaries of representative posts, making the discovered topics more accessible and easier to act upon. The overall solution focused on extracting and presenting meaningful, human-readable narratives from noisy, real-world forum data—making PatientX.AI more useful for its target audience.",
    screenshots: [
      {
        url: "/project-images/patientx-screenshot.png",
        alt: "PatientX Command-line Interface",
        caption:
          "Command-line interface for the PatientX.AI tool showing available options",
        description:
          "The image above shows the command-line interface for the PatientX.AI tool. The interface provides options for processing data including embeddings path, representation docs, topic size, clustering models, and more. These options allow researchers to customize how patient forum data is processed and how topic modeling is applied to extract meaningful insights. This interface is a key component of the solution developed by the engineering team, enabling researchers to analyze patient experiences with dementia and create comprehensive journey maps.",
      },
    ],
    impact: [
      "Uncovered over 150+ commonly experienced challenges",
      "New issues uncovered that were previously missed in patient/caregiver conversations",
      "Enhanced communication between communities and care providers",
      "Brought transparency to the healthcare journey for neurodegenerative diseases",
    ],
    detailedTechnologies: {
      machineLearning: [
        { name: "BERTopic", url: "https://maartengr.github.io/BERTopic/" },
        { name: "Ollama", url: "https://ollama.com/" },
        { name: "Mistral", url: "https://mistral.ai/" },
        { name: "OpenAI API", url: "https://openai.com/api/" },
      ],
      NaturalLanguageToolkit: [
        { name: "spaCy", url: "https://spacy.io/" },
        { name: "NLTK", url: "https://www.nltk.org/" },
      ],
      backend: [{ name: "Python", url: "https://python.org/" }],
    },
    projectDetails: {
      startDate: "November 2024",
      endDate: "April 2025",
      source: "VISS",
      scientificDomain: "Neuroscience",
      partners: [
        { name: "Coco Newton (Principal Investigator)", profileUrl: "" },
        { name: "Jiwon Jung", profileUrl: "" },
      ],
      softwareEngineers: [
        { name: "Varun Narayan", profileUrl: "" },
        {
          name: "Robin Fiévet",
          profileUrl: "https://www.linkedin.com/in/robin-fievet-6189a431/",
        },
      ],
    },
  },
  {
    id: 2,
    title: "AutoRA: Automated Research Assistant",
    description:
      "AutoRA is a Python package designed to automate the design and evolution of behavioral psychology experiments. It leverages active learning techniques to identify the most informative parameters for each experimental trial, allowing researchers to iteratively refine their understanding of human behavior. By guiding experimenters toward the most insightful data, AutoRA accelerates discovery in cognitive and behavioral sciences. The tool reduces the overhead of experiment design while enhancing scientific rigor. Researchers can deploy customizable, automated experiments that adapt over time—making AutoRA particularly valuable for exploring complex hypotheses or dynamic behavioral models.",
    summary:
      "Python package for automating behavioral psychology experiments using active learning techniques",
    imageUrl: "/project-images/autora-screenshot.png",
    category: ["data-science", "psychology"],
    githubUrl: ["https://github.com/AutoResearch/AutoRA-experiment-server"],
    demoUrl: [],
    featured: false,
    achievements: [
      "Developed reusable experiment template using Copier for rapid configuration and deployment",
      "Removed dependencies on Firebase and Firestore to support local-only deployments",
      "Created researcher-friendly interface for deploying starter experiments",
      "Supported 10+ commonly used psychology experiments in template",
      "Improved accessibility for international users with data privacy concerns",
      "Released AutoRA experiment server acknowledged in related AutoRA JOSS Paper",
    ],
    goals: [
      "Expand the AutoRA user base by eliminating dependencies on third-party deployment platforms",
      "Provide a researcher-friendly interface for deploying starter experiments using the AutoRA framework",
      "Improve accessibility and usability for international users, especially those with data privacy concerns",
    ],
    softwareSolution:
      "To streamline experiment deployment, we created a Copier-based project template that enables researchers to configure and launch their own experiments with minimal setup. The template supports local deployment, removing the reliance on platforms like Firebase and Firestore, and allows researchers to select from 10+ commonly used psychology experiments. This local-first approach ensures that researchers—especially those in regions with stringent data privacy laws (e.g., GDPR in the EU)—can confidently use AutoRA without risking exposure of participant data. The result is a lightweight, self-contained experiment deployment pipeline compatible with a wide range of research needs.",
    projectDetails: {
      startDate: "April 2024",
      endDate: "October 2024",
      source: "VISS",
      scientificDomain: "Behavioral Psychology",
      partners: [
        { name: "Sebastian Musslick (Principal Investigator)", profileUrl: "" },
        { name: "Younes Strittmatter", profileUrl: "" },
      ],
      softwareEngineers: [
        { name: "Kate Rachwal", profileUrl: "" },
        { name: "Varun Narayan", profileUrl: "" },
      ],
    },
    screenshots: [
      {
        url: "/project-images/autora-screenshot.png",
        alt: "AutoRA Experiment Server Interface",
        caption:
          "AutoRA experiment setup and response interface showing the experiment template configuration",
        description:
          "The image above shows the AutoRA experiment server interface. The left side displays the configuration process for behavioral experiments, where researchers can define project names, choose theorists, and set up deployment options. The right side shows a sample experiment output with a color identification task. The AutoRA experiment server provides a seamless way to create and deploy web-based behavioral experiments using jsPsych with integration into the Prolific participant recruitment platform, all managed through Docker and GitHub Actions for automated deployment.",
      },
    ],

    impact: [
      "The resulting AutoRA experiment server has been released by the researchers and was acknowledged as part of the related AutoRA JOSS Paper",
      "Eliminated third-party deployment dependencies for enhanced privacy",
      "Accelerated experiment setup and deployment for behavioral researchers",
      "Enabled GDPR-compliant research for international users",
    ],
    detailedTechnologies: {
      core: [
        { name: "Python", url: "https://python.org/" },
        { name: "Copier", url: "https://copier.readthedocs.io/" },
      ],
      backend: [{ name: "FastAPI", url: "https://fastapi.tiangolo.com/" }],
      frontend: [{ name: "jsPsych", url: "https://www.jspsych.org/" }],
      deployment: [
        { name: "Docker", url: "https://docker.com/" },
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
    },
  },
  {
    id: 3,
    title: "MARS: Metadata Aggregator for Reusable/Reproducible Science",
    description:
      "Metadatify, formerly known as MARS (Metadata Aggregation for Reproducible Science), is an open-source, web-based platform that streamlines the creation, management, and discovery of scientific metadata. Researchers often struggle with fragmented datasets, ad hoc spreadsheets, or bespoke tools that hinder data sharing and reproducibility. Metadatify provides a unified interface for rich metadata entry (including CSV/JSON imports), advanced full-text and attribute-based search, and collaborative workspace management. The platform facilitates collaboration through ORCID-driven invitations and project workspaces, while guaranteeing data integrity through uniqueness constraints, audit trails, and timestamped records. The development pipeline was fortified with Jest unit tests, Cypress end-to-end tests, and GitHub Actions workflows, ensuring every merge passes through client, server, and integration test suites.",
    summary:
      "Open-source web platform for scientific metadata management with advanced search and collaboration features",
    imageUrl: "/project-images/image_1752521002421.png",
    category: ["data-science", "computer-science"],
    githubUrl: ["https://github.com/Brain-Development-and-Disorders-Lab/mars"],
    demoUrl: ["https://metadatify.com/"],
    featured: false,
    achievements: [
      "Delivered interactive Query Builder supporting combined text and structured searches with drag-and-drop UI",
      "Implemented full JSON/CSV import-export with entity mapping and 'export all' functionality",
      "Added ORCID-powered collaborator management and workspace sharing for team-based science",
      "Built templating features for rapid scenario setup with 'save as template' on attribute creation",
      "Enforced data integrity via timestamped records and uniqueness validations",
      "Enhanced UI/UX with sortable tables, improved modals/buttons, and typeahead fields",
      "Expanded testing suite from unit through feature tests with comprehensive coverage",
      "Automated CI/CD on GitHub Actions and set up Docker-based local environments",
      "Published conference poster demonstrating MARS capabilities to the US-RSE community",
      "Increased metadata quality and consistency, lowering error rates in downstream analyses",
    ],
    projectDetails: {
      startDate: "November 2023",
      endDate: "May 1, 2024",
      source: "VISS",
      scientificDomain: "Research data aggregator",
      partners: [
        { name: "Linda Richards", profileUrl: "" },
        { name: "Henry Burges", profileUrl: "" },
      ],
      softwareEngineers: [
        {
          name: "Robin Fiévet",
          profileUrl: "https://www.linkedin.com/in/robin-fievet-6189a431/",
        },
      ],
    },
    goals: [
      "Facilitate collaboration and access control via ORCID-driven invitations and project workspaces",
      "Guarantee data integrity through uniqueness constraints, audit trails, and timestamped records",
      "Maintain rapid, high-quality releases with comprehensive automated testing and continuous integration",
      "Support robust import/export workflows (CSV, JSON) and reusable templates to speed up new dataset onboarding",
    ],

    softwareSolution:
      "We built a full-stack application with a Node.js/Express backend and a React/TypeScript frontend. Key features include a dynamic Query Builder that lets scientists compose complex filters via drag-and-drop UI, JSON and CSV import/export routines that map existing entities by ID and allow 'save as template' workflows, and a relationship explorer that visualizes links between metadata entries. To support team-based science, we integrated [ORCID-powered](https://orcid.org/oauth) collaborator management and workspace sharing.",
    screenshots: [
      {
        url: "/project-images/mars-screenshot.png",
        alt: "MARS Dashboard Interface",
        caption:
          "MARS dashboard interface showing collections, entities, and recent activity tracking",
        description:
          "The MARS dashboard interface with collections and entities management on the left, and an activity log that tracks recent changes on the right. Users can create and manage collections, entities, and attributes through an intuitive interface with enhanced search functionality and [ORCiD](https://orcid.org/oauth) verification for security.",
      },
    ],

    impact: [
      "Published a conference poster demonstrating MARS capabilities to the US-RSE community",
      "Enabled Henry Burgess to support and continue contributing new features with more efficient CI/CD",
      "Increased metadata quality and consistency, lowering error rates in downstream analyses",
    ],
    detailedTechnologies: {
      backend: [
        { name: "Node.js", url: "https://nodejs.org/" },
        { name: "Express", url: "https://expressjs.com/" },
        { name: "MongoDB", url: "https://mongodb.com/" },
      ],
      frontend: [
        { name: "React", url: "https://reactjs.org/" },
        { name: "TypeScript", url: "https://typescriptlang.org/" },
      ],
      testing: [
        { name: "Jest", url: "https://jestjs.io/" },
        { name: "Cypress", url: "https://cypress.io/" },
      ],
      cicd: [
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      auth: [
        { name: "ORCID OAuth integration", url: "https://orcid.org/oauth" },
      ],
      dataFormats: ["JSON import/export", "CSV export/import"],
    },
  },
  {
    id: 4,
    title: "The Ramanujan Machine",
    description:
      "The Ramanujan Machine is a novel way to find new mathematical formulas related to fundamental constants like π (pi), e, and the Riemann zeta function, traditionally discovered through intuition or ingenuity. Using an algorithmic approach, the Ramanujan Machine generates new mathematical conjectures (a statement or hypothesis believed to be true based on evidence or patterns, but not yet rigorously proven) that mathematicians can then attempt to prove. The Ramanujan Machine was developed with the goal of automating the discovery of mathematical formulas and making this process accessible to the broader mathematical community.",
    summary:
      "Algorithmic approach to discovering new mathematical formulas and conjectures related to fundamental constants",
    imageUrl: "/project-images/ramanujan-screenshot.png",
    category: ["computational-science", "mathematics"],
    githubUrl: ["https://github.com/RamanujanMachine/ramanujan-machine-web"],
    demoUrl: [],

    featured: false,
    achievements: [
      "Created web application for mathematicians to submit continued fractions for analysis",
      "Integrated Wolfram Alpha API and LIReC for conjecture database queries",
      "Improved BOINC infrastructure for distributed computing across Linux, macOS, and Windows",
      "Built binary packages using cx_Freeze for cross-platform deployment",
      "Enhanced job execution engine with better diagnostic feedback",
      "Developed new heuristic and search space for formula discovery",
    ],
    projectDetails: {
      startDate: "November 2023",
      endDate: "June 2024",
      source: "VISS",
      scientificDomain: "Mathematics, Number Theory",
      partners: [
        { name: "Ido Kaminer", profileUrl: "" },
        { name: "Michael Shalyt", profileUrl: "" },
      ],
      softwareEngineers: [{ name: "Kate Rachwal", profileUrl: "" }],
    },
    goals: [
      "Increase the visibility of The Ramanujan Machine by creating an experience where contributing mathematicians can submit conjectures for potential exploration",
      "Increase the number of contributed computing resources through enhancements to The Ramanujan Machine's distributed job execution engine",
    ],
    softwareSolution:
      "During this engagement, we developed a web application that enables contributing mathematicians to submit continued fractions for analysis. The application assesses whether these fractions converge to established conjectures or theorems and evaluates their potential for algorithmic exploration. To identify relevant similarities, well-known conjecture databases are queried using the Wolfram Alpha API and LIReC. The results are then presented in the expected format with the MathJax library for mathematical notation rendering. We improved the Ramanujan Machine BOINC infrastructure (a platform enabling users to donate idle computing resources to scientific research) to maximize the value of contributed computational power. Previously, functionality was limited to donated Linux machines, the Ramanujan packages remained outdated due to missing private keys, domain knowledge was lost following team turnover, and executed jobs frequently crashed without providing diagnostic feedback. During our engagement, we addressed these challenges by creating binary packages using cx_Freeze for Linux, macOS, and Windows, rebuilding the build pipeline as GitHub Actions, and refining BOINC configuration files to generate meaningful diagnostic information when errors occurred.",
    screenshots: [
      {
        url: "/project-images/ramanujan-screenshot.png",
        alt: "Ramanujan Machine Interface",
        caption:
          "The Ramanujan Machine web interface for polynomial continued fraction exploration",
        description:
          "The image above shows the Ramanujan Machine web portal interface. The left panel allows researchers to input polynomials for the numerator (a_n) and denominator (b_n) of a continued fraction, along with the calculation depth (n). The middle and right panels display the results, including the computed value of the continued fraction and visual representations of various mathematical relationships. This web portal makes the Ramanujan Machine algorithms accessible to researchers and mathematicians worldwide, allowing them to discover new mathematical formulas relating fundamental constants. The integration with Wolfram Alpha provides additional validation and insights for the discovered formulas.",
      },
    ],
    impact: [
      "Creation of a new heuristic and search space for formula discovery",
      "More robust use of the BOINC infrastructure",
      "Enhanced accessibility for contributing mathematicians",
      "Improved cross-platform support for distributed computing",
    ],
    detailedTechnologies: {
      frontend: [
        { name: "React", url: "https://reactjs.org/" },
        { name: "TypeScript", url: "https://typescriptlang.org/" },
        { name: "MathJax", url: "https://www.mathjax.org/" },
        { name: "D3.js", url: "https://d3js.org/" },
      ],
      backend: [
        { name: "FastAPI", url: "https://fastapi.tiangolo.com/" },
        { name: "Python", url: "https://python.org/" },
      ],
      apis: [
        { name: "Wolfram Alpha API", url: "https://wolframalpha.com/api/" },
        { name: "LIReC", url: "https://orca.cardiff.ac.uk/50951/" },
      ],
      distributedComputing: [
        { name: "BOINC", url: "https://boinc.berkeley.edu/" },
        { name: "cx_Freeze", url: "https://cx-freeze.readthedocs.io/" },
      ],
      cicd: [
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Kokkos Accelerated Machine Learned Interatomic Potential",
    description:
      "Quickly calculating accurate inter-atomic force fields is a primary bottleneck for many molecular dynamics simulations in the chemistry and materials science fields. State-of-the-art approaches like Message Passing Neural Networks (MPNNs) can greatly speed up these types of force field calculations by reducing communication overheads during simulation intervals. However, recent implementations of MPNN, such as MACE, are not fully available to GPU-enabled molecular dynamics simulations. This project focused on a collaborative profiling and porting effort starting with the PI's existing software library for calculations of inter-atomic force fields with MACE/MPNN optimizations, 'sprint C++'. The ideal solution for this project would make use of industry standard libraries and APIs for heterogeneous CPU and GPU computing, such as the Sandia Labs-developed Kokkos performance portability programming model.",
    summary:
      "Development of Sprint-Kokkos, a high-performance library for inter-atomic force field calculations using Kokkos for portable CPU-GPU computing",
    imageUrl: "/project-images/kokkos-mace-materials.png",
    category: ["computational-science", "material-science"],
    githubUrl: ["https://github.com/wcwitt/symmetrix"],
    demoUrl: [],

    featured: false,
    achievements: [
      "Profiled simulations of interest and shared methodology with researcher",
      "Achieved ~8x performance improvement through optimizations addressing performance bottlenecks",
      "Delivered sprint-kokkos library providing performance portable version of MACE across multiple kinds of GPUs",
      "Implemented high performance, interoperable library using Kokkos with MACE functionality across different CPUs and GPUs",
      "Enabled portable methods for running inter-atomic force field calculations with widely used molecular dynamics frameworks",
      "Code publicly released with 10 beta users and estimated 100+-1000 clones per week on general release",
    ],
    projectDetails: {
      startDate: "April 2024",
      endDate: "November 2024",
      source: "VISS",
      scientificDomain: "Material Science / Computational Chemistry",
      partners: [{ name: "Chuck Witt", profileUrl: "" }],
      softwareEngineers: [{ name: "Ketan Bhardwaj", profileUrl: "" }],
    },
    goals: [
      "Developing a Kokkos Accelerated Machine Learned Interatomic Potential software library, named Sprint-Kokkos, incorporating Kokkos support for heterogeneous CPU-GPU simulations as well as the researcher's implementation of MACE ('sprint C++') to further accelerate simulations",
      "Profiling and evaluating common simulation scenarios using the baseline approach and compare against Sprint-Kokkos",
      "Enable portable methods for running inter-atomic force field calculations with widely used molecular dynamics frameworks",
    ],
    softwareSolution:
      "During this engagement, we performed the following: We recreated the PI's simulation setup on LAMMPS and performed detailed profiling of the execution of simulation scenarios. We shared our findings and suggestions with PI. We implemented and delivered sprint-kokkos, a high performance, interoperable library implemented using Kokkos which provides MACE functionality across different CPUs and GPUs using OpenMP, NVIDIA's CUDA, and Intel's OneAPI.",
    impact: [
      "The code is publicly included in this repo for general release https://github.com/wcwitt/symmetrix with 10 beta users. Researcher estimates 100+-1000 clones per week on general release",
      "Special mention by PI in pre-print publication and a journal paper in preparation",
      "Achieved significant performance improvements enabling faster molecular dynamics simulations",
      "Provided performance portable solution across multiple GPU architectures",
    ],
    detailedTechnologies: {
      core: [
        { name: "C++", url: "https://cplusplus.com/" },
        { name: "Kokkos", url: "https://kokkos.org/" },
      ],
      computing: [
        { name: "CUDA", url: "https://developer.nvidia.com/cuda-zone" },
        { name: "OpenMP", url: "https://www.openmp.org/" },
        {
          name: "Intel OneAPI",
          url: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/overview.html",
        },
      ],
      profiling: [
        {
          name: "Intel vTune",
          url: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/vtune-profiler.html",
        },
        {
          name: "NVSight",
          url: "https://developer.nvidia.com/nsight-systems",
        },
      ],
      simulation: [
        { name: "LAMMPS", url: "https://www.lammps.org/" },
        { name: "MACE", url: "https://github.com/ACEsuit/mace" },
      ],
    },
    screenshots: [
      {
        url: "/project-images/kokkos-mace-materials.png",
        alt: "MACE-MP-0 Equivariant Graph Tensor Network materials science diagram",
        caption:
          "MACE-MP-0 Equivariant Graph Tensor Network showing comprehensive materials coverage",
        description:
          "This diagram illustrates the MACE-MP-0 (Materials Accelerated by Computational Engineering - Material Project 0) framework, which is central to the Kokkos-accelerated machine learned interatomic potential project. The visualization shows how MACE-MP-0 serves as an equivariant graph tensor network that can handle diverse material types including ice & water, nanoparticles, amorphous carbon, zeolites, MOFs, cathode materials, carbonates, and many others. The radial design demonstrates the framework's ability to process multiple material categories simultaneously, from simple molecules to complex heterogeneous catalysts, making it ideal for the performance-portable Kokkos implementation that enables efficient molecular dynamics simulations across different CPU and GPU architectures.",
      },
    ],
  },
  {
    id: 6,
    title:
      "Performance Enhancements for Simulations that Target Intrinsically Disordered Proteins (IDPs)",
    description:
      "Meta inferencing is one of the key computational simulation techniques to advance the understanding of treating incurable diseases through understanding interactions of intrinsically disordered proteins (IDPs) with small drug-like molecules. During this engagement, we evaluated the performance characteristics of simulations based on <a href='https://www.gromacs.org/' target='_blank' rel='noopener noreferrer' class='text-[#003057] hover:text-[#B3A369] underline'>GROMACS</a> and <a href='https://www.plumed.org/' target='_blank' rel='noopener noreferrer' class='text-[#003057] hover:text-[#B3A369] underline'>PLUMED</a>, which target IDPs with therapeutic small molecules. After the evaluation, we worked with the PLUMED team to introduce changes that resulted in significant performance improvements for drug discovery research.",
    summary:
      "Performance optimization of GROMACS/PLUMED simulations for drug discovery research targeting intrinsically disordered proteins",
    imageUrl: "/project-images/protein-comparison.png",
    category: ["computational-science", "chemistry-biochemistry"],
    githubUrl: ["https://github.com/plumed/plumed2"],
    demoUrl: [],

    featured: false,
    achievements: [
      "Improved the efficiency of metainference simulations with PLUMED",
      "68% improvement over CPU baseline",
      "53% improvement over GPU baseline",
      "Achieved 2x speedup in execution time through configuration optimization",
      "Profiled multiple simulations, revealing PLUMED is not a significant bottleneck in these simulations",
      "Created experience blog on PLUMED tutorials for broader MD community",
      "Ensured backward compatibility for existing PLUMED simulations",
      "Immediate adoption in production environments with no disruptions",
    ],
    projectDetails: {
      startDate: "May 2023",
      endDate: "September 2023",
      source: "VISS",
      scientificDomain: "Drug discovery, molecular dynamics",
      partners: [
        { name: "Gabi Heller", profileUrl: "" },
        { name: "Thomas Lohr", profileUrl: "" },
      ],
      softwareEngineers: [{ name: "Ketan Bhardwaj", profileUrl: "" }],
    },
    goals: [
      "Address performance bottlenecks in PLUMED software plugin for GROMACS-based simulations",
      "Evaluate and optimize CUDA version of PLUMED code for GPU acceleration",
      "Accelerate meta inferencing simulations for drug discovery research",
      "Provide researchers with profiling knowledge for future optimization",
    ],
    softwareSolution:
      "During this engagement, we used state-of-the-art software tools and data-driven software engineering to extract and analyze data from researcher provided simulation scenarios by recreating their simulations on our internal research infrastructure. We coordinated with the researchers and the PLUMED team and shared relevant data and insights with both groups, which led the PLUMED team to suggest changes in configuration of PLUMED software in researcher simulations. We implemented these configuration changes and validated the performance improvements through comprehensive profiling.",
    impact: [
      "Detailed profiling information of commonly used simulation scenarios was used to identify performance bottlenecks",
      "Identification and verification of the right configuration parameters for PLUMED in researchers' simulations led to speed up of 2x in execution time",
      "Experience blog on PLUMED tutorials was created for use by the broader MD community",
      "The changes were immediately adopted in researchers' production environments with no disruptions",
      "Researchers gained important knowledge about profiling methods from the VISS team, enabling future optimization of simulation scenarios",
    ],
    screenshots: [
      {
        url: "/project-images/protein-comparison.png",
        alt: "Comparison of structured and disordered proteins",
        caption:
          "Comparison between a structured protein (left) with a well-defined 3D conformation and an intrinsically disordered protein (right) with multiple possible conformations",
        description:
          "The image above illustrates the fundamental difference between structured proteins and Intrinsically Disordered Proteins (IDPs). Structured proteins (left) have a well-defined three-dimensional shape with stable secondary structures like alpha helices and beta sheets (shown in green). In contrast, IDPs (right) lack a stable structure and can adopt multiple conformations, making them more challenging to simulate computationally. This project focused on optimizing [GROMACS](https://www.gromacs.org/) and [PLUMED](https://www.plumed.org/) simulations for these challenging IDPs, particularly in the context of their interactions with small therapeutic molecules (shown in orange). The performance enhancements achieved through this work allow researchers to run more extensive and accurate simulations of these complex protein systems, potentially accelerating drug discovery efforts targeting IDPs.",
      },
    ],
    detailedTechnologies: {
      simulation: [
        { name: "GROMACS", url: "https://www.gromacs.org/" },
        { name: "PLUMED", url: "https://www.plumed.org/" },
      ],
      computing: [
        {
          name: "GPU Computing",
          url: "https://developer.nvidia.com/gpu-computing",
        },
        { name: "CUDA", url: "https://developer.nvidia.com/cuda-zone" },
      ],
      profiling: [
        {
          name: "Intel vTune",
          url: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/vtune-profiler.html",
        },
      ],
      development: [
        {
          name: "Profiling",
          url: "https://en.wikipedia.org/wiki/Profiling_(computer_programming)",
        },
      ],
    },
  },
  {
    id: 7,
    title: "Icetemp: Converting a Jupyter Notebook to a Python Package",
    description:
      "Icetemp is a numerical heat flow model that infers long-term climate and glacial history using Bayesian inversion of in-situ borehole temperature measurements previously taken in Antarctica. During this engagement, we converted the Icetemp algorithm, written as a Jupyter Notebook, into a Python package available on PyPi, complete with automated testing and Continuous Integration / Delivery / Deployment.",
    summary:
      "Created a professionally tested Python library from Jupyter Notebook code",
    imageUrl: "/project-images/icetemp-analysis.png",
    category: ["data-science", "earth-atmospheric-sciences"],
    githubUrl: ["https://github.com/sashamontelli/borehole_temperature_models"],
    demoUrl: [],

    featured: false,
    achievements: [
      "Multi-platform continuous integration (CI) workflow",
      "Automated tests with comprehensive coverage",
      "Automatic deploys to PyPI",
      "Improved performance of existing model by 20%",
      "Ensured the functionality is open to the science community",
    ],
    projectDetails: {
      startDate: "June 2023",
      endDate: "September 2023",
      source: "VISS",
      scientificDomain: "Glaciology, Thermal Modeling",
      partners: [{ name: "Sasha Montelli", profileUrl: "" }],
      softwareEngineers: [{ name: "Dave Brownell", profileUrl: "" }],
    },
    goals: [
      "Increase the code quality and performance of the existing model",
      "Ensure that the functionality is open to the scientific community",
      "Increase usage of the functionality by glaciologists and numerical modelers",
    ],
    softwareSolution:
      "During this engagement, we converted the ice temp algorithm, written as a Jupyter notebook, into a Python package available on PyPi, complete with automated testing and Continuous Integration / Delivery / Deployment via GitHub actions. Ice rises are slow-moving areas of ice adjacent to floating ice shelves. Scientists study temperature patterns inside these ice rises to learn about how they have changed over time and what has influenced them. Influences include past surface temperatures, snowfall levels, and heat from the Earth. While earlier studies looked at one or two of these factors using temperature data from drilled holes, no one has yet explored how all these factors interact.",
    impact: [
      "Introduced a multi-platform Continuous Integration GitHub workflow",
      "Introduced automated tests to exercise the algorithm",
      "Created a Python package for deployment to PyPi",
      "Introduced a Continuous Delivery / Deployment GitHub workflow",
      "Improved performance of the existing model by 20%",
      "Researchers have been able to integrate new probabilistic heat flow models into their Bayesian inversion framework for reconstructing englacial temperature histories",
      "More effectively generate probabilistic estimates of ice-rise grounding age from borehole temperatures, directly advancing their understanding of past ice-sheet dynamics",
    ],
    screenshots: [
      {
        url: "/project-images/icetemp-analysis.png",
        alt: "Icetemp Bayesian analysis visualization",
        caption:
          "Visualization of Bayesian analysis from Icetemp showing various parameter distributions and relationships",
        description:
          "The image above shows the visualization outputs from the Icetemp model's Bayesian analysis. These plots display various parameter distributions and correlations that help scientists understand Antarctic climate and glacial history from borehole temperature data. The top-right graph shows measured temperature profiles at different depths, while other panels display parameter distributions and relationships derived from the Bayesian inversion process. By converting this analysis from a Jupyter Notebook to a well-tested Python package, our team made these sophisticated Bayesian inversion techniques more accessible to glaciologists and climate scientists. The package now uses modern CI/CD practices, has comprehensive test coverage, and is available through PyPI, making it easier for researchers to incorporate into their scientific workflows.",
      },
    ],
    detailedTechnologies: {
      backend: [{ name: "Python", url: "https://python.org/" }],
      development: [{ name: "Jupyter Notebook", url: "https://jupyter.org/" }],
      distribution: [{ name: "PyPI", url: "https://pypi.org/" }],
      cicd: [
        { name: "CI/CD", url: "https://en.wikipedia.org/wiki/CI/CD" },
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      modeling: [
        {
          name: "Bayesian Modeling",
          url: "https://en.wikipedia.org/wiki/Bayesian_inference",
        },
      ],
    },
  },
  {
    id: 8,
    title: "FastANI",
    description:
      "FastANI is an HPC-oriented Python package to perform whole-genome Average Nucleotide Identity (ANI). FastANI allows for quickly comparing two genomes to find matches in their genetic structure, and the related paper for this package has been cited over 4000 times. During this engagement, center leadership collaborated with Dr. Chockingalim, a research scientist in Dr. Aluru's lab, to improve the quality of the FastANI Python package.",
    summary:
      "Enhanced build system, testing infrastructure, and CI/CD for widely-used genomic analysis tool with 4000+ citations",
    imageUrl: "/project-images/fastani-visualization.png",
    category: ["computational-science", "bioinformatics"],
    githubUrl: ["https://github.com/ParBLiSS/FastANI"],
    demoUrl: [],
    featured: false,
    achievements: [
      "Migrated from autotools to CMake build system, enabling development on more platforms",
      "Developed heuristic tests and CI/CD to facilitate future updates",
      "Created GitHub Actions based CI/CD and incorporated CodeCov workflow",
      "Released FastANI 1.34 on GitHub and deployed new package to Bioconda",
      "Achieved 20,000+ downloads since July 2023 release",
      "Enabled external contributors to fix bugs via simple PRs using new CI/CD testing",
    ],
    projectDetails: {
      startDate: "November 2022",
      endDate: "July 2023",
      source: "Internal",
      scientificDomain: "Computational Genomics",
      partners: [
        {
          name: "Srinivas Aluru",
          profileUrl: "",
        },
        {
          name: "Sriram Chockingalim",
          profileUrl: "",
        },
      ],
      softwareEngineers: [
        { name: "Sriram Chockingalim" },
        { name: "Alex Orso" },
        { name: "Jeff Young" },
      ],
    },
    goals: [
      "Make the build process more intuitive for developers and users",
      "Implement automated testing to allow for easier merging of community contributions and bugfixes",
      "Keep API and code compatibility with older versions of the code while releasing a new, updated version of the code",
    ],
    softwareSolution:
      "Since this was already a widely used Python-based project, the focus of the engagement was on improvements that would help the researchers to maintain and sustain the project going forward. To this end, work focused on exploring options for build systems (autotools versus CMake), automated testing frameworks (Jenkins versus GitHub Actions), and code coverage frameworks. Notably, this package previously had limited testing due to the heuristic nature of the ANI search. Discussions with the engineering team led to the implementation and inclusion of a simple heuristic-based test suite that greatly improved code coverage.",
    impact: [
      "FastANI was migrated from autotools to use the CMake build system, allowing for development on more platforms",
      "Developed a heuristic tests and CI/CD to facilitate future updates",
      "Created GitHub Actions based CI/CD and incorporated CodeCov workflow to check code coverage",
      "Released a new version of FastANI on GitHub and deployed a new package to Bioconda",
      "The resulting FastANI 1.34 release was posted on Bioconda and has received 20,000 downloads since its release in July 2023",
      "Within weeks of the new release, external contributors helped to fix a small bug in the test cases via a simple PR, which utilized the new CI/CD testing and code coverage plugins",
    ],
    screenshots: [
      {
        url: "/project-images/fastani-visualization.png",
        alt: "FastANI genomic comparison visualization",
        caption:
          "Visualization of genome comparison between two bacterial strains (B. quintana and B. henselae) using FastANI",
        description:
          "The image above demonstrates FastANI's genomic comparison capabilities. It shows a visualization of the genomic similarity between two bacterial strains: *Bartonella quintana* (top) and *Bartonella henselae* (bottom). The colored regions represent matching genomic fragments, with pink lines connecting homologous regions between the two genomes. The color gradient (from purple to yellow) indicates the similarity level, with yellow representing higher nucleotide identity. Our work on the FastANI Python package improved the code quality, testing infrastructure, and build system, making this powerful genomic analysis tool more reliable and maintainable for bioinformatics researchers. By enhancing the software engineering aspects of FastANI, we've helped ensure that scientists can confidently use this tool for rapid whole-genome comparisons in various research contexts.",
      },
    ],
    detailedTechnologies: {
      backend: [{ name: "Python", url: "https://python.org/" }],
      computing: [
        {
          name: "HPC",
          url: "https://en.wikipedia.org/wiki/High-performance_computing",
        },
        {
          name: "OpenMP",
          url: "https://www.openmp.org/",
        },
      ],
      development: [{ name: "CMake", url: "https://cmake.org/" }],
      cicd: [
        { name: "CI/CD", url: "https://en.wikipedia.org/wiki/CI/CD" },
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      testing: [{ name: "CodeCov", url: "https://codecov.io/" }],
      bioinformatics: [
        { name: "Genomics", url: "https://en.wikipedia.org/wiki/Genomics" },
      ],
    },
  },
  {
    id: 9,
    title: "Hi-Fi Grid Engagement",
    description:
      "Applying Reinforcement Learning (RL) to automate operations and drive discoveries in power grids is an important area of research that has a direct impact on power delivery across world's power grids. However, applying RL in power grid systems is especially challenging given the large-scale nature of power-grid data. The scale of these data sets causes scalability and performance challenges for RL approaches. RL2Grid is a suite that simulates the use of RL in realistic power-grid systems by using a software stack that includes the <a href='https://github.com/Grid2op/grid2op' target='_blank' rel='noopener noreferrer' class='text-[#003057] hover:text-[#B3A369] underline'>Grid2Op</a> power control framework running with Gymnasium, an open source framework for RL research.",
    summary:
      "Optimized RL2Grid simulations through performance profiling and high-fidelity power models, achieving 2x+ speed improvements and 20x scalability",
    imageUrl: "/project-images/rl2grid-performance.png",
    category: ["computational-science", "electrical-engineering"],
    githubUrl: ["https://github.com/Grid2op/grid2op"],
    demoUrl: ["https://grid2op.readthedocs.io/en/latest/"],

    featured: false,
    achievements: [
      "Engaged with PI to recreate RL2Grid simulation environment for detailed performance and scalability profiling",
      "Implemented python multi-processing and shared memory-based dictionary optimizations for Grid2Op",
      "Delivered PowerModels.jl-based python backend for Grid2Op enabling high-fidelity simulations",
      "Achieved 2x+ faster simulation performance and 20x scalability improvements",
      "Transformed simulation runtime from weeks to days, enabling more scientific experimentation",
      "Enhanced simulation fidelity with higher-quality power models for realistic power-grid studies",
    ],
    projectDetails: {
      startDate: "November 2024",
      endDate: "April 2025",
      source: "VISS",
      scientificDomain: "PowerGrid / ML",
      partners: [
        { name: "Priya Donti", profileUrl: "" },
        { name: "Enrico Marchesini", profileUrl: "" },
        { name: "Benjamin Donnot", profileUrl: "" },
      ],
      softwareEngineers: [
        { name: "Ketan Bhardwaj", profileUrl: "" },
        { name: "Lori A. Burns", profileUrl: "" },
      ],
    },
    goals: [
      "Optimize the performance and scalability of Grid2Op based simulations to enable partners to explore RL agent operations on long-running, large-scale power-grid systems simulations",
      "Enhance the fidelity and accuracy of RL2Grid simulations by adding support for high-fidelity power models, such as PowerModels.jl",
      "Address performance bottlenecks that caused initial simulations to take weeks to finish due to lack of parallel execution",
    ],
    softwareSolution:
      "During this engagement, we performed the following: Engaged with the PI to recreate the environment needed to run RL2Grid simulation on our end to conduct detailed performance and scalability profiling. We shared our findings and suggestions with partners; the resulting optimizations i.e., use of python multi-processing and shared memory-based dictionary to store large power-grid states in Grid2Op enabled simulations to run faster & scale well. Delivered a python package GitHub repository for a Grid2Op backend that uses PowerModels.jl to enable partners to run high-fidelity simulations.",
    impact: [
      "After VISS engagement, RL2Grid simulations ran 2x+ faster and scaled to 20x more instances",
      "Delivered PowerModels based python packaged backend for Grid2Op (https://github.com/MOSSLab-MIT/PandaModelsBackend), which allows for higher fidelity RL2Grid simulations",
      "RL2Grid simulations that took weeks before the engagement now run in days, enabling more scientific experimentation in less time",
      "Simulations can be run with higher fidelity models, allowing for more realistic power-grid studies",
    ],
    screenshots: [
      {
        url: "/project-images/rl2grid-performance.png",
        alt: "RL2Grid power grid simulation interface",
        caption:
          "Left: Performance profiling visualization showing execution times for different components. Right: Architecture diagram showing the integration of Grid2op with PowerModels.jl, pandapower, and other related libraries.",
        description:
          "This visualization demonstrates the RL2Grid simulation environment that uses the Grid2Op power control framework running with Gymnasium for reinforcement learning research in power grid operations. The interface shows how RL agents interact with realistic power grid systems to devise flexible control strategies for modern power grids. Through our performance optimization work, these simulations now run 2x+ faster and scale to 20x more instances, transforming experiment runtime from weeks to days. The integration with PowerModels.jl enables high-fidelity simulations that provide more realistic power-grid studies for researchers exploring automated power grid operations and discoveries.",
      },
    ],
    detailedTechnologies: {
      backend: [
        { name: "Python", url: "https://python.org/" },
        { name: "Julia", url: "https://julialang.org/" },
      ],
      machineLearning: [
        {
          name: "Machine Learning",
          url: "https://en.wikipedia.org/wiki/Machine_learning",
        },
      ],
      simulation: [
        {
          name: "Power Grid Simulation",
          url: "https://grid2op.readthedocs.io/",
        },
      ],
      profiling: [
        { name: "Py-Spy", url: "https://github.com/benfred/py-spy" },
        { name: "speedscope", url: "https://speedscope.app/" },
      ],
      cicd: [
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      optimization: [
        {
          name: "Performance Optimization",
          url: "https://en.wikipedia.org/wiki/Performance_optimization",
        },
      ],
    },
  },
  {
    id: 10,
    title: "QCSchema v2: Next-Generation Structured Data for Quantum Chemistry",
    description:
      "QCSchema is a standardized data format for representing quantum chemistry computations, originally developed by the Molecular Sciences Software Institute (MolSSI). It facilitates interoperability across software by defining structured input and output for basic computations such as total energy or gradients and by tracking software provenance. QCSchema is implemented as Pydantic classes in the Python module QCElemental. Another module, QCEngine, is a QCSchema I/O runner for over twenty full-featured or specialized computational molecular sciences codes. Together, these serve as part of the software stack for several research projects.  ",
    summary:
      "Modernized data schema for quantum chemistry computations and procedures",
    imageUrl: "/project-images/qcschema-v1v2.png",
    category: ["computational-science", "chemistry"],
    githubUrl: ["https://github.com/MolSSI/QCElemental/"],
    demoUrl: ["https://molssi.org/software/qcarchive/"],
    featured: false,
    achievements: [
      "Updated schema expression from Pydantic v1 API to v2 to unblock downstream projects",
      "Implemented data layout changes to make schema more composable, reusable, and intuitive",
      "Made old and new schema concurrently tested and available from the same package to facilitate adoption and maintenance",
      "QCSchema is now ready to add community-requested features",
    ],
    projectDetails: {
      startDate: "August 2024",
      endDate: "December 2024",
      source: "Georgia Tech",
      scientificDomain: "Quantum Chemistry",
      partners: [
        { name: "David Sherrill (Georgia Tech)", profileUrl: "" },
        {
          name: "Ben Pritchard (The Molecular Sciences Software Institute)",
          profileUrl: "",
        },
      ],
      softwareEngineers: [{ name: "Lori A. Burns", profileUrl: "" }],
    },
    goals: [
      "Implement and test a modestly redesigned v2 QCSchema expressed in a new API and using an improved data layout for modularity and predictability",
      "Ensure concurrent access to both v1 and v2 schemas to allow seamless transition downstream and facilitate adoption and maintenance",
    ],
    softwareSolution:
      "During this engagement, we modernized QCSchema by implementing a next-generation schema architecture (v2) while preserving access to the longstanding v1 models. Because QCSchema models are deeply nested and widely reused across multiple software projects, the transition from Pydantic v1 to v2 was non-trivial—these APIs are incompatible and cannot be mixed—making an abrupt switch infeasible without risking disruption to the broader ecosystem. To resolve this, we separated v1 and v2 models into distinct namespaces within QCElemental, allowing users to import and use either version as needed. We also refactored the schema's internal structure to reduce redundancy and improve composability, transitioning from inheritance-heavy models to a cleaner, more modular design based on community planning. This required substantial changes to model definitions, the addition of version-aware conversion functions, and updates to QCEngine's internal execution paths to support both versions. Continuous integration tests were expanded to ensure parity and stability across the dual-version system.",
    impact: [
      "QCElemental 'next' branch and alpha release",
      "QCEngine 'next' branch and alpha release",
      "Presentation on future utility of QCSchema for related domain scientists at JuliaMolSim workshop",
      "Draft pull requests for adoption at Psi4 and QCManyBody repositories",
      "Unblocked downstream projects (QCArchive, Psi4, OpenForceField) wanting to use Pydantic v2 API",
      "Laid foundation for new features and schema models requested by the community",
      "Enabled two grant proposals to assume the presence of a ready-for-development v2 base",
    ],
    screenshots: [
      {
        url: "/project-images/qcschema-v1v2.png",
        alt: "QCSchema v1 vs v2 architecture visualization",
        caption:
          "Side-by-side comparison of QCSchema v1 and v2 architecture, showing the improved structure and organization in v2",
        description:
          "The image above illustrates the architectural improvements in QCSchema v2 compared to v1. The new schema architecture is more composable, reusable, and intuitive, with clearer data organization and relationships between components. The diagram shows how the different modules and components of the schema interact with each other, providing a comprehensive view of the quantum chemistry data structure. By updating the schema expression from Pydantic v1 API to v2, we unblocked downstream projects that were dependent on these modernizations. The new structure makes it easier for quantum chemistry researchers to maintain and extend the schema, while maintaining backward compatibility with existing implementations.",
      },
    ],
    detailedTechnologies: {
      backend: [{ name: "Python", url: "https://python.org/" }],
      framework: [{ name: "Pydantic", url: "https://pydantic.dev/" }],
      dataStructures: [
        {
          name: "Schema Design",
          url: "https://en.wikipedia.org/wiki/Database_schema",
        },
        { name: "JSON Schema", url: "https://json-schema.org/" },
        {
          name: "QCElemental",
          url: "https://github.com/MolSSI/QCElemental/",
        },
        { name: "QCEngine", url: "https://github.com/MolSSI/QCEngine/" },
      ],
      cicd: [
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      science: [
        {
          name: "Quantum Chemistry",
          url: "https://en.wikipedia.org/wiki/Quantum_chemistry",
        },
      ],
    },
  },
  {
    id: 11,
    title: "CoAuthor",
    description:
      "CoAuthor is an intelligent writing assistant designed to go beyond traditional autocomplete tools by recognizing and responding to user behavioral and cognitive patterns during the writing process. By analyzing how individuals write—such as pauses, edits, and revision styles—CoAuthor provides more personalized and context-aware writing support. In addition to assisting writers, CoAuthor serves as a research platform. It allows behavioral scientists and HCI researchers to define custom patterns of interest and specify corresponding interventions. This flexibility enables experiments on how different types of feedback affect the writing process, offering a new tool for studying cognitive behavior through digital text interaction.",
    summary:
      "Intelligent writing assistant that recognizes behavioral patterns and serves as a research platform for studying cognitive behavior through digital text interaction",
    imageUrl: "/project-images/image_1752593129015.png",
    category: ["ai-ml", "human-computer-interaction"],
    githubUrl: ["https://github.com/gt-sse-center/coauthor-interface"],
    demoUrl: ["https://coauthor.stanford.edu/"],
    featured: false,
    achievements: [
      "Developed modular, extensible codebase enabling rapid development of new behavioral pattern detectors",
      "Created comprehensive developer documentation to guide researchers in creating and deploying custom patterns",
      "Implemented automated CI pipeline with scheduled testing to catch issues early",
      "Improved system security through dependency upgrades and modern package management",
      "Simplified the process for researchers to integrate their own behavioral pattern detectors",
      "Enhanced configurability for selecting which user behavioral patterns to track during writing sessions",
    ],
    projectDetails: {
      startDate: "March 2025",
      endDate: "June 2025",
      source: "VISS",
      scientificDomain: "Human-Computer Interaction",
      partners: [
        { name: "Qian Yang", profileUrl: "" },
        { name: "Talia Wise", profileUrl: "" },
      ],
      softwareEngineers: [
        { name: "Varun Narayan", profileUrl: "" },
        {
          name: "Robin Fiévet",
          profileUrl: "https://www.linkedin.com/in/robin-fievet-6189a431/",
        },
      ],
    },
    goals: [
      "Simplify the process for researchers to integrate their own behavioral pattern detectors into CoAuthor",
      "Improve configurability for selecting which user behavioral patterns to track during a writing session",
      "Ensure long-term maintainability and extensibility of the codebase for new developers and research contributors",
    ],
    softwareSolution:
      "The CoAuthor codebase was refactored to adopt a modular architecture that clearly separates behavioral pattern detection logic from the core system. Researchers can now define new behavioral patterns through a standardized interface and easily configure which patterns to monitor. To ensure software quality and ease of collaboration, modern software engineering practices were introduced, including unit and integration tests, GitHub Actions for CI/CD, and uv for secure and consistent dependency management. This rework also addressed previous security vulnerabilities.",
    impact: [
      "CoAuthor is an ongoing project, but we anticipate that the impact would be that researchers are able to more effectively run CoAuthor writing studies, perform more detailed analysis of the resultant writing logs, and easily add new plugins to study new writing behaviors",
      "Enables experiments on how different types of feedback affect the writing process",
      "Provides new tool for studying cognitive behavior through digital text interaction",
      "Facilitates behavioral science and HCI research through customizable pattern detection",
    ],
    detailedTechnologies: {
      backend: [
        { name: "Flask", url: "https://flask.palletsprojects.com/" },
        { name: "Python", url: "https://python.org/" },
      ],
      frontend: [
        {
          name: "HTML/CSS",
          url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        },
        { name: "Quill.js", url: "https://quilljs.com/" },
        { name: "jQuery", url: "https://jquery.com/" },
      ],
      ai: [
        { name: "OpenAI API", url: "https://openai.com/api/" },
        { name: "spaCy", url: "https://spacy.io/" },
        { name: "NLTK", url: "https://www.nltk.org/" },
      ],
      development: [
        { name: "uv", url: "https://docs.astral.sh/uv/" },
        { name: "pytest", url: "https://pytest.org/" },
      ],
      cicd: [
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
    },
    screenshots: [
      {
        url: "/project-images/coauthor-demo.gif",
        alt: "CoAuthor interface demonstration",
        caption:
          "CoAuthor interface showing real-time writing assistance and behavioral pattern detection",
        description:
          "This demonstration shows CoAuthor's intelligent writing assistant in action. The interface tracks user behavioral patterns during the writing process, such as pauses, edits, and revision styles, to provide personalized and context-aware writing support. This real-time feedback system enables researchers to study cognitive behavior through digital text interaction while assisting writers with more intelligent autocomplete and writing suggestions.",
      },
    ],
  },
  {
    id: 12,
    title: "Psi4 v1.10 Release",
    description:
      "Psi4 is a widely used open-source quantum chemistry package that integrates hundreds of approximation methods into a unified framework with a Python interface. This project focused on releasing v1.10 with new methods, bug fixes, and improvements accumulated since the February 2024 v1.9.1 release. The work involved processing academic developers' pull requests, fixing bugs in both Psi4 and continuous integration environments, and contributing user-requested features. The release includes relativistic integrals, resolution-of-the-identity improvements, London dispersion corrections, explicitly correlated methods, and possibly the first implementation of a domain-based local pair natural orbital method outside the Orca program.",
    summary:
      "Official release of Psi4 v1.10 quantum chemistry package with new methods, bug fixes, and improved interfaces",
    imageUrl: "/project-images/image_1752603154803.png",
    category: ["chemistry", "computational-science"],
    githubUrl: ["https://github.com/psi4/psi4"],
    demoUrl: [],
    featured: false,
    achievements: [
      "Integrated new quantum chemistry methods including relativistic integrals",
      "Updated interfaces with external dependencies and programs",
      "Adopted C++20 standard and CMake v4.0 compatibility",
      "Expanded conda binary builds for Linux ARM64 architecture",
      "Simplified installation process with conda install psi4 -c conda-forge",
    ],
    projectDetails: {
      startDate: "April 2025",
      endDate: "June 2025",
      source: "Georgia Tech",
      scientificDomain: "Quantum Chemistry",
      partners: [
        {
          name: "David Sherrill",
          profileUrl: "",
        },
        {
          name: "Daniel Crawford",
          profileUrl: "",
        },
      ],
      softwareEngineers: [{ name: "Lori Burns", profileUrl: "" }],
    },
    goals: [
      "Integrate proposed changes, implementations of new journal-published QC methods, and bug fixes accumulated since the February 2024 v1.9.1 release",
      "Process academic developers' pull requests with content and efficiency corrections",
      "Ensure testing and documentation requirements are met",
      "Make access as intuitive as possible for accustomed Psi4 users",
    ],
    softwareSolution:
      "During this engagement, we processed academic developers' pull requests by suggesting content and efficiency corrections, requiring that testing and documentation be present, and ensuring that access is as intuitive as possible for accustomed Psi4 users. We also contributed numerous pull requests fixing Psi4 bugs, fixing continuous integration environment bugs, and contributing user-requested features. Additionally, we updated interfaces with external dependencies that provide new capabilities and improved performance.",
    impact: [
      "New methods and scientific capabilities, including relativistic integrals, resolution-of-the-identity-like improvements, London dispersion corrections for an intermolecular decomposition method, reintroduction of explicitly correlated methods, and possibly the first implementation of a domain-based local pair natural orbital method outside the Orca program",
      "Updated and expanded interfaces to external programs, including a new linearly-scaled exchange matrix program with GPU acceleration, formal transition to an official upstream integral library release, possibly an interface to a new self-consistent field orbital solver, an interface to a replacement many-body expansion of molecular clusters program, and general updates to upstream dependencies",
      "Development and distribution improvements, including adopting the C++20 standard, CMake v4.0 compatibility, expanded conda binary builds for Linux ARM64 architecture, and a simple conda install psi4 -c conda-forge install without workarounds",
      "Bug fixes, efficiency improvement, and user requests addressed",
      "Considerable downstream use in academia, education, and industry with complex software stacks requiring official releases to take advantage of new features and fixes",
    ],
    detailedTechnologies: {
      core: [
        { name: "C++", url: "https://isocpp.org/" },
        { name: "Python", url: "https://python.org/" },
      ],
      development: [
        { name: "CMake", url: "https://cmake.org/" },
        { name: "pytest", url: "https://pytest.org/" },
      ],
      cicd: [
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      documentation: ["Sphinx"],
      computing: ["GPU Computing"],
      scienceSpecific: ["Quantum Chemistry"],
    },
    screenshots: [
      {
        url: "/project-images/image_1752603348921.png",
        alt: "Psi4 Ecosystem c. 2025 - Comprehensive network diagram showing upstream and downstream dependencies",
        caption:
          "Psi4 Ecosystem c. 2025 - Network diagram showing the complex interconnections between Psi4 and its upstream/downstream dependencies",
        description:
          "Psi4 Ecosystem c. 2025 - Network diagram showing the complex interconnections between Psi4 and its upstream/downstream dependencies This comprehensive ecosystem diagram illustrates Psi4's position in the landscape of reusable quantum chemistry software projects as of 2025. The diagram shows Psi4 at the center (in orange) with its extensive network of upstream dependencies (mostly optional libraries and tools that Psi4 can use) and downstream connections (programs that use Psi4's capabilities). The upstream section includes fundamental libraries like Python, NumPy, and specialized quantum chemistry tools, while the downstream section shows how Psi4 integrates with workflow managers, databases, post-processing components, and other computational chemistry libraries. This ecosystem view demonstrates the collaborative nature of scientific software development and highlights Psi4's role as both a consumer of foundational tools and a provider of quantum chemistry capabilities to the broader scientific community.",
      },
    ],
  },
  {
    id: 13,
    title: "XTribs Engagement",
    description:
      "The triangulated irregular network (TIN)-based Real-time Integrated Basin Simulator (tRIBS) simulates the interactions between hydrological, ecological, and geomorphic processes occurring on complex land surfaces. Despite its success as a research tool (100+ publications with 4000 citations), it has not yet been deployed for its original goal as a production tool for mitigating hydrometeorological and geomorphic hazards. This engagement focused on delivering performance improvements, better test coverage, and general software engineering best practices to the GT-landslide simulation as run with the GT version of tRIBS (GT-tRIBS).",
    summary:
      "Performance optimization and software engineering improvements for landslide simulation achieving 2x speedup",
    imageUrl: "/project-images/image_1753815120882.png",
    category: ["computational-science", "earth-atmospheric-sciences"],
    githubUrl: ["https://github.com/mevrens/tRIBS-GT-SSE"],
    demoUrl: [],
    featured: false,
    achievements: [
      "2x faster GT-landslide simulations demonstrated to researchers",
      "Delivered accelerated tRIBS (xTRIBS) code base repository to researchers",
      "Greatly improved speed of GT-Landslide simulations enabled researchers to generate critical data",
      "Added test cases and basic code coverage to the repository",
      "Designed function cache for transparent acceleration of key calculations",
    ],
    projectDetails: {
      startDate: "November 2023",
      endDate: "May 2024",
      source: "Georgia Tech",
      scientificDomain: "Hydrology, Ecology",
      partners: [
        { name: "Rafael Bras", profileUrl: "" },
        { name: "Evren Soylu", profileUrl: "" },
        { name: "Elisa Arnone", profileUrl: "" },
      ],
      softwareEngineers: [{ name: "Ketan Bhardwaj", profileUrl: "" }],
    },
    goals: [
      "Deliver performance improvements to GT-tRIBS landslide simulation",
      "Improve test coverage and implement software engineering best practices",
      "Address multi-stakeholder, multi-variant software stack challenges",
      "Maximize codebase performance, test coverage, and compatibility",
    ],
    softwareSolution:
      "During this engagement, we used software engineering tools to set up the landslide simulations at our end and to add test cases and basic code coverage to the repository. We then analyzed the codebase in detail for potential code-level structural issues and profiled execution of GT-tRIBS for the GT landslide simulation. This analysis uncovered a hidden performance bottleneck that was causing significant slowdown due to repeated calculations of the same physical phenomena. To address performance bottlenecks, we designed a function cache which provided a transparent acceleration of key calculations with the existing GT-tRIBS codebase.",
    impact: [
      "2x faster GT-landslide simulations demonstrated to researchers",
      "Delivered accelerated tRIBS (xTRIBS) code base repository to researchers",
      "Greatly improved speed of GT-Landslide simulations enabled researchers to generate critical data for their ongoing project on landslide simulation",
      "Added comprehensive test cases and basic code coverage to improve software reliability",
      "Identified and resolved hidden performance bottlenecks through detailed code analysis and profiling",
      "Implemented function cache for transparent acceleration of key calculations",
    ],
    screenshots: [
      {
        url: "/project-images/image_1753815120882.png",
        alt: "Landslide simulation visualization",
        caption:
          "Visualization of landslide simulation results from the optimized GT-tRIBS system",
        description:
          "This visualization represents the type of landslide simulations optimized during the XTribs engagement. The triangulated irregular network (TIN)-based Real-time Integrated Basin Simulator (tRIBS) simulates complex interactions between hydrological, ecological, and geomorphic processes on land surfaces. Our optimization work focused on accelerating these computationally intensive simulations through detailed code analysis, profiling, and implementation of function caching. The 2x performance improvement achieved allows researchers to generate critical data more efficiently for their ongoing landslide simulation projects.",
      },
    ],
    detailedTechnologies: {
      core: [{ name: "C++", url: "https://isocpp.org/" }],
      development: [
        { name: "g++", url: "https://gcc.gnu.org/" },
        { name: "Doxygen", url: "https://www.doxygen.nl/" },
        { name: "Dot", url: "https://graphviz.org/" },
      ],
      profiling: [
        {
          name: "Intel vTune",
          url: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/vtune-profiler.html",
        },
      ],
      simulation: [
        {
          name: "tRIBS",
          url: "https://github.com/mevrens/tRIBS-GT-SSE",
        },
      ],
    },
  },
  {
    id: 14,
    title: "Library of Integer Relations and Constants (LIReC)",
    description:
      "LIReC (Library of Integer Relations and Constants) is an open-source Python library that automates the discovery of exact algebraic relations among high-precision numerical constants using PSLQ-based algorithms. Traditionally, running large-scale searches for integer relations has required custom HPC setups or AWS-centric pipelines. This engagement extended LIReC's reach by porting its core compute routines to the BOINC distributed-computing framework, enabling volunteer computing resources and reducing cloud costs while broadening compute capacity for mathematical research.",
    summary:
      "BOINC integration for distributed mathematical computation enabling volunteer computing for integer relation discovery",
    imageUrl: "/project-images/image_1752606539171.png",
    category: ["data-science", "computational-science"],
    githubUrl: ["https://github.com/gt-sse-center/LIReC"],
    demoUrl: [],
    featured: false,
    achievements: [
      "Created a forked LIReC repository with a BOINC integration layer",
      "Migrated AWS S3 bucket tasks into BOINC work units, enabling seamless job distribution",
      "Authored comprehensive BOINC deployment documentation in the README",
      "Streamlined releases with automated CI/CD, minimizing manual errors and accelerating iteration",
      "Enabled LIReC to harness volunteer and institutional BOINC resources",
    ],
    projectDetails: {
      startDate: "June 2024",
      endDate: "October 2024",
      source: "VISS",
      scientificDomain:
        "Computational Mathematics / Numeric Relation Discovery",
      partners: [
        { name: "Ido Kaminer", profileUrl: "" },
        { name: "Itay Beit Halachmi", profileUrl: "" },
      ],
      softwareEngineers: [
        {
          name: "Robin Fiévet",
          profileUrl: "https://www.linkedin.com/in/robin-fievet-6189a431/",
        },
      ],
    },
    goals: [
      "Automate build, bundle, and deployment steps via CI pipelines to ensure reproducible releases",
      "Provide clear, versioned documentation on BOINC setup and LIReC usage",
      "Deploy LIReC's core calculation engine on BOINC to leverage distributed compute resources",
    ],
    softwareSolution:
      "We forked the upstream RamanujanMachine/LIReC repository and established a dedicated gt-sse-center/LIReC project. A new boinc/ directory contains wrapper scripts and configuration for BOINC-based job submission. Two Python CLI tools, run_lirec.py and run_jobs.py, were enhanced with structured logging and retry logic to manage BOINC work units. The setup.py packaging script was extended to support both local installation and containerized builds. We configured GitHub Actions workflows for automated testing, building, and deployment.",
    impact: [
      "Enabled LIReC to harness volunteer and institutional BOINC resources, reducing cloud costs and broadening compute capacity",
      "Provided the PIs a turnkey BOINC pipeline to run large-scale integer-relation searches",
      "Created a forked LIReC repository with a BOINC integration layer",
      "Migrated AWS S3 bucket tasks into BOINC work units, enabling seamless job distribution",
      "Authored comprehensive BOINC deployment documentation in the README",
      "Streamlined releases with automated CI/CD, minimizing manual errors and accelerating iteration",
    ],
    screenshots: [
      {
        url: "/project-images/image_1752606874783.png",
        alt: "BOINC application management interface showing LIReC integration",
        caption:
          "BOINC application management interface showing successful LIReC integration with 'LIReC using BOINC instead of AWS' entry",
        description:
          "This screenshot shows the BOINC application management interface from The Ramanujan Machine project, demonstrating the successful integration of LIReC with the BOINC distributed computing platform. The interface displays various applications including the key 'LIReC using BOINC instead of AWS' entry (ID: 7), which represents our successful migration from expensive cloud infrastructure to volunteer computing resources. This integration allows researchers to perform large-scale searches for integer relations among mathematical constants by leveraging distributed computing power from volunteer networks, significantly reducing computational costs while increasing accessibility to high-performance computing for mathematical research.",
      },
    ],
    detailedTechnologies: {
      backend: [{ name: "Python", url: "https://python.org/" }],
      distributedComputing: [
        { name: "BOINC", url: "https://boinc.berkeley.edu/" },
        { name: "cx_Freeze", url: "https://cx-freeze.readthedocs.io/" },
      ],
      cicd: [
        { name: "CI/CD", url: "https://en.wikipedia.org/wiki/CI/CD" },
        {
          name: "GitHub Actions",
          url: "https://github.com/features/actions",
        },
      ],
      apis: [{ name: "LIReC", url: "https://github.com/gt-sse-center/LIReC" }],
    },
    references: [
      'H. R. P. Ferguson, D. H. Bailey, and S. Arno, "Analysis of PSLQ, an integer relation finding algorithm," Mathematics of Computation, vol. 68, no. 225, pp. 351–369, 1999.',
      'D. P. Anderson, "BOINC: A System for Public-Resource Computing and Storage," in Proceedings of the 5th IEEE/ACM International Workshop on Grid Computing, 2004.',
    ],
  },
];

import { ProjectSchema } from "@/schema";

(() => {
  const errors = projects
    .map((p) => ProjectSchema.safeParse(p))
    .filter((r) => !r.success);

  if (errors.length) {
    console.error("🛑 Static projects validation failed:");
    errors.forEach((r) => {
      console.error(r.error.issues);
    });
  }
})();
