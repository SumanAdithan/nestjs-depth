import {
    Controller,
    Get,
    HttpException,
    HttpStatus,
    Param,
    ParseIntPipe,
    Req,
    Res,
} from '@nestjs/common';
import { CustomersService } from '@customers/services/customers/customers.service';
import type { Request, Response } from 'express';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService) {}

    @Get(':userId')
    getCustomer(
        @Param('userId', ParseIntPipe) userId: number,
        @Req() request: Request,
        @Res() response: Response,
    ) {
        const customer = this.customersService.findCustomerById(userId);

        if (customer) {
            response.send(customer);
        } else {
            response.status(400).send({ msg: 'Customer not found!' });
        }
    }

    @Get('/search/:userId')
    searchCustomerById(@Param('userId', ParseIntPipe) userId: number) {
        const customer = this.customersService.findCustomerById(userId);
        if (customer) return customer;
        else
            throw new HttpException(
                'Customer Not Found!',
                HttpStatus.NOT_FOUND,
            );
    }
}
