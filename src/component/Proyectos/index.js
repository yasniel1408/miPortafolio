import React,{lazy} from 'react'
import './proyectos.css';
import {proyectos} from './proyectos.js';
// import image from '../../assets/js-original.jpg'

//imagenes
import socialnet from '../../assets/socialnet.png'
import escdoct from '../../assets/escdoct.jpg'
import chebeto from '../../assets/chebeto.jpg'
import infsoft from '../../assets/infsoft.png'
import yayash from '../../assets/yayash.png'
import belkys from '../../assets/belkys.jpg'
import tu_android from '../../assets/tu_android.jpg'
import miportafolio from '../../assets/miportafolio.jpg'

const Proyectos = () => {

	const CardProjet = ({project}) => 
			<a href={project.url} target="blanck">
				<div key={project.id} className="card">
					<img className="imageCard" width="100%" loading="lazy" 
						src={
							(project.image == "socialnet") ? socialnet : 
							(project.image == "escdoct") ? escdoct :
							(project.image == "chebeto") ? chebeto :
							(project.image == "infsoft") ? infsoft :
							(project.image == "yayash") ? yayash :
							(project.image == "belkys") ? belkys :
							(project.image == "tu_android") ? tu_android :
							(project.image == "miportafolio") ? miportafolio :
							""
						}
						alt={project.title}/>
					<content>
						<h2>{project.title}</h2>
						<h4>{project.subtitle}</h4>
						<p>
							{project.text}
						</p>
						<p><strong><i>{project.date}</i></strong></p>
					</content>
				</div>
			</a>


	return(
		<div className="timeline-flex" id="projects">
			<div className="tituloproyectos">
				<h1 className="titulo sizeH1" >Projects</h1>
			</div>
			<div className="listaproyectos">
				{proyectos.map(project => <CardProjet key={project.id} project={project}/>)}				
			</div>
		</div>
	)
}

export default Proyectos