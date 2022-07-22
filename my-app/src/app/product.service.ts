export class ProductService{
  getProducts(){
    return [
      {
        imageUrl:"https://picsum.photos/150/150",
        productName:"Product 1",
        releasedData:new Date(2018,5,31),//"May 31 ,2018",
        description:"Cras sit amet nibh libero, in gravida...",
        rating: 4,
        numOfReviews: 2
      },
      {
        imageUrl:"https://picsum.photos/150/150",
        productName:"Product 2",
        releasedData:new Date(2018,1,30), // "May 31 ,2022",
        description:"Cras sit amet nibh libero, in gravida...",
        rating: 5,
        numOfReviews: 12
      },
      {
        imageUrl:"https://picsum.photos/150/150",
        productName:"Product 3",
        releasedData:new Date(2018,6,30),// "Jun 31 ,2018",
        description:"Cras sit amet nibh libero, in gravida...",
        rating: 5,
        numOfReviews: 2
      },
      {
        imageUrl:"https://picsum.photos/150/150",
        productName:"Product 4",
        releasedData:new Date(2018,2,28),// "Feb 28 ,2018",
        description:"Cras sit amet nibh libero, in gravida...",
        rating: 1,
        numOfReviews: 3
      }
  ];
  }
}
