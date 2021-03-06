import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { CoreComponent } from './core.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ProfileComponent } from './profile/profile.component';
// import { UsersComponent } from '../users/users.component';
// import { CoreService } from './core.service';


@NgModule({
  declarations: [
    CoreComponent,
    HeaderComponent,
    MenuComponent,
    ProfileComponent,
    // UsersComponent
  ],
  imports: [
    RouterModule,
    // FormsModule,
    // ReactiveFormsModule,
    // RouterModule,
    MaterialModule,
    CommonModule,
    // ChartsModule
  ],
  exports: [
    // ContainerComponent,
    // HeaderComponent,
    // LogoUserCompanyComponent,
    // MenuComponent,
    // PageComponent,
    // TableComponent,
    // BarChartComponent,
    // DoughnutChartComponent,
    // CoreComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }
