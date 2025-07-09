import { computed, Injectable, signal } from '@angular/core';
import { Skill } from '../interface/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  readonly skills = signal<Skill[]>([
    // Front-End
    { id: 1,  nombre: 'Angular',      icon: 'code',            category: 'Front-End', tags: ['SPA', 'TypeScript', 'Dependency Injection'] },
    { id: 2,  nombre: 'RxJS',         icon: 'sync_alt',        category: 'Front-End', tags: ['Reactive', 'Streams'] },
    { id: 3,  nombre: 'HTML5',        icon: 'language',        category: 'Front-End', tags: ['Semántico', 'Estructura'] },
    { id: 4,  nombre: 'CSS3',         icon: 'brush',           category: 'Front-End', tags: ['Flexbox', 'Grid', 'Responsive'] },
    { id: 5,  nombre: 'SASS',         icon: 'style',           category: 'Front-End', tags: ['Variables', 'Mixins'] },
    { id: 6,  nombre: 'Bootstrap',    icon: 'view_week',       category: 'Front-End', tags: ['Grid', 'Components'] },
    { id: 7,  nombre: 'Material',     icon: 'widgets',         category: 'Front-End', tags: ['UI', 'Animations'] },
    { id: 8,  nombre: 'React',        icon: 'developer_mode',  category: 'Front-End', tags: ['JSX', 'Hooks'] },
    { id: 9,  nombre: 'Redux',        icon: 'sync',            category: 'Front-End', tags: ['State', 'Unidirectional'] },
    { id: 10, nombre: 'NGRX',         icon: 'layers',          category: 'Front-End', tags: ['State', 'Reactive'] },
    // Back-End
    { id: 11, nombre: 'NestJS',       icon: 'settings',        category: 'Back-End',  tags: ['Modular', 'TypeScript'] },
    { id: 12, nombre: 'ExpressJS',    icon: 'flash_on',        category: 'Back-End',  tags: ['Middleware'] },
    { id: 13, nombre: 'NodeJS',       icon: 'memory',          category: 'Back-End',  tags: ['Event-driven'] },
    // Base de datos
    { id: 14, nombre: 'TypeORM',      icon: 'storage',         category: 'Back-End',  tags: ['ORM', 'Migrations'] },
    { id: 15, nombre: 'PL-SQL',       icon: 'data_object',     category: 'Back-End',  tags: ['Procedural'] },
    { id: 16, nombre: 'Oracle',       icon: 'cloud',           category: 'Back-End',  tags: ['Enterprise'] },
    { id: 17, nombre: 'Listado de POD', icon: 'view_list',     category: 'Back-End',  tags: ['Reporting'] },
    { id: 18, nombre: 'Consulta DB',  icon: 'search',          category: 'Back-End',  tags: ['SQL'] },
    // Otros
    { id: 19, nombre: 'Git',          icon: 'code',             category: 'Other',     tags: ['Versioning'] },
    { id: 20, nombre: 'Git-Flow',     icon: 'call_split',      category: 'Other',     tags: ['Branching'] },
    { id: 21, nombre: 'GitLab',       icon: 'cloud_upload',    category: 'Other',     tags: ['CI/CD'] },
    { id: 22, nombre: 'GitLab Registry', icon: 'inventory_2',  category: 'Other',     tags: ['Container'] },
    { id: 23, nombre: 'Mockoon',      icon: 'bug_report',      category: 'Other',     tags: ['API Mocking'] },
    { id: 24, nombre: 'Jest',         icon: 'science',         category: 'Other',     tags: ['Testing'] },
    { id: 25, nombre: 'Confluence',   icon: 'menu_book',       category: 'Other',     tags: ['Docs'] },
    { id: 26, nombre: 'Jira',         icon: 'dashboard',       category: 'Other',     tags: ['Project Management'] },
    { id: 27, nombre: 'Scrum',        icon: 'history_edu',     category: 'Other',     tags: ['Agile'] },
    { id: 28, nombre: 'Linux',        icon: 'computer',        category: 'Other',     tags: ['CLI'] },
    { id: 29, nombre: 'Docker',       icon: 'docker',          category: 'Other',     tags: ['Containers'] },
    { id: 30, nombre: 'VS Code',      icon: 'code',            category: 'Other',     tags: ['IDE'] }
  ]);
  readonly frontEnd = computed(() =>
    this.skills().filter(s => s.category === 'Front-End')
  );

  /** Computed: Back-End */
  readonly backEnd = computed(() =>
    this.skills().filter(s => s.category === 'Back-End')
  );

  /** Computed: Otros */
  readonly others = computed(() =>
    this.skills().filter(s => s.category === 'Other')
  );

  /** Buscar por nombre */
  findByName(nombre: string): Skill | undefined {
    return this.skills().find(s => s.nombre.toLowerCase() === nombre.toLowerCase());
  }

}
