import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
    <img 
    className='coverImg'
    src="https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Aug23ART/GW/PUSH/PC_Hero_3000x1200_NTA_2X._CB599338253_.jpg" 
    />
    
    <div className='home_row'>
    <Product
      id="1"
      title="IMARA Women Black Solid Top"
      price={1020}
      rating={4}
      image="http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/88c6ad02-eab9-42c8-8b8e-cbcd8f015d361535627393491-IMARA-Women-Black-Solid-Top-7471535627393374-1.jpg | http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/06f7fe3a-08c5-4718-9d5b-d2e82f7806a71535627393473-IMARA-Women-Black-Solid-Top-7471535627393374-2.jpg | http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/9f9ad6fe-3260-4bf8-9088-59dd7351a0f41535627393453-IMARA-Women-Black-Solid-Top-7471535627393374-3.jpg | http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/8e268984-4d24-4563-b3ee-c2ff0f2c600c1535627393440-IMARA-Women-Black-Solid-Top-7471535627393374-4.jpg | http://assets.myntassets.com/v1/assets/images/6937673/2018/8/30/bf975857-fee6-4685-9630-ca7cd4f13d631535629577797-IMARA-Women-Black-Solid-Top-81535629577403-5.jpg"
    />

    <Product
      id="2"
      title="AKS Women Multicoloured Printed A-Line Kurta"
      price={1000}
      rating={2}
      image="http://assets.myntassets.com/v1/assets/images/2111369/2017/9/12/11505214663449-AKS-Women-Multicoloured-Printed-A-Line-Kurta-8831505214663087-1.jpg | http://assets.myntassets.com/v1/assets/images/2111369/2017/9/12/11505214663429-AKS-Women-Multicoloured-Printed-A-Line-Kurta-8831505214663087-2.jpg | http://assets.myntassets.com/v1/assets/images/2111369/2017/9/12/11505214663407-AKS-Women-Multicoloured-Printed-A-Line-Kurta-8831505214663087-3.jpg | http://assets.myntassets.com/v1/assets/images/2111369/2017/9/12/11505214663300-AKS-Women-Multicoloured-Printed-A-Line-Kurta-8831505214663087-4.jpg | http://assets.myntassets.com/v1/assets/images/2111369/2017/9/12/11505214663240-AKS-Women-Multicoloured-Printed-A-Line-Kurta-8831505214663087-5.jpg"
    />

    <Product
      id="3"
      title="Shakumbhari Women Pink Embroidered A-Line Kurta"
      price={799}
      rating={5}
      image="http://assets.myntassets.com/v1/assets/images/5504617/2018/6/29/3a49ca1e-278b-49cb-b0a6-8552fe7028411530272295244-Shakumbhari-Women-Pink-Embroidered-A-Line-Kurta-7081530272295067-1.jpg | http://assets.myntassets.com/v1/assets/images/5504617/2018/6/29/99a8ba00-f8ec-48ab-95fc-0b0cd04e1f641530272295218-Shakumbhari-Women-Pink-Embroidered-A-Line-Kurta-7081530272295067-2.jpg | http://assets.myntassets.com/v1/assets/images/5504617/2018/6/29/05252b31-6914-4f47-a33a-f3728f5b43201530272295188-Shakumbhari-Women-Pink-Embroidered-A-Line-Kurta-7081530272295067-3.jpg | http://assets.myntassets.com/v1/assets/images/5504617/2018/6/29/ade82f02-afa3-4ad4-a269-b3971104c8171530272295164-Shakumbhari-Women-Pink-Embroidered-A-Line-Kurta-7081530272295067-4.jpg | http://assets.myntassets.com/v1/assets/images/5504617/2018/6/29/a8077d62-1549-4056-851d-8ce83f5aae261530272295129-Shakumbhari-Women-Pink-Embroidered-A-Line-Kurta-7081530272295067-5.jpg"
    />

   
    
    </div>

    <div className='home_row'>
    <Product
      id="4"
      title="Clora Creation Women Navy Blue Wide Leg Printed Palazzos"
      price={1599}
      rating={3}
      image="http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/cd9e6d5d-50cf-4188-b229-8b890c4210ae1558658750484-1.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/2e63922a-1ba1-41d1-a3e0-c698eef586fe1558658750516-2.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/cb471a2d-c834-4178-ad78-28b99e4047261558658750548-3.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/97b1c435-8469-480e-bbf3-ec88d69734a81558658750576-4.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/1c7ad837-82e0-47e7-90fd-e6a60f586f161558658750603-5.jpg"
    />

    <Product
      id="5"
      title="Anouk Women Green Floral Foil Printed Cardigan"
      price={1499}
      rating={1}
      image="http://assets.myntassets.com/v1/assets/images/2012151/2017/9/7/11504766535915-Anouk-Women-Green--White-Printed-Straight-Kurta-5131504766535793-1.jpg | http://assets.myntassets.com/v1/assets/images/2012151/2017/9/7/11504766535897-Anouk-Women-Green--White-Printed-Straight-Kurta-5131504766535793-2.jpg | http://assets.myntassets.com/v1/assets/images/2012151/2017/9/7/11504766535878-Anouk-Women-Green--White-Printed-Straight-Kurta-5131504766535793-3.jpg | http://assets.myntassets.com/v1/assets/images/2012151/2017/9/7/11504766535856-Anouk-Women-Green--White-Printed-Straight-Kurta-5131504766535793-4.jpg"
    />

    <Product
      id="6"
      title="RARE ROOTS Women Navy Blue Solid A-Line Dress"
      price={990}
      rating={3}
      image="http://assets.myntassets.com/v1/assets/images/9783251/2019/6/3/448d2a8a-f49a-4722-b44d-02ea6faf49991559556105107-RARE-ROOTS-Women-Dresses-691559556103660-1.jpg | http://assets.myntassets.com/v1/assets/images/9783251/2019/6/3/46803341-b7e2-4830-a3c5-77962c44e0ad1559556105078-RARE-ROOTS-Women-Dresses-691559556103660-2.jpg | http://assets.myntassets.com/v1/assets/images/9783251/2019/6/3/8b49f986-a6c6-47df-a6bf-c1700e7e51fa1559556105049-RARE-ROOTS-Women-Dresses-691559556103660-3.jpg | http://assets.myntassets.com/v1/assets/images/9783251/2019/6/3/f46a4e89-b6e3-429c-a4af-c807a0868a801559556105019-RARE-ROOTS-Women-Dresses-691559556103660-4.jpg | http://assets.myntassets.com/v1/assets/images/9783251/2019/6/3/f3a79406-5d5a-419a-aa6a-f8f3df0b6a151559556104995-RARE-ROOTS-Women-Dresses-691559556103660-5.jpg"
    />
    
    </div>

    <div className='home_row'>
    <Product
      id="7"
      title="Biba Red Printed Kurti"
      price={4499}
      rating={2}
      image="http://assets.myntassets.com/v1/assets/images/1959820/2018/9/18/c5e525c5-e905-4918-9075-e7c53ad0e5941537261856673-Biba-Red-Printed-Kurti-6431537261853896-1.jpg | http://assets.myntassets.com/v1/assets/images/1959820/2018/9/18/8238ff75-459d-4aa8-9673-be629953790f1537261856621-Biba-Red-Printed-Kurti-6431537261853896-2.jpg | http://assets.myntassets.com/v1/assets/images/1959820/2018/9/18/beb92af1-24ea-4ad9-b0d3-dd75afb0d7871537261856581-Biba-Red-Printed-Kurti-6431537261853896-3.jpg | http://assets.myntassets.com/v1/assets/images/1959820/2018/9/18/d3a7b19e-ffd5-428f-9f9c-72365df40e0d1537261856541-Biba-Red-Printed-Kurti-6431537261853896-4.jpg | http://assets.myntassets.com/v1/assets/images/1959820/2018/9/18/324223bd-a23c-4f5d-a735-7494d0e87ec21537261856495-Biba-Red-Printed-Kurti-6431537261853896-5.jpg"
    />

    <Product
      id="8"
      title="Clora Creation Women Black & Gold-Coloured Printed Flared Palazzos"
      price={4499}
      rating={3}
      image="http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/cd9e6d5d-50cf-4188-b229-8b890c4210ae1558658750484-1.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/2e63922a-1ba1-41d1-a3e0-c698eef586fe1558658750516-2.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/cb471a2d-c834-4178-ad78-28b99e4047261558658750548-3.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/97b1c435-8469-480e-bbf3-ec88d69734a81558658750576-4.jpg | http://assets.myntassets.com/v1/assets/images/productimage/2019/5/24/1c7ad837-82e0-47e7-90fd-e6a60f586f161558658750603-5.jpg"
    />
    
    </div>

    </div>
  )
}

export default Home