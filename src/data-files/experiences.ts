export interface Experience {
  period: string;
  place: string;
  points: string[];
  role: string;
}

export const experiencesEn: Experience[] = [
  {
    period: 'January 2020 - Present',
    place: 'Nobina Europe',
    points: [
      'Full stack web developer with Angular, .NET Core, SQL Server, Azure Cloud, Azure DevOps'
    ],
    role: 'Developer'
  },
  {
    period: '2017 - 2020',
    place: 'Nordax Bank',
    points: [
      'Full stack web development with React, .NET Core and SQL Server',
      'Development and management of various applications using the .NET Framework and SQL Server',
      'TFS and Octopus Deploy'
    ],
    role: 'Developer'
  },
  {
    period: '2015-2017',
    place: 'Chas Visual Management',
    points: [
      'Full stack web development with various frameworks and technologies',
      'Taugt programming at Lernia Yrkeshögskola, basic OOP with C#, advanced web client development with AngularJS and agile software development'
    ],
    role: 'Consultant'
  }
];

export const experiencessv: Experience[] = [
  {
    period: 'Januari 2020 - Pågående',
    place: 'Nobina Europe',
    points: [
      'Full stack webbutvecklare med Angular, .NET Core, SQL Server, Azure Cloud, Azure DevOps'
    ],
    role: 'Systemutvecklare'
  }
];
