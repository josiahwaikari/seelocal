import { User, Session, ISODateString } from "next-auth";

export type FormState = {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
};

export interface ProjectInterface {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
  id: string;
  createdBy: {
    name: string;
    email: string;
    avatarUrl: string;
    id: string;
  };
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  description: string | null;
  avatarUrl: string;
  githubUrl: string | null;
  linkedinUrl: string | null;
  projects: {
    edges: { node: ProjectInterface }[];
    pageInfo: {
      hasPreviousPage: boolean;
      hasNextPage: boolean;
      startCursor: string;
      endCursor: string;
    };
  };
}

export type Role = "USER" | "ADMIN";
export type Tier = "FREE" | "PREMIUM" | "PREMIUMPLUS";

export interface SessionInterface extends Session {
  user: User & {
    id: string;
    name: string;
    email: string;
    image: string;
    role: Role;
    tier: Tier;
    subscribed: boolean;
  };
  expires: ISODateString;
}

export interface ProjectForm {
  title: string;
  description: string;
  image: string;
  liveSiteUrl: string;
  githubUrl: string;
  category: string;
}

export interface Document {
  name: string;
  mime: string;
  type: string;
  creatorId: string;
  premium: boolean;
  blurred?: string;
  thumbnailName?: string;
  thumbnailMime?: string;
}

export interface ImageSize {
  width: number;
  height: number;
}

export interface Creator {
  id: string;
  name: string;
  image: string;
  photoLength: string;
  videoLength: string;
}
