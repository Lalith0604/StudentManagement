import { IsEmail, IsInt, IsNotEmpty, Max, Min } from "class-validator";

export class CreateStudentDto {

  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(5)
  @Max(100)
  age: number;

}