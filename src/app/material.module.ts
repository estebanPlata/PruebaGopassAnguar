import {NgModule} from "@angular/core";
/* import {MatToolbarModule} from "@angular/material/toolbar"; */
import {MatIconModule} from "@angular/material/icon";

import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatRadioModule} from "@angular/material/radio";
import {MatOptionModule } from "@angular/material/core";
import {MatInputModule} from "@angular/material/input"
import {MatSelectModule} from "@angular/material/select"
import {MatListModule} from "@angular/material/list"
import {MatTooltipModule} from "@angular/material/tooltip"
import { MatCardModule } from "@angular/material/card";

@NgModule({
  exports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatOptionModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatTooltipModule,
    MatIconModule]
})
export class MaterialModule {}
