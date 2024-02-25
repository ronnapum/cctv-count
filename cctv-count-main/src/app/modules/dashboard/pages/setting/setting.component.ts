import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRUDCameraComponent } from '../../components/settings/crud-camera/crud-camera.component';
import { CrudUserComponent } from '../../components/settings/crud-user/crud-user.component';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [CommonModule,CRUDCameraComponent,CrudUserComponent],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss'
})
export class SettingComponent {

}


