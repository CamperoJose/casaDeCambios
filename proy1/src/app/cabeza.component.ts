import { Component } from '@angular/core';

@Component({
  selector: 'cabezat',
  templateUrl: '<nav class="navbar bg-dark sticky-top">
  <div class="container-fluid">
      <a class="navbar-brand text-light fs-1 banner-text" href="index.php">
          <img src="img/logo2.png" alt="" width="50" height="50" class="d-inline-block align-text-top">
      </a>
  </div>
</nav>',
  styleUrls: ['./app.component.css']
})
export class cabezaComponent {
    @Input() name: String;
}
