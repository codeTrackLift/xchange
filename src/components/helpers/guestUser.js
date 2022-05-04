import { newDate } from './dateTime';

export const guestUser = {
    users: [{
        id: 991689133,
        name: 'guest user',
        email: 'email@domain.com',
        password: 'topSecret',
        balance: 1000000.02,
        transactions: [
            [
                newDate(),
                'Deposit',
                '1000000',
                'Thank you for visiting!'
            ],
            [
                newDate(),
                'Deposit',
                '0.02',
                'Learning to code is like learning a language.'
            ],

        ]}
    ]
}