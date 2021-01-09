import React, { lazy, Suspense, useState } from 'react';


const Descripcion = lazy(() => import('../../component/Descripcion'));
const Proyectos = lazy(() => import('../../component/Proyectos'));
const Skills = lazy(() => import('../../component/Skills'));
const Contact = lazy(() => import('../../component/Contact'));


const Component = () => 
        <div>
            <Descripcion />
            <Skills />
            <Proyectos />
            {/* <Contact /> */}
        </div>

export default Component;