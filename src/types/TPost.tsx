type TPost = {
  id: number;
  title: string;
  content: string;
  user: {
    id: number;
    name: string;
  };
};

export type { TPost };
