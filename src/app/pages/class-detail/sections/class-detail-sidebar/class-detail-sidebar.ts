import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Icon } from '../../../../shared/icon/icon';
import { Button } from '../../../../shared/button/button';

@Component({
  selector: 'app-class-detail-sidebar',
  imports: [RouterLink, Icon, Button],
  templateUrl: './class-detail-sidebar.html',
})
export class ClassDetailSidebar {
  coachNote = input.required<string>();
  classTitle = input.required<string>();
}

