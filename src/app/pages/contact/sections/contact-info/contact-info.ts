import { Component } from '@angular/core';
import { Icon } from '../../../../shared/icon/icon';
import { SafeEmail } from '../../../../shared/safe-email/safe-email';
import { SafePhone } from '../../../../shared/safe-phone/safe-phone';

export interface ContactInfoItem {
  icon: string;
  label: string;
  type: 'email' | 'phone' | 'text';
  value?: string;
}

@Component({
  selector: 'app-contact-info',
  imports: [Icon, SafeEmail, SafePhone],
  templateUrl: './contact-info.html',
})
export class ContactInfo {
  items: ContactInfoItem[] = [
    {
      icon: 'mail',
      label: 'Email',
      type: 'email',
    },
    {
      icon: 'call',
      label: 'Téléphone',
      type: 'phone',
    },
  ];
}

