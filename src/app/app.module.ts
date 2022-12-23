import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Shared/Layout/header/header.component';
import { PageWrapperComponent } from './Shared/Layout/page-wrapper/page-wrapper.component';
import { MyMaterialModule } from './Shared/Modules/my-material.module';
import { StudentsPageComponent } from './Pages/students-page/students-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentDialogComponent } from './Shared/Components/student-dialog/student-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PageWrapperComponent,
    StudentsPageComponent,
    StudentDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
