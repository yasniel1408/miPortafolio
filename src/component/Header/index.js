import React,{ Suspense, lazy, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { SocialIcon } from 'react-social-icons';

const Avatar = lazy(() => import('../Avatar'));

const Component = () => {
  const [icons, seticons] = useState([
    "https://www.facebook.com/yasniel.fajardoegues/",
    "https://github.com/yasniel1408",
    "https://www.linkedin.com/in/yasniel-fajardo-egues-65b228181/",
    "email:yasnielfajardoegues1408@gmail.com",
    "whatsapp:+5355413461"
  ])
  const [tamanoFoto, setTamanoFoto] = useState(90)
  const [tamanoIcon, setTamanoIcon] = useState(30)



  const loadingHeader = () => 
    <header className="App-header-skeleton">
        <div><Skeleton width={tamanoFoto} height={tamanoFoto} circle={true} duration={0.5}/></div>
        <h1><Skeleton width={360}  duration={0.5}/></h1>
        <h4 className="semiseniortext"><Skeleton width={250} duration={0.5}/></h4>
        <div className="redesSociales">
            {icons.map(icon => <Skeleton key={icon} className="redesSociales" width={tamanoIcon} height={tamanoIcon} circle={true} duration={0.5}/>)}
        </div>
    </header>

    return(
        <div className="App">
            <Suspense fallback={loadingHeader()}>
                <div>
                    <ul className="menu">
                        <li><a href="https://infsoft.home.blog">Blog</a></li>
                        <li><a href="https://infsoft.home.blog">Proyectos</a></li>
                    </ul>
                </div>
                <header className="App-header">
                    <Avatar round="true" width={tamanoFoto} alt="Yasniel Fajardo Egues" src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-1/c0.0.200.200a/p200x200/104286135_1181284915560913_688796530827336709_n.jpg?_nc_cat=103&ccb=2&_nc_sid=7206a8&_nc_ohc=FxRFbU8vJh4AX9wC7o3&_nc_ht=scontent-mia3-2.xx&tp=27&oh=3caea202f0e6a914c6e0879a879a2dc0&oe=5FE37D57"/>
                    <h1>Yasniel Fajardo Egues</h1>
                    <h4 className="semiseniortext">Semi Senior Software Engineer</h4>
                    <div className="redesSociales">
                        {icons.map(icon => <SocialIcon key={icon} style={{ height: tamanoIcon, width: tamanoIcon }} className="redesSociales" url={icon} />)}
                    </div>
                </header>
            </Suspense>
        </div>        
    )
}

export default Component