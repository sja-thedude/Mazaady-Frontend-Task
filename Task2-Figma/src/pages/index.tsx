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
        src="/figma/notification.svg"
        alt="Notification bell"
        className="notification m-3"
        width={30}
        height={30}
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
      </div>
        
  </nav>

      <div className='fullpage'>
      <div className='intro'>
        <Image
        src="/figma/Rectangle.svg"
        alt="Vercel Logo"
        className=""
        width={100}
        height={24}
        priority
        />
        <h2 className='text-5xl font-bold'>Hala Ahmed</h2>
        <p className='text-2xl font-bold'>I am Hala Ahmmed, I am the owner of the local brand called Beauty which is for Makeup and Skin Care.</p>
          <div className='intro-btns'>
            <div className='impbtn'>
          <Image
        src="/figma/Group.svg"
        alt="Following"
        className="following"
        width={100}
        height={24}
        priority
            />
            <Image
        src="/figma/Group2.svg"
        alt="Followers"
        className="followers"
        width={100}
        height={24}
        priority
      />
      <Image
        src="/figma/Group3.svg"
        alt="Rate"
        className="rate"
        width={100}
        height={24}
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
        className=""
        width={35}
        height={35}
        priority
        />
        
      </div>
      
      <div className='prodsection'>
        <div className='probtns'>
        <button className="products rounded">Products</button>
      <button className="articles rounded">Articles</button>
      <button className="reviews rounded">Reviews</button>
        </div>
        <div className='prodtitle'><h2 className='proh2'>Products</h2><p className='sm'>(12)</p></div>
        
        <div className='firstpro'>
          <div className='proimage1'>
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
        </div>
        
        <div className='secondpro'>
            
        <div className='proimage2'>
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
        width={120}
        height={120}
        priority
      />
            </div>
            <div className='infosec'>
            <p>Six-Piece Clothing Set {'('}Blouse - Pants - Hat And ...</p>
            <p>Starting Price 1000 EGP</p>
            <p>Lot Starts In</p>
            <div className='btnsclass'>
              <button className="first rounded">2 Days</button>
              <button className="second rounded">10 Hours</button>
              <button className="third rounded">50 Minutes</button>
            </div>
          </div>
        </div>
        
        <div>
          <Image
        src="/figma/Rectangle4.svg"
        alt="Vercel Logo"
        className=""
        width={150}
        height={150}
        priority
      />
        </div>
        
        <div>
          <Image
        src="/figma/Rectangle5.svg"
        alt="Vercel Logo"
        className=""
        width={150}
        height={150}
        priority
            />
            </div>
          
          <Image
        src="/figma/like.svg"
        alt="Vercel Logo"
        className=""
        width={40}
        height={40}
        priority
      />
          <div>
            <Image
        src="/figma/Live_Auction.svg"
        alt="Vercel Logo"
        className=""
        width={100}
        height={24}
        priority
      />
          </div>
    
        <div>
          <Image
        src="/figma/Rectangle6.svg"
        alt="Vercel Logo"
        className=""
        width={150}
        height={150}
        priority
        />
        </div>
        <div>
          <Image
        src="/figma/Rectangle7.svg"
        alt="Vercel Logo"
        className=""
        width={150}
        height={150}
        priority
      />
        </div>
      
        </div>
        
      <button className="reviewbtn rounded">
        Add Review
      </button>
  
      <button className="productbtn rounded">
        Add New Product
      </button>
      </div>
    </main>
  );
}
