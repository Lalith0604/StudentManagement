
import { Injectable, NotFoundException } from "@nestjs/common";
import { Student } from "./student.model";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";

@Injectable()
export class StudentsService {

  private students: Student[] = [
    { id: 1, name: "Rahul Sharma", email: "rahul@email.com", age: 22 },
    { id: 2, name: "Anita Singh", email: "anita@email.com", age: 21 }
  ];

  private idCounter = 3;

  findAll(): Student[] {
    return this.students;
  }


findOne(id: number): Student {

  const student = this.students.find(s => s.id === id);

  if (!student) {
    throw new NotFoundException(`Student with id ${id} not found`);
  }

  return student;
}

  create(data: CreateStudentDto): Student {

    const student: Student = {
      id: this.idCounter++,
      ...data
    };

    this.students.push(student);
    return student;
  }

  update(id: number, data: UpdateStudentDto): Student {

  const student = this.students.find(s => s.id === id);

  if (!student) {
    throw new NotFoundException(`Student with id ${id} not found`);
  }

  Object.assign(student, data);

  return student;
}

  remove(id: number): boolean {

    const index = this.students.findIndex(s => s.id === id);

    if (index === -1) return false;

    this.students.splice(index, 1);
    return true;
  }
}