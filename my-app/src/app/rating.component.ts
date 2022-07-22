import { Component,Input } from "@angular/core";

@Component({
  selector:'rating',
  styles:[`
      .bi-star-fill{
        color:orange;
      }
  `],
  template:`
    <i class="bi"[class.bi-star] = "rating < 1" [class.bi-star-fill] = "rating >= 1" (click)="onClick(1)"></i>
    <i class="bi"[class.bi-star] = "rating < 2" [class.bi-star-fill] = "rating >= 2" (click)="onClick(2)"></i>
    <i class="bi"[class.bi-star] = "rating < 3" [class.bi-star-fill] = "rating >= 3" (click)="onClick(3)"></i>
    <i class="bi"[class.bi-star] = "rating < 4" [class.bi-star-fill] = "rating >= 4" (click)="onClick(4)"></i>
    <i class="bi"[class.bi-star] = "rating < 5" [class.bi-star-fill] = "rating >= 5" (click)="onClick(5)"></i>
    {{ numOfReviews }}
  `
})

export class RatingComponent{
  @Input('ratingValue') rating = 5;
  @Input() numOfReviews = 0;

  onClick(ratingValue:any){
    this.rating = ratingValue
  }
}
