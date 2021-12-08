export interface Class {
  class: {
    name: string;
    difficulty: string;
    index: number;
  };
  texts: Array<{
    id: number;
    image: string;
    content: string;
    classEntity: {
      id_class: number;
      name: string;
      difficulty: string;
      index: number;
    };
  }>;
  questions: Array<{
    question: {
      id: number;
      title: string;
      image: string;
      content: string;
    };
    alternatives: Array<{
      id: number;
      text: string;
      correct: boolean;
    }>;
  }>;
}

export interface SimpleClass {
  id_class: number;
  name: string;
  difficulty: string;
  index: number;
}
