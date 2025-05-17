import { Routes } from '@angular/router';

import {
  canLeaveEditPage,
  NewTaskComponent,
} from '../tasks/new-task/new-task.component';
import { TasksComponent } from '../tasks/tasks.component';
import { TasksService } from '../tasks/tasks.service';

export const routes: Routes = [
  {
    path: '',
    providers: [TasksService], //lazy loading service to all routes that need it
    children: [
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'prefix',
      },
      {
        path: 'tasks',
        component: TasksComponent,
        // loadComponent: () =>
        //   import('../tasks/tasks.component').then((mod) => mod.TasksComponent), //Using lazy loading to load the component (default is eager)
      },
      {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage],
      },
    ],
  },
];
