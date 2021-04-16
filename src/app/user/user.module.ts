import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserLayoutComponent } from './shared/components/user-layout/user-layout.component';
import { userRouting } from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { UserPostsPageComponent } from './user-posts-page/user-posts-page.component';
import { MatDialogModule } from '@angular/material/dialog';

const matModules = [
  MatSliderModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatFormFieldModule,
  MatStepperModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatDialogModule
];

@NgModule({
  declarations: [
    UserLayoutComponent,
    LoginPageComponent,
    UserPostsPageComponent
  ],
  imports: [
    CommonModule,
    ...matModules,
    RouterModule.forChild(userRouting)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule]
})
export class UserModule {

}
