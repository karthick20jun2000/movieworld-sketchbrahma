import { ChangeDetectorRef, Component } from '@angular/core';
import { LoaderService } from './service/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'webpage1';
  isLoaderVisible: any = false;

  constructor(private loader: LoaderService, private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.loader.subject.subscribe((isLoaderVisble: any) => {
      console.log(isLoaderVisble);
      this.isLoaderVisible = isLoaderVisble;
      this.cd.detectChanges();
    });
  }
}
