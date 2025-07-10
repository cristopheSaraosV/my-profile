import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule, MatIconModule,MatButtonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home {

  namePage = signal('Inicio')

  profile = signal({
    name: 'Cristopher Saraos />',
    detail: `Desarrollador web Full Stack con experiencia en Angular, NestJS y Oracle. Especialista en la creación de
            aplicaciones robustas utilizando Angular Material. Proactivo, orientado a la mejora continua y a la entrega
            de soluciones eficientes.`,
  })

 downloadCV() {
    // Ruta relativa a /assets
    const pdfUrl = 'assets/cv.pdf';
    const fileName = 'Cristopher_Saraos_CV.pdf';

    // Crea un enlace dinámico y dispara el click
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    link.target = '_blank';

    // Necesario para Firefox
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
   openContact() {
    // Reemplaza por tu email real y asunto deseado
    const email   = 'tucorreo@ejemplo.com';
    const subject = encodeURIComponent('Contacto desde tu portafolio');
    const body    = encodeURIComponent('¡Hola Cristopher!\n\nMe gustaría conversar sobre tu perfil...');
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }
}
