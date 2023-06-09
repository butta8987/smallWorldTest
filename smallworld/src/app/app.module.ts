import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { HeaderComponent } from './core/components/header/header.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { DefaultLayoutComponent } from './core/components/default-layout/default-layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { CustomerListComponent } from './features/customer-list/customer-list.component';
import { MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import { SubHeaderComponent } from './core/components/sub-header/sub-header.component';
import { RightSidebarComponent } from './core/components/right-sidebar/right-sidebar.component';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    DefaultLayoutComponent,
    CustomerListComponent,
    SubHeaderComponent,
    RightSidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
