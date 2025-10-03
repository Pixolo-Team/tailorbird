export interface TeamInfo {
  categories: { id: string; name: string }[];
  members: TeamMember[];
}

export interface TeamMember {
  name: string;
  designation: string;
  photo_url: string;
  linkedin: string;
  x: string;
}
