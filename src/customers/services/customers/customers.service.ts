import { createCustomerDto } from '@customers/dtos/CreateCustomer.dto';
import { Customer } from '@customers/types/Customers';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    private customers: Customer[] = [
        {
            id: 1,
            email: 'hello@gmail.com',
            name: 'hello',
        },
        {
            id: 2,
            email: 'world@gmail.com',
            name: 'world',
        },
        {
            id: 3,
            email: 'trello@gmail.com',
            name: 'trello',
        },
    ];

    findCustomerById(userId: number) {
        return this.customers.find((user) => user.id === userId);
    }

    createCustomer(customerDto: createCustomerDto) {
        this.customers.push(customerDto);
    }

    getCustomers() {
        return this.customers;
    }
}
