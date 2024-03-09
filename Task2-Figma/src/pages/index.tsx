import Image from 'next/image'; // Import the Image component
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <nav className='nav'>
        <div className='nav-left'>
        <Image
        src="/figma/menu.svg"
        alt="Menu"
        className="menu"
        width={50}
        height={24}
        priority
        />
        
        <Image
        src="/figma/Layer.svg"
        alt="logo"
        className="logo m-3"
        width={110}
        height={50}
        priority
          />
          <ol className='navlinks'>
            <li className='nav-item'>Home</li>
            <li className='nav-item'>Blog</li>
            <li className='nav-item'>Gifts</li>
          </ol>
        </div>
        <div className='nav-right'>
          <Image
        src="/figma/Frame.svg"
        alt="frame"
        className="frame m-3"
        width={30}
        height={30}
        priority
          />
          
          <Image
        src="/figma/Line2.svg"
        alt="Second Image"
        className="line2"
        width={2}
        height={5}
        priority
        />

        <Image
        src="/figma/notification.svg"
        alt="Notification bell"
        className="notification m-3"
        width={30}
        height={30}
        priority
          />
          
          <Image
        src="/figma/Line2.svg"
        alt="Second Image"
        className="line2"
        width={2}
        height={5}
        priority
        />
        
        <Image
        src="/figma/Ellipse.svg"
        alt="Profile"
        className="profile m-3"
        width={30}
        height={30}
        priority
        />
        
  
      <button className="productbtn rounded">
        <Image
        src="/figma/add-circle1.svg"
        alt="Second Image"
        className="circle"
        width={35}
        height={35}
        priority
      />Add New Product
      </button>
      
        <Image
        src="/figma/global.svg"
        alt="Second Image"
        className="global"
        width={35}
        height={35}
        priority
        />
        
        <Image
        src="/figma/Line1.svg"
        alt="Second Image"
        className="line1"
        width={2}
        height={5}
        priority
        />
        
        <Image
        src="/figma/EN.svg"
        alt="Second Image"
        className="en"
        width={35}
        height={35}
        priority
        />
      </div>
  </nav>

      <div className='fullpage'>
      <div className='main-intro'>  
      <div className='intro'>
        <Image
        src="/figma/Rectangle.svg"
        alt="Vercel Logo"
        className=""
        width={150}
        height={75}
        priority
        />
        <h2 className='text-3xl font-bold name'>Hala Ahmed</h2>
        <p className='text-xl para'>I am Hala Ahmmed, I am the owner of the local brand called Beauty which is for Makeup and Skin Care.</p>
          <div className='intro-btns'>
            <div className='impbtn'>
          <Image
        src="/figma/Group.svg"
        alt="Following"
        className="following"
        width={100}
        height={20}
        priority
            />
            <Image
        src="/figma/Group2.svg"
        alt="Followers"
        className="followers"
        width={100}
        height={20}
        priority
      />
      <Image
        src="/figma/Group3.svg"
        alt="Rate"
        className="rate"
        width={100}
        height={20}
        priority
        />
        
      </div>
          <div className='align-center'>
            <button className="followbtn rounded">
        Follow
      </button>  
        </div>
        
        </div>
          
      </div>

      

        
        <div className='qr-main'>
          <div className='qr-code'>
           <h2 className='qr-title'>QR Code</h2>
        <Image
        src="/figma/eye.svg"
        alt="Vercel Logo"
        className=""
        width={35}
        height={35}
        priority
          />
          <Image
        src="/figma/send-square.svg"
        alt="Vercel Logo"
        className=""
        width={35}
        height={35}
        priority
      />
      <Image
              src="/figma/document-download.svg"
              alt="Vercel Logo"
              className=""
              width={35}
              height={35}
              priority
        />
        <Image
        src="/figma/Group4.svg"
        alt="Vercel Logo"
        className="down-arrow"
        width={35}
        height={35}
        priority
        />
        
          </div>
          
          <div className='msg'>
          <Image
              src="/figma/document-download1.svg"
              alt="Vercel Logo"
              className="doc"
              width={35}
              height={35}
              priority
        />
          <p className='msgqr'> Download the QR code or share it with your friends.</p>
          </div>
          <div>
          <Image
        src="/figma/Group5.svg"
        alt="Second Image"
        className="qr-mazaady"
        width={500}
        height={500}
        priority
              />
              <button className="reviewbtn rounded floatbtn">
              <Image
        src="/figma/add-circle.svg"
        alt="Second Image"
        className="circle"
        width={35}
        height={35}
        priority
      />
      Add Review</button>
        </div>
      </div>
      
        </div>



      
      <div className='prodsection'>
          <div className='probtns'>
            <div className='probtn'>
              <button className="products rounded">Products</button>
      <button className="articles rounded">Articles</button>
            <button className="reviews rounded">Reviews</button>
            </div>
            <div className='float2-div'>
            <button className="reviewbtn rounded float2">
              <Image
        src="/figma/add-circle.svg"
        alt="Second Image"
        className="circle"
        width={35}
        height={35}
        priority
      />
      <b>Add Review</b></button> 
        </div>
            
        </div>
        <div className='prodtitle'><h2 className='proh2'>Products</h2><p className='sm p12'>(12)</p></div>
        
        <div className='firstpro pro'>
          <div className='proimage1 proimg'>
          <Image
            src="/figma/Rectangle2.svg"
            alt="First Image"
            className="image1"
            width={150}
            height={150}
            priority
            />
            <Image
        src="/figma/like.svg"
        alt="Second Image"
        className="image2"
        width={35}
        height={35}
        priority
      />
      <Image
        src="/figma/Live_Auction.svg"
        alt="Third Image"
        className="image3"
        width={90}
        height={90}
        priority
      />
          </div>
          
          <div className='infosec'>
            <p className='p1'>Six-Piece Clothing Set {'('}Blouse - Pants - Hat And ...</p>
            <p className='p2'>Starting Price 1000 EGP</p>
            <p className='p3'>Lot Starts In</p>
            <div className='btnsclass'>
              <button className="first rounded">2 Days</button>
              <button className="second rounded">10 Hours</button>
              <button className="third rounded">50 Minutes</button>
            </div>
            </div>
            <div className='like-desktop'>
              <Image
        src="/figma/like.svg"
        alt="Second Image"
        className="like-desk"
        width={35}
        height={35}
        priority
              />
              </div>
        </div>
        
        <div className='secondpro pro'>
            
        <div className='proimage2 proimg'>
          <Image
        src="/figma/Rectangle3.svg"
        alt="First Image"
        className="image1"
        width={150}
        height={150}
        priority
            />
            <Image
        src="/figma/like.svg"
        alt="Second Image"
        className="image2"
        width={35}
        height={35}
        priority
      />
      <Image
        src="/figma/Live_Auction.svg"
        alt="Third Image"
        className="image3"
        width={90}
        height={90}
        priority
      />
            </div>
            <div className='infosec'>
            <p className='p1'>Six-Piece Clothing Set {'('}Blouse - Pants - Hat And ...</p>
            <p className='p2'>Starting Price 1000 EGP</p>
            <p className='p3'>Lot Starts In</p>
            <div className='btnsclass'>
              <button className="first rounded">2 Days</button>
              <button className="second rounded">10 Hours</button>
              <button className="third rounded">50 Minutes</button>
            </div>
            </div>
            <div className='like-desktop'>
              <Image
        src="/figma/like.svg"
        alt="Second Image"
        className="like-desk"
        width={35}
        height={35}
        priority
      />
            </div>
        </div>
        
        <div className='thirdpro pro'>
            
        <div className='proimage3 proimg'>
          <Image
        src="/figma/Rectangle4.svg"
        alt="Vercel Logo"
        className="image1"
        width={150}
        height={150}
        priority
            />
          <Image
        src="/figma/like.svg"
        alt="Second Image"
        className="image2"
        width={35}
        height={35}
        priority
      />
      <Image
        src="/figma/Live_Auction.svg"
        alt="Third Image"
        className="image3"
        width={90}
        height={90}
        priority
      />
            </div>
            <div className='infosec'>
            <p className='p1'>Six-Piece Clothing Set {'('}Blouse - Pants - Hat And ...</p>
            <p className='p2'>Starting Price 1000 EGP</p>
            <p className='p3'>Lot Starts In</p>
            <div className='btnsclass'>
              <button className="first rounded">2 Days</button>
              <button className="second rounded">10 Hours</button>
              <button className="third rounded">50 Minutes</button>
            </div>
            </div>
            <div className='like-desktop'>
              <Image
        src="/figma/like.svg"
        alt="Second Image"
        className="like-desk"
        width={35}
        height={35}
        priority
      />
            </div>
            </div>
        
        <div className='fourthpro pro'>
            
        <div className='proimage4 proimg'>
          <Image
        src="/figma/Rectangle5.svg"
        alt="Vercel Logo"
        className="image1"
        width={150}
        height={150}
        priority
            />
          
          <Image
        src="/figma/like.svg"
        alt="Second Image"
        className="image2"
        width={35}
        height={35}
        priority
      />
      <Image
        src="/figma/Live_Auction.svg"
        alt="Third Image"
        className="image3"
        width={90}
        height={90}
        priority
      />
          </div>
            <div className='infosec'>
            <p className='p1'>Six-Piece Clothing Set {'('}Blouse - Pants - Hat And ...</p>
            <p className='p2'>Starting Price 1000 EGP</p>
            <p className='p3'>Lot Starts In</p>
            <div className='btnsclass'>
              <button className="first rounded">2 Days</button>
              <button className="second rounded">10 Hours</button>
              <button className="third rounded">50 Minutes</button>
            </div>
              </div>
              <div className='like-desktop'>
              <Image
        src="/figma/like.svg"
        alt="Second Image"
        className="like-desk"
        width={35}
        height={35}
        priority
      />
            </div>
            </div>
    
        <div className='fifthpro pro'>
            
        <div className='proimage5 proimg'>
          <Image
        src="/figma/Rectangle6.svg"
        alt="Vercel Logo"
        className="image1"
        width={150}
        height={150}
        priority
        />
        <Image
        src="/figma/like.svg"
        alt="Second Image"
        className="image2"
        width={35}
        height={35}
        priority
      />
      <Image
        src="/figma/Live_Auction.svg"
        alt="Third Image"
        className="image3"
        width={90}
        height={90}
        priority
      />
          </div>
            <div className='infosec'>
            <p className='p1'>Six-Piece Clothing Set {'('}Blouse - Pants - Hat And ...</p>
            <p className='p2'>Starting Price 1000 EGP</p>
            <p className='p3'>Lot Starts In</p>
            <div className='btnsclass'>
              <button className="first rounded">2 Days</button>
              <button className="second rounded">10 Hours</button>
              <button className="third rounded">50 Minutes</button>
            </div>
                </div>
                <div className='like-desktop'>
              <Image
        src="/figma/like.svg"
        alt="Second Image"
        className="like-desk"
        width={35}
        height={35}
        priority
      />
              </div>
              </div>
          
        <div className='sixthpro pro'>
            
        <div className='proimage6 proimg'>
          <Image
        src="/figma/Rectangle7.svg"
        alt="Vercel Logo"
        className="image1"
        width={150}
        height={150}
        priority
      />
        <Image
        src="/figma/like.svg"
        alt="Second Image"
        className="image2"
        width={35}
        height={35}
        priority
      />
      <Image
        src="/figma/Live_Auction.svg"
        alt="Third Image"
        className="image3"
        width={90}
        height={90}
        priority
      />
          </div>
            <div className='infosec'>
            <p className='p1'>Six-Piece Clothing Set {'('}Blouse - Pants - Hat And ...</p>
            <p className='p2'>Starting Price 1000 EGP</p>
            <p className='p3'>Lot Starts In</p>
            <div className='btnsclass'>
              <button className="first rounded">2 Days</button>
              <button className="second rounded">10 Hours</button>
              <button className="third rounded">50 Minutes</button>
            </div>
                  </div>
                  <div className='like-desktop'>
              <Image
        src="/figma/like.svg"
        alt="Second Image"
        className="like-desk"
        width={35}
        height={35}
        priority
      />
        </div>
      
              </div>
        </div>
      </div>
    </main>
  );
}
