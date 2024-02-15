import { User } from './../models/user.interface';
import { UserService } from './../service/user.service';
import { Observable } from 'rxjs';
import { Controller, Post,Body, Param, Get, Delete, Put } from '@nestjs/common';

@Controller('user')
export class UserController {

    constructor(private UserService: UserService) { }
    
    @Post()
    create(@Body()user: User): Observable<User> {
        return this.UserService.create(user);
    }
    

    @Get(':id')
    findOne(@Param() params):Observable<User>{
        return this.UserService.findOne(params.id);
     }

    @Get()
    findAll(): Observable<User[]>{
        return this.UserService.findAll();
    }

    @Delete('::id')
    deleteOne(@Param('id') id: string): Observable<any> {
        return this.UserService.deleteOne(Number(id));
    }
    

    @Put(':id')
    updateOne(@Param('id') id: string, @Body() user: User): Observable<any>{
        return this.UserService.updateOne(Number(id), user);
    }

}
