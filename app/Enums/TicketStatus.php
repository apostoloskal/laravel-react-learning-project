<?php

namespace App\Enums;

enum TicketStatus: string
{
    case E_OPEN = 'open';
    case E_IN_PROGRESS = 'in progress';
    case E_CLOSED = 'closed';
    case E_RESOLVED = 'resolved';
}
