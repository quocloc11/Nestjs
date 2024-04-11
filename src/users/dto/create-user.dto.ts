import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {
  @IsEmail({},
    {
      message: 'Email dung dinh dang'
    })
  @IsNotEmpty({
    message: 'Email ko dc de trong'
  })
  email: string;
  @IsNotEmpty({
    message: 'Password ko dc de trong'
  })
  password: string;
  name: string;
  address: string;
}
