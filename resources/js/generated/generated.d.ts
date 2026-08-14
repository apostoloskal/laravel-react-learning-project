declare namespace App {
    namespace Enums {
        export type TicketCategory =
            'general' | 'bug' | 'feature request' | 'support';
        export type TicketStatus =
            'open' | 'in progress' | 'closed' | 'resolved';
        export type UserRole = 'admin' | 'employee' | 'customer';
    }
}
