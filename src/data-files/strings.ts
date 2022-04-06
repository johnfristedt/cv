import { Education, educationsEn, educationsSv } from './educations';
import { Experience, experiencesEn, experiencessv as experiencesSv } from './experiences';
import { skillsEn, skillsSv } from './skills';

export interface Months { january: string, february: string, march: string, april: string, may: string, june: string, july: string, august: string, september: string, october: string, november: string, december: string }

export interface Strings {
  experience: string;
  experiences: Experience[];
  education: string;
  educations: Education[];
  skillsTitle: string;
  skills: string[];
  months: Months,
  linkedIn: string
}

const en: Strings = {
  experience: 'Experience',
  experiences: experiencesEn,
  education: 'Education',
  educations: educationsEn,
  skillsTitle: 'Skills',
  skills: skillsEn,
  months: { january: 'January', february: 'February', march: 'March', april: 'April', may: 'May', june: 'June', july: 'July', august: 'August', september: 'September', october: 'October', november: 'November', december: 'December' },
  linkedIn: 'LinkedIn Profile'
}

const sv: Strings = {
  experience: 'Erfarenhet',
  experiences: experiencesSv,
  education: '',
  educations: educationsSv, 
  skillsTitle: '',
  skills: skillsSv,
  months: { january: '', february: '', march: '', april: '', may: '', june: '', july: '', august: '', september: '', october: '', november: '', december: '' },
  linkedIn: 'LinkedIn Profil'
}

export const strings = {
  en, sv
}
