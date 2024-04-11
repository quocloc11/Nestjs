import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

//dung nhu v de tai su dung code co the dung nhu create
export class UpdateUserDto extends OmitType(CreateUserDto, ['password'] as const) {
  _id: string;
}
