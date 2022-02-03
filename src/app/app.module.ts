import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { TabsComponent } from './tabs/tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { StepperNewanagraficaComponent } from './stepper-newanagrafica/stepper-newanagrafica.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { DialogNewanagraficaComponent, DialogContentNewAnagrafica } from './dialog-newanagrafica/dialog-newanagrafica.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { TableAnagraficaComponent } from './table-anagrafica/table-anagrafica.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { SelectRegionComponent } from './select-region/select-region.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { NgChartsModule } from 'ng2-charts';
import { Chart1Component } from './chart1/chart1.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TabsComponent,
    TopBarComponent,
    StepperNewanagraficaComponent,
    DialogNewanagraficaComponent,
    DialogContentNewAnagrafica,
    TableAnagraficaComponent,
    SelectRegionComponent,
    StepperNewanagraficaComponent,
    Chart1Component,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatTabsModule,
    MatToolbarModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    MatOptionModule,
    GoogleChartsModule,
    NgChartsModule
  ],
  providers: [],
  entryComponents:[],
  bootstrap: [AppComponent, DialogContentNewAnagrafica, TableAnagraficaComponent]
})
export class AppModule { }
