import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { StudentsService } from "./students.service";
import { CreateStudentDto } from "./dto/create-student.dto";
import { UpdateStudentDto } from "./dto/update-student.dto";

@Controller("students")
export class StudentsController {

  constructor(private readonly studentsService: StudentsService) {}

  @Get()
  findAll() {
    return this.studentsService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.studentsService.findOne(Number(id));
  }

  @Post()
  create(@Body() data: CreateStudentDto) {
    return this.studentsService.create(data);
  }

  @Put(":id")
  update(
    @Param("id") id: string,
    @Body() data: UpdateStudentDto
  ) {
    return this.studentsService.update(Number(id), data);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.studentsService.remove(Number(id));
  }
}