import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from 'src/app/app-routing.module';

//Pipe Boolean
import { BooleanPipe } from 'src/app/pipes/booleanPipe/boolean.pipe';

import { ButtonDownloadComponent } from './button-download/button-download.component';
import { ButtonsHomeHelpComponent } from './buttons-home-help/buttons-home-help.component';
import { LinesComponent } from './lines/lines.component';
import { InputFileComponent } from './input-file/input-file.component';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { InputFieldComponent } from './input-field/input-field.component';


const importedComponents = [
  ButtonDownloadComponent,
  ButtonsHomeHelpComponent,
  LinesComponent,
  InputFileComponent,
  InputFieldComponent,
  InputRadioComponent,
  BooleanPipe
]


@NgModule({
  declarations: importedComponents,
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: importedComponents
})
export class UtilsModule { }
