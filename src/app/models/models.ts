export interface Education {
  institute: string;
  course: string;
  duration: string;
  score: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Skill {
  name: string;
  level: string;
  icon: string;
  iconUrl:string;
  icon2?: string; //  (Icones opcionais)
  iconUrl2?: string; //  (Icones opcionais)
  icon3?: string;  //  (Icones opcionais)
  iconUrl3?: string;  //  (Icones opcionais)

}

export interface Project {
  title: string;
  technologies: string;
  description: string[];
  projectulr: string;
}
