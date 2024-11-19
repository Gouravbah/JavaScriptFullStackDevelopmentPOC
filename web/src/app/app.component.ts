import { Component } from '@angular/core';
import { DataService } from './data.service';
import { AreawiseControlsComponent } from './areawise-controls/areawise-controls.component';
import { Observable } from 'rxjs';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;
  title = 'angularpoc';
  data: any;

  constructor(private dataService: DataService, private darkModeService: DarkModeService) {}
  ngOnInit() {
    this.dataService.getData().subscribe(response => {
      this.data = response;
      console.log(this.data && this.data.data);
    });
  }
  onToggle(): void {
    console.log("cloick")
    this.darkModeService.toggle();
  }
}
