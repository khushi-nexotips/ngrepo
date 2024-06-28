import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudComponent } from "./component/stud/stud.component";
import { EmpComponent } from "./component/emp/emp.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, StudComponent, EmpComponent]
})
export class AppComponent {
  title = 'pro1';
}

