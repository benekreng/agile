### Overview
The purpose of this document is to outline overarching purpose of the software proposed for the ASP CM2020 UoL class. The project will have the following scope

+ The software will take the users data by file upload  and then generate graphics to display the data back to the user. The software will proccess the data and ensure any data corruptions / omissions are processed without crashing the core program. 

+ The software will utilise the external modules charts.js and p5.js to create the graphics required. The user will have the option to use pre-stored data if they do not have any data of their own to use.

+ The project has 2 main dealines to achieve:
  + **MIDTERM:** 27 Jun 22
  + **SUBMISSION:** 5 Sep 22

**This document is arranged as follows:**
+ Project overview
+ Product description
+ Product functional capabilites
+ User roles 
+ Use cases
+ General contraints
+ Project assumptions
+ Interaction with other software
+ Specific function descriptions 
+ External interfaces
+ Performance 
+ Design constraints
+ Reliability, Availability, Maintainability
+ Configurability and Compatibility
+ Installability
+ Usability
+ Additional requirements
+ Data
+ Administration 
+ Project documentation 
+ Requirements
+ References 


### Product description
This software will be a free piece of Data Science software that will allow the user to upload their own data, in a multitude of data types, and the software will then produce graphics of the data uploaded.

The software will have the following features:
+ **Data upload:** The user will be able to upload their own data. There will also be pre-loaded data for the user to use if they do not load their own data. 

+ **Error management:** The software will manage omissions, incorrect data types and other issues that would typically crash the software within the uploaded data file from the user. The software will report any errors to the user and inform the user what the outcome of these issues is - eg. 3 lines in data corrupted, they have been omitted
  
+ **Graphic generation:** The software will generate graphics for the data that is being used. 
  
+ **Graphics export:** The software will give the user an option to save the graphics to disk should they be required.  





# Anything below this point needs finalised


###Product functional capabilities
Present a list of the functions that the software will be required to perform. If a product feature comprises several functional capabilities, a table may be developed to illustrate these relationships. The list of functional capabilities may be an updated version of the capabilities listed in the Software Requirements Document.

###User Roles
Describe the intended users of the software in terms of job roles, specialized knowledge, skill levels, etc. Considers various user roles such as managers, administrators, auditors, etc.

###Use Cases for all operations
Describe how persons will normally use the software, and the tasks they will most frequently perform. Also covers how users might use the software on an occasional basis, such as creating data backups or importing data from another program.

###General constraints
Describe any algorithm limitations, user interface limitations, data limitations, etc. Include items such as minimum space or room needed to house equipment, type of electrical and HVAC required (e.g. conditioned power), maintenance requirements. Also, state if training is required for optimum use, or if calculated results are only applicable in certain situations.

###Assumptions
List any assumptions that were made in specifying the functional requirements.

###Other software
How does the program interact with other software, such as spreadsheets, word processing or presentation software? For example, can a user cut and paste from the application to other Windows software programs? Does the program import/export data to other software? Does the program use any communication, integration, or protocols to exchange data with other software?


###Specific Function Descriptions
This section is repeated for each function of the software. Some examples of functions are: engineering calculations, sorting or sequencing, other operations relating inputs to outputs, validity checks on inputs, error handling and recovery.

Describe the function and its role in the software.

Describe the inputs to the function. Where user interface (UI) elements are present, these are described. Examples of UI elements are check boxes, dropdown lists, and alphanumeric fields. Input validation strategy, allowed data types and value ranges are specified for each input.

Describe what is done by the function. Where algorithms, equations, or other logic are used, they are described here. If calculations are done utilizing the methods of specific standards or references, these are cited. Database definitions are also included where relevant.

Describe the outputs of the function. Where a user interface description is relevant, it is included. Define any reports.


###External Interfaces
The interfaces in this section are specified by documenting: the name and description of each item, source or input, destination or output, ranges, accuracy and tolerances, units of measure, timing, display formats and organization, and data formats.

###User Interfaces
Describe all major screens, pages, forms, including any complex dialog boxes. This is usually best done via simulated, non-functioning screen shots, and may take the form of a separate document.

The navigation flow of the windows, menus, and options is described, along with the expected content of each window. Examples of items included are screen resolutions, color scheme, primary font type and size. Discussion also includes how input validation will be done, and how data will be protected from accidental changes. Specific items are described for each screen such as input fields, control buttons, sizing options, and menus.

###Hardware Interfaces
Describe the equipment needed to run the software, and also other output or input devices such as printers or handheld devices.

###Software Interfaces
Describe any software that will be required in order for the product to operate fully. Include any in-house software or commercial applications that customers will be utilizing together with the planned software. Also describes any software that the software product will interact with such as operating system platforms supported, file import and export, networking, automation, or scripting. Specify whether the users must provide the interfacing software themselves, and any special licensing requirements.

###Communication Interfaces
Describes how the software product will communicate with itself (for multi-platform applications) or other software applications, including items such as networking, email, intranet, and Internet communications.

###Performance
Discuss items such as response times, throughput requirements, data volume requirements, maximum data file size or problem complexity, maximum number of concurrent uses, and peak load requirements (for web-based applications). Includes expected response times for entering information, querying data files and databases, performing calculations of various complexities, and importing/exporting data.

###Design Constraints
Examples of constraints that affect software design choices are items such as memory constraints involving minimum and maximum RAM and hard disk space, and limitations arising from hardware, software or communications standards.

###Attributes
Security
Describe any password-protected access levels such as operator, engineer/modeler, manager, database administrator-and which functionality will be accessible to each access level. If relevant, describes the planned approach to locking the software.

###Reliability, Availability, Maintainability
Describe requirements items such as days or weeks of continuous operation, strategy for data recovery, code structuring for ease of future modification.

###Configurability and Compatibility
Describe requirements such as those connected with individual customization or operation in specific computing environments.

###Installability
Describe the planned method for installation: done by the user independently, done by customer company internal IT services, done by an external contractor. Specifies the handling of such items as data transfer from prior releases, and the presence of software elements from prior releases.

###Usability
Describe items that will ensure the user-friendliness of the software. Examples include error messages that direct the user to a solution, input range checking as soon as entries are made, and order of choices and screens corresponding to user preferences.

###Additional Requirements
Describe other characteristics the software must have, that were not covered in the prior sections.

###Database
Describe any specific requirements relating to the database, such as database type (e.g. relational), capability to handle large text fields, real-time capability (e.g. handling an incoming data stream, as from instruments), multi-user capability, special requirements relating to queries and forms.

###Administration
Include any periodic updating or data management needed.

###User documentation
Describe the user documentation to be delivered with the software, including both hard copy and online requirements.

###Other requirements
Describe any other requirements not already covered above that need to be considered during the design of the software.




###Reference for specification template
https://github.com/joelparkerhenderson/functional-specifications-template
