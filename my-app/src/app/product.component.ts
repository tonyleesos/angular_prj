import { Component,Input } from "@angular/core";

@Component({
  selector:'product',
  template:`
    <div class="d-flex align-items-center mt-4">
      <img class="mr-3" src="{{ data.imageUrl }}" alt="Generic placeholder">
      <div class="flex-grow-1 ms-3">
      <h5 class="mt-0">{{data.productName}}</h5>
          {{ data.releasedData | date | uppercase}}
          <rating [ratingValue]="data.rating" [numOfReviews]="data.numOfReviews"></rating>
          <div [ngSwitch]="data.rating">
            <div *ngSwitchCase="1">Poor</div>
            <div *ngSwitchCase="2">Faild</div>
            <div *ngSwitchCase="3">Good</div>
            <div *ngSwitchCase="4">Very Good</div>
            <div *ngSwitchCase="5">Excellent</div>
            <div *ngSwitchDefault="">Not rating</div>
          </div>
          <br>
          {{ data.description | truncate: 30 }}
      </div>
    </div>
  `,
  styles:[`
    .media{
      margin-bottom:20px;
    }
`],
})

export class ProductComponent{
  @Input() data:any;
}
