
import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class CustomValidationPipe implements PipeTransform {
    transform(value: any) {
        console.log(value);
        return value;
    }
}
