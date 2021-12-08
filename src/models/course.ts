import { SimpleClass } from "./Class";

export interface Course {
  id_course: number;
  id_user_author: number;
  name: string;
  duration: string;
  difficulty: string;
  description: string;
  icon: string;
}

export interface CourseInfo {
  courseInfo: Course;
  classes: SimpleClass[];
}
