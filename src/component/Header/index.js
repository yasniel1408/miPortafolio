import React,{ Suspense, lazy } from 'react';
import Skeleton from 'react-loading-skeleton';
import { SocialIcon } from 'react-social-icons';
import mifoto from "../../assets/yasniel.jpg"

const Avatar = lazy(() => import('../Avatar'));

const Component = () => {
  const icons = [
    "https://www.facebook.com/yasniel.fajardoegues/",
    "https://github.com/yasniel1408",
    "https://www.linkedin.com/in/yasniel-fajardo-egues-65b228181/",
    "mailto:yasnielfajardoegues1408@gmail.com",
    "https://api.whatsapp.com/send?phone=+5355413461",
  ]
  const tamanoFoto = 100
  const tamanoIcon = 40

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
                <header className="App-header">
                    <Avatar round="true" width={tamanoFoto} alt="Yasniel Fajardo Egues" src={mifoto}/>
                    <h1 className="sizeH1">Yasniel Fajardo Egues</h1>
                    <h4 className="semiseniortext">Semi Senior Software Engineer</h4>
                    <div className="redesSociales">
                        {icons.map(icon => <SocialIcon key={icon} style={{ height: tamanoIcon, width: tamanoIcon }} className="redesSociales" url={icon} />)}
                    </div>
                    <div className="menu-link">
                        <a href="https://infsoft.home.blog" target="blanck" className="menu-link-item">Blog</a>
                        {/* <a href="#" target="blanck" className="menu-link-item">Cursos</a>   */}
                    </div>
                </header>
            </Suspense>
        </div>        
    )
}

export default Component