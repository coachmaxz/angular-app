import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: [ './hello.component.scss' ],
})

export class HelloComponent implements OnInit {

  title = 'Hello World !!';

  constructor(private router: Router) {}
  async ngOnInit(): Promise<void> {}

}