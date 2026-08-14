<?php

namespace App\Enums;

enum TicketCategory: string
{
    case E_GENERAL = 'general';
    case E_BUG = 'bug';
    case E_FEATURE_REQUEST = 'feature request';
    case E_SUPPORT = 'support';
}
