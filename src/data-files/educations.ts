export interface Education {
  place: string;
  degree: string;
  info: string;
}

export const educationsEn: Education[] = [
  {
    place: 'Blekinge Institute of Technology',
    degree: 'Bachelor of Media Science',
    info: 'Studied primarily game development with some complimentary design and web development courses.'
  },
  {
    place: 'Lernia',
    degree: 'Vocational College',
    info: 'Full stack web development with agile methods.'
  }
];

export const educationsSv: Education[] = [
  {
    place: 'Blekinge Tekniska Högskola',
    degree: 'Kandidatexamen i Mediateknik',
    info: 'Studerade främst spelutveckling med kompletterande design och webbutvecklingskurser.'
  },
  {
    place: 'Lernia',
    degree: 'Yrkeshögskola',
    info: 'Full stack webbutveckling med agila metoder.'
  }
]