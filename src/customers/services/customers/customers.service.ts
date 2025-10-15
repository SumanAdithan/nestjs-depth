import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    users = [
        {
            id: 1,
            email: 'hello@gmail.com',
            createdAt: new Date(),
        },
        {
            id: 2,
            email: 'world@gmail.com',
            createdAt: new Date(),
        },
        {
            id: 3,
            email: 'trello@gmail.com',
            createdAt: new Date(),
        },
    ];

    findCustomerById(userId: number) {
        return this.users.find((user) => user.id === userId);
    }
}
