import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppBase } from '@core/bases/app-base-component';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends AppBase{
}
