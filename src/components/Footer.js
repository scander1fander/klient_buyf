import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' style={{backgroundColor: "#9A1656", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)"}}>
      <MDBContainer className='p-1'>
        <section className=''>
          <p className='footerlogo'>BUYF</p>
          <form action=''>
            <MDBRow className='d-flex justify-content-center'>
              <MDBCol size="auto">
                <p className='pt-1'>
                  <strong>Введите e-mail</strong>
                </p>
              </MDBCol>

              <MDBCol md='5' start>
                <MDBInput contrast type='email' className='mb-3'placeholder='Подписка на рассылку' style={{textAlign: "center"}}/>
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color='light' type='submit'  className='mb-3'>
                  Подписаться
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

        <section className='mb-3'>
          <h4 class="mt-4 mb-4" style={{fontWeight: "bold"}}>НАШИ КОНТАКТЫ:</h4>
        </section>

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-3 mb-md-0'>
              <h5 className='text-uppercase mb-2'>Адрес</h5>
              <p className='mb-3' style={{fontSize: "17px", color: "rgba(240, 218, 225, 0.9)"}}>
                г. Москва, ул. Пушкина, д. 23, офис 224
              </p>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-3 mb-md-0'>
              <h5 className='text-uppercase mb-2'>Почта</h5>
              <p className='mb-3' style={{fontSize: "17px", color: "rgba(240, 218, 225, 0.9)"}}>
                buyfservice@icloud.com
              </p>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-3 mb-md-0'>
              <h5 className='text-uppercase mb-2'>INSTAGRAM</h5>
              <p className='mb-3' style={{fontSize: "17px", color: "rgba(240, 218, 225, 0.9)"}}>
                @buyfservice
              </p>
              
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-3 mb-md-0'>
              <h5 className='text-uppercase mb-2'>PINTEREST</h5>
              <p className='mb-3' style={{fontSize: "17px", color: "rgba(240, 218, 225, 0.9)"}}>
                buyfservice
              </p>
              
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-2' style={{ backgroundColor: "#9A1656" }}>
      <p class="text-light" style={{marginBottom: 0}}>&copy; 2021–2023  BUYF Company, Inc. &middot; <a href="/catalog" class="text-light" style={{textDecoration: "none"}}>  Каталог  </a>&middot; <a href="/about" class="text-light" style={{textDecoration: "none"}}>  О нас  </a></p>        
      </div>
    </MDBFooter>
  );
}



// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBCol,
//   MDBRow,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// const Footer=()=> {
//   return (
//     <footer style={{backgroundColor: "#9A1656"}}>
//       <p className='footerlogo'>BUYF</p>
//       <MDBCol style={{marginTop: "2%",marginLeft: "2%", marginRight: "2%"}}>
//         <p class="text-light" style={{fontSize: "22px", marginBottom: "2%"}}>Подпишитесь на нашу рассылку, и будьте всегда в курсе новостей!</p>
//           <div style={{display: "flex", marginLeft: "0%"}}>
//             <MDBInput contrast type='email' className='mb-2' style={{display: "inline-block", width: "100%"}}/>
//             <MDBBtn outline color='light' type='submit' className='' style={{display: "inline-block", marginLeft: "1%"}}>Подписаться</MDBBtn>
//           </div>
//       </MDBCol>
//       <MDBCol>
//         <div style={{marginTop: "2%",marginLeft: "2%", marginRight: "2%"}}>
//           <p class="text-light float-end" style={{fontSize: "22px", marginBottom: 0}}>Адрес</p>
//           <a href="#" class="float-end text-light">Вернуться наверх</a>
//           <p class="text-light" style={{marginBottom: 0}}>&copy; 2021–2023  BUYF Company, Inc. &middot; <a href="/catalog" class="text-light" style={{textDecoration: "none"}}>  Каталог  </a>&middot; <a href="/about" class="text-light" style={{textDecoration: "none"}}>  О нас  </a></p>
//         </div>
//       </MDBCol>
//   </footer>
//   );
// }

// export default Footer



// import React from 'react';
// import {
//   MDBFooter,
//   MDBContainer,
//   MDBIcon,
//   MDBInput,
//   MDBCol,
//   MDBRow,
//   MDBBtn
// } from 'mdb-react-ui-kit';
// const Footer=()=> {
//   return (
//     <MDBFooter color='white' style={{backgroundColor: "#9A1656"}}>
//       <MDBContainer className='p-4'>
//         <p className='footerlogo'>BUYF</p>
//         <section className=''>
//           <form action=''>
//             <MDBRow>
//               <MDBCol size="auto">
//                 <h5 className='pb-3'>
//                   Подпишитесь на нашу рассылку, и будьте всегда в курсе новостей!
//                 </h5>
//               </MDBCol>

//               <MDBCol md='9' start  style={{display: "flex"}}>
//                 <MDBInput contrast type='email' className='mb-2' size='100' style={{display: "inline-block"}}/>
//                 <MDBBtn outline color='light' type='submit' className='mb-4' style={{display: "inline-block", marginLeft: "5%"}}>
//                   Подписаться
//                 </MDBBtn>
//               </MDBCol>
//               <MDBCol size="auto">
//                 <h5 className='pb-3'>
//                   Адрес</h5>
//               </MDBCol>
//               <MDBCol md='9' start  className='justify-content-end' style={{display: "flex"}}>
//               <p className='pb-3'>
//                   г. Москва, улица Большая
//               </p>
//               </MDBCol>
//             </MDBRow>
            
//           </form>
//         </section>

//         <section className='mb-4'>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
//             voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
//             sequi voluptate quas.
//           </p>
//         </section>

        
//       </MDBContainer>

//       <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
//         © 2023 Copyright:    <a className='text-white' href='/'>BUYF.com</a>
//       </div>
//     </MDBFooter>
//   );
// }

// export default Footer