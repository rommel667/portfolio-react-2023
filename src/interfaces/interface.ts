export interface ILink {
  name: string;
  link: string;
}

export interface IStack {
  name: string;
  color: string;
}

export interface IProject {
  id: number;
  title: string;
  description: string;
  images: string[];
  stacks: IStack[];
  github: ILink[];
  website?: ILink;
}
