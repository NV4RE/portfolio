export interface Profile {
  profile_img: string;
  f_name: string;
  l_name: string;
  jd: string;
}

export interface Skill {
  name: string;
  alias: string[];
  experienced: boolean;
}

export interface Contact {
  link: string;
  label: string;
}

export interface Experience {
  logo: string;
  company_name: string;
  description: string;
  job_title: string;
  from: number;
  to: number;
}

export interface Resume {
  profile: Profile;
  about_me: string[];
  skills: Skill[];
  contacts: Contact[];
  experiences: Experience[];
  pages: string[];
  accesses: string[];
}
