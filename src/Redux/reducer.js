let initialState=[
    {
        id:0,
        name:'iPhone-X',
        des:"The iPhone X has a 6.1-inch (15 cm) IPS LCD with a resolution is 1792 × 828 pixels (1.4 megapixels) at a pixel density of 326 PPI with a maximum brightness of 625 nits and a 1400:1 contrast ratio and it is equivalent to the iPhone XR. It supports Dolby Vision, HDR10, True-Tone, and a wide color gamut.",
        points:["A13 Bionic chip","6-core CPU with 2 performance and 4 efficiency cores","4-core GPU","8-core Neural Engine"],
        img:'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-product-cards/img1.webp',
        price:400,
        qty:0,
    },
    {
        id:1,
        name:"Range Rover",
        points:["Fuel Type: Diesel","Engine Displ: 2493 cc","Transmission: Automatic","Power Windows: Front and Rear"],
        des:"A Range Rover model is now known as a practical and reliable family car. While the brand is known for luxury, it's made great strides in terms of reliability. One of the best features of a RangeRover  is its long warranty period - most  models offer a five-year bumper to bumper warranty and a ten-year powertrain warranty",
        img:"https://www.ccarprice.com/products/Land-Rover-Range-Rover-Evoque-HSE-2019.png",
        price:1000,
        qty:0,
    },
    {
        id:2,
        name:"PS 4",
        des:"Play Station is a video game brand that consists of five home video game consoles, two handhelds, a media center, and a smartphone, as well as an online service and multiple magazines.",
        points:["AMD Zen 2 CPU ","AMD Radeon GPU","Supporting a 120Hz video refresh"," 3D AudioTech"],
        img:"https://www.gamespot.com/a/uploads/scale_landscape/1179/11799911/3975425-screenshot2022-05-10at8.41.54am.png",
        price:300,
        qty:0
    },
    {
        id:3,
        name:"RedMi Laptop",
        des:"Redmi Book Pro 14 2022 is the latest among Mi brand laptops that will satisfy all gamers' needs. The device can run resource-intensive tasks since it is equipped with a fifth-generation processor.",
        points:["8 GB/512 GB SSD ","Windows 11 Home","Supporting a 120Hz video refresh"," Natural Silver, 1.46 Kg"],
        img:"https://rukminim1.flixcart.com/image/416/416/l0zm64w0/computer/k/h/m/14s-dq2606tu-thin-and-light-laptop-hp-original-imagcnsfnrzvzbs6.jpeg?q=70",
        price:250,
        qty:0
    }
]
let cp=[]
let id=0;
let reducer=(state=initialState,action)=>{
 switch(action.type){
    case "ADD_TO_CART":
       cp=state.map((el)=>el);
         id=action.payload;
        cp[id].qty=cp[id].qty+1;
        return cp;
    
    case "REMOVE_FROM_CART":
         cp=state.map((el)=>el);
         id=action.payload;

         if(cp[id].qty>0){
         cp[id].qty=cp[id].qty-1;
         }
         return cp;

    default:
        return state

 }


}



export default reducer;
